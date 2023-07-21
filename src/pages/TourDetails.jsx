import React, {useRef , useState} from 'react'
import '../styles/tourdetails.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking';
import Newsletter from '../shared/Newsletter';


const TourDetails = () => {

  const { id } = useParams()
  const reviewMsgRef = useRef(' ')
  const [tourRating, setTourRating] = useState(null)

  // For now it is static data. Later we will call oour api
  const tour = tourData.find(tour => tour.id === id)

  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  //Submit request to server

  const submitHandler = e=>{
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value

    alert(`${reviewText}, ${tourRating}`)

    // Api will be called later
   }

  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className="tour_content">
              <img src={photo} alt="" />
              <div className="tour_info">
                <h2>{title}</h2>
                <div className='d-flex align-items-center gap-5'>


                  <span className="tour_rating d-flex align-items-center gap-1">
                    <i class="ri-star-fill" style={{ 'color': 'var(--secondary-color)' }}></i> {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? ('Not rated') : (<span>({reviews?.length})</span>)}

                  </span>

                  <span>
                    <i class="ri-map-pin-user-fill"></i> {address}
                  </span>
                </div>

                <div className="tour_extra-details">
                  <span><i class='ri-map-pin-2-line'></i>{city}</span>
                  <span><i class="ri-money-dollar-circle-line"></i>$ {price} /per person</span>
                  <span><i class="ri-map-pin-time-line"></i> {distance} k/m </span>
                  <span><i class="ri-group-line"></i>{maxGroupSize} people </span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              {/* ======== Tour Reviews section start ======= */}
              <div className="tour_reviews mt-4">
                <h4>Reviews ({reviews?.length}) reviews</h4>

                <Form onSubmit={submitHandler}>
                  <div className='d-flex align-items-center gap-3 mb-4 rating_group'>
                    <span onClick={()=> setTourRating(1)}>
                      1 <i class="ri-star-fill"></i>
                    </span>
                    <span onClick={()=> setTourRating(2)}>
                      2 <i class="ri-star-fill"></i>
                    </span>
                    <span onClick={()=> setTourRating(3)}>
                      3 <i class="ri-star-fill"></i>
                    </span>
                    <span onClick={()=> setTourRating(4)}>
                      4 <i class="ri-star-fill"></i>
                    </span>
                    <span onClick={()=> setTourRating(5)}>
                      5 <i class="ri-star-fill"></i>
                    </span>
                  </div>

                  <div className="review_input">
                    <input type="text" ref = {reviewMsgRef} placeholder='share your thougths' required/>
                    <button className='btn primary__btn text-white' type='submit'>
                      Submit
                    </button>
                  </div>
                </Form>

                <ListGroup className='user__reviews'>
                  {
                    reviews?.map(review => (
                      <div className="review__item">
                        <img src={avatar} alt="" />

                        <div className="w-100">
                          <div className='d-flex align-items-center justify-content-between'>
                            <div>
                              <h5>Atharv</h5>
                              <p>{new Date('01-18-2023').toLocaleDateString(
                                "en-US", 
                                options
                              )}
                              </p>
                            </div>

                            <span className='d-flex align-items-center'>
                            5<i class="ri-star-fill"></i>
                            </span>
                          </div>
                          <h6>Amazing tour</h6>
                        </div>
                      </div>
                    ))
                  }
                </ListGroup>
                <ListGroup className='user__reviews'>
                  {
                    reviews?.map(review => (
                      <div className="review__item">
                        <img src={avatar} alt="" />

                        <div className="w-100">
                          <div className='d-flex align-items-center justify-content-between'>
                            <div>
                              <h5>Atharv</h5>
                              <p>{new Date('01-18-2023').toLocaleDateString(
                                "en-US", 
                                options
                              )}
                              </p>
                            </div>

                            <span className='d-flex align-items-center'>
                            5<i class="ri-star-fill"></i>
                            </span>
                          </div>
                          <h6>Amazing tour</h6>
                        </div>
                      </div>
                    ))
                  }
                </ListGroup>

              </div>
              {/* ======== Tour Reviews section end ======= */}
            </div>
          </Col>

          <Col lang='4'>
            <Booking tour={tour} avgRating = {avgRating}/>
          </Col>
        </Row>
      </Container>
    </section>
    <Newsletter/>
</>
  )
}

export default TourDetails