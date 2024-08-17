import React from 'react';

const About = () => {
  return (
    <div className="about-section">
      <h1>About BookNook</h1>
      <div className="about-content">
        <div className="text-content">
          <p>
            BookNook is your gateway to a world of stories and knowledge. We curate books that inspire, educate, and entertain. 
            From fiction to non-fiction, our collection spans various genres, including science fiction, biographies, history, 
            and more. Every book is selected with care to ensure that it adds value to our readers' lives.
          </p>
          <p>
            Our mission is to foster a love for reading in every individual. We believe that books have the power to change the world, 
            one reader at a time. At BookNook, you will find not just books, but a community of like-minded individuals who share your 
            passion for reading and learning.
          </p>
        </div>
        <div className="images-content">
          <img src={"https://images2.alphacoders.com/500/500774.jpg"} alt="Book Cover 1" />
          <img src={"https://png.pngtree.com/background/20230519/original/pngtree-two-roses-rest-over-an-open-book-on-a-table-picture-image_2667329.jpg"} alt="Book Cover 2" />
        </div>
      </div>
    </div>
  );
};

export default About;