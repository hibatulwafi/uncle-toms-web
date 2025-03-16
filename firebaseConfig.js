// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAvQAPGB6-OdFj1NUYw9JPWtM65gONOvt0",
    authDomain: "uncletom-fb41a.firebaseapp.com",
    projectId: "uncletom-fb41a",
    storageBucket: "uncletom-fb41a.firebasestorage.app",
    messagingSenderId: "986103391792",
    appId: "1:986103391792:web:3fbaaecaeda1436c8b2ff5",
    measurementId: "G-D5LTDM3D1G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };