import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <header className="masthead" style ={{backgroundImage: `url(${this.props.image})`}}>
                    <div className="container">
                        <div className="masthead-subheading">{this.props.title ?  this.props.title : null}</div>
                        <div className="masthead-heading text-uppercase">{this.props.subtitle ? this.props.subtitle : null}</div>
                        {this.props.showButton &&
                            <Link className="btn btn-primary btn-xl text-uppercase" to={this.props.link ? this.props.link : null}>{this.props.buttonText ? this.props.buttonText : null}</Link>
                        }
                    </div>
                </header>
            </div>
        )
    } 
}

export default Header
// `url(${this.props.image})`}}