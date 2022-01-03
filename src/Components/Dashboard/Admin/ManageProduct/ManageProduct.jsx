import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";

// Manage Product Components
const ManageProduct = () => {
  const [services, setServices] = useState([]);
  const { deleteSms } = useAuth();
  useEffect(() => {
    fetch("https://morning-refuge-65051.herokuapp.com/food")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // Delete a product
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((res) => {
      if (res.isConfirmed) {
        fetch(`https://morning-refuge-65051.herokuapp.com/food/${id}`, {
          method: "DELETE",
        });
        const remaining = services.filter((data) => data._id !== id);
        setServices(remaining);
        deleteSms();
      }
    });
  };

  return (
    <Container>
      <h4 className='heading'><span className="span">Manage Products</span></h4> <br />
      <Row className='justify-content-center'>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th className="text-center">Remove</th>
              </tr>
            </thead>
            {services.map((service) => (
              <tbody key={service._id} service={service}>
                <tr>
                  <td>
                    <img src={service.img} className='featureImg' alt='' />
                  </td>
                  <td>{service.title}</td>
                  <td>{service.price}</td>
                  <td className="text-center">
                    <button
                      className='btn  my-btn'
                      onClick={() => handleDelete(service._id)}>
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

export default ManageProduct;
