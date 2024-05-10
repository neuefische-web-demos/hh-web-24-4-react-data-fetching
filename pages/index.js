import useSWR from "swr";
import { useState } from "react";

export default function HomePage() {
  const [jokeId, setJokeId] = useState(0);
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/bad-jokes/${jokeId}`
  );

  console.log(data);

  if (error) {
    return <>Error Mensch!</>;
  }
  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <h1>{data.joke}</h1>
      <h2>id: {data.id}</h2>
      <button onClick={() => setJokeId(data.prevId)}>prev Joke</button>
      <button onClick={() => setJokeId(data.nextId)}>next Joke</button>
    </>
  );
}
