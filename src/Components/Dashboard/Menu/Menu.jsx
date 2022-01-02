import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Menu.css'


// Dashboard Menu Components
const Menu = () => {
    const { url } = useRouteMatch();
    const { user, admin, logOut } = useAuth();

    return (
        <>
            <div className="dashboardMenu">
                <h3>DashBoard Menu</h3>
                <Link className="nav-link" to={`${url}/myOrder`}>My Order</Link>
                <Link className="nav-link" to={`${url}/payment`}>Payment</Link>
                <Link className="nav-link" to={`${url}/addReview`}>Add a Review</Link>

                {
                    user.email && admin ?
                        <span>
                            <hr />
                            <Link className="nav-link" to={`${url}/manageOrder`}>Manage Order</Link>
                            <Link className="nav-link" to={`${url}/addProduct`}>Add Product</Link>
                            <Link className="nav-link" to={`${url}/manageProduct`}>Manage Product</Link>
                            <Link className="nav-link" to={`${url}/createAdmin`}>Create an Admin</Link>
                        </span>
                        : <span style={{ display: 'none' }}></span>
                }

                <div className="text-center my-3">
                    {user.email ?
                        <button onClick={logOut} className="login p-2" >Logout</button>
                        : <Link className="login p-2" to="/login">Login</Link>}
                </div>
            </div>
        </>
    );
};

export default Menu;