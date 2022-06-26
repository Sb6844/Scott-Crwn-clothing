// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth, signInWithRedirect} from "firebase/auth"

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzGHZtntwLBI1-5IGVo_3rVcTL8P0XTN0",
  authDomain: "crwn-clothing-db-7d57f.firebaseapp.com",
  projectId: "crwn-clothing-db-7d57f",
  storageBucket: "crwn-clothing-db-7d57f.appspot.com",
  messagingSenderId: "622678284402",
  appId: "1:622678284402:web:9a7d6497e553096589caeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    // how to check if the data inside of the document for this collection and segment matches
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const { displayName , email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
}