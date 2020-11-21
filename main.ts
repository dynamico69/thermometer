input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
    music.playTone(440, music.beat(BeatFraction.Sixteenth))
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
    music.playTone(440, music.beat(BeatFraction.Sixteenth))
})
let emtyObstacleY = 0
let ticks = 0
let bird: game.LedSprite = null
let Index = 0
let obstacles: game.LedSprite[] = []
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    let hindernisse: game.LedSprite[] = []
    while (hindernisse.length > 0 && hindernisse[0] == 0) {
        hindernisse.removeAt(0).delete()
    }
    for (let hindernis of hindernisse) {
        hindernis.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        emtyObstacleY = randint(0, 4)
        for (let Index = 0; Index <= 4; Index++) {
            if (Index != emtyObstacleY) {
                obstacles.push(game.createSprite(4, Index))
            }
        }
        for (let obstacle of obstacles) {
            if (obstacle.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X)) {
                game.gameOver()
            }
        }
        ticks += 1
        basic.pause(1000)
    }
})
