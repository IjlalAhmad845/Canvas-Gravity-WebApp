import * as Model from './model.js';
import modelState from './model.js';
import * as View from './view.js';
import ctx from './view.js';
import {drawCircles} from "./util";

View.resizeCanvas(() => {
    Model.resetCirclesArray()
    Model.resetMiniCirclesArray()
});


View.defaultValues((val) => Model.setDefaultState(val));

//particle box
let autoTicker = 0;
View.particleFlowHandler((val) => Model.setParticleFlow(val));
View.particleSizeHandler((e) => Model.setParticleSize(e.target.value));
View.particleReductionHandler((e) => Model.setParticleReductionRate(e.target.value));
View.particleColorHandler((e) => Model.setParticleColor(e.target.value));
View.particleGravityHandler((e) => Model.setParticleGravity(e.target.value));

//bouncing box
View.bouncingHandler((e) => Model.setBouncing(e.target.checked));
View.elasticityHandler((e) => Model.setElasticity(e.target.value));

//explosion box
View.explosionHandler((e) => Model.setExplosion(e.target.checked));
View.explosionRadiusHandler((e) => Model.setExplosionRadius(e.target.value));
View.explosionColorHandler((e) => Model.setExplosionColor(e.target.value));
View.electrifyHandler((e) => Model.setElectrify(e.target.checked));
View.electrifyRadiusHandler((e) => Model.setElectrifyRadius(e.target.value));

//shadow box
View.particleShadowHandler((e) => Model.setParticleShadow(e.target.checked));
View.particleShadowAmountHandler((e) => Model.setParticleShadowAmount(e.target.value));
View.explosivesShadowHandler((e) => Model.setExplosivesShadow(e.target.checked));
View.explosivesShadowAmountHandler((e) => Model.setExplosivesShadowAmount(e.target.value));


View.canvasMouseDown(() => {
    modelState.drawCircles = true
    if (modelState.particleFlow === 'manual')
        drawCircles(ctx, modelState.particleFlow)
});
View.canvasMouseUp(() => {
    modelState.drawCircles = false
});
View.canvasMouseMove((e) => {
    modelState.mouseEvent.x = e.offsetX
    modelState.mouseEvent.y = e.offsetY
})

const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, View.canvasWidth, View.canvasHeight);

    modelState.circlesArray.forEach((circle, index) => {
        ctx.shadowColor = circle.color;
        ctx.shadowBlur = modelState.particleShadowAmount * 4;
        circle.update(ctx)

        if (circle.radius <= 1)
            modelState.circlesArray.splice(index, 1)
    });

    modelState.miniCirclesArray.forEach((circle, index) => {
        ctx.shadowColor = 'cyan'
        ctx.shadowBlur = modelState.explosivesShadowAmount * 4
        circle.update(ctx)

        for (let i = 0; i < modelState.miniCirclesArray.length; i++) {
            const dx = modelState.miniCirclesArray[i].x - circle.x
            const dy = modelState.miniCirclesArray[i].y - circle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (modelState.electrify &&
                distance > modelState.electrifyRadius * 10
                && distance < modelState.electrifyRadius * 10 + modelState.electrifyRadius / 1.5
            ) {
                console.log(modelState.explosivesShadowAmount)
                ctx.beginPath()
                ctx.moveTo(circle.x, circle.y)
                ctx.lineTo(modelState.miniCirclesArray[i].x, modelState.miniCirclesArray[i].y)
                ctx.strokeStyle = 'white'
                ctx.lineWidth = 2
                ctx.stroke()
                ctx.closePath()
            }
        }

        if (circle.opacity <= 0 || circle.radius <= 1)
            modelState.miniCirclesArray.splice(index, 1)
    });

    if (modelState.particleFlow === 'auto' && autoTicker % 100 === 0)
        drawCircles(ctx, modelState.particleFlow)

    autoTicker = (autoTicker + 1) % 1000
}
animate()

