import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Sociallogin from "./Sociallogin";

const Login = () => {
  const { error, signInUsingEmail, user, sentResetPassByEmail } = useAuth();
  const [loginData, setLoginData] = useState({});

  // handle login redirect
  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleEmailLogin = (e) => {
    signInUsingEmail(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  return (
    <Container className='register py-5 mt-5'>
      <Row data-aos='zoom-in' md={2} sm={1} className='container-form h-100'>
        <Col>
          <div className='form-container py-5'>
            <form onSubmit={handleEmailLogin}>
              <h1>Sign in</h1>
              <Sociallogin></Sociallogin>
              <span className='fs-4'>or use your account</span>
              <input
                onBlur={handleOnBlur}
                type='email'
                name='email'
                placeholder='Email'
                required
              />
              <input
                onBlur={handleOnBlur}
                type='password'
                name='password'
                placeholder='Password'
                required
              />
              <button className='submit w-100' onClick={sentResetPassByEmail}>
                Forgot your password?
              </button>
              <input className='submit' type='submit' value='Sign In' />
            </form>
          </div>
        </Col>
        <Col>
          <div className='overlay-container py-2'>
            <div className='overlay py-5'>
              <div className='overlay-panel'>
                <h1>Hello, {user.displayName ? user.displayName : "Sir"}</h1>
                <p className='form-info'>
                  Enter your personal details and start journey with us
                </p>
                <Link to='/registration'>
                  <button className='ghost'>Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
