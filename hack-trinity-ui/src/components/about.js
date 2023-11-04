import knowledge from "../media/knowledge.svg";

function about() {
    return (
        <div className="bg-secondary about-section flex justify-between">
            <img src={knowledge} className="knowledge relative"></img>
            <span className="bg-white white-bar relative rounded-lg"></span>
            <div className="border border-black border-solid about-text relative right-8">
                <h2 className="text-white text-center pt-5"> What is Trinity Exam Search? </h2>
                <span className="bg-white title-bar relative rounded-lg">?</span>
            </div>
        </div>
  
    )
  }


export default about;