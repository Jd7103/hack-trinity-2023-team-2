import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Exams from "./components/Exams";

function App() {
  const handleSearch = (code, name, year) => {
    console.log(code);
    console.log(name);
    console.log(year);
  }
  const code = "CSU11001";
  const name = "MATHEMATICS I";
  const exams = [
    { 2022: "https://www.scss.tcd.ie/undergraduate/modules/past-papers/CSU11001.pdf"}, 
    { 2021: "https://www.scss.tcd.ie/undergraduate/modules/past-papers/CSU11001.pdf" },
    { 2020: "https://www.scss.tcd.ie/undergraduate/modules/past-papers/CSU11001.pdf" },
  ]
  return (
    <div>
      <Navbar />
      <SearchBar handleSearch={handleSearch} />
      <Exams code={code} name={name} exams={exams} />
    </div>
  );
}

export default App;
