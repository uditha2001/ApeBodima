import React, { useState, useEffect } from 'react';
import { Box, Typography, Rating, LinearProgress, useTheme, useMediaQuery } from '@mui/material';
import axios from 'axios';

const ReviewsAndRatings = ({ bodimId }) => {
  const [reviews, setReviews] = useState([]);
  const [averageRatings, setAverageRatings] = useState({
    overall: 0,
    surrounding: 0,
    comfortable: 0,
    space: 0,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/reviews/${bodimId}`);
        setReviews(response.data);
        calculateAverageRatings(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, [bodimId]);

  const calculateAverageRatings = (reviewsData) => {
    if (reviewsData.length === 0) return;
    const sum = reviewsData.reduce(
      (acc, review) => ({
        overall: acc.overall + review.rating,
        surrounding: acc.surrounding + review.surroundingRating,
        comfortable: acc.comfortable + review.comfortableRating,
        space: acc.space + review.spaceRating,
      }),
      { overall: 0, surrounding: 0, comfortable: 0, space: 0 }
    );
    const count = reviewsData.length;
    setAverageRatings({
      overall: sum.overall / count,
      surrounding: sum.surrounding / count,
      comfortable: sum.comfortable / count,
      space: sum.space / count,
    });
  };

  return (
    <Box sx={{ p: { xs: 1, sm: 2 } }}>
      <Typography variant={isMobile ? "h6" : "h5"} gutterBottom>
        Reviews and Ratings
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, flexWrap: 'wrap' }}>
        <Typography variant={isMobile ? "h4" : "h3"} sx={{ mr: 1 }}>
          {averageRatings.overall.toFixed(1)}
        </Typography>
        <Rating value={averageRatings.overall} precision={0.1} readOnly size={isMobile ? "small" : "medium"} />
      </Box>
      <Typography variant="body2" gutterBottom>
        Based on {reviews.length} reviews
      </Typography>
      {['Surrounding', 'Comfortable', 'Space'].map((category) => (
        <Box key={category} sx={{ display: 'flex', alignItems: 'center', my: 1, flexWrap: 'wrap' }}>
          <Typography sx={{ minWidth: { xs: '100%', sm: 100 }, mb: { xs: 1, sm: 0 } }}>{category}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', width: { xs: '100%', sm: 'auto' }, flexGrow: 1 }}>
            <Rating
              value={averageRatings[category.toLowerCase()]}
              precision={0.1}
              readOnly
              size="small"
            />
            <LinearProgress
              variant="determinate"
              value={(averageRatings[category.toLowerCase()] / 5) * 100}
              sx={{ ml: 2, flexGrow: 1, minWidth: { xs: '50%', sm: '100px' } }}
            />
            <Typography sx={{ ml: 1, minWidth: 30 }}>{reviews.length}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ReviewsAndRatings;