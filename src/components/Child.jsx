const Child = ({ data }) => {
  return (
    <div>
      <h4>Child</h4>
      <p>{data}</p>
    </div>
  );
};

export default Child;

// import React, { useContext } from 'react';
// import { DataContext } from './context/DataContext';

// const Child = () => {
//   const data = useContext(DataContext);

//   return (
//     <div>
//       <h4>Child</h4>
//       <p>{data}</p>
//     </div>
//   );
// };

// export default Child;
