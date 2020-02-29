import React from 'react'
import './ThirdSectionDetail.scss';

interface Ithirdprops {
    imgUrl: string
    name: string
    description: string
}

const ThirdSectionDetail = ({imgUrl, name, description}: Ithirdprops) => {
    const image = `/assets/${imgUrl}`
    return (
        <div className="third-section-detail">
            <img src={image} alt="sec-3" className="third-section-detail-image" />
            <h2>{name}</h2>
            <p>{description}</p>            
        </div>
    )
}

export default ThirdSectionDetail
