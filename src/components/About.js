import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap';


class About extends Component {
  render() {
    return (
        <fragment>
            <Row className="show-grid text-center">
                <Col xs={12} sm={4} className="person-wrapper">
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

            </Row>
        </fragment>

    );
  }
}

export default About;
