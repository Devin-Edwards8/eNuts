# eNuts
An online shop for delicious nuts.
![eNuts Homepage](./images/Screenshot%202023-09-24%20at%201.20.52%20PM.png)

## Overview
This is my first full-stack project, using MongoDB, React, Express and Node. I chose a mock eCommerce company selling one of my favorite foods: nuts.

### Known Bugs
- loading from url path results in 404
- mobile map loading can be very slow

### Shopping
The most critical feature, of course, is to be able to browse and purchase products. 
#### Features
- browse products in shop tab

#### Tech
- MongoDB Atlas used to store product info
- Express API provides endpoints for front-end
- React and CSS used to develop shopping UI

### Locations
The website also shows "locations" of our nut stores. 
#### Features
- view map display for each location
- easily browse multiple locations
#### Tech
- Google Maps Embed API used to generate location

## Future Development
As I work, I continue to find new and exciting features I want to add.

### Users
Objectives:
- save user information from session to session
- authenticate users with login functionality

Learning Outcomes:
- experiment with Auth0
- add more backend business logic

### Payment Handling
Objective:
- allow users to pay after checkout (without actually paying)

Learning Outcome:
- experiment with payment handling technology
