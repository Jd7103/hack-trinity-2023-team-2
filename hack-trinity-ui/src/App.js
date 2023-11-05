import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Exams from "./components/Exams";
import About from "./components/about";
import { useState } from "react";

function App() {

  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [exams, setExams] = useState([
    { 2022: "https://www.tcd.ie/academicregistry/exams/assets/local/past-papers202223/CSU/CSU11022-2.pdf" },
    { 2021: "https://www.tcd.ie/academicregistry/exams/assets/local/past-papers%20202122/SEM%201%20DREAMWEAVER%20UPLOADER%20PDF/CSU/CSU11021-1.pdf" },
    { 2020: "https://www.tcd.ie/academicregistry/exams/assets/local/past-papers%20202021/CSU/CSU11021-1.pdf" },
    { 2019: "https://www.tcd.ie/academicregistry/exams/assets/local/past%20papers201920/CSU/CSU11021-1.PDF" },
    { 2018: "https://www.tcd.ie/academicregistry/exams/assets/local/past-papers2019/Semester%201%20Papers/CS/CS1021-1.PDF"}
  ]);

  const handleSearch = async (code, name) => {
    setCode(code);
    setName(name);
    console.log("fetching atm")
    try {
      const response = await fetch(`https://localhost:4567/getExams?code=${code}&name=${name}&user=doyle46&pass=Jd7!2003`);
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
      <About />
    </div>
  );
}

export default App;
