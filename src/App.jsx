import { useEffect, useState } from 'react'
import './App.css'
import Loader from './components/Loader/Loader'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from './components/ImageModal/ImageModal'
import SearchBar from './components/SearchBar/SearchBar'
import { fetchProductsByQuery } from './services/Articles-API/articles-api';

function App() {

  const [images, setImages] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [maxPage, setMaxPage] = useState(null)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalImage, setModalImage] = useState({});


const handleSearch= async (topic, currentPage)=>{

    try {
      setIsLoading(true);
      const data = await fetchProductsByQuery(topic, currentPage);
      setImages((prevImages) => {
        if (prevImages) {
          return [...prevImages, ...data.results];
        } else {
          return [...data.results];
        }
        
      });
      setMaxPage(data.total_pages);
      setCurrentPage(currentPage);
    } catch (error) {
       setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }
const handleLoadMore = () => {
  const nextPage = currentPage + 1;
  handleSearch(topic, nextPage)
};


function openModal(id) {
  setIsOpen(true);
  const image = images.find((img) => img.id === id); 
  setModalImage(image);
}
function closeModal() {
  setIsOpen(false);
}

  return (
    <>
    <SearchBar onSearch={handleSearch} />
    {isLoading && <Loader />}
    <ImageGallery image = {images}/>
    {isError && <ErrorMessage />}
    {(currentPage > 1 && currentPage < maxPage) && <LoadMoreBtn onLoadMore={handleLoadMore}/>}
    {(modalIsOpen)&&<ImageModal openModal={openModal} closeModal={closeModal} modalImage={modalImage}/>}

    </>
  )
}

export default App
