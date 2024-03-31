import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTLlCvx6eLkt54FHZYjmMdsJKuzxc0WHU",
    authDomain: "crwn-clothing-db-399cd.firebaseapp.com",
    projectId: "crwn-clothing-db-399cd",
    storageBucket: "crwn-clothing-db-399cd.appspot.com",
    messagingSenderId: "611621558837",
    appId: "1:611621558837:web:4444ac7dd9ddfc04a56f7c"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);