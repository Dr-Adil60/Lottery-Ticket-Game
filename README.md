## ***Lottery Ticket App***
Welcome to the Lottery Ticket App! This app allows users to buy a lottery ticket and try their luck. The goal is to get the sum of three randomly generated numbers to equal 15. Users will continue purchasing tickets until they win.

This app is built using React with Vite for fast development and builds.

## ***Features***
Ticket Generation: Each time a user buys a ticket, three random numbers between 1 and 9 are generated.
Winning Condition: The user wins when the sum of the three numbers equals 15.
Ticket Buying Mechanism: The user can continue buying tickets until they win.
Fast Development: Built with Vite, a fast tool for building React applications.

## ***Installation***
**Prerequisites**
Before running the app, ensure you have the following installed:

Node.js (which includes npm)
Git
**Steps to Run the App Locally:**
Clone the repository:

Open your terminal and clone the repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/Dr-Adil60/Lottery-Ticket-Game.git
Navigate to the project directory:

Change into the directory where the app was cloned:

bash
Copy code
cd Lottery-Ticket-Game

## ***Install dependencies:***

Install the required dependencies with the following command:

bash
Copy code
npm install
Run the app locally:

Start the development server:

bash
Copy code
npm run dev
This will open the app in your default browser at http://localhost:3000.

## ***How It Works***
**Buying a Ticket:**

When the user clicks the "Buy Ticket" button, three random numbers between 1 and 9 are generated.
The numbers are displayed on the ticket.

## ***Winning Condition:***

If the sum of the three numbers equals 15, the user wins and the app displays a "You Win!" message.
If the sum is not 15, the user can buy another ticket.

**Keep Buying Tickets:**

The user can keep buying tickets until the sum of the numbers equals 15.

## ***Technologies Used***
ReactJS: JavaScript library for building user interfaces.
Vite: Fast build tool for React applications, providing instant feedback during development.
CSS: For styling the app and ensuring responsiveness.

## ***File Structure***
bash
Copy code
/lottery-ticket-app
|-- /public
|-- /src
|   |-- /components
|   |   |-- Ticket.js          # The main Ticket component
|   |   |-- Button.js          # The Button component for buying tickets
|   |-- App.js                 # The main React component that manages game logic
|   |-- main.js                # Vite's entry point for React
|   |-- App.css                # Global styles for the app
|-- package.json               # Project dependencies and scripts
|-- README.md                  # This file
|-- vite.config.js             # Vite configuration
Contributing
Feel free to fork this repository, open an issue, or submit a pull request if you'd like to contribute to the app. All contributions are welcome.

## ***Steps to Contribute:***
Fork the repository
Clone your forked repository
Create a new branch (git checkout -b feature-name)

## ***Make your changes***
Commit your changes (git commit -m 'Add some feature')
Push to your branch (git push origin feature-name)
Open a pull request to the main repository

## ***License***
This project is licensed under the MIT License - see the LICENSE file for details.
