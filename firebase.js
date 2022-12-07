
import { initializeApp } from 'https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js'
import { getAuth } from 'https://www.gstatic.com/firebasejs/8.6.1/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/8.6.1/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyC6I-vpDQ-3vqnQftQ4EX-4jpgXoR0kdwA",
    authDomain: "keep-clone-717e5.firebaseapp.com",
    projectId: "keep-clone-717e5",
    storageBucket: "keep-clone-717e5.appspot.com",
    messagingSenderId: "670990834637",
    appId: "1:670990834637:web:c3f2ccc339f30bd38b8284"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db};