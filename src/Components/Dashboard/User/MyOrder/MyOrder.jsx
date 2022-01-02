import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';



// My Order page Components 
const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [myorder, setMyorder] = useState([]);
    useEffect(() => {
        fetch('https://morning-refuge-65051.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    useEffect(
        () => {
            const foundOrder = orders.filter(order => order.email === user.email)
            setMyorder(foundOrder);
        }, [orders, user.email])

    // Delete an order 
    const handleDelete = id => {
        const confirm = window.confirm("Are you wants to delete ?");
        if (confirm) {
            fetch(`https://morning-refuge-65051.herokuapp.com/order/${id}`, {
                method: "DELETE"
            })
            const remaining = orders.filter(data => data._id !== id);
            setOrders(remaining);
        }
    }
    return (
        <Container>
            <Row className="justify-content-center my-3">
                <h2 className="text-center">My Order</h2>
                <Col md={11}>
                    <Table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        {
                            myorder.map(order => <tbody key={order._id} order={order}>
                                <tr>
                                    <td>{order.title}</td>
                                    <td>{order.name}</td>
                                    <td> <Button className="btn-warning">{order.status}</Button> </td>
                                    <td><Button className="btn-danger" onClick={() => handleDelete(order._id)}>Delete</Button></td>
                                </tr>
                            </tbody>)
                        }
                    </Table>

                </Col>
            </Row>
        </Container>
    );
};

export default MyOrder;