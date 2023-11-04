import bookstairs from "../media/bookstairs.svg";
import notebook from "../media/notebook.svg";
import studying from "../media/studying.svg";

function Exams({ code, name, exams }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3>Exams for {code}-{name}</h3>
      <ul className="">
        {exams.map((exam, index) => (
          <li key={index} className="border border-black p-3 my-2 rounded-md hover:bg-primary hover:text-white hover:shadow-md">
            <a className="hover:underline" href={exam[Object.keys(exams[index])[0]]}>{Object.keys(exams[index])[0]} {code} {name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default Exams;