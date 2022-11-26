import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { signInPop, logIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [er, setEr] = useState(null);


    const jwtToken = currentUser => {
        // console.log(currentUser)
        fetch('', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                localStorage.setItem('jwt-token', data.token)
            })
            .catch(er => console.error(er))
    }

    const handleSignInPop = (provider) => {
        signInPop(provider)
            .then(res => {
                const user = res.user;
                const currentUser = {
                    email: user.email
                }

                const userInfo = {
                    name: user.displayName,
                    email: user?.email,
                    img: user.photoURL,
                    role: 'buyer'
                };

                fetch('http://localhost:5000/setuser', {
                    method: 'PUT',
                    headers: {
                        "content-type": 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))



                //get jwt token
                // jwtToken(currentUser);
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(userData => {
                const user = userData.user;
                const currentUser = {
                    email: user.email
                }

                //get jwt token
                jwtToken(currentUser);


                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                const errorCode = error.code;
                setEr(errorCode);
                form.reset();
            })

    }

    return (
        <div>
            <div className='my-5'>
                <div className="bg-grey-lighter flex flex-col">
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <form onSubmit={handleLogIn} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 className="mb-8 text-4xl font-bold text-info text-center">Log In</h1>

                            <input
                                type="email"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" />

                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" />



                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-info text-white hover:bg-info-focus focus:outline-none my-1"
                            >Log In</button>
                            <p className="text-error mt-3">{er}</p>
                        </form>

                        <div className='flex my-5'>
                            <hr className="my-2 mx-auto w-40 h-1 bg-info-content rounded border-0 md:my-3 " /><h1 className='mx-2'>OR</h1><hr className="my-2 mx-auto w-40 h-1 bg-info-content rounded border-0 md:my-3" />
                        </div>

                        <button onClick={() => { handleSignInPop(googleProvider) }}
                            className="w-full bg-transparent hover:bg-green-500 text-green-300 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                        > <FaGoogle className='inline mr-1 mb-1' /> Log In With Google</button>


                        <div className="text-grey-dark mt-6">
                            Don't have an account?
                            <Link className="no-underline border-b border-blue text-blue" to="../signup/">
                                Sign Up
                            </Link>.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;