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

            <Row className="tech">
                <Col xs={12}md={4}>
                    <h1>Test</h1>
                    <h3>HTML CSS BOOTSTRAP</h3>
                    <p>Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; Illis videtur, qui illud non dubitant bonum dicere -; Non pugnem cum homine, cur tantum habeat in natura boni; Callipho ad virtutem nihil adiunxit nisi voluptatem, Diodorus vacuitatem doloris. In quibus doctissimi illi veteres inesse quiddam caeleste et divinum putaverunt. Venit enim mihi Platonis in mentem, quem accepimus primum hic disputare solitum; An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia?</p>
                </Col>
                <Col xs={12}md={4}>
                    <h1>Test</h1>
                    <h3>JS & PHP</h3>
                    <p>Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; Illis videtur, qui illud non dubitant bonum dicere -; Non pugnem cum homine, cur tantum habeat in natura boni; Callipho ad virtutem nihil adiunxit nisi voluptatem, Diodorus vacuitatem doloris. In quibus doctissimi illi veteres inesse quiddam caeleste et divinum putaverunt. Venit enim mihi Platonis in mentem, quem accepimus primum hic disputare solitum; An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia?</p>
                </Col>
                <Col xs={12}md={4}>
                    <h1>Test</h1>
                    <h3>React.js</h3>
                    <p>Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; Illis videtur, qui illud non dubitant bonum dicere -; Non pugnem cum homine, cur tantum habeat in natura boni; Callipho ad virtutem nihil adiunxit nisi voluptatem, Diodorus vacuitatem doloris. In quibus doctissimi illi veteres inesse quiddam caeleste et divinum putaverunt. Venit enim mihi Platonis in mentem, quem accepimus primum hic disputare solitum; An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia?</p>
                </Col>
            </Row>

            <Jumbotron>
                <h2 className="for-you">This Means</h2>

                <Row>
                    <Col xs={12} md={6}>
                        <h2>If You need a project</h2>
                        <h3>Want to start a Blog? Need to showcase your talent and hard Work? Need a Website to work for your buisness 24/7? Want to hire me at your company? Or do you need a tutor?</h3>

                    </Col>
                </Row>
            </Jumbotron>

            <Jumbotron>
                <h2 className="for-you">To make your life easier</h2>
                <h3>seriously technology rocks</h3>
            </Jumbotron>

            <div className="contact-me">
                <Button bsSize="large" bsStyle="info" block>Contact Me</Button>
            </div>

            <div className="more-info">
                <h1>Need to know more?</h1>
                <h3>Dont worry </h3>

                <Button>Projects</Button>
                <Button>About Me</Button>
            </div>

        </Grid>
        </fragment>

    );
  }
}

export default LandingPage;
