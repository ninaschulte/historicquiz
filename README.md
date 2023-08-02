# Historic quiz
Historic Quiz is an engaging and educational quiz application that takes you on a journey through time. Test your knowledge of history with 10 randomly selected questions covering various eras, events, and personalities. From ancient civilizations to modern revolutions, this quiz will challenge and entertain history enthusiasts of all levels.
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
On the landing page, you are presented with an input field where users need to type their names. In the header, there are rules, and in the footer, you can find the name of the author. Users must type their names to start the quiz. Users can initiate the quiz by submitting the 'Start the quiz' button.
![Alt Text](Documentation/typename.png)
![Alt Text](Documentation/requiredname.png)
## Rules
The Button for rules in the header is accessible throughout the entire quiz. When the user taps on the button, it opens a dialog containing the quiz rules. Tapping the 'x' will close the dialog.
![Alt Text](Documentation/rules-button.png)
![Alt Text](Documentation/rules.png)
## Display Question
Quiz consists of 10 questions and 4 options under each question. Only one answer is correct, and once the user submits the question, the user can't change the response anymore.
![Alt Text](Documentation/displayquestion.png)
### Progress
Each question is also showing the progress of the user, so that the user knows how many more questions there are left to answer.
### Show correct answer
Once user submit the answer, application will show to the user the correct answer.
![Alt Text](Documentation/showthecorrect.png)
![Alt Text](Documentation/showwrong.png)
### Submit button and Next button
Every question has a submit button and a next button. Once an answer is selected and the submit button is clicked, the submit button will disappear. Users will have to click on the next button to proceed to the next question.
![Alt Text](Documentation/nosubmitedanswer.png)
## Result page

# Bugs
| Bug | Visual of a bug | Fix | Comments |
| ---------------- | ---------------- | ---------------- |  ---------------- |
| ![Image 1](Documentation/bug1a.png)  |   | ![Image 1](Documentation/fix1a.png)  | Quiz didn´t start because I used for start quiz input submit. The bug was fixed once I change it to button. |
| ![Image 1](Documentation/bug1b.png)  | ![Image 1](Documentation/screen1b.png)  | ![Image 1](Documentation/fix1b.png)   | Submit button was not showing alert message when clicking on it and instead the number on progress section was increasing. Bug solved with if !submitted. |
| ![Image 1](Documentation/bug1c.png)  |   |   | The same option was always the correct one. Accidental local declaration removed. |
# Credits
https://www.w3schools.com/js/default.asp - for writing many functions and also for trying it out before I added it to the CodeAnyWhere. 
