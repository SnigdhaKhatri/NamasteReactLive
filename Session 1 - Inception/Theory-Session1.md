### What is Emmet?
Emmet is a plug-in in text editors that gives the power of high speed coding and editing, basically writing short forms and abbreviation and it converts it into full code

### Difference between Library and Framework?
The major differentiating point is - inversion of control
In a library - you are incharge of the flow, you write code and call the library as and when needed but in Framework, it itself has the control of the flow and it gives you places to plug in your code 

### What is CDN? Why do we use it?
CDN - content delivery network - is basically group of servers stratigically placed across the world to provide faster delivery of web content to users which are distributed worldwide. GOAL - high availability and performance MISSION - reduce latency

### Why React is known as React?
React was developed for frontend which is basically application that have constantly changing data and React was the View so it has to "react" at every change or user events

### What is cross origin in script tag?
The crossorigin attribute provide support for CORS (Cross origin resource sharing) 

### React vs ReactDOM
React - responsible for creating the View
ReactDOM - responsible for actually render the UI in the browser
ReactDOM was seperated from React after v14 because it was basically the browser or web part and react was just not limited to web, so to make it easy to build more environment that React can render to, reactdom was seperated.

### react.development.js vs react.production.js files via CDN
react.development.js - These are dev dependencies which are not used in prod
react.production.js - These are minified version of development CDN which are suitable for CDN

### asyn vs defer
Default: HTML parsing gets paused as soon as it found script tag and then it started fetching the files for script and then continues with execution. Once script execution finished, html parsing continues.

Async: HTML parsing and fetching file for script happens asynchronously without pausing anyone and as soon as browser encounter script tag, it pauses html parsing and start executing the scripts, once script execution finishes it continues the html parsing.

Defer: HTML parsing and fetching file for script happens asynchronously without pausing anyone and once html parsing gets finished, then script execution starts happening.