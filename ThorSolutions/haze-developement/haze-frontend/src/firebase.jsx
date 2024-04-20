import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCEne7Pa33EEe4SQgiTRcXEdDVpje5li-s",
  authDomain: "haze-app-faf1a.firebaseapp.com",
  projectId: "haze-app-faf1a",
  storageBucket: "haze-app-faf1a.appspot.com",
  messagingSenderId: "612109557278",
  appId: "1:612109557278:web:c967443436cc874f87980f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();