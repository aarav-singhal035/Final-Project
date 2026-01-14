/* Copyright (c) 2025 All rights reserved
 *
 * Created by: Aarav Singhal AND Max Malik
 * Created on: Jan 2026
 * This program moves 2 servos and one stepper motor.
*/

let potentiometers1 = 0
let potentiometers2 = 0
let angle1 = 0
let angle2 = 0

basic.forever(function () {
    // Read potentiometers (0–1023)
    potentiometers1 = pins.analogReadPin(AnalogPin.P1)
    potentiometers2 = pins.analogReadPin(AnalogPin.P2)
    // Map to servo angles (0–180)
    angle1 = Math.map(potentiometers1, 0, 1023, 0, 180)
    angle2 = Math.map(potentiometers2, 0, 1023, 0, 180)
    // Move servos
    robotbit.Servo(robotbit.Servos.S1, angle1)
    robotbit.Servo(robotbit.Servos.S2, angle2)
    basic.pause(20)
})

basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        robotbit.StpCarMove(1, 48)
    }
})

basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        robotbit.StpCarMove(-1, 48)
    }
})
