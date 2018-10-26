import React, { Component, Fragment } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Projects extends Component {
    state = {
        projects : [
            {"name": "Memory game",
             "tech": "JS",
             "description": "Card Matching game that uses vanilla javascript",
             "img": "/img/memory_app.JPEG",
             "link": "",
             "id": "1",
             "alt":"Man holding phone with memory game"
            },
            {"name": "Neighborhood Map",
             "tech": "JS, React",
             "description": "Map of my local city with selected venues using google maps api and foursquare api",
             "img": "/img/map_screen.JPEG",
             "link": "https://github.com/frontendops/My-neighborhood-map",
             "id": "2",
             "alt":""
            },
            {"name": "Wordpress Site Buisness",
             "tech": "Wordpress",
             "description": "Wordpress site for hair salon built with wordpress",
             "img": "/img/salon_site.JPEG",
             "link": "http://www.salonexclusivo.com",
             "id": "3",
             "alt":"Man holding phone with salon site open"
            },
            {"name": "Wordpress Site Blog",
             "tech": "Wordpress",
             "description": "Blog for anime channel built with wordpress",
             "img": "/img/envoy_site.JPEG",
             "link": "http://www.easternenvoy.com",
             "id": "4",
             "alt":"Computer screen with blogs open"
            },

        ]
    }

  render() {
    return (
        <Fragment>
            <Grid>
                <Row>
                    <Col xs={12} sm={8} smOffset={2} >
                        <h1>Hello World! These are some of the projects i have been working on.</h1>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <ul className="projects">
                            { this.state.projects.map( (project) => {
                                return (
                                    <li key={project.id} className="project-entry">
                                        <img src={project.img} alt={project.alt}/>
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
