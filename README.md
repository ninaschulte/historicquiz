# Historic quiz
Website consist of 10 historic questions.
![Alt Text](Documentation/responsivelayout.png)
# User stories
| ID | User story |
| ---------------- | ---------------- | 
| 1# | As a user I want to see the purpose of the website when I open it, so that I know about what it is. |
| 2# | As a user I want to see the rules of the quiz, so that I know how to play it. |
| 3# | As a user I want to type my name into input field, so that I get personalized results. | 
| 4# | As a user, I want to have a clear direction, how to start the quiz. |
| 5# | As a user I want to be able to submit the correct answer, so that I can move to the next question. |
| 6# | As a user I want to be able to move to the next question. |
| 7# | As a user I want to have direct feedback on my submitted answer, so that I know which answer was a correct one. |
| 2# | As a user I want see progress, so that I know how many questions are left. |
| 3# | As a user I want to see the result page after I submitted the last question, so that I know how many I answered correctly.| 
| 4# | As a user, I want to see who is the author of the website |
# Diagram
![Alt Text](Documentation/diagram.png)
# Features
## Landing page
![Alt Text](Documentation/typename.png)
![Alt Text](Documentation/requiredname.png)
## Rules
![Alt Text](Documentation/rules-button.png)
![Alt Text](Documentation/rules.png)
## Display Question

### Show correct answer
![Alt Text](Documentation/showthecorrect.png)
![Alt Text](Documentation/showwrong.png)
## Alert messages
![Alt Text](Documentation/nosubmitedanswer.png)

# Bugs
| Bug | Visual of a bug | Fix | Comments |
| ---------------- | ---------------- | ---------------- |  ---------------- |
| ![Image 1](Documentation/bug1a.png)  |   | ![Image 1](Documentation/fix1a.png)  | Quiz didn´t start because I used for start quiz input submit. The bug was fixed once I change it to button. |
| ![Image 1](Documentation/bug1b.png)  | ![Image 1](Documentation/screen1b.png)  | ![Image 1](Documentation/fix1b.png)   | Submit button was not showing alert message when clicking on it and instead the number on progress section was increasing. Bug solved with if !submitted. |
| ![Image 1](Documentation/bug1c.png)  |   |   | The same option was always the correct one. Accidental local declaration removed. |
# Credits
https://www.w3schools.com/js/default.asp - for writing many functions and also for trying it out before I added it to the CodeAnyWhere. 
