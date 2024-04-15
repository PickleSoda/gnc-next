'use client'

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [error, setError] = useState({
        name: false,
        email: false,
        message: false
    })

    const [focused, setFocused] = useState({ name: false, message: false, email: false })

    const handleFocus = (field: any) => {
        setFocused({ ...focused, [field]: true });
    }

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // You can perform form validation or submit data here
        console.log(formData);
    }

    const onChange = () => {}

    const submit = () => {
        let hasError = false;
      
        // Check for empty fields
        const newErrorState = {
          name: formData.name.length < 1,
          email: formData.email.length < 1,
          message: formData.message.length < 1,
        };
      
        setError(newErrorState);
      
        // Check if any required field is empty
        if (Object.values(newErrorState).some((field) => field)) {
          toast.error('Please fill all required fields');
          hasError = true;
        }
      
        // Check email format only if all required fields are filled
        if (!hasError) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(formData.email)) {
            toast.error('Please enter a valid email address');
            hasError = true;
          }
        }
      
        if (!hasError) {
          toast.success('Form submitted successfully');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        }
      }

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <ToastContainer />
            <label>
                <input
                    className={error.name ? 'has-error' : ''}
                    placeholder={formData.name.length > 0 ? '' : 'Name'}
                    name="name"
                    onFocus={() => handleFocus('name')}
                    onChange={handleChange}
                    value={formData.name}
                />
                {formData.name.length > 0 && (
                    <span style={{ top: '-15px' }}>
                        Name
                    </span>
                )}
            </label>

            <label>
                <input
                    className={error.email? 'has-error' : ''}
                    placeholder={formData.email.length > 0 ? '' : 'Email'}
                    name="email"
                    onFocus={() => handleFocus('email')}
                    onChange={handleChange}
                    value={formData.email}
                />
                {formData.email.length > 0 && (
                    <span style={{ top: '-15px'}}>
                        Email
                    </span>
                )}
            </label>

            <label>
                <textarea
                    className={error.message ? 'has-error' : ''}
                    placeholder={formData.message.length > 0 ? '' : 'Message'}
                    name="message"
                    onFocus={() => handleFocus('message')}
                    onChange={handleChange}
                    value={formData.message}
                />
                {formData.message.length > 0 && (
                    <span style={{ top: '-15px' }}>
                        Message
                    </span>
                )}
            </label>

            <div style={{margin: '10px 0'}}>
                <ReCAPTCHA
                    sitekey="6Lf2orUpAAAAAG6ReG7GP0GGb4PwW2MWEy6rS0Sz"
                    onChange={onChange}
                />
            </div>
            <button type="submit" onClick={() => submit()}>Submit</button>
        </form>
    )
}

export default ContactForm