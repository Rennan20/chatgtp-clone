import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCz5mS05xhRiuHdi0qHdLLLPUrVPX6HOp8",
  authDomain: "chatgpt-clone-8be5d.firebaseapp.com",
  projectId: "chatgpt-clone-8be5d",
  storageBucket: "chatgpt-clone-8be5d.appspot.com",
  messagingSenderId: "833157493844",
  appId: "1:833157493844:web:3b42adbffadb4d883c69c1",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
