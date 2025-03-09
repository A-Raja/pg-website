import React from 'react';
import heroImage from './dummy_hero_image.jpg'
import './HomePage.css'; // Create a HomePage.css file for styling

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Safe and Comfortable Home Away From Home</h1>
          <p>A supportive community for your academic journey.</p>
          <button className="cta-button">Book a Visit</button>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="benefits">
        <div className="benefit">
          <img src="dummy_security_icon.png" alt="Security Icon" className="benefit-icon" />
          <h3>24/7 Security & CCTV Surveillance</h3>
        </div>
        <div className="benefit">
          <img src="dummy_comfort_icon.png" alt="Comfort Icon" className="benefit-icon" />
          <h3>Clean, Modern Rooms & Amenities</h3>
        </div>
        <div className="benefit">
          <img src="dummy_community_icon.png" alt="Community Icon" className="benefit-icon" />
          <h3>Supportive & Friendly Environment</h3>
        </div>
        <div className="benefit">
          <img src="dummy_location_icon.png" alt="Location Icon" className="benefit-icon" />
          <h3>Prime Location Near Colleges & Amenities</h3>
        </div>
      </section>

      {/* Rooms Showcase */}
      <section className="rooms">
        <h2>Explore Our Rooms</h2>
        <div className="room-gallery">
          <div className="room-item">
            <img src="dummy_single_room.jpg" alt="Single Room" />
            <p>Single Room</p>
          </div>
          <div className="room-item">
            <img src="dummy_shared_room.jpg" alt="Shared Room" />
            <p>Shared Room with Study Area</p>
          </div>
          <div className="room-item">
            <img src="dummy_room_3.jpg" alt="Room 3" />
            <p>Room Type 3</p>
          </div>
        </div>
        <button className="cta-button">View All Rooms</button>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Residents Say</h2>
        <div className="testimonial">
          <p>"I feel so safe and comfortable here. It's like a home away from home!"</p>
          <img src="dummy_testimonial_1.jpg" alt="Resident 1" className="testimonial-image"/>
        </div>
        <div className="testimonial">
          <p>"The community is amazing, and the location is perfect for my college."</p>
          <img src="dummy_testimonial_2.jpg" alt="Resident 2" className="testimonial-image"/>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="location-highlights">
        <h2>Our Convenient Location</h2>
        <img src="dummy_location_map.jpg" alt="Location Map" className="location-map" />
        <p>Near [College Name], close to [Shopping Center].</p>
        <button className="cta-button">View Location</button>
      </section>

      {/* Secondary CTAs */}
      <section className="secondary-ctas">
        <button className="secondary-cta">Learn More About Us</button>
        <button className="secondary-cta">See Our Facilities</button>
        <button className="secondary-cta">Contact Us for Inquiries</button>
      </section>
    </div>
  );
}

export default HomePage;