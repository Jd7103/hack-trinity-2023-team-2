import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Exams from "./components/Exams";
import About from "./components/about";
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
    console.log("fetching atm")
    try {
      const response = await fetch(`https://b054-134-226-214-216.ngrok.io/getExams?code=${code}&name=${name}&user=doylej46&pass=Jd7!2003`, {mode: 'no-cors'}).then((res) => console.log(res));
      // console.log(response)
      if (response.ok) {
        console.log("hello world")
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
      <About />
    </div>
  );
}

export default App;
