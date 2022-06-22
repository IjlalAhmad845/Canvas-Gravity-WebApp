import $ from 'jquery';

const canvas = $('#canvas')[0]
const canvasContainer = $('#canvas-container')

//particle box
const particleFlowBox = $('#particle-flow-container')
const particleSize = $('#particles-size-slider')
const particleReduction = $('#reduction-rate-slider')
const particleColor = $('#particle-color-picker')
const particleGravity = $('#gravity-slider')

//bouncing box
const bouncingCheckbox = $('#bouncing-checkbox')
const elasticity = $('#elasticity-slider')

//explosion box
const explosionCheckbox = $('#explosion-checkbox')
const explosionRadius = $('#explosion-radius-slider')
const explosionColor = $('#explosives-color-picker')
const electrifyCheckbox = $('#electrify-checkbox')
const electrifyRadius = $('#electrify-amount-slider')

//shadow box
const particleShadowCheckbox = $('#particle-shadow-checkbox')
const particleShadowAmount = $('#particle-shadow-slider')
const explosivesShadowCheckbox = $('#explosive-shadow-checkbox')
const explosivesShadowAmount = $('#explosive-shadow-slider')

export let canvasWidth = canvasContainer.width()
export let canvasHeight = canvasContainer.height()

canvas.width = canvasWidth
canvas.height = canvasHeight
const ctx = canvas.getContext('2d')

const initCanvas = () => {
    canvasWidth = canvasContainer.width()
    canvasHeight = canvasContainer.height()
    canvas.width = canvasWidth
    canvas.height = canvasHeight
}
export const resizeCanvas = (handler) => {
    $(window).on('resize', () => {
        initCanvas()
        handler()
    })

    $('#hide-controls-button').on('click', () => {
        $('#controls-container').toggleClass('hidden')
        $('#show-controls-button').toggleClass('hidden')
        initCanvas()
    })
    $('#show-controls-button').on('click', () => {
        $('#controls-container').toggleClass('hidden')
        $('#show-controls-button').toggleClass('hidden')
        initCanvas()
    })
}

export const canvasMouseDown = (handler) => $(canvas).on('mousedown', handler)
export const canvasMouseUp = (handler) => $(canvas).on('mouseup', handler)
export const canvasMouseMove = (handler) => $(canvas).on('mousemove', (e) => handler(e))

export const defaultValues = (handler) => {

    const particleSizeVal = particleSize.val()
    const particleReductionVal = particleReduction.val()
    const particleColorVal = particleColor.val()
    const particleGravityVal = particleGravity.val()

    const elasticityVal = elasticity.val()

    const explosionRadiusVal = explosionRadius.val()
    const explosionColorVal = explosionColor.val()
    const electrifyRadiusVal = electrifyRadius.val()

    const particleShadowAmountVal = particleShadowAmount.val()
    const explosivesShadowAmountVal = explosivesShadowAmount.val()

    handler({
        particleSizeVal,
        particleReductionVal,
        particleColorVal,
        particleGravityVal,
        elasticityVal,
        explosionRadiusVal,
        explosionColorVal,
        electrifyRadiusVal,
        particleShadowAmountVal,
        explosivesShadowAmountVal
    })
}

//particle box
export const particleFlowHandler = (handler) => particleFlowBox.on('click', (e) => {
    if (e.target.type !== 'radio') return
    handler(e.target.dataset.particleFlow)
})
export const particleSizeHandler = (handler) => particleSize.on('change', handler)
export const particleReductionHandler = (handler) => particleReduction.on('change', handler)
export const particleColorHandler = (handler) => particleColor.on('change', handler)
export const particleGravityHandler = (handler) => particleGravity.on('change', handler)

//bouncing box
export const bouncingHandler = (handler) => bouncingCheckbox.on('change', (e) => {
    $('#elasticity-container').toggleClass('disable')
    $('#explosion-box').toggleClass('disable')
    handler(e)
})
export const elasticityHandler = (handler) => elasticity.on('change', handler)

//explosion box
export const explosionHandler = (handler) => explosionCheckbox.on('change', (e) => {
    $('#explosion-container').toggleClass('disable')
    $('#explosive-shadow-container').toggleClass('disable')
    handler(e)
});
export const explosionRadiusHandler = (handler) => explosionRadius.on('change', handler)
export const explosionColorHandler = (handler) => explosionColor.on('change', handler)
export const electrifyHandler = (handler) => electrifyCheckbox.on('change', (e) => {
    $('#electrify-container').toggleClass('disable')
    handler(e)
})
export const electrifyRadiusHandler = (handler) => electrifyRadius.on('change', handler)

//shadow box
export const particleShadowHandler = (handler) => particleShadowCheckbox.on('change', (e) => {
    $('#particle-shadow-slider-container').toggleClass('disable')
    handler(e)
});
export const particleShadowAmountHandler = (handler) => particleShadowAmount.on('change', handler)
export const explosivesShadowHandler = (handler) => explosivesShadowCheckbox.on('change', (e) => {
    $('#explosive-shadow-slider-container').toggleClass('disable')
    handler(e)
});
export const explosivesShadowAmountHandler = (handler) => explosivesShadowAmount.on('change', handler)

export default ctx