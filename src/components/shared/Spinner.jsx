import spinner from "../assets/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="loading ..."
      style={{
        width: "100px",
        margin: "8rem auto",
        display: "block",
      }}
    />
  );
};

export default Spinner;
