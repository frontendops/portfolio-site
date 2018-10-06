import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';

class Projects extends Component {
    state = {
        projects : [
            {"name": "Memory game",
             "tech": "JS",
             "description": "Card Matching game that uses vanilla javascript",
             "img": ""
            },
            {"name": "Neighborhood Map",
             "tech": "JS, React",
             "description": "Map of my local city with selected venues using google maps api and foursquare api",
             "img": ""
            },
            {"name": "Wordpress Site Buisness",
             "tech": "Wordpress",
             "description": "Wordpress site for hair salon built with wordpress",
             "img": ""
            },
            {"name": "Wordpress Site Blog",
             "tech": "Wordpress",
             "description": "Blog for anime channel built with wordpress",
             "img": ""
            },
            {"name": "This Site",
             "tech": "JS, React",
             "description": "Using react, bootstrap, and good old javascript ",
             "img": ""
            },
        ]
    }

  render() {
    return (
        <fragment>
            <Grid>
                <Row>
                    <Col xs={12} sm={8} smOffset={2} >
                        <h1>Hello World these are the projects that i have crafted. My attention to detail and everything</h1>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <ul>
                            { this.state.projects.map( (project) => {
                                return (
                                    <li>
                                        <p>{project.name}</p>
                                        <p>{project.tech}</p>
                                        <p>{project.description}</p>
                                    </li>
                                )
                            })

                            }
                        </ul>
                    </Col>
                </Row>
            </Grid>
        </fragment>

    );
  }
}

export default Projects;
