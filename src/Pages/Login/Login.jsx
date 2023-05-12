import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const Login = () => {

    const {login} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const path = location?.state?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(path)
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
                        <form onSubmit={handleLogin}>
                            <h2 className='text-3xl font-bold text-center mb-5'>Please Login</h2>
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
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='mt-5 text-center'>New to Car Doctor? <Link to="/register" state={location?.state} className='text-red-500'>Register Now</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;