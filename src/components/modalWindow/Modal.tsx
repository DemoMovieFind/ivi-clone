
import { useIntl } from "react-intl";
import styles from  "./Modal..module.css";
import { RiCloseLine } from "react-icons/ri";
import { Button } from "../buttons/Button";

export type ModalPropsType = {
  handleClose:()=>void,
  headerId:string,
  body:string
}

const Modal = (props:ModalPropsType) => {
  const { handleClose,headerId,body } = props;
  const intl = useIntl();

  return (
    <>
      <div className={styles.darkBG} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{intl.formatMessage({id:headerId})}</h5>
          </div>
          <button className={styles.closeBtn} onPointerDown={handleClose}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            {body}
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <Button 
                appearance="primary" 
                children={intl.formatMessage({id:'modal_close'})}
                onPointerDown={handleClose}
                />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;