import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios';

const Reservation = () => {
    const {vehicleId} = useParams();
    const [pickUpDate, setPickUpDate] = useState('');
    const [dropOffDate, setDropOffDate] = useState('');
    const [status, setStatus] = useState('Confirmed');
    const [vehicle, setVehicle] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        getVehicleDetails();
    }, [vehicleId]);

    const getUser = async () => {
        const token = localStorage.getItem('token');

        try {
            const res = await axios.get('http://localhost:8081/auth/me', {
                headers: {Authorization: `Bearer ${token}`},
            });
            return res.data.userId;
        } catch(e) {
            console.log("Error getting user :" + e);
        }
    };

    const getVehicleDetails = async () => {
        const token =localStorage.getItem('token');

        try {
            const res = await axios.get(`http://localhost:8081/vehicles/${vehicleId}`, {
                headers: {Authorization: `Bearer ${token}`},
            });
            setVehicle(res.data);
        } catch (e) {
            console.log("Error getting vehicle: " + e);
        }
    };

    const makeReservation = async (event) => {
        event.preventDefault();
        const uid = await getUser();
        const createdAt = new Date().toISOString().split('.')[0];
        const reservationData = {userId: parseInt(uid), vehicleId: parseInt(vehicleId), pickupDate: pickUpDate, dropoffDate: dropOffDate, status, createdAt};
        const token = localStorage.getItem('token');

        try {
            const res = await axios.post('http://localhost:8081/reservations', reservationData, {
                headers: {Authorization: `Bearer ${token}`},
            });
            alert("Reservation Done on Id: " + res.data.reservationId); // Remove this later
            navigate(`/payment/${res.data.reservationId}`);
        } catch(e) {
            console.log("Error while making a reservation :" + e);
        }
    };

    return (
        <div className="min-h-[92vh] bg-base-200 p-6">

            <div className="mb-6">
                <Link to="/vehicles" className="btn btn-outline btn-sm">
                    Back to Vehicles
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                {vehicle && (
                    <div className="bg-base-100 p-6 rounded-xl shadow-xl space-y-4">
                        <img
                            src={vehicle.imageUrl}
                            alt={`${vehicle.make} ${vehicle.model}`}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <h2 className="text-3xl font-bold text-primary">{vehicle.make}</h2>
                        <p className="text-xl text-base-content/80">{vehicle.model}</p>

                        <div className="grid grid-cols-2 gap-4 text-base-content">
                            <p><strong>Year:</strong> {vehicle.year}</p>
                            <p><strong>Location:</strong> {vehicle.location}</p>
                            <p>
                                <strong>Status:</strong>{' '}
                                <span className={`badge ${vehicle.status === 'Available' ? 'badge-success' : 'badge-error'}`}>
                                    {vehicle.status}
                                </span>
                            </p>
                            <p><strong>License Plate:</strong> {vehicle.licensePlate}</p>
                            <p className="col-span-2"><strong>Features:</strong> {vehicle.features}</p>
                            <p className="col-span-2 text-lg font-semibold text-primary">
                                ₹{vehicle.pricePerDay} / day
                            </p>
                        </div>
                    </div>
                )}

                <div className="flex flex-col justify-between">
                    <div className="card bg-base-100 shadow-xl p-6 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Reserve this Car</h3>
                        <form onSubmit={makeReservation} className="space-y-4">
                            <div>
                                <label className="label font-medium">Pick-up Date</label>
                                <input
                                    type="date"
                                    className="input input-bordered w-full"
                                    required
                                    value={pickUpDate}
                                    onChange={(e) => setPickUpDate(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="label font-medium">Drop-off Date</label>
                                <input
                                    type="date"
                                    className="input input-bordered w-full"
                                    required
                                    value={dropOffDate}
                                    onChange={(e) => setDropOffDate(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-full text-lg">
                                Confirm Reservation
                            </button>
                        </form>
                    </div>

                    <div className="mt-8">
                        <ul className="steps w-full">
                            <li className="step step-primary cursor-pointer hover:underline hover:text-primary-focus" onClick={() => navigate('/vehicles')}>Select Vehicles</li>
                            <li className="step step-primary cursor-pointer hover:underline hover:text-primary-focus">Reserve</li>
                            <li className="step step-neutral">Payment</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reservation