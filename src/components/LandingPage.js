import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import "./LandingPage.css"

class LandingPage extends Component {
  render() {
    return (
        <Fragment>
        <Grid>
            <div className="stars">
                <Grid>
                    <Row>
                        <Col xs={12} align="center" className="align-middle">
                            <h2>Front-End Developer</h2>
                            <h3>Alejandro Sierra</h3>
                                <Button bsStyle="info"> Explore</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} align="center">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" circle className="icon" />
                        </Col>
                    </Row>

                </Grid>
            </div>

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

            <div className="mountain-paralax">

            </div>

                <h2 align="center">So, If you.....</h2>

                <Row className="for-you" align="center">
                    <Col xs={12} md={6} >
                        <h2>If You need a project</h2>
                        <h3>Want to start a Blog? Need to showcase your talent and hard Work? Need a Website to work for your buisness 24/7? Want to hire me at your company? Or do you need a tutor?</h3>
                    </Col>
                    <Col xs={12} md={6} >
                        <div className="vector-container">
                            <div className="item a"></div>
                            <div className="item b"><img src="/img/gears.png" /></div>
                            <div className="item c"></div>
                            <div className="item d"><img src="/img/programming.png" /></div>
                            <div className="item e"></div>
                            <div className="item f"><img src="/img/coding.png" /></div>
                        </div>
                    </Col>
                </Row>

            <div className="contact-me">
                <Link to="/contact" >
                    <Button bsSize="large" bsStyle="info" block>Contact Me</Button>
                </Link>

            </div>

            <div className="more-info">
                <h1>Need to know more?</h1>
                <h3>Dont worry </h3>

                <Link to="/projects"> <Button>Projects</Button> </Link>

                <Link to="/about"> <Button>About Me</Button> </Link>
            </div>

        </Grid>
    </Fragment>

    );
  }
}

export default LandingPage;
