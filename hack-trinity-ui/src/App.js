import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Exams from "./components/Exams";
import About from "./components/about";
import Map from "./components/Map"; // ignore this error
import Footer from "./components/Footer"; // ignore this error

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
      <About />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
