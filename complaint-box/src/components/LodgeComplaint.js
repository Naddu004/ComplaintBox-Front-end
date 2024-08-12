import React from 'react'
import { Link } from 'react-router-dom'
function LodgeComplaint() {
  // const email = document.getElementById('email');
  // const otp_verify = document.getElementsByClassName('otp_verify')[0];

  // let otp_val = Math.floor(Math.random() * 10000);
  // let emailbody = `<h2>Your OTP is</h2>${otp_val}`;
  // email.send({
  //   SecureToken: "43a3ecdb-f07f-4d13-b94e-b2adbc25162a",
  //   To: email.value,
  //   From: "dhabenishant@gmail.com",
  //   Subject: "Email OTP using JavaScript",
  //   Body: emailbody,
  // }).then(
  //   message => {
  //     if (message === "OK")
  //       alert("OTP sent to your email" + email.value);

  //     otp_verify.style.display = "flex";
  //     const otp_inp = document.getElementById('otp_inp');
  //     const otp_btn = document.getElementById('otp-btn');

  //     otp_btn.addEventListener('click', () => {
  //       if (otp_inp.value == otp_val) {
  //         alert("Email address verified...");
  //       }
  //       else {
  //         alert("Invalid OTP");
  //       }

  //     })
  //   }
  // );

  return (
    <section className='lodge-form'>
      <div className='form'>
        <h2 className='h2-cls'>LODGE COMPLAINT</h2>
        <input type="email" id="email" placehoclder='Enter mail...' />
        <div className='otp_verify'>
          <input type='text' id='otp_inp' placeholder='Enter OTP' />
          <button className='btn1' id='otp-btn'>Verify</button>
        </div>
        <button className='btn1'>Send OTP</button>
      </div>
    </section>
  )
}

export default LodgeComplaint
