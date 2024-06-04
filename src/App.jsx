import { useState } from "react";
import Grandparent from "./Grandparent";

const App = () => {
  const [data, setData] = useState("Hello from App");

  return (
    <div>
      <h1>Props Drilling Example</h1>
      <Grandparent data={data} />
    </div>
  );
};

export default App;
