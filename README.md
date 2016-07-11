# JS QuizReview
This is a JavaScript run application, make sure you don't have JavaScript disabled.

###About
- This is a quiz review system designed around fill-in-the-blank. Select from the available courses. The course will initially load chapter 1. Any available chapters will be listed in the menu on the left.
- To Show/Hide the menu click on:  Select Chapter Quiz. - The site is responsive, meaning it works on mobile devices.
- Use the <b>LIMIT DISPLAY</b> feature to slowly learn and retain the information. Try typing 1 to show only one question. Click the <b>SHOW</b> ALL button to repopulate the entire quiz. When you miss an question, the answer will show up below that question. After clicking <b>SUBMIT</b> the button will say <b>TRY AGAIN</b>. Clicking this button will reset the quiz, but it will retain the number of questions currently displayed.

### Display Available Course
- To display a course on the Available Courses page, edit the <b>AvailableCourses.js</b> file. 
- Within this file is an Array. Supply a: Title, Description, and Link to the Quiz.
```
Add a new using the following code:
	
		addCourse(
			'title',
			'description',
			'link'
		);
	NOTE: the link should look similiar to:  course/chapter1.html or com262/chapter1.html
===============================	
	Filled in Example
===============================
	addCourse(
	'Com262 - Android Development',
	'Learn basic Android development, gui and xml design. Use Intents to run other application with your custom app.',
	'com262/chapter1.html'
	);
```

### Add new Quiz
Create a copy of the: Course_Folder (directory)
Rename: Course_Folder to the name of the Course: ex: com262 -- DO NOT use spaces
Within the Course_Folder (directory) you should see this:
```
lists (directory)
  - QA_TEMPLATE.js
  - chapter1.js
  
chapter1.html

menu.js
```
Take a look a the chapter1.js, chapter1.html
- chapter1.js uses an array to display questions ['question', 'answer'] and provides a description string
- chapter1.html: all you need to change is:
```
<script src="lists/chapter1.js"></script> // chapter1.js to match your file name
<!-- Generate Quiz -->
    <script>
      createMenu("COM262", menuLink); // change COM262 to Course Name
      titleDescription("Chapter 1", description); // change Chapter 1 to Chapter Title 
      generateQuiz(QA);
    </script>
```
