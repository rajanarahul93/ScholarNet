import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Stay tune and get the latest updates</h1>
            <span>Receive insightful articles, course announcements, and exclusive offers directly in your inbox.</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>ScholarNet</h1>
            <span>Online Education & Learning Platform</span>
            <p>
            A small stream called Willow winds through their land, bringing life and nourishing the verdant fields.
            </p>

            <a href="https://twitter.com/rajanarahul7" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter icon"></i>
            </a>
            <a href="https://instagram.com/rajanarahul7" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram icon"></i>
            </a>
            <a href="https://github.com/rajanarahul93" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github icon"></i>
            </a>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className="box">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB" key={val.id}>
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                Visakhapatnam,Andhra Pradesh,India
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +91 9581335263
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                rajanarahul93@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Rahul Copyright ©2024 All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer
