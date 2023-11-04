import { useState, useRef, useEffect } from "react";
const modules = [
  { code: "CSU11001", name: "Introduction to Programming" },
  { code: "CSU11002", name: "Introduction to Computer Systems" },
  { code: "CSU11003", name: "Introduction to Software Engineering" },
  { code: "CSU11004", name: "Introduction to Web Development" },
];

const years = ["All Years", "2019", "2020", "2021"];

function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModuleOption, setSelectedModuleOption] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const moduleInputRef = useRef(null);
  const yearInputRef = useRef(null);

  const handleSelectModule = (module) => {
    setSelectedModuleOption(module);
    setShowDropdown(false);
  };

  useEffect(() => {
    if (selectedModuleOption === null) return;
    moduleInputRef.current.value = selectedModuleOption.code + '-' + selectedModuleOption.name;
  }, [selectedModuleOption]);

  return (
    <div className="flex justify-center items-center p-6">
      <div className="w-[50vw]">
        <h3 className="text-center p-2">Search for an exam:</h3>
        <div className="flex flex-row justify-between">
          <div className="w-[60%]">
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
                      className="p-2 border border-black"
                    >
                      {module.code}-{module.name}
                    </button>
                  ))}
              </div>
            ) : null}
          </div>
          <div className="mx-2">
            <select className="p-2" ref={yearInputRef}>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <button className="p-2 border border-black rounded-md" onClick={() => handleSearch(selectedModuleOption.code, selectedModuleOption.name, yearInputRef.current.value)}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;