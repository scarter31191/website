import React, { Component } from 'react';
import SingleService from './SingleService';

const services = [
    {title: 'E-Commerce', dscription: '', icon: 'fa-shopping-cart'},
    {title: 'Responsive Design', dscription: '', icon: 'fa-laptop'},
    {title: 'Web Security', dscription: '', icon: 'fa-lock'}
];

class Services extends Component {
    render() {
        return (
            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Services</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row text-center">
                        {services.map((services, index) => {
                            return <SingleService {...services} key={index} />
                        })}
                        
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;
