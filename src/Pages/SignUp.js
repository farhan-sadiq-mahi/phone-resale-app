import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [seller, setSeller] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleUserUpdate = (fullName, photoUrl) => {
        const profile = {
            displayName: fullName,
            photoURL: photoUrl
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))

    }
    // set the jwt token 
    const jwtToken = currentUser => {
        fetch('http://localhost:5000/jwt', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('jwt-token', data.token)
            })
            .catch(er => console.error(er))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(null);
        const form = event.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoUrl.value;
        let role = 'buyer';

        if (password.length < 6) {
            setError('Your password is not long enough')
            return
        }

        let userInfo = {}
        if (seller) {
            role = 'seller';
            userInfo = {
                name: fullName,
                email,
                img: photoURL,
                role,
                isVerified: false
            }
        }
        else {
            userInfo = {
                name: fullName,
                email,
                img: photoURL,
                role
            }
        }



        createUser(email, password)
            .then(userData => {
                handleUserUpdate(fullName, photoURL);
                const user = userData.user;
                const currentUser = {
                    email: user.email
                }
                // set user to the database

                fetch('http://localhost:5000/setuser', {
                    method: 'POST',
                    headers: {
                        "content-type": 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))

                //get jwt token
                jwtToken(currentUser);

                form.reset();
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.error(error);
                const errorCode = error.code;
                setError(errorCode);
                form.reset();

            })

    }



    return (
        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col my-5">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form onSubmit={handleSubmit} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-4xl font-bold text-info text-center">Sign up</h1>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullName"
                            placeholder="Full Name" />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="photoUrl"
                            placeholder="Photo URL" />
                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <label className="label cursor-pointer">
                            <span className="label-text text-gray-500 font-semibold">Join As a Seller</span>
                            <input onChange={() => setSeller(!seller)} type="checkbox" name="radio-10" className="radio checked:bg-blue-500" />
                        </label>
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-info text-white hover:bg-info-focus focus:outline-none my-1"
                        >Create Account</button>

                        <p className="text-error mt-3">{error}</p>

                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <Link className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </Link> and
                            <Link className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </Link>
                        </div>
                    </form>

                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <Link className="no-underline border-b border-blue text-blue" to="../login/">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;