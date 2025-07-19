import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Review = () => {
    const {paymentId} = useParams();
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');
    const [payment, setPayment] = useState(null);

    const navigation = useNavigate();

    useEffect(() => {
        getPaymentDetails();
    }, [paymentId]);

    const getPaymentDetails = async () => {
        const token = localStorage.getItem('token');

        try {
            const res = await axios.get(`http://localhost:8081/payments/${paymentId}`, {
                headers: {Authorization: `Bearer ${token}`},
            });
            setPayment(res.data);
        } catch(e) {
            console.log("Error getting user :" + e);
        }
    };

    const makeReview = (event) => {
        event.preventDefault();

        const token = localStorage.getItem('token');
        const reviewDate = new Date().toISOString().split('T')[0];
        const reviewData = {userId: parseInt(payment.reservation.user.userId), 
            vehicleId: parseInt(payment.reservation.vehicle.vehicleId), 
            rating, 
            comment, 
            reviewDate
        };

        axios.post('http://localhost:8081/reviews', reviewData, {
            headers: {Authorization: `Bearer ${token}`},
        }).then(() => {
            alert('Review Done');
            navigation(`/dashboard`);
        }).catch((e) => {
            console.log('Error while adding review :' + e);
            alert('Failed');
        });
    };

    return (
        <div className="min-h-[92vh] bg-base-200 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {payment && (
                    <div className="card bg-base-100 shadow-xl p-6 rounded-xl space-y-4">
                        <img
                            src={payment.reservation.vehicle.imageUrl}
                            alt={`${payment.reservation.vehicle.make} ${payment.reservation.vehicle.model}`}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <h2 className="text-3xl font-bold text-primary">
                            {payment.reservation.vehicle.make} {payment.reservation.vehicle.model}
                        </h2>

                        <form onSubmit={makeReview} className="space-y-4">
                            <div>
                                <label className="label font-medium">Your Rating</label>
                                <div className="rating">
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <input
                                            key={num}
                                            type="radio"
                                            name="rating"
                                            className="mask mask-star-2 bg-secondary"
                                            checked={rating === num}
                                            onChange={() => setRating(num)}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="label font-medium">Your Feedback</label>
                                <textarea
                                    className="textarea textarea-bordered w-full"
                                    rows={2}
                                    placeholder="Tell us about your experience..."
                                    required
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full text-lg">
                                Submit Review
                            </button>
                        </form>
                    </div>
                )}

                <div className="text-center lg:text-left space-y-6 max-w-md">
                    <h1 className="text-7xl font-bold text-primary leading-tight tracking-wide">Thank You!</h1>
                    <p className="text-lg text-base-content/80">
                        We appreciate you choosing our service. Your feedback helps us improve and serve you better.
                    </p>
                    <p className="text-md text-base-content">
                        Kindly leave a review for the <span className="font-semibold text-primary">{payment?.reservation.vehicle.make} {payment?.reservation.vehicle.model}</span> you just rented.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Review