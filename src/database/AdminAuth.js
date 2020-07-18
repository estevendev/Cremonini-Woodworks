import database from './Database';

const auth = database.auth();

export default class AdminAuth {
  static signIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  }

  static signOut = () => {
    return auth.signOut();
  }

  static isSignedIn = () => {
    return auth.currentUser !== null;
  }
}