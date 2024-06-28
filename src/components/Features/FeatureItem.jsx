import React, { useState, useEffect } from 'react';

function FeatureItem(props) {
    const [imgSrc, setImgSrc] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Function to dynamically import the image
        const importImage = async () => {
            try {
                const image = await import(`../../assets/img/${props.img}`);
                setImgSrc(image.default); // Set the imported image URL
                setError(false); // Reset error state if successful
            } catch (error) {
                console.error(`Image import error for ${props.img}:`, error);
                setError(true); // Set error state if import fails
            }
        };

        importImage(); // Call the import function
    }, [props.img]); // Trigger useEffect whenever props.img changes

    return (
        <div className="col-md-4">
            <div className="icon-box-item">
                <div className="icon-box__icon">
                    {error ? (
                        <span>Error loading image</span>
                    ) : (
                        imgSrc && <img src={imgSrc} alt="Businex-Feature" />
                    )}
                </div>
                <div className="icon-box__info">
                    <h5>{props.title}</h5>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default FeatureItem;
