
import { initializeApp } from 'firebase/app'
import {
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider, 
  UserCredential, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  User,

} 
  from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCo408M4GD9jSzWsjHofp_yZ__39aodnc0",
  authDomain: "crwn-clothing-db-20506.firebaseapp.com",
  projectId: "crwn-clothing-db-20506",
  storageBucket: "crwn-clothing-db-20506.appspot.com",
  messagingSenderId: "284963439426",
  appId: "1:284963439426:web:18d103f72f18dbfb62bedb",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db  = getFirestore()


export const createUserDocumentFromAuth = async (userAuth:UserCredential['user'], additionalInformation = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log(error)
      
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email:string, password: string) : Promise<UserCredential | undefined>   => {

  if(!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);

}
export const signAuthUserWithEmailAndPassword = async (email:string, password: string) : Promise<UserCredential | undefined>   => {

  if(!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);

}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangeListener = (
  callback: NextOrObserver<User>,
 
) => onAuthStateChanged(auth, callback);
