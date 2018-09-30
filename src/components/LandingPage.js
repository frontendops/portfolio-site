import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
        <fragment>
        <Grid>
            <Jumbotron>
                <h2>Welcome to My Portfolio</h2>
                <p>i</p>
            </Jumbotron>
            
            <Link to="/about">
                <Button bsStyle="primary"> About</Button>
            </Link>
        </Grid>

        </fragment>

    );
  }
}

export default NavBar;
