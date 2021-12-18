import firebase from 'firebase/app';
import 'firebase/auth';

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const signInWithTwitter = () => {
  const provider = new firebase.auth.TwitterAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const signInWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const signOut = () => {
  firebase.auth().signOut();
};
