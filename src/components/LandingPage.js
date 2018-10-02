import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import "./LandingPage.css"

class LandingPage extends Component {
  render() {
    return (
        <fragment>
        <Grid>
            <Jumbotron className="stars">
                <Grid>
                    <Row>
                        <Col xs={12} sm={8}>
                            <h2>Front-End Developer</h2>
                            <p>Alejandro Sierra</p>
                            <Link to="/about">
                                <Button bsStyle="info"> About</Button>
                            </Link>
                        </Col>
                        <Col xs={12} sm={4}>
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" circle className="icon" />
                        </Col>
                    </Row>
                </Grid>
            </Jumbotron>
        </Grid>

        </fragment>

    );
  }
}

export default LandingPage;
