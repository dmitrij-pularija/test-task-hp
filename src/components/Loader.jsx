import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <PuffLoader
      color={"#36d7b7"}
      loading={true}
      cssOverride={{ display: "block", height: '80vh', margin: '0 auto' }}
      size={80}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;