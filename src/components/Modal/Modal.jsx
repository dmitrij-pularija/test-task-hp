import PropTypes from 'prop-types';
import { ReactComponent as IconClose } from '../assets/img/x.svg';
import css from './Modal.module.css';

const Modal = ({ children, closeModal }) => {


  return (
    <div className={css.overlay} onClick={() => closeModal()}>
      <div className={css.wrapper}>
        {children}
        <button className={css.close} onClick={() => closeModal()} title="Сlick to close">
          <IconClose width={22} height={22} fill={"#A2A2A2"}/>
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func,
};

export default Modal;