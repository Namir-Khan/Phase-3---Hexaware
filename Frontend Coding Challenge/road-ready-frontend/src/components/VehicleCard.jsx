import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const VehicleCard = ({vehicleId, make, model, year, licensePlate, status, location, pricePerDay, imageUrl, features}) => {
    const modalId = `car_modal_${licensePlate}_${model}`;
    const { isAuthenticated, setIsAuthenticated } = useAuth();

    const navigate = useNavigate();

    return (
        <div className="card w-96 bg-base-300 shadow-md hover:scale-[1.02] transition-transform duration-300 rounded-xl">

            <figure className="px-6 pt-6">
                <img
                    src={imageUrl}
                    alt={`${make} ${model}`}
                    className="rounded-xl max-h-48 object-cover w-full"
                />
            </figure>

            <div className="card-body px-6 py-4">
                <h2 className="text-2xl font-bold text-primary tracking-wide">{make}</h2>
                <p className="text-md text-base-content">{model}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                    <div className="badge badge-outline badge-sm">{year}</div>
                    <div className="badge badge-outline badge-sm">{location}</div>
                    <div
                        className={`badge badge-sm ${status === 'Available' ? 'badge-success' : 'badge-error'}`}>
                        {status}
                    </div>
                </div>

                <div className="card-actions mt-2 flex justify-between items-center">
                    <span className="text-lg font-semibold text-base-content">
                        ₹{pricePerDay}/day
                    </span>
                    <button
                        className="btn btn-sm btn-primary"
                        onClick={() => document.getElementById(modalId).showModal()}>
                        View More
                    </button>
                </div>
            </div>

            <dialog id={modalId} className="modal">
                <div className="modal-box w-full max-w-5xl text-base">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex-1">
                            <img
                                src={imageUrl || 'https://via.placeholder.com/400x250?text=No+Image'}
                                alt={`${make} ${model}`}
                                className="rounded-lg w-full max-h-72 object-cover"
                            />
                        </div>

                        <div className="flex-1 space-y-4">
                            <h2 className="text-4xl font-bold text-primary">{make}</h2>
                            <p className="text-xl text-base-content">{model}</p>

                            <hr />

                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[1.1rem]">
                                <p><strong>Year:</strong> {year}</p>
                                <p><strong>Location:</strong> {location}</p>
                                <p>
                                    <strong>Status:</strong>{' '}
                                    <span className={`badge ml-2 ${status === 'Available' ? 'badge-success' : 'badge-error'}`}>
                                        {status}
                                    </span>
                                </p>
                                <p><strong>License Plate:</strong> {licensePlate}</p>
                                <p className="col-span-2"><strong>Price/Day:</strong> ₹{pricePerDay}</p>
                                <p className="col-span-2"><strong>Features:</strong> {features || 'N/A'}</p>
                            </div>
                        </div>
                    </div>

                    <div className="modal-action flex justify-center gap-4 mt-6">

                        {isAuthenticated ? (
                            <button className='btn btn-primary px-6 text-lg' onClick={() => navigate(`/reservation/${vehicleId}`)}>
                                Book Now
                            </button>
                        ) : (
                            <button
                                className='btn btn-secondary px-6 text-lg'
                                onClick={() => {
                                    document.getElementById(modalId).close(); // Close modal first
                                    navigate('/login');
                                }}
                            >
                                Login to Book
                            </button>
                        )}

                        <form method="dialog">
                            <button className="btn btn-ghost px-6 text-lg">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default VehicleCard