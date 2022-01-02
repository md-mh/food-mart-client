import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

// Admin route component 

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, loading } = useAuth();
    if (loading) {
        return (
            <div className="spinner">
                <Spinner animation="grow" variant="primary" />
            </div>
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email && admin ? children : <Redirect
                to={{
                    pathname: "/404",
                    state: { from: location }
                }}
            ></Redirect>}
        >
        </Route>
    );
};

export default AdminRoute;