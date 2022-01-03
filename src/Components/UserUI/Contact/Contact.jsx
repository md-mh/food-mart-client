import React from 'react';
import '../ProductItem/ProductItem.css'


// Homepage Contact area 
const Contact = () => {
    return (
        <div className=" py-5 text-black border-5">
        <div className="container">
            <div className="row">
                <h1 className="text-center heading"><span className="span">Contact Us</span></h1>
            </div>
            <div className="row mb-5 my-4">
                <h4 style={{ textAlign: "center" }}>We'd love to hear from you!</h4>
            </div>
            <form  className='shadow-lg py-5'>
            <div className="row input-container">
                <div className="col-xs-12">
                    <div className="styled-input wide">
                        <input name="name" type="text" required />
                        <label>Name</label>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="styled-input">
                        <input type="text" name="email" required />
                        <label>Email</label>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="styled-input" style={{ float: "right;" }}>
                        <input type="text" name="phone" required />
                        <label>Phone Number</label>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="styled-input wide">
                        <textarea name="sms" required></textarea>
                        <label>Message</label>
                    </div>
                </div>
                <div className="col-xs-12">
                    <button type='submit' className="btn-lrg submit-btn">Send Message</button>
                </div>
            </div>
            </form>
        </div>

    </div>
    );
};

export default Contact;