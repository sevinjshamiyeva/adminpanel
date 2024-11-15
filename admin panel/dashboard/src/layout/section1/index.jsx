import React from "react";
import "./section1.scss";
import MyLineChart from "../../components/chart";
import Charts from "../../components/chart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartShopping,
  faSackDollar,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Section1() {
  return (
    <>
      <section className="section1">
        <div className="container">
          <h3>Dashboard</h3>
          <div className="totals">
            <div className="count">
              <div className="total">
                <div className="icon">
                  <i className="bi bi-bag"></i>
                </div>
                <div className="detail">
                  <h3>1,995</h3>
                  <p>Total sales</p>
                </div>
              </div>
              <div className="total">
                <div className="icon">
                  <i className="bi bi-cart2"></i>
                </div>
                <div className="detail">
                  <h3>2,001</h3>
                  <p>Dayily visit</p>
                </div>
              </div>
              <div className="total">
                <div className="icon">
                  <i className="bi bi-coin"></i>
                </div>
                <div className="detail">
                  <h3>$2,632</h3>
                  <p>Total income</p>
                </div>
              </div>
              <div className="total">
                <div className="icon">
                  <FontAwesomeIcon icon={faNewspaper} size="sm" />
                </div>
                <div className="detail">
                  <h3>1,711</h3>
                  <p>Total orders</p>
                </div>
              </div>
            </div>
            <div className="chart">
              <Charts />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;
