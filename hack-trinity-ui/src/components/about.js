import knowledge from "../media/knowledge.svg";

function about() {
    return (
        <div className="bg-secondary about-section flex justify-between">
            <img src={knowledge} className="knowledge relative"></img>
            <span className="bg-white white-bar relative rounded-lg"></span>
            <div className="border border-black border-solid about-text-box relative right-8">
                <h2 className="text-white text-center pt-5"> What is Trinity Exam Search? </h2>
                <p className="about-paragraph relative">This is what it is "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <span className="bg-white title-bar absolute rounded-lg"></span>
            </div>
        </div>
  
    )
  }


export default about;