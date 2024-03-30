
const SearchBar = ({onSubmit}) => {
 
    const handleSubmit=(e)=> {
        e.preventDefault();
        const searchForm = e.target.elements.searchForm.value;
        setInput(searchForm);
      }
  
  return (
    
    <header>
  <form onSubmit={onSubmit}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      name="searchForm"
     
    />
    <button type="submit">Search</button>
  </form>
</header>



  )
}

export default SearchBar