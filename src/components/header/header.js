import React from "react";
import { Link } from "gatsby";
import { Button } from "react-bootstrap";
import Logo from '../../images/LOGO_VerdiCancerCenterTexas.png';
import Navigation from "../navigation/navigation";
import headerStyles from './header.module.scss';


const Header = () => (
    <>
        <div className="container">
            <div className={headerStyles.headerWrap}>
                <div className="logo-wrap">
                    <Link className="brand" to="/">
                        <img
                            src={Logo}
                            style={{
                                marginBottom: 0,
                                width: "310px"
                            }}
                            alt=""/>
                    </Link>
                </div>
                <div className={headerStyles.headerRight}>
                    <span>
                        Call <a className="invoca" href="tel:214-739-1706">214-739-1706</a>
                    </span>
                    <Button
                        variant={'primary'}
                        as={Link}
                        className={headerStyles.headerBtn}
                        to={'/contact-us'}>Book Online</Button>
                </div>
            </div>
        </div>
        <Navigation/>
    </>
)

export default Header
