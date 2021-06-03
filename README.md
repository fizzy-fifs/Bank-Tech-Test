#  Bank-Tech-Test
A simple banking program that allows users to create an account, make deposits, make withdrawals and print an account statement. This project is the result of a tech test written in part fulfilment of the Makers Academy Coding Bootcamp.

This program is designed to meet the following requirements:
  * You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
  * Deposits, withdrawal.
  * Account statement (date, amount, balance) printing.
  * Data can be kept in memory (it doesn't need to be stored to a database or anything).

## Acceptance criteria
The following was the acceptance criteria:
  * Given a client makes a deposit of 1000 on 10-01-2012
  And a deposit of 2000 on 13-01-2012
  And a withdrawal of 500 on 14-01-2012
  When she prints her bank statement
  Then she would see

  ```
  date || credit || debit || balance
  14/01/2012 || || 500.00 || 2500.00
  13/01/2012 || 2000.00 || || 3000.00
  10/01/2012 || 1000.00 || || 1000.00
  `````

## Tech/framework used
### Built with

  * JavaScript

### Testing Framework
  * Jasmine 3.7.1

  ### Linting
  * ESLint 7. 27. 0

## Getting started
To install simply clone the repo and 'cd' into the application directory.

```
$ git clone https://github.com/fizzy-fifs/Bank-Tech-Test.git
$ cd Bank-Tech-Test
```

## Usage
This application is designed to be run on the JavaScript console.

To run: 
  * Open the JavaScript console in a browser of your choice

Users can use the following methods to make deposits, withdrawals and print an account statement :
  * deposit(amount)
  * withdraw(amount)
  * printStatement()

    *where amount is an integer representing the sum the user wishes to deposit or withdraw.*
  



## Running tests
To test, copy and paste the file path of the 'SpecRunner.html' file located in the root directory of this repo into the url bar of a browser of your choice.

###### *© Fifolu Akinyemi*