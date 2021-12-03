import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";
export default function useCounter() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [counter, setCounter] = useState([]);

  useEffect(() => {
    async function fetchCounter() {
      const db = getDatabase();
      const dbRef = ref(db, "counter");
      const dbQuery = query(dbRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(dbQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setCounter((prevDest) => {
            return [...prevDest, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchCounter();
  }, []);

  return {
    loading,
    error,
    counter,
  };
}
