# React FullStack Streaming App(fully responsive)
## Preview
<img src="client\src\assets\preview.jpg" alt="MarineGEO circle logo" style="height: 50%; width:100%;"/>

[Click here to visit](https://all-anime-ui.netlify.app/)
## Features that are included
* Fetch Latest Anime from API server
* Fetch my own api 
* Watch any anime availabe in database
* Have a info page for each entry
* Profile page has included 
* Users can update their profile picture 
* Ability to Register and Login to your account with full password safety and varification 
#### FUTURE IMPLEMENTAIONS NOTES
* Search funtionality 
* Faster data fethching 
* Quick updation
* Better error handleling 
## Front End Packages
### Framework :
* React 18
### For styling purpose :
* Material icons (version - ^5.11 ) 
* scss
* Font choice - ROBOTO Google font
### For Data fething :
* Axios 
### Database :
* MongoDB for storing basic schema of data
* Firebase for storing files (i.e - images, video)
### Routing:
* React Router Dom 
**** 
## Back End Packages
* cors for cross origin access
* crypto-js for password protection
* dotenv for dev environment
* JWT for access token 
* monog db as a database 
* netlify lamba for production environment 
* webpack as a js transpiler 
* nodemon for constent running of file (-watch)  
## Admin 
* Material UI 
* React JS
## Accounts
* you need Firebase already setup
* you also need a mongo DB cluster ready to go
***
## How to install all packages 
Go to respective folders `\client` then `\server` and finally `\admin` folder open terminal and run `npm install` for each of them.
***
## How to run 
For running the application you need `.env` file. create this file in each of the folder.
### Admin .env file
```code
REACT_APP_API = use API from server
REACT_APP_API_KEY = create firebse for getting these
REACT_APP_AUTH_DOMAIN = create firebse for getting these
REACT_APP_PROJECT_ID = create firebse for getting these
REACT_APP_STORAGE_BUCKET = create firebse for getting these
REACT_APP_MESSAGE_SEND_ID = create firebse for getting these
REACT_APP_API_ID = create firebse for getting these
REACT_APP_MESSUREMENT_ID = create firebse for getting these
```
### Client .env 
```
VITE_SECRET_NAME = https://api.jikan.moe/v4/seasons/upcoming?page=1
VITE_API = Your server api
VITE_API_KEY = Get these from your Firebase account
VITE_AUTH_DOMAIN = Get these from your Firebase account
VITE_PROJECT_ID = Get these from your Firebase account
VITE_STORAGE_BUCKET = Get these from your Firebase account
VITE_MESSAGE_SEND_ID = Get these from your Firebase account
VITE_API_ID = Get these from your Firebase account
VITE_MESSUREMENT_ID = Get these from your Firebase account
```

### Server .env
```
MONGO_URL = create your mongo DB account and paste your URL
PORT = 8800
SECRET_KEY = you can provide your own
```

## Next step
After all of this ready to go now you can go to your server file to run your api 
`npm start` this will run your api. you should get message regarding that also
for running the ui run `npm run dev` or `npm run dev -- --host` for both desktop and mobile view port 

## Admin page is just for users who are admin
in my page you can visit it using your accout created in ui but you can not see any user info or anime data 

<img src="client\src\assets\admin.jpg" alt="MarineGEO circle logo" style="height: 50%; width:100%;"/>

[Click here to go to Admin page](https://all-anime-admin.netlify.app/)