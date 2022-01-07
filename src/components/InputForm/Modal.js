import "./Modal.scss";

const Modal = (props) => {
  const toggle = (event) => props.onClick();

  return (
    <div className='backdrop'>
      <div className='modalContent'>
        <button className='close' onClick={toggle}>
          ✖
        </button>
        <p>Please make sure that all fields are filled in. Thank you!</p>
        <button className='accept' onClick={toggle}>
          That's fine!
        </button>
      </div>
    </div>
  );
};

export default Modal;
