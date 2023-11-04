import { useState, useRef } from "react";

function SearchBar() {
  const options = ["option 1", "option 2", "option 3"]
  const searchInputRef = useRef(null);

  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    console.log(option);
    setSelectedOption(option);
    searchInputRef.current.value = selectedOption;
    setSearch("");
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search..."
        className="border p-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="absolute mt-1 bg-white border rounded shadow-lg">
          {filteredOptions.map((option) => (
            <div
              key={option}
              onClick={() => selectOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;