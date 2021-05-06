import React, { Component } from 'react';
import './User.css';

export default class User extends Component {
    render() {
        return (
            <div className="user">
                <div className="column1">
                    <img src={this.props.data.picture.medium} alt="" />
                </div>
                <div className="column2">
                    <p className="first_p">{this.props.data.name.first} {this.props.data.name.last}</p>
                    <p>{this.props.data.email}</p>
                    <p>{this.props.data.dob.date}</p>

                    <address>
                    {this.props.data.location.street.number} {this.props.data.location.street.name} - {this.props.data.location.city} {this.props.data.location.state} - {this.props.data.location.country} {this.props.data.location.postcode}
                    </address>
                </div>
            </div>
        )
    }
}
