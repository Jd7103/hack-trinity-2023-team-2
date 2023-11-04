import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Exams from "./components/Exams";

function App() {
  const handleSearch = (code, name, year) => {
    console.log(code);
    console.log(name);
    console.log(year);
  }
  return (
    <div>
      <Navbar />
      <SearchBar handleSearch={handleSearch} />
      <Exams />
    </div>
  );
}

export default App;
