import emailjs from "emailjs-com";
import React from 'react';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_7k0upch', 'template_iiiz33o', e.target, 'user_BhzMXkEkZqqfyMpVyAIiw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

    return(
        <div>
            
            <div className="container">
            <br></br><br></br><br></br>
            <center>
            <h2>Get In Touch With Us</h2>
            <p>You can send us a direct email through this form or private chat us in the chat section</p>
            </center>
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}