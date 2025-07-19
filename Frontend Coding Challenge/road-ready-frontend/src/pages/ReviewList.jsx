import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewCard from '../components/ReviewCard';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchAllReviews();
    }, []);

    const fetchAllReviews = async () => {
        const token = localStorage.getItem('token');
        try {
            const res = await axios.get('http://localhost:8081/reviews', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setReviews(res.data);
        } catch (e) {
            console.error('Error fetching reviews:', e);
        }
    };

    return (
        <div className="min-h-[92vh] bg-base-200 px-4 py-10">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-extrabold text-center mb-12 text-primary drop-shadow-sm">
                    What Our Customers Say
                </h1>

                {reviews.length === 0 ? (
                    <div className="text-center text-lg text-base-content/70">
                        No reviews available.
                    </div>
                ) : (
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                        {reviews.map((review) => (
                            <ReviewCard key={review.reviewId} review={review} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReviewList;