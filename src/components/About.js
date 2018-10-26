import React, { Component, Fragment } from 'react';
import { Row, Col, Image} from 'react-bootstrap';


class About extends Component {
    state = {

    }
  render() {
    return (
        <Fragment>
            <Row className="text-center about" >
                <Col xs={12} sm={5} >
                    <Image src="/img/about_image.jpeg" circle className="profile-img"/>
                    <h3>Alejandro Sierra</h3>
                    <p>I love working with technology to make ideas into a reality. Driven by wanting to improve peoples everyday lives with clean User Interfaces, accessibility, and responsive design. To allow every user to experience the web, and not want to immediately press the back button. Originally self-taught the basics of programming but to improve my understanding I enrolled into the Udacity Front-End Developer nanodegree, a 6-month course that is graded by professional developers. Because the course is partnered with AT&T, Google, and GitHub I was able to learn relevant techniques and skills that companies use day to day. My education does not stop there and might never finish, I'm always learning with Udemy courses or working on apps with other developers. In the future, I plan to grow as a full-stack developer and work with mobile applications as well as improve my UI/UX (user interface/user experience) design.
                     </p>
                </Col>

                <Col xs={12} sm={7} >
                    <h2>Certication</h2>
                    <div className="certificates">
                        <a href= "https://graduation.udacity.com/confirm/X6ANRUX3">
                            <Image src="/img/udacity_image.png" />
                        </a>

                    </div>
                </Col>

            </Row>
        </Fragment>

    );
  }
}

export default About;
