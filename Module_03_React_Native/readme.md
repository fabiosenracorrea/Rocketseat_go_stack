# Module 03 - React Native

This repository holds the content and exercises of Go Stack's third module: React Native.

## What was covered here?

React Native is a way of developing apps with native code to Android and IOS. It allows us to manipulate each platform in a different way. It uses React syntax/concepts with a few key differences:

* Any HTML element is not allowed.
* There's no direct CSS, each style is done using React Native`s StyleSheet class. But most of CSS features are present here.
* Every component has `display: flex`
* There's no style inheritance. The only exception is when there's a Text component inside another.
* A few CSS features are not present, like `display: grid` or animations and pseudo-classes.

#### How to run this module's challenge

Make sure you have either npm or yarn installed, that you are running the server from module 01, [link here](../Module_01_NodeJS), and that you have an emulator set up.

1. clone this repository.
2. On the cloned directory, run either `yarn` or `npm install` to install dependencies
3. Run `yarn test` or `npm test` to see each test result
4. Run `yarn react-native run-android` or `yarn react-native run-ios` to open the project on your emulator.

#### Grade on this module

This project got **10/10 100%** as per below:

![project's grade](./project_grade.jpg)

###### Feedback

Any feedback regarding the structure of the code presented here is widely incentivized. Feel free to send me a PR too!
