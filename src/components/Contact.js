import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';

class Contact extends Component {
  render() {
    return (
        <fragment>
            <Grid>
                <Row>
                    <Col xs={12} sm={8} smOffset={2} >
                        <h3 className="contact-text">Let me know what you need</h3>
                    </Col>
                </Row>
            </Grid>
        </fragment>

    );
  }
}

export default Contact;
