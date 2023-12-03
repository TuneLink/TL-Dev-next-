"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function FeaturesSection() {
  return (
    <div className="container py-5">
      <h2
        className="text-center mb-5"
        style={{ fontWeight: '700', color: '#333' }}
      >
        Features
      </h2>
      <div className="row justify-content-center">
        {[
          {
            title: 'Discover New Bops',
            icon: 'bi bi-vinyl-fill',
            text: 'Generate curated playlists based on your favorite genres or mood.',
            badgeText: 'New',
          },
          {
            title: 'Discover The Undiscovered',
            icon: 'bi bi-people-fill',
            text: 'Support up-and-coming artists and help them grow.',
            badgeText: null,
          },
          {
            title: 'More Coming Soon...',
            icon: 'bi bi-box2-heart-fill',
            text: 'We are working hard to bring you more cool features!',
            badgeText: null,
          },
        ].map((feature, index) => (
          <div className="col-lg-4 mb-4" key={index}>
            <div
              className="card bg-white shadow-lg"
              style={{
                borderRadius: '15px',
                transition: '0.3s',
              }}
              
            >
              <div className="card-body text-center p-5">
                <div className="rounded-circle d-inline-flex justify-content-center align-items-center"
                  style={{
                    width: '100px',
                    height: '100px',
                    margin: '0 auto 20px',
                    backgroundColor: '#ffae03',
                  }}
                >
                  <i className={`${feature.icon} text-white`} style={{ fontSize: '4rem' }}></i>
                </div>
                <h5 className="card-title font-weight-bold">
                  {feature.title}
                </h5>
                <p className="card-text mb-4">
                  {feature.text}
                </p>
              </div>
              {feature.badgeText && (
                <span
                  className="badge badge-primary position-absolute"
                  style={{
                    top: '20px',
                    right: '20px',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '10',
                  }}
                >
                  {feature.badgeText}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;
