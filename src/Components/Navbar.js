import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <center>
          <Link to="/">Home</Link>
          <Link to="Student">Student</Link>
          <Link to="Contact">Contact</Link>
        </center>
      </nav>
    </>
  );
}
export default Navbar;
