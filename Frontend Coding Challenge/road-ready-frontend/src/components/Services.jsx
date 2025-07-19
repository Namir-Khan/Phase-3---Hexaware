import React from 'react';

const services = [
    {
        title: 'Vehicle Rentals',
        description: 'Choose from a wide range of cars at affordable rates.',
        icon: '🚗',
    },
    {
        title: '24/7 Roadside Assistance',
        description: 'We’ve got you covered in case of any emergencies.',
        icon: '🛠️',
    },
    {
        title: 'Insurance Included',
        description: 'All rentals come with basic insurance coverage.',
        icon: '🛡️',
    },
    {
        title: 'Flexible Booking',
        description: 'Easy pickup and drop-off at your convenience.',
        icon: '📅',
    },
];

const cities = [
    { name: 'Mumbai', imageUrl: 'https://media.gettyimages.com/id/520120864/photo/bombay-at-twilight.jpg?s=612x612&w=0&k=20&c=0edqDWGDKOSDEmbWHQlk7tanjYO0qAQdjkPwcG-jx2Q=' },
    { name: 'Pune', imageUrl: 'https://media.gettyimages.com/id/157767374/photo/deepostav-at-shaniwarwada.jpg?s=612x612&w=0&k=20&c=5OntXPV8qHoL3rEWMFm8XLSnA0kdb5-trkhR1z8m4wY=' },
    { name: 'Bangalore', imageUrl: 'https://media.gettyimages.com/id/1456087669/photo/an-aerial-view-of-world-trade-center-bangalore-india.jpg?s=612x612&w=0&k=20&c=o1Ax3dJfqZlE7xTDbOGud70rUtA9g--pJLeN_oV_qUI=' },
    { name: 'Delhi', imageUrl: 'https://media.gettyimages.com/id/505757382/photo/jama-masjid-mosque-in-delhi.jpg?s=612x612&w=0&k=20&c=Ci5v7-1BNincybEBzsppP16qx5D29r2PACxSDjMf2Tk=' },
    { name: 'Hyderabad', imageUrl: 'https://media.gettyimages.com/id/175804012/photo/hyderabad-blues.jpg?s=612x612&w=0&k=20&c=gS8eQVRxorkiyeAvf9nTStwfgLFbcAaBtupdgBWr_sc=' },
    { name: 'Kolkata', imageUrl: 'https://media.gettyimages.com/id/536118160/photo/howrah-bridge-in-kolkata.jpg?s=612x612&w=0&k=20&c=FCQbIrf-IR4YE_QgiIA0fy-dOABfAscsXzjW1of9Mw0=' },
];

const Services = () => {
    return (
        <div className="bg-base-200 py-16 px-6">
            <section id='services' className="max-w-7xl mx-auto mb-36">
                <h2 className="text-4xl font-extrabold text-center text-primary mb-12">Our Services</h2>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <div key={index} className="card bg-base-100 shadow-xl p-6 rounded-xl transition-transform hover:scale-105">
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-base-content/80">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-primary mb-12">Top Cities We Serve</h2>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {cities.map((city, index) => (
                        <div key={index} className="relative rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition">
                            <img
                                src={city.imageUrl}
                                alt={city.name}
                                className="w-full h-60 object-cover group-hover:scale-105 transition duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-bold drop-shadow">{city.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;