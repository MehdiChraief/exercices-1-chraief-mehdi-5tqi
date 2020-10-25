# Chraief Mehdi 5TQI
# 
# exercices 1 micro:bit

def on_button_pressed_a():
    for index in range(1):
        basic.show_string("Je suis a la maison")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    for index2 in range(1):
        basic.show_string("Je suis a l'ecole")
input.on_button_pressed(Button.B, on_button_pressed_b)

# coding in UTF-8
while not (input.button_is_pressed(Button.A)):
    while not (input.button_is_pressed(Button.B)):
        basic.show_string("Je suis confine")