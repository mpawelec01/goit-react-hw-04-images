const Modal = ({ largeFormat, alt, closeModal }) => {
  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={largeFormat} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
