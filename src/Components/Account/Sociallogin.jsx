import React from "react";
import { Button } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Account.css";

const Sociallogin = () => {
  const { signInUsingGoogle } = useAuth();

  // handle login redirect
  const location = useLocation();
  const history = useHistory();

  const handleGoogleLogin = () => {
    signInUsingGoogle(location, history);
  };

  return (
    <div>
      <br />
      <h5 className='fs-4'>Social Login</h5>
      <br />

      {/* Social button  */}

      <Button className='fs-4' variant='light' onClick={handleGoogleLogin}>
        {" "}
        <h5>
          <FcGoogle /> Google sign In
        </h5>
      </Button>
    </div>
  );
};

export default Sociallogin;
