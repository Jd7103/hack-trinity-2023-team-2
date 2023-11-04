import React, { useRef } from 'react';

function Exams(props) {
  const pastExamList = useRef();
  const exams = [{
      module: "CSU11011",
      title: "CS2",
      year: "2021"
    },
    {
      title: "CS3",
      year: "2022"
    },
    {
      title: "CS4",
      year: "2023"
    }
  ]
  return (
    <div className="h-[30vh]">
      <h2>Display of All Your Exams</h2>
      <div className="list-wrap">
        <h2>Exams for {exams[0].module}</h2>
        <ul id="list" className="past-exam-list m-5" ref={pastExamList}>
          {exams.map((exam) => (
            <li className="past-exam-item"><a href="">{exam.year} - {exam.title}</a></li>
          ))}
        </ul>
      </div>
    </div>

  )
}


export default Exams;