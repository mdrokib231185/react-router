import React, { useState } from 'react';
import useReview from '../Hooks/Hooks';
import Show from '../ShowDetails/Show';
import './Review.css'

const Review = () => {
      const [reviews, setReviews] = useReview()
      return (
            <div className='review-section'>
                  {
                        reviews.map(review => <Show
                        review={review}
                        ></Show>)
                  }
            </div>
      );
};

export default Review;