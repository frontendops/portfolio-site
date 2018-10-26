import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

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
