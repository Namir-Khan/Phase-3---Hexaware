import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewCard from './ReviewCard';

const HomeReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchTopReviews();
    }, []);

    const fetchTopReviews = async () => {
        try {
            const res = await axios.get('http://localhost:8081/reviews');
            setReviews(res.data.slice(0, 3));
        } catch (e) {
            console.error('Error fetching reviews:', e);
        }
    };

    return (
        <div className="bg-base-300 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-primary mb-12">
                    What People Are Saying
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <ReviewCard key={review.reviewId} review={review} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="/reviews" className="btn btn-outline btn-primary">
                        Read All Reviews
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomeReview;