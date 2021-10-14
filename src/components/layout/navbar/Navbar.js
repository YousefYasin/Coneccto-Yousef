import { NavLink } from "react-dom";
import "./navbar.css";
const Navbar = ({ setTheme }) => {
  return (
    <>
      <ul class="nav nav-pills nav-fill mt-2">
        <li class="nav-item" style={{ width: "100px" }}>
          <span class="nav-link disabled">
            {" "}
            <button onClick={setTheme} className="btn mr-3 ">
              <i class="fas fa-adjust"></i> Mode
            </button>
            Jul 31, 2021{" "}
          </span>
        </li>

        <li class="nav-item mt-2">
          <img src="./images/Group 1.png" />
        </li>
        <li class="nav-item">
          <div className="d-flex justify-content-start w-15">
            <div className="user-icon">
              <img class="nav-link disabled" src="./images/Layer.png" />
              <span className="active-state"></span>
            </div>
            <div className="user-id ml-5 mt-2">
              <span>M</span>
              <span className="active-user"></span>
            </div>
          </div>
        </li>
      </ul>
      <hr />
    </>
  );
};

export default Navbar;
