import { useEffect, useState } from "react";

const UseEffectTest = () => {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("UseEffect1 Ran");
  }, []);

  useEffect(() => {
    console.log("UseEffect2 Ran");
    if (toggleTwo)
      console.log("toggleTwo slice of state is true so this code runs");
  }, [toggleTwo]);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCount((prevCount) => {
        console.log(
          `UseEffect3 with interval number ${prevCount + 1} is running`
        );
        return prevCount + 1;
      });
    }, 1000);

    return () => {
      console.log(`UseEffect3 cleanup ran.\nsetInterval is being cleared out`);
      clearInterval(myInterval);
    };
  }, []);

  return (
    <div>
      {console.log("rendered or re-rendered")}
      <h1>UseEffectTest Component</h1>
      <button onClick={() => setToggleOne(!toggleOne)}>ToggleOne</button>
      <button onClick={() => setToggleTwo(!toggleTwo)}>toggleTwo</button>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default UseEffectTest;
