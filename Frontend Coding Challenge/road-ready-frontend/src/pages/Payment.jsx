import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';

const Payment = () => {
    const {reservationId} = useParams();
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('Success');
    const [reservation, setReservation] = useState(null);

    const navigation = useNavigate();

    useEffect(() => {
        getReservationDetails();
    }, [reservationId]);

    useEffect(() => {
        if (reservation?.vehicle) {
            const start = new Date(reservation.pickupDate);
            const end = new Date(reservation.dropoffDate);
            const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
            setAmount(days * reservation.vehicle.pricePerDay);
        }
    }, [reservation]);

    const getReservationDetails = async () => {
        const token =localStorage.getItem('token');

        try {
            const res = await axios.get(`http://localhost:8081/reservations/${reservationId}`, {
                headers: {Authorization: `Bearer ${token}`},
            });
            setReservation(res.data);
        } catch (e) {
            console.log("Error getting reservation: " + e);
        }
    };

    const makePayment = async (event) => {
        event.preventDefault();

        const paymentDate = new Date().toISOString().split('.')[0];
        const paymentData = {reservationId, amount, paymentMethod, paymentStatus, paymentDate};
        const token = localStorage.getItem('token');

        try {
            const res = await axios.post("http://localhost:8081/payments", paymentData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert('Payment Completed');
            console.log(res.data); // Remove this later
            navigation(`/review/${res.data.paymentId}`);
        } catch(e) {
            console.log("Error making payment: " + e);
            alert('Payment Failed');
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

                {reservation?.vehicle && (
                    <div className="bg-base-100 p-6 rounded-xl shadow-xl space-y-4">
                        <img
                            src={reservation.vehicle.imageUrl}
                            alt={`${reservation.vehicle.make} ${reservation.vehicle.model}`}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <h2 className="text-3xl font-bold text-primary">{reservation.vehicle.make}</h2>
                        <p className="text-xl text-base-content/80">{reservation.vehicle.model}</p>

                        <div className="grid grid-cols-2 gap-4 text-base-content">
                            <p><strong>Year:</strong> {reservation.vehicle.year}</p>
                            <p><strong>Location:</strong> {reservation.vehicle.location}</p>
                            <p>
                                <strong>Status:</strong>{' '}
                                <span className={`badge ${reservation.vehicle.status === 'Available' ? 'badge-success' : 'badge-error'}`}>
                                    {reservation.vehicle.status}
                                </span>
                            </p>
                            <p><strong>License Plate:</strong> {reservation.vehicle.licensePlate}</p>
                            <p className="col-span-2"><strong>Features:</strong> {reservation.vehicle.features}</p>
                            <p className="col-span-2 text-lg font-semibold text-primary">
                                ₹{reservation.vehicle.pricePerDay} / day
                            </p>
                        </div>
                    </div>
                )}

                <div className="flex flex-col justify-between">
                    <div className="card bg-base-100 shadow-xl p-6 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">Make Payment</h3>
                        <form onSubmit={makePayment} className="space-y-4">
                            <div>
                                <label className="label font-medium">Total Amount</label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full"
                                    value={`₹${amount}`}
                                    disabled
                                />
                            </div>
                            <div>
                                <label className="label font-medium">Payment Method</label>
                                <select
                                    className="select select-bordered w-full"
                                    required
                                    value={paymentMethod}
                                    onChange={(e) => setPaymentMethod(e.target.value)}>
                                    <option value="">Select Method</option>
                                    <option value="UPI">UPI</option>
                                    <option value="Card">Card</option>
                                    <option value="Cash">Cash</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary w-full text-lg">
                                Complete Payment
                            </button>
                        </form>
                    </div>

                    <div className="mt-8">
                        <ul className="steps w-full">
                            <li className="step step-primary cursor-pointer hover:text-primary-focus" onClick={() => navigation('/vehicles')}>Select Vehicles</li>
                            <li className="step step-primary">Reserve</li>
                            <li className="step step-primary">Payment</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment