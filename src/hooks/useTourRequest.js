import { get, getDatabase, orderByKey, query, ref } from "@firebase/database";
import { useEffect, useState } from "react";

export default function useTourRequest() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tourist, setTourist] = useState([]);

  useEffect(() => {
    async function fetchTouristRequest() {
      const db = getDatabase();
      const dbRef = ref(db, "touristRequest");
      const dbQuery = query(dbRef, orderByKey());

      try {
        setLoading(true);
        setError(false);
        const snapshot = await get(dbQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setTourist((prevItems) => {
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
    fetchTouristRequest();
  }, []);

  return {
    loading,
    error,
    tourist,
  };
}
