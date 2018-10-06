import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

  render() {
    return (
        <fragment>
            <Grid>
                <Row>
                    <Col xs={12} sm={8} smOffset={2} >
                        <h3 className="contact-text">Let me know what you need</h3>
                    </Col>
                </Row>
                <Row>
                    <form>
                        <label>Name:
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                        </label>
                        <label>
                            Email: <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                        </label>
                        <label>Content:
                            <input type="text" name="content" value={this.state.content} onChange={this.handleChange} />
                        </label>
                    </form>
                </Row>
            </Grid>
        </fragment>

    );
  }
}

export default Contact;
