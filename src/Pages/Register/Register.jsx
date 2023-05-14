import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {

    const {register} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const path = location?.state?.pathname || '/';
  
    const handleRegister = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email , password);
        register(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            navigate(path, {replace: true})
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-full justify-between gap-10">
                <div className=" mr-6">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card w-1/2 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <h2 className='text-3xl font-bold text-center mb-5'>Please Register</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className='mt-5 text-center'>Already have an account? <Link to="/login" className='text-red-500'>Login Now</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;