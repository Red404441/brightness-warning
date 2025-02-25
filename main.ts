let lightLevel = 0
basic.forever(function () {
    lightLevel = input.lightLevel()
    if (lightLevel > 150) {
        // Adjust this threshold based on your environment
        basic.showString("Get shade")
        // Beep sound (E note)
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else {
        basic.clearScreen()
    }
})
