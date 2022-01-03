import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Account.css";
import Sociallogin from "./Sociallogin";

const Registration = () => {
  const { error, registrationUsingEmail } = useAuth();

  const [loginData, setLoginData] = useState({});

  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleRegistration = (e) => {
    registrationUsingEmail(
      loginData.name,
      loginData.email,
      loginData.password,
      history
    );
    e.preventDefault();
  };
  return (
    <Container className='register pt-5 my-5'>
      <Row data-aos='zoom-in' md={2} sm={1} className=' container-form h-100'>
       
        <Col>
          <div className='overlay-container py-2'>
            <div className='overlay py-5'>
              <div className='overlay-panel'>
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <Link to='/login'>
                  <button className='ghost'>Sign In</button>
                </Link>
              </div>
            </div>
          </div>
              </Col>
              <Col>
          <div className='form-container py-5'>
            <form onSubmit={handleRegistration}>
              <h1>Create Account</h1>
              <Sociallogin></Sociallogin>
              <span className='fs-4 py-3'>
                or use your email for registration
              </span>
              <input
                onBlur={handleOnBlur}
                name='name'
                type='text'
                placeholder='Name'
              />
              <input
                onBlur={handleOnBlur}
                name='email'
                type='email'
                placeholder='Email'
              />
              <input
                onBlur={handleOnBlur}
                name='password'
                type='password'
                placeholder='Password'
              />
              <input type='submit' className='submit' value='Sign Up' />

              <p className='text-danger'>{error}</p>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
