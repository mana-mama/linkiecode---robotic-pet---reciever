// ลุก = ขึ้น ขึ้น
// 
// นอน = ลง ลง
// 
// เดิน = ขึ้น ลง
// 
// เต้น = ซ้าย ขวา หรือ ขวา ซ้าย
// 
// สวัสดี = ลง ขึ้น
// 
// นั่ง = ขึ้น ซ้าย หรือ ขึ้น ขวา
function Walk () {
    Rest()
    Delay = 500
    index6 = 0
    for (let index = 0; index <= 10; index++) {
        index += 1
        robotbit.Servo(robotbit.Servos.S1, 135)
        robotbit.Servo(robotbit.Servos.S2, 135)
        robotbit.Servo(robotbit.Servos.S3, 45)
        robotbit.Servo(robotbit.Servos.S4, 45)
        basic.pause(Delay)
        robotbit.Servo(robotbit.Servos.S1, 45)
        robotbit.Servo(robotbit.Servos.S2, 45)
        robotbit.Servo(robotbit.Servos.S3, 135)
        robotbit.Servo(robotbit.Servos.S4, 135)
        basic.pause(Delay)
    }
    Rest()
}
radio.onReceivedNumber(function (receivedNumber) {
    if (Action == 0) {
        Action = 1
        if (receivedNumber == 11) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.InBackground)
            Rest()
            Awake = 1
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        } else if (receivedNumber == 22) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.InBackground)
            Sleep()
            Awake = 0
            basic.showLeds(`
                . . . . .
                # # . # #
                . . . . .
                . # # # .
                . . . # .
                `)
        } else if (receivedNumber == 33) {
            basic.pause(100)
        } else if (receivedNumber == 44) {
            basic.pause(100)
        } else if (receivedNumber == 21) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
            basic.showLeds(`
                # . . . #
                . # . # .
                # # . # #
                . . . . .
                . # # # .
                `)
            Hello()
        } else if (receivedNumber == 34) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.InBackground)
            Dance()
        } else if (receivedNumber == 43) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.InBackground)
            Dance()
        } else if (receivedNumber == 12) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.slide), SoundExpressionPlayMode.InBackground)
            Walk()
        } else if (receivedNumber == 13) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.InBackground)
            Sit()
        } else if (receivedNumber == 14) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.InBackground)
            Sit()
        }
        Action = 0
    }
})
function Rest () {
    robotbit.Servo(robotbit.Servos.S1, 90)
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S3, 90)
    robotbit.Servo(robotbit.Servos.S4, 90)
}
function Hello () {
    Rest()
    robotbit.Servo(robotbit.Servos.S3, 180)
    robotbit.Servo(robotbit.Servos.S4, 0)
    basic.pause(250)
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.pause(250)
    for (let index = 0; index < 3; index++) {
        robotbit.Servo(robotbit.Servos.S1, 45)
        basic.pause(200)
        robotbit.Servo(robotbit.Servos.S1, 0)
        basic.pause(200)
    }
    basic.pause(250)
    robotbit.Servo(robotbit.Servos.S1, 90)
    basic.pause(250)
    robotbit.Servo(robotbit.Servos.S2, 180)
    basic.pause(250)
    for (let index = 0; index < 3; index++) {
        robotbit.Servo(robotbit.Servos.S2, 180)
        basic.pause(200)
        robotbit.Servo(robotbit.Servos.S2, 135)
        basic.pause(200)
    }
    basic.pause(250)
    Rest()
}
function DM_1 () {
    robotbit.Servo(robotbit.Servos.S1, 45)
    robotbit.Servo(robotbit.Servos.S2, 135)
    robotbit.Servo(robotbit.Servos.S3, 135)
    robotbit.Servo(robotbit.Servos.S4, 45)
    basic.pause(Delay)
    robotbit.Servo(robotbit.Servos.S1, 0)
    robotbit.Servo(robotbit.Servos.S2, 180)
    basic.pause(Delay)
    index6 = 0
    for (let index3 = 0; index3 <= 5; index3++) {
        robotbit.Servo(robotbit.Servos.S3, 90)
        robotbit.Servo(robotbit.Servos.S4, 90)
        basic.pause(Delay)
        robotbit.Servo(robotbit.Servos.S3, 135)
        robotbit.Servo(robotbit.Servos.S4, 45)
        basic.pause(Delay)
        index3 += 1
    }
    Rest()
}
function Dance () {
    Rest()
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # # # # #
        . # # # .
        `)
    Delay = 500
    DM_3()
    DM_1()
    DM_4()
    DM_1()
    Rest()
}
function DM_4 () {
    index6 = 0
    for (let index4 = 0; index4 <= 2; index4++) {
        robotbit.Servo(robotbit.Servos.S2, 180)
        robotbit.Servo(robotbit.Servos.S3, 180)
        basic.pause(Delay)
        J3 = 0
        for (let J = 0; J <= 2; J++) {
            robotbit.Servo(robotbit.Servos.S1, 90)
            robotbit.Servo(robotbit.Servos.S4, 135)
            basic.pause(Delay)
            robotbit.Servo(robotbit.Servos.S1, 45)
            robotbit.Servo(robotbit.Servos.S4, 90)
            basic.pause(Delay)
            J += 1
        }
        robotbit.Servo(robotbit.Servos.S1, 90)
        robotbit.Servo(robotbit.Servos.S2, 90)
        robotbit.Servo(robotbit.Servos.S3, 90)
        robotbit.Servo(robotbit.Servos.S4, 90)
        basic.pause(Delay)
        index4 += 1
    }
}
function Sleep () {
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S2, 180)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S3, 180)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S4, 0)
    basic.pause(100)
}
function DM_3 () {
    index6 = 0
    for (let index5 = 0; index5 <= 2; index5++) {
        robotbit.Servo(robotbit.Servos.S1, 0)
        robotbit.Servo(robotbit.Servos.S4, 0)
        basic.pause(Delay)
        J3 = 0
        for (let J2 = 0; J2 <= 2; J2++) {
            robotbit.Servo(robotbit.Servos.S2, 90)
            robotbit.Servo(robotbit.Servos.S3, 45)
            basic.pause(Delay)
            robotbit.Servo(robotbit.Servos.S2, 135)
            robotbit.Servo(robotbit.Servos.S3, 90)
            basic.pause(Delay)
            J2 += 1
        }
        robotbit.Servo(robotbit.Servos.S1, 90)
        robotbit.Servo(robotbit.Servos.S2, 90)
        robotbit.Servo(robotbit.Servos.S3, 90)
        robotbit.Servo(robotbit.Servos.S4, 90)
        basic.pause(Delay)
        index5 += 1
    }
}
input.onSound(DetectedSound.Loud, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
})
function Sit () {
    Rest()
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S3, 180)
    robotbit.Servo(robotbit.Servos.S4, 0)
    basic.pause(100)
}
input.onGesture(Gesture.Shake, function () {
    if (Action == 0) {
        Action = 1
        Random = randint(0, 2)
        if (Random == 0) {
            DM_1()
        } else if (Random == 1) {
            DM_3()
        } else if (Random == 2) {
            DM_4()
        }
        Action = 0
    }
})
let Random = 0
let J3 = 0
let Awake = 0
let index6 = 0
let Delay = 0
let Action = 0
basic.showIcon(IconNames.SmallHeart)
Rest()
robotbit.Servo(robotbit.Servos.S5, 45)
Action = 0
radio.setGroup(1)
input.setSoundThreshold(SoundThreshold.Loud, 150)
basic.pause(2000)
basic.forever(function () {
    if (Action == 0) {
        if (input.lightLevel() <= 85) {
            Sleep()
            basic.pause(2000)
        } else if (input.lightLevel() >= 86 && input.lightLevel() <= 175) {
            Sit()
            basic.pause(2000)
        } else if (input.lightLevel() >= 176) {
            Action = 1
            Walk()
            Action = 0
        }
    }
})
// ขา
// 
// S1 ซ้ายหน้า 0 ออกตัว 180 เข้าตัว
// 
// S2 ขวาหน้า 180 ออกตัว 0 เข้าตัว
// 
// S3 ซ้ายหลัง 180 ออกตัว 0 เข้าตัว
// 
// S4 ขวาหลัง 0 ออกตัว 180 เข้าตัว
// 
// หาง
// 
// S5
// 
// Ultrasonic
// 
// P14 TRIG
// 
// P15 ECHO
basic.forever(function () {
    if (Math.randomBoolean() == true) {
        for (let index = 0; index < 4; index++) {
            robotbit.Servo(robotbit.Servos.S5, 20)
            basic.pause(200)
            robotbit.Servo(robotbit.Servos.S5, 70)
            basic.pause(200)
        }
        robotbit.Servo(robotbit.Servos.S5, 45)
    } else {
        basic.pause(1600)
    }
})
