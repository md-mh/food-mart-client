import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";

// My Order page Components
const MyOrder = () => {
  const { user, deleteSms } = useAuth();
  const [orders, setOrders] = useState([]);
  const [myorder, setMyorder] = useState([]);
  useEffect(() => {
    fetch("https://morning-refuge-65051.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  useEffect(() => {
    const foundOrder = orders.filter((order) => order.email === user.email);
    setMyorder(foundOrder);
  }, [orders, user.email]);

  // Delete an order
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://morning-refuge-65051.herokuapp.com/order/${id}`, {
          method: "DELETE",
        });
        deleteSms();
        const remaining = orders.filter((data) => data._id !== id);
        setOrders(remaining);
      }
    });
  };
  return (
    <Container>
      <Row className="justify-content-center my-3">
        <h4 className="heading text-center mb-4">
          <span className="span">My Order</span>
        </h4>{" "}
        <br />
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
            {myorder.map((order) => (
              <tbody key={order._id} order={order}>
                <tr>
                  <td>{order.title}</td>
                  <td>{order.name}</td>
                  <td>
                    {" "}
                    <button className="btn my-btn">
                      {order.status}
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>{" "}
                  </td>
                  <td>
                    <button
                      className="btn my-btn"
                      onClick={() => handleDelete(order._id)}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default MyOrder;
