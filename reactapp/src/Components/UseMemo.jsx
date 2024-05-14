import { useMemo, useState } from "react";

export default function UseMemo() {
  const [count, setcount] = useState(0);
  const [inputNumber, setInputNumber] = useState(0);
  const factorial = useMemo(() => CalcFactorial(inputNumber), [inputNumber]);
  console.log("inputNumber ", inputNumber);
  return (
    <>
      <h1>Hello CodeSandbox Count is {count}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        type="number"
        placeholder="Enter a number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
      />
      <h2>Factorial is {factorial}</h2>
      <button onClick={() => setcount((c) => c + 1)}>Increment Count</button>
    </>
  );
}

const CalcFactorial = (number) => {
  console.log("calling");
  return number === 0 ? 1 : number * CalcFactorial(number - 1);
};
