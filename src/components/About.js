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
                    <Image src="https://auiphoto.files.wordpress.com/2015/09/eiffel-tower-rule-of-thirds.jpg" circle className="profile-img"/>
                    <h3>Alejandro Sierra</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. His singulis copiose responderi solet,
                        sed quae perspicua sunt longa esse non debent. Est igitur officium eius generis, quod nec in bonis ponatur nec in contrariis.
                         Et nemo nimium beatus est; Restincta enim sitis stabilitatem voluptatis habet, inquit, illa autem voluptas ipsius restinctionis
                         in motu est. Duo Reges: constructio interrete.
                        Itaque nostrum est-quod nostrum dico, artis est-ad ea principia, quae accepimus. Nonne videmus quanta perturbatio rerum omnium consequatur,
                         quanta confusio? Duae sunt enim res quoque, ne tu verba solum putes. Inde sermone vario sex illa a Dipylo stadia confecimus.
                         Si longus, levis dictata sunt. Ipse Epicurus fortasse redderet, ut Sextus Peducaeus, Sex. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem.
                        Animi enim quoque dolores percipiet omnibus partibus maiores quam corporis. Hoc est non modo cor non habere, sed ne palatum quidem. Facile est hoc cernere
                         in primis puerorum aetatulis. Nam, ut saepe iam dixi, in infirma aetate inbecillaque mente vis naturae quasi per caliginem cernitur; Paria sunt igitur.
                     </p>
                </Col>

                <Col xs={12} sm={7} >
                    <h2>Resume</h2>
                    <div className="resume">

                    </div>
                </Col>

            </Row>
        </Fragment>

    );
  }
}

export default About;
