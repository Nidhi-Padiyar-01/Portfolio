import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../csscomponent/Contact.css";
import Loader from "./Loader.js";

function Contact() {
  const form = useRef();
  const [isloading, setIsLoading] = useState(false);//to hide the loading spinner
  //to access and update the state value
  const loader = (value) => {
    setIsLoading(value);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);//to display a loading spinner as soon as the user call is triggered

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
          setIsLoading(false);//to hide loading screen
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Contact">
      <form ref={form} onSubmit={sendEmail}>
        <div className="lab">
          <label>Name:  </label>
          <input type="text" name="user_name" />
        </div>
        <div className="lab">
          <label>Email:</label>
          <input type="email" name="user_email" />
        </div>
        <div className="lab">
          <label>Message:</label>
          <textarea name="message" />
          <div className="lab">
            {isloading ? (//ternary operator,adding conditional rendering
              <Loader />
            ) : (
              <button
                type="submit"
                className="btn"
                value="Send"
                onSubmit={() => Loader(false)}
              >
                submit
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
export default Contact;
