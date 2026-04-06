import { useEffect } from "react";
import { db } from "../firebase";
import { doc, updateDoc, increment, setDoc } from "firebase/firestore";

export const useTrackProductView = (productId?: string) => {
  useEffect(() => {
    if (!productId) return; // ✅ VERY IMPORTANT

    const track = async () => {
      const ref = doc(db, "products", productId);

      try {
        await updateDoc(ref, {
          views: increment(1),
        });
      } catch {
        await setDoc(ref, { views: 1 });
      }
    };

    track();
  }, [productId]);
};