import React, { useRef } from 'react';

function Exams(props) {
  const pastExamList = useRef();
  // const pastExamList2 = document.getElementById('list');
  const exams = [
  {
    module: "CSU11001",
    title: "CS1",
    year: "2020",
    link: "https://www.tcd.ie/academicregistry/exams/assets/local/past%20papers201920/CSU/CSU11001-1.PDF"
  },
  {
    title: "CS2",
    year: "2021",
    link: "https://www.tcd.ie/academicregistry/exams/assets/local/past-papers%20202021/MAU/MAU11601-1.pdf"
  },
  {
    title: "CS3",
    year: "2022",
    link: "https://www.tcd.ie/academicregistry/exams/assets/local/past-papers202223/CSU/CSU11001-2.pdf"
  },

]
  exams.forEach(function(exam, index) {
    console.log(`Year: ${exam.year}`);
  });

  const toggleButton = () => {
      pastExamList.current.classList.toggle('hidden');
      // pastExamList2.classList.toggle('hidden');
  }

  return (
    <div className="h-[30vh]">
      <h2>Display of All Your Exams</h2>
      <div className="list-wrap">
        <h2>Exams for {exams[0].module}</h2>
        <ul id="list" className="past-exam-list m-5" ref={pastExamList}>
          {exams.map((exam) => (
            <li className="past-exam-item"><a href={exam.link}>{exam.year}</a></li>
          ))}
        </ul>
      </div>
    </div>

  )
}


export default Exams;