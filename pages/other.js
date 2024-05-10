import useSWR from "swr";

export default function Other() {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/bad-jokes/1`
  );

  if (isLoading) {
    return <>Loading</>;
  }
  return <>{data.joke}</>;
}
