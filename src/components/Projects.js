import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

class Projects extends Component {
    state = {
        projects : [
            {"name": "Memory game",
             "tech": "JS",
             "description": "Card Matching game that uses vanilla javascript",
             "img": "/img/memory_app.JPEG",
             "link": "",
             "id": "1"
            },
            {"name": "Neighborhood Map",
             "tech": "JS, React",
             "description": "Map of my local city with selected venues using google maps api and foursquare api",
             "img": "/img/mountain1.jpg",
             "link": "",
             "id": "2"
            },
            {"name": "Wordpress Site Buisness",
             "tech": "Wordpress",
             "description": "Wordpress site for hair salon built with wordpress",
             "img": "/img/salon_site.JPEG",
             "link": "http://www.salonexclusivo.com",
             "id": "3"
            },
            {"name": "Wordpress Site Blog",
             "tech": "Wordpress",
             "description": "Blog for anime channel built with wordpress",
             "img": "/img/envoy_site.JPEG",
             "link": "http://www.easternenvoy.com",
             "id": "4"
            },
            {"name": "This Site",
             "tech": "JS, React",
             "description": "Using react, bootstrap, and good old javascript ",
             "img": "/img/night.jpg",
             "link": "",
             "id": "5"
            },
        ]
    }

  render() {
    return (
        <Fragment>
            <Grid>
                <Row>
                    <Col xs={12} sm={8} smOffset={2} >
                        <h1>Hello World these are the projects that i have crafted. My attention to detail and everything</h1>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <ul className="projects">
                            { this.state.projects.map( (project) => {
                                return (
                                    <li key={project.id} className="project-entry">
                                        <img src={project.img} />
                                        <a href={project.link} target="_blank">
                                            <div className="overlay overlay-bottom">
                                                <p>{project.name}</p>
                                                <p>{project.tech}</p>
                                                <p>{project.description}</p>
                                            </div>
                                        </a>


                                    </li>
                                )
                            })

                            }
                        </ul>
                    </Col>
                </Row>
            </Grid>
        </Fragment>

    );
  }
}

export default Projects;
