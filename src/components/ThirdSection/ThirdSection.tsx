import React from 'react'
import data from '../../common/data'
import './ThirdSection.scss'
import GetStarted from '../GetStartes/GetStarted'
import ThirdSectionDetail from './ThirdSectionDetail/ThirdSectionDetail'

const ThirdSection = () => {
    return (
        <div className="third-section">
            <div className="third-section-top">
                <h2>What they've said</h2>
            </div>

            <div className="third-section-middle">
                <div className="third-section-middle-container">
                    {data.thirdSectionList.map((item, index) => (
                    <ThirdSectionDetail key={index} imgUrl={item.imgUrl} name={item.name} description={item.description} />
                ))}
                </div>
            </div>

            <GetStarted />
        </div>
    )
}

export default ThirdSection
