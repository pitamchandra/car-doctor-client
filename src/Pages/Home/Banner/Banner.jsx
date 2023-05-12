import bg1 from '../../../assets/images/banner/1.jpg'
import bg2 from '../../../assets/images/banner/2.jpg'
import bg3 from '../../../assets/images/banner/3.jpg'
import bg4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            {/* slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src={bg1} className="w-full rounded-2xl"/>
                <div className='w-full absolute inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] flex items-center  rounded-2xl'>
                    <div className='w-1/2 ml-10 space-y-5 text-white'>
                        <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-error mr-6">Discover More</button>
                        <button className="btn btn-error btn-outline">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex gap-5 bottom-8 right-12">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            {/* slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src={bg2} className="w-full rounded-2xl"/>
                <div className='w-full absolute inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] flex items-center  rounded-2xl'>
                    <div className='w-1/2 ml-10 space-y-5 text-white'>
                        <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-error mr-6">Discover More</button>
                        <button className="btn btn-error btn-outline">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex gap-5 bottom-8 right-12">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            {/* slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <img src={bg3} className="w-full rounded-2xl"/>
                <div className='w-full absolute inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] flex items-center  rounded-2xl'>
                    <div className='w-1/2 ml-10 space-y-5 text-white'>
                        <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-error mr-6">Discover More</button>
                        <button className="btn btn-error btn-outline">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex gap-5 bottom-8 right-12">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            {/* slide 4 */}
            <div id="slide4" className="carousel-item relative w-full">
                <img src={bg4} className="w-full rounded-2xl"/>
                <div className='w-full absolute inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] flex items-center  rounded-2xl'>
                    <div className='w-1/2 ml-10 space-y-5 text-white'>
                        <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-error mr-6">Discover More</button>
                        <button className="btn btn-error btn-outline">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex gap-5 bottom-8 right-12">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> 
        </div>
    );
};

export default Banner;