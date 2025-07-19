import React from 'react';

const ReviewCard = ({ review }) => {
    const { user, vehicle, rating, comment, reviewDate } = review;

    return (
        <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 h-full">

                <div className="col-span-1">
                    <img
                        src={vehicle.imageUrl}
                        alt={`${vehicle.make} ${vehicle.model}`}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="col-span-2 p-6 flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-primary">
                            {vehicle.make} {vehicle.model} <span className="text-sm text-base-content/70">({vehicle.year})</span>
                        </h2>
                        <p className="text-base-content/80 text-sm italic">
                            Reviewed by {user.firstName} {user.lastName} on {new Date(reviewDate).toLocaleDateString()}
                        </p>

                        <div className="flex items-center gap-2 mt-2">
                            <div className="rating">
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <input
                                        key={num}
                                        type="radio"
                                        name={`rating-${review.reviewId}`}
                                        className="mask mask-star-2 bg-orange-400"
                                        disabled
                                        checked={num === rating}
                                        readOnly
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-base-content/70">({rating}/5)</span>
                        </div>

                        <p className="mt-2 text-base-content">{comment}</p>
                    </div>

                    <div className="text-xs text-right text-base-content/60 mt-4">
                        <span>{vehicle.location}</span> • <span>{vehicle.features}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;