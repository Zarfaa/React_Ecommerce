import React from "react";
import Img1 from "../../Assets/Men.jpg";
import Img2 from "../../Assets/women.jpg";
import Img3 from "../../Assets/carouselImg3.png"
import "./Carousel.css";

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item  ">
        <img src={Img1} class="d-block w-100" alt="Men Collection "/>
        <div class="carousel-caption text-start" >
          <h5>Men Collection</h5>
          <p>New Arrival</p>
        </div>
      </div>
      <div class="carousel-item active">
        <img src={Img2} class="d-block w-100" alt="Women Collection "/>
        <div class="carousel-caption text-start">
          <h5>Women Collection 2023</h5>
          <p>New Arrival</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={Img3} class="d-block w-100" alt="T-Shirt"/>
        <div class="carousel-caption text-start">
          <h5>T-Shirt Collection</h5>
          <p>New Arrival</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  );
};

export default Carousel;
