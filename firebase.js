// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyASoYb5QjR7jKHzYDSk-vijcxT92pIir3M",
  authDomain: "ds-ai-portfolio-9eabc.firebaseapp.com",
  projectId: "ds-ai-portfolio-9eabc",
  storageBucket: "ds-ai-portfolio-9eabc.firebasestorage.app",
  messagingSenderId: "809742635913",
  appId: "1:809742635913:web:978fa28fc54ba92d03c758",
  measurementId: "G-J082PBC581"
};

// Firebase Initialize
const app = initializeApp(firebaseConfig);

// Firestore
const db = getFirestore(app);

console.log("✅ Firebase Connected Successfully");

async function testFirestore() {
  try {
    await addDoc(collection(db, "test"), {
      message: "Hello Firebase!",
      createdAt: new Date()
    });

    console.log("✅ Firestore Working");
  } catch (error) {
    console.error("❌ Firestore Error:", error);
  }
}

testFirestore();
// Aage chat.js ke liye export
export { db };

