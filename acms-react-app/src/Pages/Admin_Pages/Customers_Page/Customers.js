import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../Components/Navigation_Bars/Logged_In/NavBar.js';
import Footer from '../../../Components/Footer/Footer.js';
import MechanicDisplay from '../../../Components/User_Components/MechanicDisplay.js';
import CustomerBlock from '../CustomerDetails_Page/CustomerBlock.js';
import './Customers.css';
import axios from 'axios';


function Customers() {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getCustomers();
      }, []); 

    function getCustomers(){
        axios.get("http://localhost:8080/api/v1/customers")
        .then(res=>{
            console.log('API response:', res); // Add this line
            if(res.status === 200){
                setCustomers(res.data);
            }
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
      <div>
       <Navbar/>
        <div className="content">
            <div className="mechanic-display">
                <MechanicDisplay/>
            </div>
            <div className="customer-table">
                <div className="top-of-table">
                    <p>CUSTOMER ACCOUNTS</p>
                    <div className="Search-box">
                        <input className="Search-box" type="text" placeholder="Search..."/>
                        <span className="search-icon">&#128269;</span>
                    </div>
                    <button className="add-button">Add+</button>
                </div>
                <div className="table-content">
                    <table>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE NUMBER</th>
                            </tr>
                        </thead>

                        <tbody>
                        {customers.map((customer) => (
                         <CustomerBlock key={customer.customerId} customer={customer} />
                         ))}
                    </tbody>
                    </table>
                </div>
            </div>
            <div className="customer-stamp">
            <img src="/customersImage.svg" alt="customer's Image"/>
            </div>
        </div>
       <Footer/>
      </div>
    );
  }

  export default Customers;
  