import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../css/body.css';

class Body extends Component {
    constructor(props) {
        super();
        this.state = {
            display: ""
        }
        this.pushHealing = this.pushHealing.bind(this);
        this.pushCombat = this.pushCombat.bind(this);
        this.pushOther = this.pushOther.bind(this);
        this.pushAll = this.pushAll.bind(this);
    }

    pushHealing() {
        let text = this.props.data.healing[Math.floor(Math.random() * this.props.data.healing.length)];
        this.setState({display: text});
    }

    pushCombat() {
        let text = this.props.data.combat[Math.floor(Math.random() * this.props.data.combat.length)];
        this.setState({display: text});
    }

    pushOther() {
        let text = this.props.data.other[Math.floor(Math.random() * this.props.data.other.length)];
        this.setState({display: text});
    }

    pushAll() {
        let allArray = this.props.data.healing.concat(this.props.data.combat.concat(this.props.data.other));
        let text = allArray[Math.floor(Math.random() * allArray.length)];
        this.setState({display: text});
    }

    render() {
        return (
            <div className="main">
                {/* BUTTONS */}
                <div className="button-bar">
                    <Button className="button" bsStyle="success" bsSize="large" onClick={this.pushHealing}>Healing</Button>
                    <Button className="button" bsStyle="danger" bsSize="large" onClick={this.pushCombat}>Combat</Button>
                    <Button className="button end" bsStyle="info" bsSize="large" onClick={this.pushOther}>Other</Button>
                    <Button className="button last" bsSize="large" onClick={this.pushAll}>All</Button>
                </div>
                {/* DISPLAY */}
                <div className="display">
                    <div className="script">
                        {this.state.display}
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default Body;