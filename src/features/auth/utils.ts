import firebase from 'firebase/app';
import 'firebase/auth';

export const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  await firebase.auth().signInWithPopup(provider);
};

export const signInWithTwitter = async () => {
  const provider = new firebase.auth.TwitterAuthProvider();
  await firebase.auth().signInWithPopup(provider);
};

export const signInWithFacebook = async () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  await firebase.auth().signInWithPopup(provider);
};

export const signOut = () => {
  firebase.auth().signOut();
};
