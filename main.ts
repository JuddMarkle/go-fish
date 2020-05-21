sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    scene.cameraShake(4, 250)
    info.changeScoreBy(1)
    fish.setPosition(Math.randomRange(10, 150), Math.randomRange(10, 110))
    info.startCountdown(2)
    mySprite.startEffect(effects.bubbles, 1000)
})
let fish: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(8)
mySprite = sprites.create(img`
. . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . c c d d b c f . . . . . . . . . . . . . . 
. . . . . . . . . . c c d d b b f . . . . . . . . . . . . . . . 
. . . . . . . . . . f c c b b c f . . . . . . . . . . . . . . . 
. . . . . f f f f f c c c c c c f f . . . . . . . . . c c c . . 
. . . f f b b b b b b b c b b b b c f f f . . . . c c b b c . . 
. . f b b b b b b b b c b c b b b b c c c f f . c d b b c . . . 
f f b b b b b b f f b b c b c b b b c c c c c f c d b b f . . . 
f b c b b b 1 1 f f 1 b c b b b b b c c c c c f f b b f . . . . 
f b b b 1 1 1 1 1 1 1 1 b b b b b c c c c c c c b b c f . . . . 
. f b 1 1 1 3 3 c c 1 1 b b b b c c c c c c c c c c c f . . . . 
. . f c c c 3 1 c 1 1 1 b b b c c c c c b d b f f b b c f . . . 
. . . f c 1 3 c 1 1 1 c b b b f c d d d d c c . . f b b f . . . 
. . . . f c c c 1 1 1 f b d b b c c d c c . . . . . f b b f . . 
. . . . . . . . c c c c f c d b b c c . . . . . . . . f f f . . 
. . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
`, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
. . . . . . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . . 
. . . . . . . . . f f f f f f c c b b c f . . . . . . . . . . . . . . . 
. . . . . . f f f b b b b b b b b c c c f f . . . . . . . . . . . . . . 
. . . . . f b b b b b b b b b b b b b b b c f f f . . . . . . c c c c c 
. . . . . b c b b b b b f f b c b c b b b b c c c f f . . . c d b b b c 
. . . . . b b b 1 1 1 1 f f b b c b c b b b c c c c c f f c d d b b c . 
. . . . . f b 1 1 1 1 1 1 1 1 b c b c b b b c c c c c c c b d b b f . . 
. . . . . . f c c c 3 3 c 1 1 b b b b b b c c c c c c c c c b b c f . . 
. . . . . . . f c 1 3 1 c c 1 1 b b b b c c c c c c c c f f b c c f . . 
. . . . . . . . f 3 3 c 1 1 1 1 b b b c c c c c b d b c . . f b b c f . 
. . . . . . . . . f f 1 1 1 1 c b b b f d d d d d c c . . . . f b b f . 
. . . . . . . . . . . c c c 1 f b d b b f d d c c . . . . . . . f b b f 
. . . . . . . . . . . . . . c c f b d b b f c . . . . . . . . . . f f f 
. . . . . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . c c f f f . . . . . . . . . . . 
. . . . . . . . . . f f f f f f f f f c b b b b f . . . . . . . . . . . 
. . . . . . . . . f b b b b b b b b b f f f b f . . . . . . . . . . . . 
. . . . . . . . . f b b 1 1 1 b f f b b b b f f . . . . . . . . . . . . 
. . . . . . . . . f b 1 1 1 1 1 f f b b b b b c f f . . . . . . . . . . 
. . . . . . . . . f 1 c c c c 1 1 b b c b c b c c c f . . . . . . . . . 
. . . . . . . . . . f c 1 c 1 c 1 b b b c b c b c c c f . . . c c c c c 
. . . . . . . . . . . . c 3 3 3 1 b b b c b c b c c c c f c c d d b b c 
. . . . . . . . . . . c 3 3 3 c 1 b b b b b b b c c c c c b d d b c c . 
. . . . . . . . . . . c 3 3 1 c 1 1 b b b b b c c c c c c c b b c c . . 
. . . . . . . . . . c c 1 3 c 1 1 1 b b b b c c c c c c f f b c c f . . 
. . . . . . . . . . c 1 1 1 1 1 1 c b b b c c c c c b b c . f c c f . . 
. . . . . . . . . . . c c 1 1 1 1 c b b b f d d d d d c . . f b b c f . 
. . . . . . . . . . . . . c c c f f b d b b f d d d c . . . . f b b f . 
. . . . . . . . . . . . . . . . . . f b d b b f c c . . . . . . f b b f 
. . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . . f f f 
`,img`
. . . . . . . . . . . f f f f f f f . . . c c f f f . . . . . . . . . . 
. . . . . . . . . . f b b b b b b b f f c b b b b f . . . . . . . . . . 
. . . . . . . . . . f b b 1 1 1 b b b b b f f b f . . . . . . . . . . . 
. . . . . . . . . . f b 1 1 1 1 1 f f b b b b f f . . . . . . . . . . . 
. . . . . . . . . . f 1 c c c c 1 f f b b b b b c f f . . . . . . . . . 
. . . . . . . . . . f f c 1 c 1 c 1 b b c b c b c c c f . . . . . . . . 
. . . . . . . . . . . f c c 3 3 3 1 b b b c b c b c c c f . . c c c c c 
. . . . . . . . . . . . c 3 3 3 c 1 b b b c b c b c c c c f c d d b b c 
. . . . . . . . . . . . c 3 3 3 c 1 b b b b b b b c c c c c d d b c c . 
. . . . . . . . . . . . c 3 3 3 c 1 1 b b b b b c c c c c c b b c c . . 
. . . . . . . . . . . c c 3 3 1 c 1 1 b b b b c c c c c c f b c c f . . 
. . . . . . . . . . . c c 1 3 c 1 1 c b b b c c c c c b b c f c c f . . 
. . . . . . . . . . . c 1 1 1 1 1 1 c b b b f d d d d d c . f b b c f . 
. . . . . . . . . . . . c c 1 1 1 1 f b d b b f d d d c . . . f b b f . 
. . . . . . . . . . . . . . c c c f f f b d b b f c c . . . . . f b b f 
. . . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . f f f 
`,img`
. . . . . . . . . . . . . . . . . . . . c c f f f . . . . . . . . . . . 
. . . . . . . . . . f f f f f f f f f c b b b b f . . . . . . . . . . . 
. . . . . . . . . f b b b b b b b b b f f f b f . . . . . . . . . . . . 
. . . . . . . . . f b b 1 1 1 b f f b b b b f f . . . . . . . . . . . . 
. . . . . . . . . f b 1 1 1 1 1 f f b b b b b c f f . . . . . . . . . . 
. . . . . . . . . f 1 c c c c 1 1 b b c b c b c c c f . . . . . . . . . 
. . . . . . . . . . f c 1 c 1 c 1 b b b c b c b c c c f . . . c c c c c 
. . . . . . . . . . . . c 3 3 3 1 b b b c b c b c c c c f c c d d b b c 
. . . . . . . . . . . c 3 3 3 c 1 b b b b b b b c c c c c b d d b c c . 
. . . . . . . . . . . c 3 3 1 c 1 1 b b b b b c c c c c c c b b c c . . 
. . . . . . . . . . c c 1 3 c 1 1 1 b b b b c c c c c c f f b c c f . . 
. . . . . . . . . . c 1 1 1 1 1 1 c b b b c c c c c b b c . f c c f . . 
. . . . . . . . . . . c c 1 1 1 1 c b b b f d d d d d c . . f b b c f . 
. . . . . . . . . . . . . c c c f f b d b b f d d d c . . . . f b b f . 
. . . . . . . . . . . . . . . . . . f b d b b f c c . . . . . . f b b f 
. . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . . f f f 
`],
200,
true
)
controller.moveSprite(mySprite)
fish = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . c c c c . . . . 
. . . . . . c c d d d d c . . . 
. . . . . c c c c c c d c . . . 
. . . . c c 4 4 4 4 d c c . . . 
. . . c 4 d 4 4 4 4 4 1 c . c c 
. . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
. c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
. f 4 4 4 4 1 c 4 f 4 d f f f f 
. . f f 4 d 4 4 f f 4 c f c . . 
. . . . f f 4 4 4 4 c d b c . . 
. . . . . . f f f f d d d c . . 
. . . . . . . . . . c c c . . . 
`, SpriteKind.Food)
animation.runImageAnimation(
fish,
[img`
. . . . . . . . . . . . . . . . 
. . . . . . . . c c c c . . . . 
. . . . . . c c d d d d c . . . 
. . . . . c c c c c c d c . . . 
. . . . c c 4 4 4 4 d c c . . . 
. . . c 4 d 4 4 4 4 4 1 c . c c 
. . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
. c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
. f 4 4 4 4 1 c 4 f 4 d f f f f 
. . f f 4 d 4 4 f f 4 c f c . . 
. . . . f f 4 4 4 4 c d b c . . 
. . . . . . f f f f d d d c . . 
. . . . . . . . . . c c c . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . c c c c c . . . . 
. . . . . . c d d d d d c . . . 
. . . . . . c c c c c d c . . . 
. . . . . c 4 4 4 4 d c c . . . 
. . . . c d 4 4 4 4 4 1 c . . . 
. . . c 4 4 1 4 4 4 4 4 1 c . . 
. . c 4 4 4 4 1 4 4 4 4 1 c c c 
. c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
. c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
. f 4 4 4 4 1 4 4 4 4 c b c f f 
. . f f f d 4 4 4 4 c d d c . . 
. . . . . f f f f f c c c . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . c c c c . . . . 
. . . . . . c c d d d d c . . . 
. . . . . c c c c c c d c . . . 
. . . . c c 4 4 4 4 d c c . c c 
. . . c 4 d 4 4 4 4 4 1 c c 4 c 
. . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
. c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
. f 4 4 4 4 1 c c 4 4 d f f . . 
. . f f 4 d 4 4 4 4 4 c f . . . 
. . . . f f 4 4 4 4 c d b c . . 
. . . . . . f f f f d d d c . . 
. . . . . . . . . . c c c . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . c c c c . . . 
. . . . . . . c c d d d d c . . 
. . . . . c c c c c c d d c . . 
. . . c c c 4 4 4 4 d c c c c c 
. . c 4 4 1 4 4 4 4 4 1 c c 4 f 
. c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
. f 4 4 4 4 1 4 4 f 4 4 d f . . 
. . f 4 4 1 4 c c 4 4 d f . . . 
. . . f d 4 4 4 4 4 4 c f . . . 
. . . . f f 4 4 4 4 c d b c . . 
. . . . . . f f f f d d d c . . 
. . . . . . . . . . c c c . . . 
`],
100,
true
)
fish.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
info.startCountdown(10)
