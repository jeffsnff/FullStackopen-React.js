import Input from './Input.jsx';

const Search = ({ filteredName, setFilterName }) => {

  const searchHandleChange = (event) => {
    setFilterName(event.target.value.toLowerCase());
  }

  return(
    <Input inputValue={filteredName} onChange={searchHandleChange} inputType={'Search'} />
  );
}

export default Search;