import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])

    return (
        <div>
            <div className="text-center space-y-5">
                <p className="text-orange-700 font-bold">Services</p>
                <h2 className="text-black font-extrabold text-4xl">Our Services Area</h2>
                <p className="">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service= {service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;