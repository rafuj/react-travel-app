import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";
export default function useDestination(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [dest, setDest] = useState([]);

  useEffect(() => {
    async function fetchDestination() {
      const db = getDatabase();
      const dbRef = ref(db, "destination");
      const dbQuery = query(
        dbRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(9)
      );

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
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchDestination();
  }, [page]);

  return {
    loading,
    error,
    dest,
    hasMore,
  };
}
