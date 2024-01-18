import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

const Profile = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <a className="navbar-brand ms-5" href="./index.html">
                <img
                  src="./Netflix-assets/assets/netflix_logo.png"
                  alt="logo"
                  width="100"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-4">
                <h1 className="text-light profile-title">Edit Profile</h1>
                <hr />
                <div className="row mt-4 pb-2">
                  <div className="col-12 col-md-auto">
                    <img
                      src="../../assets/avatar.png"
                      className="img-fluid"
                      width="150px"
                    />
                  </div>
                  <div className="col-12 col-md">
                    <input
                      className="form-control border-0 rounded-0"
                      type="text"
                    />
                    <div className="mb-4 mt-4">
                      <h4 className="text-secondary">Language:</h4>
                      <button className="btn btn-outline-light mt-2 dropdown-toggle">
                        <span className="pe-4">English</span>
                      </button>
                    </div>
                    <hr />
                    <div className="mt-2 pb-2">
                      <h4 className="text-secondary">Maturity Settings:</h4>
                      <button className="btn btn-dark fw-bold my-2">
                        ALL MATURITY SETTINGS
                      </button>
                      <p className="text-light mt-2">
                        Show files for all maturity settings for this profile.
                      </p>
                      <button className="btn btn-outline-secondary px-4">
                        EDIT
                      </button>
                    </div>
                    <hr className="my-4" />
                    <div>
                      <h4 className="text-secondary">Autoplay Controls:</h4>
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <input
                            className="form-check-input bg-transparent border-white opacity-50 rounded-0"
                            type="checkbox"
                            checked=""
                          />
                        </div>
                        <div>
                          Autoplay next episode in a series on all devices
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <div className="me-2">
                          <input
                            className="form-check-input bg-transparent border-white opacity-50 rounded-0"
                            type="checkbox"
                            checked=""
                          />
                        </div>
                        <div>
                          Autoplay next episode in a series on all devices
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="action-buttons row pt-2">
                    <div className="col-auto">
                      <button className="btn btn-light fw-bold px-4">
                        SAVE
                      </button>
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-outline-secondary px-5">
                        CANCEL
                      </button>
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-outline-secondary px-5 ">
                        DELETE PROFILE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
