# random-password-generator

## Link
https://cawleygl.github.io/random-password-generator/

## Description of Application
This application is a random password generator coded on javascript. The user is prompted with a button labelled "Generate Password." Upon clicking the button, they recieve a prompt to enter the number of characters that their password should contain, between 8 and 128. Entering values outside of this range, or NaN values will stop the process and alert the user. Entering a decimal value will cause the value to be rounded to the nearest whole number, and the rounded value will be used moving forward. The user then recieves a series of confirms to select which sorts of characters should be included (special characters, numbers, and capital and lowercase letters). If the user denies every type of character, the process will again stop and alert the user. After these choices, the user is alerted with a summary of their choices and a final confirm to create the password with the chosen parameters. This alert will show the rounded length value, if a decimal was entered earlier. Upon confirmation, the password is generated and written in the text area for the user to copy and use.

## Screenshot
![Screenshot](https://github.com/cawleygl/random-password-generator/blob/main/Assets/screenshot.png?raw=true)