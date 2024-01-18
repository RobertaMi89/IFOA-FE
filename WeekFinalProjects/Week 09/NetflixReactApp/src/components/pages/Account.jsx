const Account = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand ms-3" to="/">
                <img
                  src="./Netflix-assets/assets/netflix_logo.png"
                  alt="logo"
                  width="100"
                />
              </Link>
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item mx-2">
                    <a
                      href="#"
                      role="button"
                      className="fw-bold text-decoration-none text-secondary"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a
                      href="#"
                      role="button"
                      className="fw-bold text-decoration-none text-secondary"
                    >
                      Tv Shows
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a
                      href="#"
                      role="button"
                      className="fw-bold text-decoration-none text-secondary"
                    >
                      Movies
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a
                      href="#"
                      role="button"
                      className="fw-bold text-decoration-none text-secondary"
                    >
                      Recently Added
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a
                      href="#"
                      role="button"
                      className="fw-bold text-decoration-none text-secondary"
                    >
                      My List
                    </a>
                  </li>
                </ul>

                <div className="d-flex justify-content-end">
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

                  <div className="align-middle position-relative mx-3 my-2">
                    <a
                      href="#"
                      role="button"
                      className="text-decoration-none text-secondary"
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
                      className="btn dropdown-toggle border-0 dropdown-menu-end"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="./Netflix-assets/assets/avatar.png"
                        width="30"
                        height="30"
                        id="avatar"
                      />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
                      <li>
                        <a className="dropdown-item" href="./profile.html">
                          <div className="d-flex align-items-center">
                            <img
                              src="./Netflix-assets/assets/avatar.png"
                              id="avatar-small"
                              width="30"
                              height="30"
                            />
                            Roberta
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./profile.html">
                          Manage Profiles
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./accounts.html">
                          Account
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Help Center
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Signout Netflix
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <main className="bg-light">
        <div className="container p-5">
          <h3 className="text-dark">Account</h3>
          <hr className="text-muted" />
          <div className="row">
            <div className="col-md-3">
              <h6 className="text-muted">MEMBERSHIP &amp; BILLING</h6>
              <button className="btn btn-secondary">Cancel Membership</button>
            </div>
            <div className="col-md-9">
              <div className="d-flex align-items-center justify-content-between mt-2">
                <strong className="text-dark">roberta.miosi@gmail.com</strong>
                <a className="text-primary text-decoration-none">
                  Change account email
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-2">
                <span className="text-muted">Password : ********</span>
                <a className="text-primary text-decoration-none">
                  Change password
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-2">
                <span className="text-muted">Phone : 321 044 1279</span>
                <a className="text-primary text-decoration-none">
                  Change phone number
                </a>
              </div>
              <hr className="text-muted" />

              <div className="d-flex align-items-center justify-content-between mt-2">
                <span>
                  <img
                    src="./Netflix-assets/assets/icons/paypal_logo.png"
                    width="80px"
                  />
                  <strong className="ms-2 text-dark">
                    roberta.miosi@gmail.com
                  </strong>
                </span>
                <a className="text-primary text-decoration-none">
                  Update payment info
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-end mt-2">
                <a className="text-primary text-decoration-none">
                  Billing details
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-end mt-2">
                <a className="text-primary text-decoration-none">
                  Redeem giftcard or promo code
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-end mt-2">
                <a className="text-primary text-decoration-none">
                  Where to buy gift cards?
                </a>
              </div>
            </div>
          </div>
          <hr className="text-muted" />
          <div className="row">
            <div className="col-md-3">
              <h6 className="text-muted mb-0">PLAN DETAILS</h6>
            </div>
            <div className="col-md-9">
              <div className="d-flex align-items-center justify-content-between">
                <span>
                  <strong className="text-dark">
                    Premium{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-badge-hd"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.396 11V5.001H6.209v2.44H3.687V5H2.5v6h1.187V8.43h2.522V11zM8.5 5.001V11h2.188c1.811 0 2.685-1.107 2.685-3.015 0-1.894-.86-2.984-2.684-2.984H8.5zm1.187.967h.843c1.112 0 1.622.686 1.622 2.04 0 1.353-.505 2.02-1.622 2.02h-.843v-4.06z" />
                      <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                    </svg>
                  </strong>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-badge-hd"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.396 11V5.001H6.209v2.44H3.687V5H2.5v6h1.187V8.43h2.522V11h1.187zM8.5 5.001V11h2.188c1.811 0 2.685-1.107 2.685-3.015 0-1.894-.86-2.984-2.684-2.984H8.5zm1.187.967h.843c1.112 0 1.622.686 1.622 2.04 0 1.353-.505 2.02-1.622 2.02h-.843v-4.06z"></path>
                    <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path>
                  </svg>
                </span>
                <a className="text-primary text-decoration-none">Change plan</a>
              </div>
            </div>
          </div>
          <hr className="text-muted" />
          <div className="row">
            <div className="col-md-3">
              <h6 className="text-muted">SETTINGS</h6>
            </div>
            <div className="col-md-9">
              <p>
                <a className="text-primary text-decoration-none">
                  Parent Controls
                </a>
              </p>
              <p>
                <a className="text-primary text-decoration-none">
                  Test Participation
                </a>
              </p>
              <p>
                <a className="text-primary text-decoration-none">
                  Manage downlaod devices
                </a>
              </p>
              <p>
                <a className="text-primary text-decoration-none">
                  Activate a device
                </a>
              </p>
              <p>
                <a className="text-primary text-decoration-none">
                  Recent device streaming activity
                </a>
              </p>
              <p>
                <a className="text-primary text-decoration-none">
                  Signout all devices
                </a>
              </p>
            </div>
          </div>
          <hr className="text-muted" />
          <div className="row">
            <div className="col-md-3">
              <h6 className="text-muted">MY PROFILE</h6>
            </div>
            <div className="col-md-9">
              <div className="d-flex align-items-center justify-content-between mt-2">
                <span>
                  <img src="./Netflix-assets/assets/avatar.png" width="36px" />
                  <strong className="ms-2 text-dark">Roberta</strong>
                </span>
                <div className="d-flex flex-column">
                  <a
                    className="text-primary text-decoration-none"
                    href="./profile.html"
                  >
                    Manage profiles
                  </a>
                  <a className="text-primary text-decoration-none">
                    Add profile email
                  </a>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-4">
                  <p>
                    <a className="text-primary text-decoration-none">
                      Language
                    </a>
                  </p>
                  <p>
                    <a className="text-primary text-decoration-none">
                      Playback settings
                    </a>
                  </p>
                  <p>
                    <a className="text-primary text-decoration-none">
                      Subtitle appearence
                    </a>
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <a className="text-primary text-decoration-none">
                      Viewing activity
                    </a>
                  </p>
                  <p>
                    <a className="text-primary text-decoration-none">Ratings</a>
                  </p>
                </div>
                <div className="col-md-4"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Account;
