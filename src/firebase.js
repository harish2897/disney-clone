import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDtdEQQf4UgdWkDsuZtrBqcLwimHnFiJjI",
    authDomain: "disneyplus-clone-dca83.firebaseapp.com",
    projectId: "disneyplus-clone-dca83",
    storageBucket: "disneyplus-clone-dca83.appspot.com",
    messagingSenderId: "624151123742",
    appId: "1:624151123742:web:e1d9eac56efa0353831b0f"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const  provider = new GoogleAuthProvider(firebaseApp);
  const storage = getStorage(firebaseApp);

  export {auth,provider,storage};

  export default db;