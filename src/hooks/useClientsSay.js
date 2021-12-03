import { get, getDatabase, orderByKey, query, ref } from "@firebase/database";
import { useEffect, useState } from "react";

export default function useClientsSay() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [clientsSay, setClientsSay] = useState([]);

  useEffect(() => {
    async function fetchClientsSay() {
      const db = getDatabase();
      const dbRef = ref(db, "testimonial");
      const dbQuery = query(dbRef, orderByKey());

      try {
        setLoading(true);
        setError(false);
        const snapshot = await get(dbQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setClientsSay((prevItems) => {
            return [...prevItems, ...Object.values(snapshot.val())];
          });
        } else {
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchClientsSay();
  }, []);

  return {
    loading,
    error,
    clientsSay,
  };
}
