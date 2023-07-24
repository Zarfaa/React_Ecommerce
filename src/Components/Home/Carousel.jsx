import Img1 from "../../Assets/Men.jpg"
import Img2 from "../../Assets/women.jpg"
import Img3 from "../../Assets/carouselImg3.png"
import "./Carousel.css"

let Carousel = () =>{
    return(
    <>
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel" data-bs-theme="light">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item">
      <img src={Img2} alt="carousel animation"/>
        <div className="container">
          <div className="carousel-caption text-start">
            <h1>Women Collection 2023</h1>
            <p className="opacity-75">New Arrival</p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img src={Img3} alt="carousel animation"/>
      </div>
      <div className="carousel-item active">
        <img src={Img1} alt="carousel animation"/>
        <div className="container">
          <div className="carousel-caption text-start">
            <h1>Men Collection 2023</h1>
            <p>New Arrival</p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    </>
    )
}

export default Carousel