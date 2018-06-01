import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { Button, Modal } from 'react-bootstrap';
import '../css/footer.css';

class Footer extends Component {
    constructor(props) {
        super();
        this.state = {
          show: false
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      let healingSource = this.props.data.healing.map((quote, index) => <li key={index}>{quote}</li>);
      let combatSource = this.props.data.combat.map((quote, index) => <li key={index}>{quote}</li>);
      let otherSource = this.props.data.other.map((quote, index) => <li key={index}>{quote}</li>);
    
      return (
        <div className="footer">
            <div className="source-button">
              <Button bsStyle="link" bsSize="small" onClick={this.handleShow}>Source</Button>
            </div>
            <div className="logo">
              Powered by React <img src={logo} className="react-logo" alt="logo" />
            </div>
        
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Quotes Source</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4 className="source-header">Healing Quotes</h4>
              <ul>
                {healingSource}
              </ul>
              <hr />

              <h4 className="source-header">Combat Quotes</h4>
              <ul>
                {combatSource}
              </ul>
              <hr />

              <h4 className="source-header">Other Quotes</h4>
              <ul>
                {otherSource}
              </ul>
              <hr />

              <p className="version">
                v 0.2
              </p>

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
  export default Footer;