
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div class="from-bg">
            <div class="container pt-5">
                <div className="shadow-lg contact-from">      
                    <div className="row pt-3 pl-4 pr-4 ">
                        <div class=" col-md-6 mt-4">                        
                            <h4>CONTACT US</h4>
                            <h1>Let's Get in<br/>Touch</h1>
                            <h5 class="">Address</h5>
                            <h5 class="">+88 01728165115</h5>
                            <h5 class="">Kishoreganj, Dhaka.</h5>                        
                        </div>                      
                        <div className=" col-md-6 text-center pb-5 mt-5">
                            <div>                            
                                <form onSubmit={handleSubmit(onSubmit)} className="" >
                                    <input name="name" className="name" {...register("name", { required: true })} placeholder="Your Name" /> <br/>
                                    <input name="email" className="email" {...register("email", { required: true })} placeholder="Your Email"/> <br/>
                                    <textarea  name="message" className="massage"{...register("message", { required: true })} placeholder="Your Message"/> <br/><br/>           
                                    {errors.exampleRequired && <span>This field is required</span>}           
                                    <Button type="submit" variant="success" className="submit-button">Send Message</Button>
                                </form>
                            </div>
                        </div>      
                    </div>
                </div>                        
            </div>
        </div>            
    );
};

export default Contact;