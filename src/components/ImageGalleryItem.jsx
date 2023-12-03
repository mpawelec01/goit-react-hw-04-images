import { useState, useEffect } from 'react';
import Modal from './Modal';

const ImageGalleryItem = ({ smallFormat, largeFormat, alt }) => {
  const [isClicked, setIsClicked] = useState(false);

  const openModal = () => {
    setIsClicked(!isClicked);
  };

  const closeModal = e => {
    if (e.target.className === 'Overlay') {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        setIsClicked(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.addEventListener('keydown', close);
  });

  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        onClick={openModal}
        src={smallFormat}
        alt={alt}
      />
      {isClicked && (
        <Modal largeFormat={largeFormat} alt={alt} closeModal={closeModal} />
      )}
    </li>
  );
};
export default ImageGalleryItem;
