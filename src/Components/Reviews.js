/*import React from 'react';

const reviews = [
  { name: 'John Doe', review: 'Amazing book! A must-read for everyone.', rating: 5 },
  { name: 'Jane Smith', review: 'A fantastic journey through a compelling story.', rating: 4 },
  { name: 'Emily Johnson', review: 'Well-written and engaging from start to finish.', rating: 5 },
  { name: 'Michael Brown', review: 'Great book, but the ending could have been better.', rating: 4 },
  { name: 'Sarah Davis', review: 'Highly recommend! I couldn’t put it down.', rating: 5 },
  { name: 'David Wilson', review: 'A solid read, with interesting characters and plot.', rating: 4 },
];

const Reviews = () => {
  return (
    <div className="reviews-section">
      <h1>Customer Reviews</h1>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h2>{review.name}</h2>
            <p>"{review.review}"</p>
            <div className="rating">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;*/


import React from 'react';

const reviews = [
  { name: 'John Doe', review: 'Amazing book! A must-read for everyone.', rating: 5, image: 'https://thumbs.dreamstime.com/b/young-hispanic-boy-walking-park-concept-strolling-foreign-student-118925868.jpg'},
  { name: 'Michael Brown', review: 'Great book, but the ending could have been better.', rating: 4, image: 'https://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpg' },
  { name: 'Jane Smith', review: 'A fantastic journey through a compelling story.', rating: 4, image: 'https://cdn4.sharechat.com/img_802436_4ee5466_1672879741080_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=080_sc.jpg' },
  { name: 'Sarah Davis', review: 'Highly recommend! I couldn’t put it down.', rating: 5, image: 'https://img.freepik.com/free-photo/cclose-up-portrait-lovely-young-woman-looking-camera-touching-chin-by-hand-outdoors_231208-6122.jpg' },
  { name: 'Emily Johnson', review: 'Well-written and engaging from start to finish.', rating: 5, image: 'https://img.freepik.com/free-photo/handsome-stylish-african-american-with-afro-hairstyle-wearing-denim-coat-headphones-walking-city_176420-19796.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723248000&semt=ais_hybrid' },
  { name: 'David Wilson', review: 'A solid read, with interesting characters and plot.', rating: 4, image: 'https://i.pinimg.com/474x/3b/e3/c3/3be3c3bd9b93f0e094d9aaaabb5b3f0c.jpg' },
];

const Reviews = () => {
  return (
    <div className="reviews-section">
      <h1>Customer Reviews</h1>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <img src={review.image} alt={review.name} className="review-image" />
            <h2>{review.name}</h2>
            <p>"{review.review}"</p>
            <div className="rating">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;