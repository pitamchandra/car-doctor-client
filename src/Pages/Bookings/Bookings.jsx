import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {
    const {user} = useContext(AuthContext)

    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=> setBookings(data))
        .catch(error => console.log(error))
    } , [url])

    const handleDelete = (id) =>{
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                    method : 'DELETE'
                })
                .then(res=> res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        const remaining = bookings.filter(book => book._id !== id)
                        setBookings(remaining)
                        Swal.fire(
                            'Deleted Successfully!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
            //   
            }
          })
    }

    const handleBookingConfirm = (id) =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method : 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body : JSON.stringify({status : 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                const remaining = bookings.filter(booking => booking._id !== id)
                const updated = bookings.find(booking => booking._id === id)
                updated.status = 'confirm';
                const newBookings = [updated, ...remaining]
                setBookings(newBookings)
            }
        })
    }

    return (
        <div>
            <h2 className="text-4xl mb-5">total bookings : <span className="text-orange-400"> {bookings.length}</span> </h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Image</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Service</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        bookings.map(booking => <BookingRow
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                            handleBookingConfirm={handleBookingConfirm}
                        ></BookingRow>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;