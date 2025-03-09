import React from 'react';
import '../styles/Facilities.css';

function FacilitiesPage() {
  const facilities = [
    {
      icon: '/facility-security.png',
      title: '24/7 Security',
      description: 'Round-the-clock security with CCTV surveillance and trained personnel.',
      effect: '',
    },
    {
      icon: '/facility-wifi.png',
      title: 'High-Speed Wi-Fi',
      description: 'Reliable internet access for studying and staying connected.',
      effect: 'wifi-effect',
    },
    {
      icon: '/facility-meals.png',
      title: 'Nutritious Meals',
      description: 'Balanced and delicious meals prepared with fresh ingredients.',
      effect: '',
    },
    {
      icon: '/facility-laundry.png',
      title: 'Laundry Services',
      description: 'Convenient laundry facilities to make your life easier.',
      effect: '',
    },
    {
      icon: '/facility-common.png',
      title: 'Common Areas',
      description: 'Comfortable spaces for socializing and relaxing.',
      effect: 'girls-effect',
    },
    {
      icon: '/facility-study.png',
      title: 'Study Room',
      description: 'A quiet and well-lit area dedicated to studying.',
      effect: 'three-d-effect',
    },
  ];

  return (
    <div className="facilities-page">
      <div className="facilities-header">
        <h1>Our Facilities</h1>
        <p>We provide everything you need for a comfortable and safe stay.</p>
      </div>
      <div className="facilities-grid">
        {facilities.map((facility, index) => (
          <div className={`facility-item ${facility.effect}`} key={index}>
            <img src={facility.icon} alt={facility.title} className="facility-icon" />
            <h3>{facility.title}</h3>
            <p>{facility.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FacilitiesPage;

