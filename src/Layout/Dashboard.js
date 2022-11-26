import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loader from '../SharedComponent/Loader';
import Navbar from '../SharedComponent/Navbar';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const { data, isLoading } = useQuery({
        queryKey: ['role'],
        queryFn: () => fetch(`http://localhost:5000/getrole?email=${user.email}`)
            .then(res => res.json())
    })


    if (isLoading) {
        return <Loader />
    }
    return (
        <>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden my-5">Dashboard Menu</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content --> */}

                        {/* Buyers only  */}
                        {
                            data.userRole === 'buyer' &&
                            <li><Link to={'/dashboard/myorders'}>My Orders</Link></li>
                        }
                        {/* Sellers only */}
                        {
                            data.userRole === 'seller' &&
                            <>
                                <li><Link to={'/dashboard/addproduct'}>Add A Product</Link></li>
                                <li><Link to={'/dashboard/myproducts'}>My Product</Link></li>
                            </>
                        }
                        {/* Admins Only */}
                        {
                            data.userRole === 'admin' &&
                            <>
                                <li><Link to={'/dashboard/allsellers'}>All Sellers</Link></li>
                                <li><Link to={'/dashboard/allbuyers'}>all Buyers</Link></li>
                                <li><Link to={'/dashboard/reporteditems'}>Reported Items</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;