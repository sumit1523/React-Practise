import "./App.css";
import Card from "./components/Card";

const App = () => {
  // console.log(props, "props-App");
  let obj = {
    name: "sumit",
    age: 23,
  };
  let arr = [1, 3, 4];
  return (
    <>
      <Card username="sumit" btnText={"click me"} obj={obj} newArr={arr} />
      <Card username="kumar" />
      <Card username="sam" />
    </>
  );
};

export default App;
