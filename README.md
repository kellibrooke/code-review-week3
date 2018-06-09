# Code Review - "Beep Boop" - Week 3 - Intro To Programming - Epicodus - Portland, OR

#### _This is a final project for the third week of the Intro to Programming course at Epicodus in Portland, June 4 - June 8, 2018_

#### By _**Kelli McCloskey**_

## Description

_The instructions for this project are as follows:_

Create a web application that takes a number from a user and returns a range of numbers from 0 to the chosen number with the following exceptions:

* Numbers that contain a 0 are replaced (all digits) with "Beep!"
* Numbers that contain a 1 are replaced (all digits) with "Boop!"
* Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program the number 10 should be replaced with "Boop!", and the number 30 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."

Also a user should be able to enter a new number and see new results over and over again.

Break the program down into simple, individual behaviors with input/output examples. Begin with the simplest possible behavior. List these behaviors (also known as "specs" or "specifications") in the project's README.md file.

### Specifications
* **Test whether that number is an integer.**
  * If not:
    * _Inform the user they cannot convert the number they've entered._
    * If so:
* **Test whether a number is divisible by 3.**
  * If so:
    * _Inform the user they cannot convert the number they've entered._
  * If not:
    * **Test whether a number contains any ones.**
      * If so:
        * _Replace number with "boop"._

      * If not...
    * **Test whether a number contains any zeros.**
      * If so:
        * _Replace number with "boop"._
      * If not:
        * _Display original number_
    * **Collect a number from the user.**
    * **Test each condition for each number counting up to the number inputted by the user.**
    * **Add the result of these tests to an array**
    * **Display results of the array to the user**

### Known Bugs/Issues
* Output boxes will allow text to flow outside of the output box when it is wider than the box instead of wrapping within the box.
* Prompt box does not pop up automatically when you click on the link to the live site; user must refresh page.

## Setup/Installation Requirements

* _Here is the [link](https://github.com/kellibrooke/code-review-week3) to the GitHub repository for this site_
* _Here is the [link](https://kellibrooke.github.io/code-review-week3/) to the live site on GitHub_

## Support and contact details

_Contact Kelli Brooke for questions or comments._


Copyright (c) 2018 **_Kelli McCloskey_**
