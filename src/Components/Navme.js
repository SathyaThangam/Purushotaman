import React, { Component } from 'react'
import './Mycss.css';


export default class Navbar extends Component {
    render() {
        return (
            <div>
            <div className="MainClass">
                <div className="lists">
                 <ul><li><img src = 'asd.png'/></li></ul>   
                <ul><li><a>ABOUT US </a></li></ul>
                <ul><li><a>rPool <sup>New</sup></a></li></ul>
                <ul><li><a>HOTELS</a></li></ul>
                <ul><li><a>BUS HIRE</a></li></ul>
                <ul><li><a>PILGRIMAGES</a></li></ul>
                </div>
                <div className="lists">
                    <ul><li><a>Help</a></li></ul>
                    <div className="dropdown">
                    <button className="dropbtn">Manage Booking
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Bus Tickets</a>
                        <a href="#">Cancel</a>
                        <a href="#">Reschedule</a>
                        <a href="#">Print/Download</a>
                        <a href="#">Email/SMS</a>
                        <a href="#">Hotel Tickets</a>
                        <a href="#">Cancel/Refund</a>

                    </div>
                    </div>
                    <div className="dropdown">
                    <button className="dropbtn"><img src = 'user.png'/>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Sign in/Sign UP</a>

                    </div>
                    </div> 
                </div>

                
                </div>
            </div>
        )
    }
}