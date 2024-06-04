import { useState } from "react";
import Grandparent from "./components/Grandparent";

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

// import React from 'react';
// import Grandparent from './Grandparent';
// import { DataProvider } from './context/DataContext';

// const App = () => {
//   return (
//     <DataProvider>
//       <div>
//         <h1>Context API Example</h1>
//         <Grandparent />
//       </div>
//     </DataProvider>
//   );
// };

// export default App;
