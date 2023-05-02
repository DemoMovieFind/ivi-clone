import { CSSProperties } from "react";
import { BeatLoader } from "react-spinners";
import styles from './Loader.module.css';

const Loader = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    position: "fixed",
    top:"50%",
    left:"50%",
  };
  return (
    <div className={styles.loader}>
      <BeatLoader 
      color="#36d7b7" 
      size={25}
      loading={true}
      aria-label="Loading Spinner"
      data-testid="loader"
      cssOverride={override}
      />
    </div>
  )
}

export default Loader;