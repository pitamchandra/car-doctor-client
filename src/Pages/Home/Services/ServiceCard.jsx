import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa'

const ServiceCard = ({service}) => {
    const {img, title, price, _id} = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-6 pt-6">
                <img src={img} alt="Shoes" className="rounded-xl h-52" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <div className="flex text-orange-700 font-bold">
                    <p>Price : {price}</p>
                    <Link to={`/bookService/${_id}`}><FaArrowRight></FaArrowRight></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;