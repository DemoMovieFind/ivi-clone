import { CSSProperties } from "react";
import { BeatLoader } from "react-spinners";
import styles from './Loader.module.css';

export interface FilmLoaderType {
  override?: CSSProperties;
  filmLoader?: true | false;
}

const Loader = ({ override, filmLoader }: FilmLoaderType) => {
  override ?
    ''
    :
    override = {
      display: "flex",
      margin: "0 auto",
      borderColor: "red",
      justifyContent: 'center',
      top: "50%",
      left: "50%",
    }

  return (
    <div className={filmLoader ? '' : styles.loader}>
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