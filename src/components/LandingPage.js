import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image, Button, Glyphicon} from 'react-bootstrap';
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
                            <a href="#start">
                                <button className="btnMain draw-border">Explore</button>
                            </a>
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
                    <h1 id="start">Research</h1>
                    <h3>HTML CSS BOOTSTRAP</h3>
                    <p>I create content on the web with a focus on reaching the most amount of people. Through researching and prototyping what would work best for your project, This content will be accessible so that every one can experience your site. Clean and user-friendly styling will make it easy for users to know what's going on, and let them do exactly what they want in the shortest amount of time and want them to keep coming back.</p>
                </Col>
                <Col xs={12}md={4}>
                    <h1>The build</h1>
                    <h3>JS & PHP</h3>
                    <p>Solving problems is really my main job. From finding a way for a business to keep track of clients, to experimenting with designs to find the most effective way for someone to showcase their best work. Not only this but making sure my code is well written and maintainable so future developers or future me, can figure out how to add on new features. After all, this is part of the work I do and I love the rewarding feeling of making these ideas into reality.</p>
                </Col>
                <Col xs={12}md={4}>
                    <h1>Deployment</h1>
                    <h3>React.js Node.js</h3>
                    <p>No matter what type of application or site you need, I will use the latest technologies to make sure your project is up to date and running smoothly. You can use a preferred hosting service, or if you don't have one i will help you get set up. Feel free to send me an email if you need to clarify something or want a change during or after the process.</p>
                </Col>
            </Row>

            <div className="mountain-paralax">
                <p>To infinity and...</p>
            </div>


                <Row className="for-you" align="center">
                    <Col xs={12} md={6} >
                        <h2>If You need a project</h2>
                        <h3>Want to start a Blog? Need to showcase your talent and hard Work? Need a Website to work for your buisness 24/7? Want to hire me at your company? Or do you need a tutor?</h3>
                    </Col>
                    <Col xs={12} md={6} >
                        <div className="vector-container">
                            <div className="item a"></div>
                            <div className="item b"><img src="/img/programming.png" alt="computer with code"/></div>
                            <div className="item c"></div>
                            <div className="item d"><img src="/img/gears.png" alt="3 gears spinning"/></div>
                            <div className="item e"></div>
                            <div className="item f"><img src="/img/coding.png" alt="syntax of html"/></div>
                        </div>
                    </Col>
                </Row>

            <div className="mountain-base">
                <div className="contact-me">
                    <a href="mailto:contact@minimalmvnt.com?subject=Feedback">
                        <Button bsSize="large" bsStyle="info" block>Contact Me</Button>
                    </a>
                    <a className="email" href="mailto:contact@minimalmvnt.com?subject=Feedback">contact@minimalmvnt.com</a>

                </div>

            </div>



            <div className="more-info">
                <h1>Need to know more?</h1>
                <h3>Dont worry </h3>

                <Link to="/projects"> <Button>Projects</Button> </Link>

                <Link to="/about"> <Button>About Me</Button> </Link>

                <a href="https://www.linkedin.com/in/alejandro-sierra-9320a1164">
                    <Button>Linked In</Button>
                </a>

                <a href="https://github.com/frontendops">
                    <Button>github</Button>
                </a>

            </div>

            <a href="#top" id="return"><i>
                 <Glyphicon glyph="chevron-up" />
            </i></a>

        </Grid>
    </Fragment>

    );
  }
}

export default LandingPage;
