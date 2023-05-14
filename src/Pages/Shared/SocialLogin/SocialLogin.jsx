import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleLogin, githubLogin} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const path = location?.state?.pathname || '/';
    const handleGoogle = () =>{
        googleLogin()
        .then(result => {
            console.log(result.user);
            navigate(path, {replace: true})
        })
        .catch(error => console.log(error))
    }
    const handleGithub = () =>{
        githubLogin()
        .then(result => {
            console.log(result.user);
            navigate(path, {replace: true})
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="text-center">
            <button onClick={handleGoogle} className="btn text-white btn-error gap-2 mr-5">
                <FaGoogle></FaGoogle>
                Login
            </button>
            <button onClick={handleGithub} className="btn text-white btn-error gap-2">
                <FaGithub></FaGithub>
                Login
            </button>
        </div>
    );
};

export default SocialLogin;