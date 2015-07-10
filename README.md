Ionic-based WhereYouAt app
=====================

[![Join the chat at https://gitter.im/TVSD/ionic_wya](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/TVSD/ionic_wya?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

WhereYouAt app is meant to let you keep track of people you meet via Meetup. It was created using Ionic framework and Angular.js. Data is fed to the app by a backend running the TVSD/where_you_at_server Node.js/MongoDB code. In its current incarnation the app only works with the TVSD Meetup group.

## Installation

We assume that you already have `Node.js` and `npm` installed on your system. (Which you should, because they are awesome!)

You will need to install `ionic` and `cordova` like so:

```bash
$ npm install -g cordova ionic
```

Now the reason why the following is kind of awkward is because `ionic` project contains a lot of files that we didn't want to keep track of in this ionic_wya repo. So those files we will have to grab from an `ionic` starter project.

Change to your working directory and do:

```bash
$ ionic start ionic_temp
$ git clone https://github.com/TVSD/ionic_wya.git
```

These operations will create two new directories for you: `ionic_temp` and `ionic_wya`. Now from the `ionic_temp` copy ONLY the directories `hooks`, `platforms`, and `plugins` to `ionic_wya`.

And that's it! You should now be able to use `ionic_wya` directory to run the project as described below. Git will keep track of all the "important" changes, i.e. mostly those in `www` directory.


## Running the app in a browser

Go to `ionic_wya` directory and type in

```bash
$ ionic serve
```

This will start a local web server and open a tab in your browser where your app will be running (being served from said web server).

Just make sure that you are running in a "normal" browser. I.e. avoid Internet Explorer. If `ionic serve` opened the app in Internet Explorer, you can simply copy the URL from the navigation bar to a different browser, to run it there.


## Running the app on a device/simulator

Ionic wraps some of the Cordova functionality, so for example to run the app on an Android device you can do:

```bash
$ ionic platform android
$ ionic run android
```

Note that `ionic platform android` command only needs to be given once to create the Android project structure in `platforms` directory.

Of course you will only be able to run the app on a device if you have the Android development environment fully installed and configured. That can be tough and you should look for info about that elsewhere, for example here: http://cordova.apache.org/docs/en/2.5.0/guide_getting-started_android_index.md.html
