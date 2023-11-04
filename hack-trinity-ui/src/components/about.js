import knowledge from "../media/knowledge.svg";

function about() {
    return (
        <div className="bg-secondary about-section flex justify-between">
            <img src={knowledge} className="knowledge relative"></img>
            <span className="bg-white white-bar relative rounded-lg"></span>
            <div className="border-2 border-white border-solid about-text-box relative right-8">
                <h2 className="text-white text-center pt-5"> What is Trinity Exam Search? </h2>
                <span className="bg-white title-bar absolute rounded-lg"></span>
                <p className="about-paragraph relative">
                    Do you ever think to yourself 'It is so easy to find past exams for my modules'?
                    No, because you're a TCD student, and finding past exams as a TCD student is akin to mental torture.
                    <br/><br/>
                    Type in your stuff and we find ALL your past exams that are available across Trinity's web presence. 
                    If it's not here, it doesn't exist. We also don't take responsibility for anything bad. We also got 
                    banned from tcd.ie for a while.
                    <br/><br/>

                    Made by students, for students.    
                    <br/><br/> 
                    We are the better blackboard. We are Blackerboard™.
                </p>             
            </div>
        </div>
  
    )
  }


export default about;