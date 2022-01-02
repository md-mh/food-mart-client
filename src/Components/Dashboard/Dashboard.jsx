import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Switch, useRouteMatch } from 'react-router';
import AdminRoute from '../Route/AdminRoute';
import PrivateRoute from '../Route/PrivateRoute';
import AddProduct from './Admin/AddProduct/AddProduct';
import CreateAdmin from './Admin/CreateAdmin/CreateAdmin';
import ManageOrder from './Admin/ManageOrder/ManageOrder';
import ManageProduct from './Admin/ManageProduct/ManageProduct';
import AddReview from './User/AddReview/AddReview';
import MyOrder from './User/MyOrder/MyOrder';
import Payment from './User/Payment/Payment';
import Welcome from './User/Welcome/Welcome';

// After Login Dashboard Page with their Components
const Dashboard = () => {
    let { path } = useRouteMatch();
    return (
        <Container className="my-5">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>

                    <Switch>
                        <PrivateRoute exact path={`${path}/`}> <Welcome></Welcome> </PrivateRoute>
                        <PrivateRoute path={`${path}/myOrder`}> <MyOrder></MyOrder></PrivateRoute>
                        <PrivateRoute path={`${path}/payment`}> <Payment></Payment> </PrivateRoute>
                        <PrivateRoute path={`${path}/addReview`}> <AddReview></AddReview> </PrivateRoute>

                        <AdminRoute path={`${path}/manageOrder`}> <ManageOrder></ManageOrder> </AdminRoute>
                        <AdminRoute path={`${path}/addProduct`}> <AddProduct></AddProduct> </AdminRoute>
                        <AdminRoute path={`${path}/manageProduct`}> <ManageProduct></ManageProduct> </AdminRoute>
                        <AdminRoute path={`${path}/createAdmin`}> <CreateAdmin></CreateAdmin> </AdminRoute>
                    </Switch>

                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;