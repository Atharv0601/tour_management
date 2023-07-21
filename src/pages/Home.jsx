import React from 'react'
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg2 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';
// import Subtitle from '../shared/Subtitle.jsx';
import SearchBar from '../shared/SerachBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Testimonial from '../components/Testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';



const Home = () => {
  return (
    <>
      {/* ======== Hero Section Start ======== */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='hero_content'>
                <div className="hero_subtitle d-flex align-items-center">
                  {/* <Subtitle Subtitle={'Know Before You Go'}/>   */}
                  <h3>Know Before You Go</h3>
                  <img src={worldImg} alt="" />
                </div>
                <h1>Traveling opens the door to creating
                  <span className="highlight"> memories</span>
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sit debitis dolor autem dolorem ipsam odio veritatis recusandae in placeat? Quae exercitationem incidunt similique! Quam aut atque tempore impedit ipsum deserunt natus rem</p>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero_img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero_img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero_img-box mt-5">
                <img src={heroImg2} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>

        </Container>
      </section>
      {/* ======== Hero Section End ======== */}

      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services_subtitle">
                What we serve
              </h5>
              <h2 className="services_title">We offer best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ======= Featured tour section start ======== */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <h1 className='title_name'>Explore</h1>
              <h2 className="featured_tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>


      {/* ======= Featured tour section end ======== */}

      {/* ======= Experience Section start ======== */}

      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience_content">
                <h1 className='title_exp_name'>Experience</h1>
                <h2>With our all experience <br /> We will serve you</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, beatae.
                  <br />
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>

              <div className="counter_wrapper d-flex align-items-center gap-5">
                <div className="counter_box">
                  <span>12K+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter_box">
                  <span>2K+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter_box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience_img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======= Experience Section end ======== */}

      {/* ======= Gallery Section Start ======= */}

      <section>
        <Container>
          <Row>
            <Col lg='12'>
            <h1 className='title_name'>Gallery</h1>
            <h2 className="gallery_title">Visit our customers tour gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>


      {/* ======= Gallery Section end ======= */}

      {/* ======= Testimonial Section start ======= */}

      <section>
        <Container>
          <Row>
            <Col lg='12'>
            <h1 className='title_test_name'>Fans Love</h1>
            <h2 className="testimonial_title">
              What our fans say about us
            </h2>
            </Col>
            <Col lg='12'>
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======= Testimonial Section end ======= */}

      <Newsletter /> 
    </>
  )
}

export default Home