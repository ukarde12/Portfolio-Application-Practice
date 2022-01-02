# Portfolio-Application-Practice

This is demo application which is developed in node.js

- For frontend:
  HTML,CSS,Bootstrap,JQuery

- For Backend:
  node.js

- Backend Framework: Express

(This application is just for practice purpose)

- So functionality wise What we are trying to do:

1. We have login and Registration page
2. Upon successful login, User should navigate to his actual portfolio
3. If User is new then, He should first need to register himself/herself with this site.
4. Based on information provided during registration this make portfolio for his work.
5. Then user can download his portfolio in PDF.

- Usage of JQuery in application

The only use of JQuery is to include one HTML file into another HTML file.
So If you check in code, You will get to know that we have made seperate HTML file for common bootstrap(bootstrapIncluder.html), common styling(commonStyleIncluder.html) & then we are including that common HTMLs into our main HTML page. So this including logic is implemented in JS & we also need to add JQuery library.

JavaScript function is written in below file(includeHtml.min.js)

JQuery library is:

   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

So finally When we you want to include any HTML file into current HTML file then add this JQuery and includeHtml.min.js into your head tag and then inside body you can write

<div include-html="../Utility/commonStyleIncluder.html" id="Common_Style_file"></div>

Make sure you are using "include-html" attribute for importing HTML file.

I followed below youtube video for that (Its in hindi):
https://www.youtube.com/watch?v=uwUGc1D4vf8

- How to run the application:

So our index.js is entry point.

Path till backend and then command is
node index.js

For e.g:
<X..../Portfolio-Application-Practice/Backend>: node index.js
