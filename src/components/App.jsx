import Searchbar from './Searchbar';
import './styles.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery';
import Button from './Button';
import { Circles } from 'react-loader-spinner';

export const App = () => {
  const [apiParams, setAPIParams] = useState({
    page: 1,
    perPage: 12,
    q: '',
    key: '33466637-d94c21d9f8bc92b1e95bebd3f',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [data, setData] = useState([]);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setAPIParams({ ...apiParams, page: 1 });
    setData([]);
    const searchTerm = e.target.firstElementChild.value;
    setAPIParams({ ...apiParams, q: searchTerm });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiParams.q, apiParams.page]);

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const result = await axios(
        `https://pixabay.com/api/?q=${apiParams.q}&page=${apiParams.page}&key=${apiParams.key}&image_type=photo&orientation=horizontal&per_page=12`
      );
      if (result.data.hits.length === 0) {
        setIsButtonVisible(false);
        alert(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        if (apiParams.q !== '') {
          const newResult = [...data, ...result.data.hits];
          setData(newResult);
          setIsButtonVisible(true);
          if (result.data.totalHits <= apiParams.page * 12) {
            setIsButtonVisible(false);
            alert("We're sorry, but you've reached the end of search results.");
          } else {
            setIsButtonVisible(true);
          }
        }
      }
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  const handleLoadMore = () => {
    setAPIParams({ ...apiParams, page: apiParams.page + 1 });
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      {isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass="loader"
          visible={true}
        />
      ) : (
        <div>
          <ImageGallery data={data} />
          {isButtonVisible && <Button handleLoadMore={handleLoadMore} />}
        </div>
      )}
    </div>
  );
};
