import React from 'react';
import {
    Container,
    Row,
    Col
} from "react-bootstrap";
import footerStyles from './footer.module.scss';
import { faFacebookSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FooterNav from "./footer-navigaton/footer-navigation";

const Footer = () => (
    <>
        <Container className={footerStyles.footerTextContainer}>
            <Row>
                <Col className={footerStyles.footerText}>
                    <p>VERDI CANCER & RESEARCH CENTER OF TEXAS</p>
                    <p>7777 FOREST LN</p>
                    <p>SUITE B-242</p>
                    <p>DALLAS, TX 75230</p>
                    <p>P: <a href={'tel:+1-214-739-1706'}>214-739-1706</a></p>
                </Col>
            </Row>
            <Row style={{margin: "20px 0"}}>
                <Col style={{padding: 0}}>
                    <a
                        className={footerStyles.footerIcons}
                        href="https://www.facebook.com/VerdiofTexas/"
                        target={'_blank'}
                        rel={'noreferrer'}>
                        <FontAwesomeIcon icon={faFacebookSquare} size={'3x'}/>
                    </a>
                    <a
                        className={footerStyles.footerIcons}
                        href="https://www.linkedin.com/company/nexgen-oncology/"
                        target={'_blank'}
                        rel={'noreferrer'}>
                        <FontAwesomeIcon icon={faLinkedin} size={'3x'}/>
                    </a>
                </Col>
            </Row>
            <Row>
                <Col className={footerStyles.footerNav}>
                    <FooterNav/>
                </Col>
            </Row>
        </Container>
        <Container className={footerStyles.footerCopyRight} fluid>
            <span>&copy; 2020  Verdi Oncology. All rights reserved. | Website by <a href="https://patientfetch.com" target="_blank" rel={'noreferrer'}>PatientFetch</a></span>
        </Container>
    </>
)


export default Footer;
