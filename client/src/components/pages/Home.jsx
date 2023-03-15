import AnimatedPage from "../AnimatedPage";
import React from "react";
import wallpaper1 from "../picture/wallpaper1.jpg";
import wallpaper2 from "../picture/wallpaper2.jpg";
import wallpaper3 from "../picture/wallpaper3.jpg";

const Home = () => {
  return (
    <AnimatedPage>
      <div>
        <div
          id="myCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <ol className="carousel-indicators">
            <li
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item custom-height active">
              <img
                src={wallpaper2}
                className="d-block w-100"
                alt="Carousel item 1"
              />
              <div className="container">
                <div className="carousel-caption text-start blackText">
                  <h1>Welcome to your</h1>
                  <h1>professional community</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item custom-height">
              <img
                src={wallpaper1}
                className="d-block w-100"
                alt="Carousel item 2"
              />
              <div className="container">
                <div className="carousel-caption blackText">
                  <h1>Develop by</h1>
                  <h2>Computer Engineering KMUTNB</h2>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      see more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item custom-height">
              <img
                src={wallpaper3}
                className="d-block w-100"
                alt="Carousel item 3"
              />
              <div className="container">
                <div className="carousel-caption text-end blackText">
                  <h1>One more for good measure.</h1>
                  <p>
                    Some representative placeholder content for the third slide
                    of the carousel.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Browse gallery
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
