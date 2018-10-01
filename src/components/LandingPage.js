import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Image, Button} from 'react-bootstrap';
import "./LandingPage.css"

class LandingPage extends Component {
  render() {
    return (
        <fragment>
        <Grid>
            <Jumbotron>
                <h2>Welcome to My Portfolio</h2>
                <p>Good Evening</p>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" circle className="icon" />
                    <Link to="/about">
                        <Button bsStyle="primary"> About</Button>
                    </Link>
            </Jumbotron>

        </Grid>

        </fragment>

    );
  }
}

export default LandingPage;
