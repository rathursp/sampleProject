import { useEffect } from "react";
import { db } from "../firebase";
import { doc, setDoc, updateDoc, increment } from "firebase/firestore";

const VISITOR_KEY = "isaara_firebase_visitor";

export const useGlobalVisitor = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      const existing = localStorage.getItem(VISITOR_KEY);
      if (existing) return;

      const ref = doc(db, "analytics", "visitors");

      try {
        await updateDoc(ref, {
          count: increment(1), // ✅ SAFE FIX
        });
      } catch (err) {
        // if doc doesn't exist
        await setDoc(ref, { count: 1 });
      }

      localStorage.setItem(VISITOR_KEY, "true");
    };

    trackVisitor();
  }, []);
};