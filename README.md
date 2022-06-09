# DoggyMatch Backend
> This repository contain the Api used for DoggyMatch-App developed by Chas Academy students in Stockholm.

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->

## General Information
- The purpose of this repository is to provide an Api to interact with the frontend part of DoggyMatch-App. https://github.com/cimp08/team-2-frontend/

## Technologies Used
- Node.js - version 16.15.1
- Express - version 4.18.1
- MongoDB - version 5.0
- Mongoose - version 6.3.2

## Features
- Auth system
- Match with other users
- Chat with the users matched

## Setup
1. Intall node.js in your computer. https://nodejs.org/en/

2. Install all the dependencies.

```
npm install
```

3. Create the .env file with the following environment variables:
- MONGO_URI = The mongoDB database
- TOKEN_KEY = The key to encode the token
- REQUEST_URL = The frontend URL

4. Start the server. 

```
npm start
```

5. The server runs locally at: http://localhost:5000/

## Project Status
Project is: _in progress_.

## Room for Improvement

Room for improvement:
- More advanced auth system with features like: "confirmation email" after signup or "forgot password" and "reset password" via sending an email.
- Add geolocalization system where the user can choose to filter the other user's dogs by distance(km) or by the city.
- Upload your dog picture.

## Acknowledgements
- This project was inspired by Tinder

## Contact
Created by:
[@RicardoCastelbon](https://github.com/RicardoCastelbon) 
[@CemilUlay](https://github.com/cimp08)
[@SaraAbouDabous](https://github.com/sarz2)
[@HeidiDragomir](https://github.com/HeidiDragomir)

## License

Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License.

Feel free to contact us!

