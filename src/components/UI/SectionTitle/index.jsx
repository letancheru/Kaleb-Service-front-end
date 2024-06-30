import React from 'react';
import parse from 'html-react-parser'

function SectionTitle(props) {
    return (
        <div style={{ fontSize:'22px', lineHeight:'1.5' }} className={`section-title ${props.variant === "light" ? "section-title--light" : ""}`}>
            
            <h2 style={{ fontSize:'22px', lineHeight:'1.5' }}>{parse(props.heading)}</h2>
            {(() => {
                if (props.text) {
                    return <p>{parse(props.text)}</p>
                }
                if (props.tagline) {
                    return <h5 className="tagline">{parse(props.tagline)}</h5>
                }
            })()}
        </div>
    );
}

export default SectionTitle;