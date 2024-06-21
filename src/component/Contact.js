import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../csscomponent/Contact.css";
import Loader from "./Loader.js";

function Contact() {
  const form = useRef();
  const [isloading, setIsLoading] = useState(false); //to hide the loading spinner
  //to access and update the state value
  const loader = (value) => {
    setIsLoading(value);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); //to display a loading spinner as soon as the user call is triggered

    emailjs
      .sendForm(
        "service_9rlqz1k",
        "template_hpx4rk1",
        form.current,
        "rbJN6z1w_BlvVWxgv"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully");
          setIsLoading(false); //to hide loading screen
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="image-section">
        <img className="girl" src="girl.jpg" alt="Girl" />
      </div>
      <div className="form-section">
        <form ref={form} onSubmit={sendEmail}>
          <h1>Contact Me</h1>
          <div className="lab">
            <input type="text" placeholder="Your Name" name="user_name" required />
          </div>
          <div className="lab">
            <input type="email" placeholder="Your Email" name="user_email" required />
          </div>
          <div className="lab">
            <textarea name="message" placeholder="Address" required />
          </div>
          <div className="lab">
            {isloading ? ( // Conditional rendering using a ternary operator
              <Loader />
            ) : (
              <button type="submit" className="btn" value="Send">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
