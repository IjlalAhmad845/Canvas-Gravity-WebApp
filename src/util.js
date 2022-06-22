import modelState from "./model";
import Circle from "./shapes/Circle";
import MiniCircle from "./shapes/MiniCircle";

const randomInt = (min, max) => Math.random() * (max - min) + min

export const drawCircles = (ctx, particleFlow) => {

    const radius = modelState.particleSize * 5
    let x, y
    if (particleFlow === 'manual') {
        x = modelState.mouseEvent.x
        y = modelState.mouseEvent.y
    } else {
        x = randomInt(0, ctx.canvas.width)
        y = randomInt(ctx.canvas.height / 5, 4 * ctx.canvas.height / 5)
    }
    if (x - radius < 0)
        x += radius
    if (x + radius > ctx.canvas.width)
        x -= radius
    const dx = randomInt(-1, 1)
    const dy = randomInt(-1, 1)

    const color = modelState.particleColor
    const e = modelState.elasticity / 10
    const gravity = modelState.particleGravity
    const circle = new Circle(x, y, dx, dy, radius, color, e, gravity)
    modelState.circlesArray.push(circle)
}

export const drawMiniCircles = (circle) => {
    const x = circle.x
    const y = circle.y
    const dx = randomInt(-5, 5)
    let dy;
    const explosionRadius = modelState.explosionRadius
    if (circle.gravity >= 0)
        dy = randomInt(-explosionRadius, -(explosionRadius - 3))
    else
        dy = randomInt(explosionRadius - 3, explosionRadius)
    const radius = circle.radius / 2

    const color = modelState.explosionColor
    const e = randomInt(0.2, 1)
    const gravity = circle.gravity
    const miniCircle = new MiniCircle(x, y, dx, dy, radius, color, e, gravity, 1)
    modelState.miniCirclesArray.push(miniCircle)
}
