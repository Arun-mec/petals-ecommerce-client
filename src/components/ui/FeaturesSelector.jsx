import React, { useState } from 'react'

const FeaturesSelector = () => {
    const [features, setFeatures] = useState([]);

    const allFeatures = [
        "100% Warranty",
        "Free Delivery",
        "10 Days Replacement",
        "Amazon Delivered",
        "Cash on Delivery",
        "Easy Returns",
        "24/7 Customer Support",
        "Eco-Friendly Packaging",
        "Secure Payment",
        "Premium Quality"
    ];

    const handleChange = (e) => {
        const currFeature = e.target.value;
        if (!features.includes(currFeature)) {
            setFeatures([...features, currFeature]);
        }else {
            let updFeatures = features.filter((feature) => { return feature!=currFeature})
            setFeatures(updFeatures);
        }
        console.log(features)
    }

    return (
        <div className='flex flex-col mt-2 gap-1'>
            {
                allFeatures.map((feature) => (
                    <div className='flex flex-row items-center justify-start gap-2'>
                        <input type="checkbox" name='features' value={feature} checked={features.includes(feature)} onChange={(e) => handleChange(e)} />
                        <label htmlFor='features'>{feature}</label>
                    </div>
                ))
            }
        </div>
    )
}

export default FeaturesSelector