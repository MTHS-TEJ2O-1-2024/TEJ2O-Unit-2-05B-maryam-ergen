/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maryam Ergen
 * Created on: Sep 2024
 * This program shows the temperature
*/
//variable for the current temperature
let currentTemperature = input.temperature()
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    input.temperature()
    basic.showNumber(currentTemperature) + 'C'
})
basic.showString('the current temperature is: ' + (currentTemperature).toString() + 'C')