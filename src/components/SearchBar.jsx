function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Film ara..."
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default SearchBar
