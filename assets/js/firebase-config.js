import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// TODO: Replace this with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

let app = null;
let db = null;

try {
  // Simple check to avoid initialization if config is clearly untouched
  if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
    // Initialize Firebase only if an app has not already been initialized
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
  } else {
    console.warn("Firebase config placeholders detected. Firestore will remain uninitialized.");
  }
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

export { app, db };
