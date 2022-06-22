const state = {
    circlesArray: [],
    miniCirclesArray: [],
    drawCircles: false,
    mouseEvent: {
        x: undefined,
        y: undefined
    },
    particleFlow: 'auto',
    particleSize: undefined,
    particleReductionRate: undefined,
    particleColor: undefined,
    particleGravity: undefined,
    bouncing: false,
    elasticity: undefined,
    explosion: false,
    explosionRadius: undefined,
    explosionColor: undefined,
    electrify: false,
    electrifyRadius: undefined,
    particleShadow: false,
    particleShadowAmount: undefined,
    explosivesShadow: false,
    explosivesShadowAmount: undefined,
}

export const resetCirclesArray = () => state.circlesArray = []
export const resetMiniCirclesArray = () => state.miniCirclesArray = []

export const setDefaultState = (val) => {

    state.particleSize = val.particleSizeVal
    state.particleReductionRate = val.particleReductionVal
    state.particleColor = val.particleColorVal
    state.particleGravity = val.particleGravityVal

    state.elasticity = val.elasticityVal

    state.explosionRadius = val.explosionRadiusVal
    state.explosionColor = val.explosionColorVal
    state.electrifyRadius = val.electrifyRadiusVal

    state.particleShadowAmount = val.particleShadowAmountVal
    state.explosivesShadowAmount = val.explosivesShadowAmountVal
}

//particle box
export const setParticleFlow = (particleFlow) => state.particleFlow = particleFlow
export const setParticleSize = (particleSize) => state.particleSize = particleSize
export const setParticleReductionRate = (particleReductionRate) => state.particleReductionRate = particleReductionRate
export const setParticleColor = (particleColor) => state.particleColor = particleColor
export const setParticleGravity = (particleGravity) => state.particleGravity = particleGravity
//bouncing box
export const setBouncing = (bouncing) => state.bouncing = bouncing
export const setElasticity = (elasticity) => state.elasticity = elasticity

//explosion box
export const setExplosion = (explosion) => state.explosion = explosion
export const setExplosionRadius = (explosionRadius) => state.explosionRadius = explosionRadius
export const setExplosionColor = (explosionColor) => state.explosionColor = explosionColor
export const setElectrify = (electrify) => state.electrify = electrify
export const setElectrifyRadius = (electrifyRadius) => state.electrifyRadius = electrifyRadius

//shadow box
export const setParticleShadow = (particleShadow) => state.particleShadow = particleShadow
export const setParticleShadowAmount = (particleShadowAmount) => state.particleShadowAmount = particleShadowAmount
export const setExplosivesShadow = (explosivesShadow) => state.explosivesShadow = explosivesShadow
export const setExplosivesShadowAmount = (explosivesShadowAmount) => state.explosivesShadowAmount = explosivesShadowAmount

export default state