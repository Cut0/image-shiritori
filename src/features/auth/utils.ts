import firebase from 'firebase/app';
import 'firebase/auth';

export const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return await firebase.auth().signInWithPopup(provider);
};

export const signInWithTwitter = async () => {
  const provider = new firebase.auth.TwitterAuthProvider();
  return await firebase.auth().signInWithPopup(provider);
};

export const signInWithFacebook = async () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return await firebase.auth().signInWithPopup(provider);
};

export const signOut = async () => {
  return await firebase.auth().signOut();
};
