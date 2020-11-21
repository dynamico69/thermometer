input.onButtonPressed(Button.A, function () {
    vogel.change(LedSpriteProperty.Y, -1)
    music.playTone(440, music.beat(BeatFraction.Sixteenth))
})
input.onButtonPressed(Button.B, function () {
    vogel.change(LedSpriteProperty.Y, 1)
    music.playTone(440, music.beat(BeatFraction.Sixteenth))
})
let vogel: game.LedSprite = null
vogel = game.createSprite(0, 2)
vogel.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    let hindernisse: game.LedSprite[] = []
    for (let hindernis of hindernisse) {
        hindernis.change(LedSpriteProperty.X, -1)
    }
    basic.pause(1000)
})
basic.forever(function () {
    let list: number[] = []
    while (list.length == 0) {
    	
    }
})
