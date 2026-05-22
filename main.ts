namespace SpriteKind {
    export const decoration = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim left`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim right`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
    animation.runImageAnimation(
    mySprite,
    assets.animation`shooting shark`,
    100,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let my_food: Sprite = null
let my_submarine: Sprite = null
let myDecor: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(8)
scene.setBackgroundImage(assets.image`ocean1`)
mySprite = sprites.create(assets.image`shark`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
for (let index = 0; index < 10; index++) {
    myDecor = sprites.create(assets.image`decoration`, SpriteKind.Player)
    myDecor.setPosition(randint(0, 10), 96)
}
animation.runImageAnimation(
mySprite,
assets.animation`swim right`,
200,
true
)
info.setLife(5)
game.onUpdateInterval(2000, function () {
    my_submarine = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
    my_submarine.setPosition(scene.screenWidth(), randint(5, 115))
    my_submarine.vx = -75
    animation.runImageAnimation(
    my_submarine,
    assets.animation`animated enemy`,
    50,
    false
    )
})
game.onUpdateInterval(2100, function () {
    my_food = sprites.create(assets.image`food`, SpriteKind.Food)
    my_food.setPosition(scene.screenWidth(), randint(5, 115))
    my_food.vx = -75
    animation.runImageAnimation(
    my_food,
    assets.animation`animated food`,
    200,
    false
    )
})
