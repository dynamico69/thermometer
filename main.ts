input.onButtonPressed(Button.A, function () {
    Vogel.change(LedSpriteProperty.Y, -1)
    music.playTone(330, music.beat(BeatFraction.Sixteenth))
})
input.onButtonPressed(Button.B, function () {
    Vogel.change(LedSpriteProperty.Y, 1)
    music.playTone(440, music.beat(BeatFraction.Sixteenth))
})
let emptyObstacleY = 0
let ticks = 0
let Vogel: game.LedSprite = null
let speed = 750
let index = 0
let hindernisse: game.LedSprite[] = []
Vogel = game.createSprite(0, 2)
Vogel.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (hindernisse.length > 0 && hindernisse[0].get(LedSpriteProperty.X) == 0) {
        hindernisse.removeAt(0).delete()
    }
    for (let hindernis2 of hindernisse) {
        hindernis2.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        emptyObstacleY = randint(0, 4)
        for (let index2 = 0; index2 <= 4; index2++) {
            if (index2 != emptyObstacleY) {
                hindernisse.push(game.createSprite(4, index2))
            }
        }
    }
    for (let hindernis3 of hindernisse) {
        if (hindernis3.get(LedSpriteProperty.X) == Vogel.get(LedSpriteProperty.X) && hindernis3.get(LedSpriteProperty.Y) == Vogel.get(LedSpriteProperty.Y)) {
            music.playMelody("E B C5 A B G A F ", 240)
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(speed)
    if (speed > 400) {
        speed = speed - 10
    }
})
