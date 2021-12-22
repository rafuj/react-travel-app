import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";
export default function useTourRequestDestination() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [dest, setDest] = useState([]);

  useEffect(() => {
    async function fetchDestination() {
      const db = getDatabase();
      const dbRef = ref(db, "destination");
      const dbQuery = query(dbRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(dbQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setDest((prevDest) => {
            return [...prevDest, ...Object.values(snapshot.val())];
          });
        } else {
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchDestination();
  }, []);

  return {
    loading,
    error,
    dest,
  };
}
