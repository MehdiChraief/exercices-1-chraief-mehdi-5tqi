// coding in utf-8
/** 
Chraief Mehdi 5TQI
exercices 1 micro:bit

 */
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    for (let index = 0; index < 1; index++) {
        basic.showString("Je suis a la maison")
    }
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    for (let index2 = 0; index2 < 1; index2++) {
        basic.showString("Je suis a l'ecole")
    }
})
while (!input.buttonIsPressed(Button.A)) {
    while (!input.buttonIsPressed(Button.B)) {
        basic.showString("Je suis confine")
    }
}
