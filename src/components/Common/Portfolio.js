import React, { Component } from 'react'
import PortfolioItem from './PortfolioItem'

import Img1 from '../portfolio/1.jpg'
import Img2 from '../portfolio/2.jpg'
import Img3 from '../portfolio/3.jpg'
import Img4 from '../portfolio/4.jpg'
import Img5 from '../portfolio/5.jpg'
import Img6 from '../portfolio/6.jpg'

const portfolio = [
    {title: 'Threads', subtitle: 'Illustration', image: Img1},
    {title: 'Explore', subtitle: 'Graphic Design', image: Img2},
    {title: 'Finish', subtitle: 'Identity', image: Img3},
    {title: 'Lines', subtitle: 'Branding', image: Img4},
    {title: 'Southwest', subtitle: 'Website Design', image: Img5},
    {title: 'Window', subtitle: 'Photography', image: Img6}
]

export class Portfolio extends Component {
    render() {
        return (
            <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {portfolio.map((item, index) => {
                        return <PortfolioItem {...item} key={index} />
                    })}
                </div>
            </div>
        </section>
        )
    }
}

export default Portfolio
