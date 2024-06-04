import Parent from "./Parent";

const Grandparent = ({ data }) => {
  return (
    <div>
      <h2>Grandparent</h2>
      <Parent data={data} />
    </div>
  );
};

export default Grandparent;
