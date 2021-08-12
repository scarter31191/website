import React, { Component } from 'react'
import Header from '../Common/Header'
import Services from '../Common/Services'
import Portfolio from '../Common/Portfolio'


export class Home extends Component {
    render() {
        return (
            <div>
                <Header 
                    title="Welcome To Our Studio!"
                    subtitle="It'S NICE TO MEET YOU"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image='/header-bg.jpg'
                />

                <Services />
                <Portfolio />
            </div>
        )
    }
}

export default Home
// /header-bg.jpg
