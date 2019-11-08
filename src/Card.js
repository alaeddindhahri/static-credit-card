import React from 'react';
import './myStyles.css';
import Sim from "./sim.png";
import Visa from "./visa.png"
import Mastercard from "./mastercard.png"


const CreditCard=() =>
    <div className="card-body">
        <h1>Credit Card</h1>
        <img className="sim" src={Sim} alt="sim"/>
        <div className="details-logos">
            <div className="details">
                <p className="card-number">1234 5678 9123 4567</p>
                <p className="expiration-date">month/year</p>
                <div className="pin-validation">
                    <p className="pin">3579</p>
                    <p className="valid-thru">valid <br/>thru</p>
                    <p className="validation">10/20</p>
                </div>
                <p className="cardholder">Cardholder</p>
            </div>
            <div className="logos">
                <img className="master-img" src={Mastercard} alt="master"/>
                <img className="visa-img" src={Visa} alt="visa"/>
            </div>
        </div>
    </div>
    
export default CreditCard;