radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        TurnLeft()
    }
    if (receivedNumber == 2) {
        TurnRight()
    }
    if (receivedNumber == 3) {
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 60)
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 60)
    }
    if (receivedNumber == 4) {
        kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor1)
        kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor2)
    }
})
function TurnLeft () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Reverse, 90)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 90)
    basic.pause(500)
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor1)
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor2)
}
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.lightLevel()))
})
function TurnRight () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Reverse, 90)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 90)
    basic.pause(500)
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor1)
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor2)
}
let temperature = 0
radio.setGroup(2)
basic.forever(function () {
    basic.showString("" + (input.temperature()))
})
basic.forever(function () {
    temperature = input.temperature()
})
