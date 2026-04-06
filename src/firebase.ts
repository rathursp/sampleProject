// Firebase core
import { initializeApp } from "firebase/app";

// Firestore (IMPORTANT for your analytics)
import { getFirestore } from "firebase/firestore";

// Optional: Analytics (only works in browser + production)
import { getAnalytics, isSupported } from "firebase/analytics";

// Your config
const firebaseConfig = {
  apiKey: "AIzaSyB1YlxpTAMuG-iYCIKVLUBsXy6UXLkEyNc",
  authDomain: "my-isaara-analytics.firebaseapp.com",
  projectId: "my-isaara-analytics",
  storageBucket: "my-isaara-analytics.firebasestorage.app",
  messagingSenderId: "198345330845",
  appId: "1:198345330845:web:ee5b7216505989e9940474",
  measurementId: "G-L90LFL4J1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Firestore (THIS is what you're using)
export const db = getFirestore(app);

// ✅ Analytics (safe init)
let analytics: any = null;

if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

export { analytics };