import toast, { Toaster } from 'react-hot-toast';


const SearchBar = ({onSearch}) => {
 
    const handleSubmit=(e)=> {
        e.preventDefault();
        const searchForm = e.target.elements.searchForm.value;
        if(searchForm.trim() === '') {
          
          return toast.error('Please enter search term!')
        }
        onSearch(searchForm);
      }
  
  return (
    
    <header>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      name="searchForm"
     
    />
    <button type="submit">Search</button>
  </form>
  <Toaster  position="top-center"  reverseOrder={true} />
</header>



  )
}

export default SearchBar