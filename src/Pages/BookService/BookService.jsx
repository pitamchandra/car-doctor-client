import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const BookService = () => {
    const {user} = useContext(AuthContext)
    const service = useLoaderData()
    const {title, price, img, _id} = service;

    const handleBooking = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        const order = {
            customerName : name,
            date,
            email,
            price,
            serviceName : title,
            img,
            id: _id
        }
        console.log(order);
        fetch('https://car-doctor-server-pitamchandra.vercel.app/bookings', {
            method : 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('booked successfully!')
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <h3 className="text-3xl text-center text-orange-600 mb-8">Service name : {title}</h3>
            <form onSubmit={handleBooking} className="w-3/4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" name="email" defaultValue={user?.email} className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="price" name="price" defaultValue={'$' + price} className="input input-bordered" readOnly />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary" value="Booking Now" />
                </div>
            </form>
        </div>
    );
};

export default BookService;