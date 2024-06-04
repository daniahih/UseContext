import Child from "./Child";

const Parent = ({ data }) => {
  return (
    <div>
      <h3>Parent</h3>
      <Child data={data} />
    </div>
  );
};

export default Parent;
