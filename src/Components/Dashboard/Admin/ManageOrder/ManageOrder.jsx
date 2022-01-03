import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";

// Manage Order page Components
const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const [oneOrder, setOneOrder] = useState({});
  const statusSms = () => {
    Swal.fire(
      "Well Done",
      "You have successfully Update Product Status",
      "success"
    );
  };
  const { deleteSms } = useAuth();
  useEffect(() => {
    fetch("https://morning-refuge-65051.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

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

  // Update status
  const handleUpdateStatus = (id) => {
    const url = `https://morning-refuge-65051.herokuapp.com/order/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setOneOrder(data));
    console.log(oneOrder.status);
    if (oneOrder.status === "Pending") {
      oneOrder.status = "Shipped";
      const updateOrder = {
        name: oneOrder.name,
        email: oneOrder.email,
        title: oneOrder.title,
        mobile: oneOrder.mobile,
        price: oneOrder.price,
        address: oneOrder.address,
        status: oneOrder.status,
      };
      setOneOrder(updateOrder);
      setOrders(updateOrder);
      console.log(oneOrder.status);

      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(oneOrder),
      });
      statusSms();
      const update = orders;
      setOrders(update);
    }
  };
  return (
    <Container>
      <Row className='justify-content-center my-3'>
      <h4 className='heading mb-4'><span className="span">Manage Order</span></h4> <br />
        <Col>
          <Table>
            <thead>
              <tr>
                <th>Product</th>
                <th>User</th>
                <th>Email</th>
                <th>Status</th>
                <th>Remove</th>
              </tr>
            </thead>
            {orders.map((order) => (
              <tbody key={order._id} order={order}>
                <tr>
                  <td>{order.title}</td>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>
                    {" "}
                    <button
                      title='Clicked Panding to Shipped'
                      className='btn  my-btn'
                      onClick={() => handleUpdateStatus(order._id)}>
                                {order.status}
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                    </button>{" "}
                  </td>
                  <td>
                    <button
                      className='btn  my-btn'
                                onClick={() => handleDelete(order._id)}>
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

export default ManageOrder;
