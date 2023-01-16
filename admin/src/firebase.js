import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// PRIVATE API INTEGRATION KEY
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: "allanime-47582.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGE_SEND_ID,
    appId: process.env.REACT_APP_API_ID,
    measurementId: process.env.REACT_APP_MESSUREMENT_ID
  };


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage