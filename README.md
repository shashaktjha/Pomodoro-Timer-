This is a pomodoro timer app 

The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.
 It uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks.
 Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student.
 In this app the interval can be changed 

The technique has been widely popularized by dozens of apps and websites providing timers and instructions.
Closely related to concepts such as timeboxing and iterative and incremental development used in software design,
the method has been adopted in pair programming contexts.

This project has been written in react native which is a javascript library developed by facebook.

## Installing dependencies
First, head to [this link] (https://docs.expo.dev/get-started/installation/)
to install Expo. You'll need the XDE for your computer and the mobile client
(Expo app) on your phone. If you prefer, you can also install the iOS simulator
(Macs only) and/or the Android emulator.

You'll also need Node.js and NPM installed. You can check if you already have them
installed by opening a terminal and running `node --version` and `npm --version`.
If numbers are printed, you're good to go. If not, [install them](https://nodejs.org/en/).
NPM will be installed automatically
when you install node.

Expo app is also needed in the mobile to run this project. You can download it on playstore or 
appstore

After installing those software dependencies, you'll need to install your app's
"dependencies" (libraries that are required to run the app, such as `react`,
`react-native`, etc.). Fortunately, it's very easy to do! From a terminal, `cd`
into this directory and run the command `npm install`. NPM will look at the
[`package.json`](/package.json) file's `dependencies` key and install those
libraries, as well as all of those libraries' dependencies (and the dependencies'
dependencies and so on).


## APP.JS
The app.js file in this is the main file that controls how the app would look and perform
Inside the react component class, there are various different methods each of which control a specific 
function in the app like reset, start etc. The render method in this class handles displaying what the 
user sees. Inside render, there is some jsx and html. Index.js and vibrate.js basically handle the vibrating part of this project.

## Running project
To run this project type "expo start" in the teriminal in the project folder.
A page will open up on the browser where you need to scan the qr code  in the react app in your mobile phone.
It will take some time to load

Press ctrl + c (on windows) or cmd + c (on mac) in the terminal to stop the server.
