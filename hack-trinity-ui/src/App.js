import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Exams from "./components/Exams";
import { useState } from "react";

function App() {

  const [code, setCode] = useState("CSU11001");
  const [name, setName] = useState("MATHEMATICS I");
  const [exams, setExams] = useState([
    { 2022: "https://www.scss.tcd.ie/undergraduate/modules/past-papers/CSU11001.pdf" },
    { 2021: "https://www.scss.tcd.ie/undergraduate/modules/past-papers/CSU11001.pdf" },
    { 2020: "https://www.scss.tcd.ie/undergraduate/modules/past-papers/CSU11001.pdf" },
  ]);

  const handleSearch = async (code, name) => {
    setCode(code);
    setName(name);
    try {
      const response = await fetch(`localhost:4567/getExams?code=${code}?name=${name}`);
      if (response.ok) {
        const responseData = await response.json();
        // manipulate here
        setExams(responseData);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <SearchBar handleSearch={handleSearch} />
      <Exams code={code} name={name} exams={exams} />
    </div>
  );
}

export default App;
