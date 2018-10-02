import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';

class Projects extends Component {
  render() {
    return (
        <fragment>
            <Grid>
                <Row>
                    <Col xs={12} sm={8} smOffset={2} >
                        <h1>Hello World these are the projects that i have crafted. My attention to detail and everything</h1>
                    </Col>
                </Row>
            </Grid>
        </fragment>

    );
  }
}

export default Projects;
