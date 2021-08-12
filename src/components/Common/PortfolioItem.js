import React, { Component } from 'react'

export class PortfolioItem extends Component {
    render() {
        return (
            <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={this.props.image} alt="..." />
                    </a>
                    <div className="portfolio-caption">
                        <h4>{this.props.title}</h4>
                        <p>{this.props.subtitle}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioItem
