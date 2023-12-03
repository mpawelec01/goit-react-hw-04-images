import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ data }) => {
  return (
    <ul className="ImageGallery">
      {data.map(item => (
        <ImageGalleryItem
          key={item.id}
          smallFormat={item.webformatURL}
          largeFormat={item.largeImageURL}
          alt={item.tags}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
