import ImageIcon from "@ui/Image";

const Search = ({ onSearchInput }) => {
  return (
    <div className="searchForm">
      <input
        className="searchTab"
        placeholder="search post"
        name="searchTab"
        onChange={(e) => onSearchInput(e.target.value)}
      />
      <div className="searchIcon">
        <ImageIcon
          imgUrl="/assets/icons/search.svg"
          altName="search icon"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default Search;
