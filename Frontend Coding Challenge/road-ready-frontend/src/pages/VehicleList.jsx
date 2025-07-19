import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import VehicleCard from '../components/VehicleCard';

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);
    const [flag, setFlag] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        getVehicles();
    }, [flag]);
    
    const getVehicles = async () => {
        const token = localStorage.getItem('token');

        try {
            const res = await axios.get('http://localhost:8081/vehicles', {
                headers: {Authorization: `Bearer ${token}`},
            });
            setVehicles(res.data);
        } catch(e) {
            console.log("Error while retrival of vehicles :" + e);
        }
    };

    return (
        <div className="min-h-[92vh] bg-base-200 py-10 px-4">
            <h1 className="text-4xl font-bold text-center mb-10 text-primary">Available Vehicles</h1>

            <div className="flex flex-wrap justify-center gap-6">
                {vehicles.length === 0 ? (
                    <p className="text-center text-lg text-base-content">No vehicles found.</p>
                ) : (
                    vehicles.map((vehicle, index) => (
                        <VehicleCard
                            key={index}
                            vehicleId={vehicle.vehicleId}
                            make={vehicle.make}
                            model={vehicle.model}
                            year={vehicle.year}
                            licensePlate={vehicle.licensePlate}
                            status={vehicle.status}
                            location={vehicle.location}
                            pricePerDay={vehicle.pricePerDay}
                            imageUrl={vehicle.imageUrl}
                            features={vehicle.features}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default VehicleList