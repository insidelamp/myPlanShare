import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [triger, setTriger] = useState(0);

  const refetch = () => {
    setData([...data]);
    setTriger(Date.now());
  };

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          //서버의 응답상태가 false일 경우
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [triger]);

  return [data, isPending, error, refetch];
};

export default useFetch;
