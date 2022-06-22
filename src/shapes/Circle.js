import {drawMiniCircles} from "../util.js";
import modelState from "../model";

class Circle {
    constructor(x, y, dx, dy, radius, color, e, gravity) {
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.radius = radius
        this.color = color
        this.e = e
        this.gravity = modelState.particleGravity
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    }

    update(ctx) {

        if (modelState.bouncing) {
            if (this.x + this.radius > ctx.canvas.width || this.x - this.radius < 0) {
                this.dx = -this.dx

                if (modelState.explosion)
                    this.explosion(this)

                this.radius /= modelState.particleReductionRate
            }
            if ((this.y + this.radius + this.dy >= ctx.canvas.height && this.gravity >= 0) || (this.y - this.radius + this.dy <= 0 && this.gravity <= 0)) {
                this.dy = -this.dy * this.e

                if (modelState.explosion)
                    this.explosion(this)

                this.radius /= modelState.particleReductionRate
            } else this.dy += 0.05 * modelState.particleGravity
            //accessing gravity directly
        } else this.dy += 0.05 * modelState.particleGravity

        this.x += this.dx
        this.y += this.dy
        this.draw(ctx)
    }

    explosion() {
        for (let i = 0; i < 8; i++) drawMiniCircles(this)
    }
}

export default Circle;