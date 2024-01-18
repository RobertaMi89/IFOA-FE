import CustomGallery from "../molecules/CustomGallery";
import Container from "react-bootstrap/Container";

const CustomMain = () => {
  return (
    <>
      <Container fluid className="bg-dark">
        <Container fluid className="p-3">
          <div class="movie-gallery ms-2 mb-5 mt-4 me-5">
            <h5 class="text-light mt-2 mb-2">Trending Now</h5>
            <div
              id="trending-now"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="movie-row">
                    <div class="row g-1">
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media0.webp"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media1.jpg"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media10.jpg"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media11.jpg"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media12.jpg"
                        />
                      </div>
                      <div class="col-md-2 ">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media13.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="movie-row">
                    <div class="row g-1">
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media14.webp"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media15.jpg"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media16.webp"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media17.jpg"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media18.jpg"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media19.webp"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#trending-now"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#trending-now"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="movie-gallery ms-2 mb-5 mt-4 me-5">
            <h5 class="text-light mt-2 mb-2">Watch It Again</h5>
            <div
              id="watch-it-again"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="movie-row">
                    <div class="row g-1">
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media2.webp"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media20.jpg"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media21.webp"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media22.webp"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media23.webp"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media24.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="movie-row">
                    <div class="row g-1">
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media25.webp"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media26.webp"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media27.jpg"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media28.jpg"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media29.jpg"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media30.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#watch-it-again"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#watch-it-again"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="movie-gallery ms-2 mb-5 mt-4 me-5">
            <h5 class="text-light mt-2 mb-2">New Releases</h5>
            <div
              id="new-releases"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item">
                  <div class="movie-row">
                    <div class="row g-1">
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media31.webp"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media32.jpg"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media1.jpg"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media10.jpg"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media11.jpg"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media12.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item active">
                  <div class="movie-row">
                    <div class="row g-1">
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media13.jpg"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media14.webp"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media15.jpg"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media16.webp"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media17.jpg"
                        />
                      </div>
                      <div class="col-md-2">
                        <img
                          class="img-fluid movie-cover"
                          src="../src/assets/media/media18.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#new-releases"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#new-releases"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};
export default CustomMain;
