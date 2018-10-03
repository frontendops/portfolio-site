import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Button} from 'react-bootstrap';

class Footer extends Component {
    render() {
        return(
            <footer className="footer">
                <Grid>
                    <Row>
                        <Col>
                            <p>copywrite @ 2018 minimalmvnt</p>
                        </Col>
                    </Row>
                </Grid>
            </footer>

        );
    }

}

export default Footer
