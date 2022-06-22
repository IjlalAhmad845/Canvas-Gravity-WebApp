import Circle from "./Circle.js";
import modelState from "../model.js"

class MiniCircle extends Circle {
    constructor(x, y, dx, dy, radius, color, e, gravity, opacity) {
        super(x, y, dx, dy, radius, color, e, gravity)
        this.opacity = opacity
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        const [r, g, b] = hexToRgb(modelState.explosionColor)
        ctx.fillStyle = `rgba(${r},${g},${b},${this.opacity})`
        ctx.fill()
        ctx.closePath()
    }

    update(ctx) {

        if (this.x + this.radius > ctx.canvas.width || this.x - this.radius < 0)
            this.dx = -this.dx
        if ((this.y + this.radius + this.dy >= ctx.canvas.height && this.gravity >= 0) ||
            (this.y - this.radius + this.dy <= 0 && this.gravity <= 0)) {
            this.dy = -this.dy * this.e
        } else
            this.dy += 0.02 * this.gravity

        this.x += this.dx
        this.y += this.dy

        this.opacity -= 0.02
        if (this.radius >= 1)
            this.radius -= 0.01
        this.draw(ctx)
    }
}

function hexToRgb(hex) {
    return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
}


export default MiniCircle;