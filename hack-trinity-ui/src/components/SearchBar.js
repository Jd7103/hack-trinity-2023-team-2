import { useState, useRef, useEffect } from "react";

const modules = [
  { code: "CSU11001", name: "MATHEMATICS I" },
  { code: "CSU11021", name: "Introduction to Computing I" },
  { code: "CSU11031", name: "Electronics and Information Technology" },
  { code: "CSU22011", name: "Algorithms and Data Structures I" },
];

// const years = ["All Years", "2019", "2020", "2021"];

function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModuleOption, setSelectedModuleOption] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const moduleInputRef = useRef(null);
  // const yearInputRef = useRef(null);

  const handleSelectModule = (module) => {
    setSelectedModuleOption(module);
    setShowDropdown(false);
  };

  const handleSearchCheck = () => {
    if (selectedModuleOption === null) return;
    handleSearch(selectedModuleOption.code, selectedModuleOption.name);
  };

  useEffect(() => {
    if (selectedModuleOption === null) return;
    moduleInputRef.current.value = selectedModuleOption.code + '-' + selectedModuleOption.name;
  }, [selectedModuleOption]);

  return (

    <div className="flex justify-center items-center p-6">
      <span className="bg-secondary design-bar1 absolute"></span>
      <span className="bg-secondary design-bar2 absolute"></span>
      <span className="bg-secondary design-bar3 absolute"></span>
      <span className="bg-secondary design-bar4 absolute"></span>
      <div className="w-[40vw]">
        <h3 className="text-center p-2" style={{marginBottom: '25px'}}>Search for an exam:</h3>
        <div className="flex flex-row justify-between">
          <div className="w-[70%]">

            <input
              ref={moduleInputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setShowDropdown(true)}
              placeholder="Search Module Name or Code..."
              className="w-full p-2 border border-black rounded-md"
            />
            {showDropdown ? (
              <div className="flex flex-col">
                {modules
                  .filter((module) => {
                    const moduleNameCode = module.code + ' ' + module.name;
                    return moduleNameCode.toLowerCase().includes(searchTerm.toLowerCase())
                  })
                  .map((module) => (
                    <button
                      key={module.code}
                      onClick={() => handleSelectModule(module)}
                      className="p-2 border border-black hover:text-primary hover:underline"
                    >
                      {module.code}-{module.name}
                    </button>
                  ))}
              </div>
            ) : null}
          </div>
          {/* <div className="mx-2">
            <select className="p-2" ref={yearInputRef}>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div> */}
          <div className="mx-2 w-[30%]">
            <button className="p-2 border border-black rounded-md hover:bg-primary hover:text-white" onClick={handleSearchCheck}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;