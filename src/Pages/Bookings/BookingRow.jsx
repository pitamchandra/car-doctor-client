


const BookingRow = ({booking, handleDelete, handleBookingConfirm}) => {
    const { date,  serviceName, price, img , _id , status} = booking;
    
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        <td>
        <div className="avatar">
            <div className="w-24 rounded">
                <img src={img} />
            </div>
        </div>
        </td>
        <td>{date}</td>
        <td>{price}</td>
        <td>{serviceName}</td>
        <th>
          { status === 'confirm' ? <p className="font-bold text-primary">Confirmed</p> :
            <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
          }
        </th>
      </tr>
    );
};

export default BookingRow;