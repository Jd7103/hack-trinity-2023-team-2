import notebook from "../media/notebook.svg";

function Navbar() {
  return (
    <nav className="bg-secondary">
      <img className="notebook absolute" src={notebook}></img>
      <h2 className="text-white p-4 heading">Trinity Exam Search</h2>
    </nav>
  )
}
export default Navbar;