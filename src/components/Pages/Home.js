import React, { Component } from 'react'
import Header from '../Common/Header'

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
                />
            </div>
        )
    }
}

export default Home
