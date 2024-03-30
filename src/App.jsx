import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'
import Loader from './components/Loader/Loader'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from './components/ImageModal/ImageModal'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  // const [inputValue, setInput] = useState('')
  const [articles, setArticles] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)




  
  useEffect(() => {
    // if (inputValue.length === 0) return;

    async function fetchProductsByQuery() {
      try {
        setIsLoading(true);
      const data = await axios.get('https://api.unsplash.com/photos?client_id=YthA28ivciqW6bJBl8Sgjx1VPtT-tIKW3K0Fl-khB4Q');
      console.log('data: ', data);
      setArticles(data.data);
      console.log('data.data: ', data.data);
      } catch (error) {
         setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProductsByQuery();
  }, []);
 

  return (
    <>
    <SearchBar onSubmit={handleSubmit} />
    {isLoading && <Loader />}
    <ImageGallery articles ={articles}/>
    {isError && <ErrorMessage />}
    <LoadMoreBtn />
    <ImageModal />

    </>
  )
}

export default App
