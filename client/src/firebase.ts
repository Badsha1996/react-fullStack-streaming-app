import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";



// PRIVATE API INTEGRATION KEY
const firebaseConfig = {
    apiKey: "AIzaSyBRMY896azIuAkuvq6F_V8B_VRV4o2aGok",
    authDomain: "allanime-47582.firebaseapp.com",
    projectId: "allanime-47582",
    storageBucket: "allanime-47582.appspot.com",
    messagingSenderId: "827492419774",
    appId: "1:827492419774:web:dce16aaae9f6a3f4f2f6ef",
    measurementId: "G-PJL6KJHNDS"
  };




const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage