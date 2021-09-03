// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDosSXHo9mtFms4-rrhC2yqE2jqvyZ4Wa8",
  authDomain: "therapy-journal-9edfb.firebaseapp.com",
  projectId: "therapy-journal-9edfb",
  storageBucket: "therapy-journal-9edfb.appspot.com",
  messagingSenderId: "574497016646",
  appId: "1:574497016646:web:641328cd63d372bd8b7347",
  measurementId: "G-5HLYY5WQ0M"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);


export default fire



// import './App.css'
// import NavBar from './NavBar'
// import Router from './Router'
// import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchEntries } from '../actions/entriesActions';
// import fire from './Fire'
// import Login from './Login'



// const App = () => {
//   const [user, setUser] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [hasAccount, setHasAccount] = useState('')

//   const clearInputs = () => {
//     setEmail('');
//     setPassword('')
//   }
  
//   const clearErrors   = () => {
//     setEmailError('');
//     setPasswordError('')
//   }

// const handleLogin = () => {
//   clearErrors();
//   fire
//   .auth()
//   .signInWithEmailAndPassword(email, password)
//   .catch(err => {
//     switch (err.code) {
//       case "auth/invalid-email":
//       case "auth/user-disabled":
//       case "auth/user-not-found":
//         setEmailError(err.message);
//         break;
//       case "auth/wrong-password":
//         setPasswordError(err.message);
//         break;
//     }
//   });
// }

// const handleSignUp = () => {
//   clearErrors();
//   fire 
//   .auth()
//   .createUserWithEmailAndPassword(email, password)
//   .catch(err => {
//     switch(err.code){
//       case "auth/email-already-in-use":
//       case "auth/invalid-email":
//         setEmailError(err.message);
//         break;
//       case "auth/weak-password":
//         setPasswordError(err.message);
//         break;
//     }
//   });
// }


// const handleLogOut = () => {
//   fire.auth().signOut()
// }

// const authListener = () => {
//   fire.auth().onAuthStateChanged(user => {
//     if(user){
//       clearInputs();
//       setUser(user);
//     }
//     else{
//         setUser('');
//       }
//     })
// }

// useEffect(() => {authListener()}, [])



//   const dispatch = useDispatch()
//   useEffect(() => { dispatch(fetchEntries()) })


 

//   return (
//     <div className="App">
//       <NavBar />
//       <Router />
//       <Login 
//       email={email} 
//       setEmail={setEmail} 
//       password={password} 
//       setPassword={setPassword} 
//       handleLogin={handleLogin}
//       handleSignUp={handleSignUp}
//       hasAccount={hasAccount}
//       setHasAccount={setHasAccount}
//       emailError={emailError}
//       passwordError={passwordError}
//       />
//     </div>
//   );
// }

// export default App;