let Ζαρι = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    music.playTone(494, music.beat(BeatFraction.Eighth))
    Ζαρι = randint(1, 2)
    if (1 == Ζαρι) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    } else if (2 == Ζαρι) {
        basic.showLeds(`
            # # # # #
            . # . # .
            # # # # #
            . # . # .
            # # # # #
            `)
    } else if (3 == Ζαρι) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . . # . .
        # # # # #
        # # . # #
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
})
