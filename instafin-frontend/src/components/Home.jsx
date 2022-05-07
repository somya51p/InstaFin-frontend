import { Opacity } from "@material-ui/icons";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import web from "../img.png";
import "./Home.css";

const Home = () => {
  return (
    <section id="#header" className="home">
      <div className="container" id="home">
      <div className="row">
        <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6 entry">
        <h1>
                Feel Organized without the Effort<br/> with{" "}
                <strong className="bn">InstaFin</strong>{" "}
              </h1>
          
          <h4>InstaFin implements a system that will see to Business Location, Sector Trend, <br/>Payment Habits of People in Location, Payment habit of Merchant 
                  Applicant<br/> to make Loan disbursement process Automatic, Easy and Swift</h4>
        
                  <div className="hii">
                <Link to="/home">
                  <button className="button">
                    <div className="pattern">
                      <div className="target inner bg4"></div>
                    </div>
                    <div className="text">Get Started</div>
                  </button>
                </Link>
              </div>
        </div>

        <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6 entryImg">
          <img
            className="title-image"
            id="robot"
            src={web}
            alt="robot"
          />
        </div>
      </div>
    </div>

    </section>
  );
};

export default Home;
