import React from 'react';
import { Link } from "gatsby";
import { GetMenuItems } from "../../../hooks/getMenuItems";
import footerNavStyles from './footer-navigation.module.scss';

const FooterNav = () => {
    const footerNavLinks = GetMenuItems().footerNav;
    const footerNav = footerNavLinks.map((navItem, i) => (
            [
                <Link className={footerNavStyles.navItem} key={i} to={navItem.path}>{navItem.label}</Link>,
                <span key={i+'after'}>{i !== footerNavLinks.length - 1 ? '|' : null}</span>
            ]
    ));
    return (
        <>
            {footerNav}
        </>
    )
}

export default FooterNav;
