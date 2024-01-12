import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const CustomDropDown = () => {
  return (
    <>
      <div className="d-flex justify-content-end text-dropdown-item">
        <div className="search position-relative mt-2 me-2">
          <a href="#" role="button" className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </a>
        </div>

        <div className="aDropdown.Itemgn-middle position-relative mx-3 my-2">
          <a
            href="#"
            role="button"
            className=" text-decoration-none text-secondary"
          >
            KIDS
          </a>
        </div>

        <div className="bell-icon position-relative mx-3 mt-2 me-2">
          <a href="#" role="button" className="text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </a>
        </div>

        <div className="btn-group">
          <button
            type="button"
            className="btn dropdown-toggle  border-0 dropdown-menu-end"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="../src/assets/avatar.png"
              width="30"
              height="30"
              id="avatar"
            />
          </button>
        </div>
      </div>
      <Dropdown>
        <Dropdown.Toggle
          variant="trasparent text-light"
          id="dropdown-basic"
        ></Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu-end bg-dark">
          <Dropdown.Item>
            <a className="dropdown-item " href="./profile.html">
              <div className="d-flex dropdown-item align-items-center text-light">
                <img
                  src="../src/assets/avatar.png"
                  id="avatar-small"
                  width="30"
                  height="30"
                  className="mx-3"
                />
                Roberta
              </div>
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a className="dropdown-item text-light" href="./profile.html">
              Manage Profiles
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a className="dropdown-item text-light" href="./account.html">
              Account
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a className="dropdown-item text-light" href="#">
              Help Center
            </a>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <a className="dropdown-item text-light" href="#">
              Signout Netfix
            </a>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
export default CustomDropDown;
