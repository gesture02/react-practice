import { useParams } from "react-router-dom";

function Coin() {
  const { coinId } = useParams();
  return <h1>Coin: {coinId}</h1>;
}
export default Coin;
//react-router-dom v6 이상인 경우, useParams() 만 쓰더라도 타입이 string | undefined 일 거라고 알아서 예상해준다
