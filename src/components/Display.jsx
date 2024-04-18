import { useSelector } from "react-redux";

export default function Display() {
  const counter = useSelector((store) => store.counter);
  return <p className="lead mb-4">Counter value: {counter}</p>;
}
