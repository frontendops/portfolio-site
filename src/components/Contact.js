import React, { Component, Fragment } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = () => {
        alert('thank you');
    }

  render() {
    return (
        <Fragment>
            <Grid>
                <Row>
                    <Col xs={12} sm={8} smOffset={2} >
                        <h3 className="contact-text">Let me know how I can help</h3>
                    </Col>
                </Row>
                <Row>
                    <div className="form-style-8">
                        <h2>Please fill out each field</h2>
                    <form>
                        <label>Name:
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}  placeholder="john doe" />
                        </label>
                        <label>
                            Email: <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="john@example.com" />
                        </label>
                        <label>Subject:
                            <input type="text" name="subject" value={this.state.content} onChange={this.handleChange} placeholder="I need a project" />
                        </label>
                        <textarea placeholder="Message" name="message" onChange={this.handleChange} ></textarea>

                    <input type="submit" value="submit" onClick={this.handleSubmit} />

                    </form>
                </div>
                </Row>
            </Grid>
        </Fragment>

    );
  }
}

export default Contact;
