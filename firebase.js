import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDO1brYRsLjTVe9ZkDCulSxWqTOfvcedqA",
    authDomain: "task-7-1.firebaseapp.com",
    projectId: "task-7-1",
    storageBucket: "task-7-1.appspot.com",
    messagingSenderId: "436931474841",
    appId: "1:436931474841:web:9f969c75ff58403082cf08",
    measurementId: "G-0SMJJRSYDS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();



export const createUserDocFromAuth = async (userAuth, additional = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        ...additional
      })
    }
    catch (error) {
      alert('error in creating', error.message);
    }
  }
  return userDocRef;
}

export const logout =() =>{
return signOut(auth);

}
export const emailandpass = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password)
}

export const signemailandpass = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password)
}