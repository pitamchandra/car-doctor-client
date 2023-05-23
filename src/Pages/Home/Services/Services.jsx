import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([])
    const [isAscending, setIsAscending] = useState(true)
    const searchRef = useRef(null)
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        fetch(`https://car-doctor-server-five.vercel.app/services?search=${searchText}&sort=${isAscending ? 1 : -1}`)
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[isAscending,searchText])

    const handleSearch = () => {
        console.log(searchRef.current.value);
        setSearchText(searchRef.current.value)
    }

    return (
        <div>
            <div className="text-center space-y-5">
                <p className="text-orange-700 font-bold">Services</p>
                <h2 className="text-black font-extrabold text-4xl">Our Services Area</h2>
                <p className="">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" ref={searchRef} placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <button className="btn btn-primary mt-5" onClick={() => setIsAscending(!isAscending)}>{isAscending ? "High to Low" : "Low to High"}</button>
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