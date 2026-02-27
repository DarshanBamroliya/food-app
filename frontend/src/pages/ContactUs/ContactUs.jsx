
import React, { useState } from 'react'
import './ContactUs.css'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // Here you would typically send the form data to your backend
        alert("Thank you for reaching out! We will get back to you soon.");
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    }

    return (
        <div className='contact-us'>
            <div className="contact-hero">
                <h1>Get in Touch</h1>
                <p>Have questions about your order or want to partner with us? Our team is here to help.</p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <div className="info-item">
                        <div className="icon">📍</div>
                        <div>
                            <h3>Our Location</h3>
                            <p>123 Tomato Street, Foodie Valley, FL 33101</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="icon">📞</div>
                        <div>
                            <h3>Call Us</h3>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="icon">✉️</div>
                        <div>
                            <h3>Email Support</h3>
                            <p>support@tomato.com</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={onSubmitHandler}>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input name='name' onChange={onChangeHandler} value={formData.name} type="text" placeholder="Your name" required />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input name='email' onChange={onChangeHandler} value={formData.email} type="email" placeholder="Your email" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input name='subject' onChange={onChangeHandler} value={formData.subject} type="text" placeholder="How can we help?" required />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea name='message' onChange={onChangeHandler} value={formData.message} rows="6" placeholder="Write your message here..." required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs
