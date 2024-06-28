import React from 'react';
import {Link} from "react-router-dom";

function LogoItem(props) {
    return (
        <div className="brand-logo-item">
            <Link to={props.URL}>
                <img src={'../../../src/assets/img/' + props.logoSrc} alt="Businex-Logo"/>
            </Link>
        </div>
    );
}

export default LogoItem;