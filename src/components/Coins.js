import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Coins() {
  const { data } = useSWR(
    "https://api2.binance.com/api/v3/ticker/24hr",
    fetcher,
    { suspense: true }
  );

  console.log(data);

  return (
    <div>
      {data?.map((e) => (
        <div key={e.symbol}>{e.symbol}</div>
      ))}
    </div>
  );
}

export default Coins;
