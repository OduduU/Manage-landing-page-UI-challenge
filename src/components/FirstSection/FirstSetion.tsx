import React from 'react';
import './FirstSection.scss'
import GetStarted from '../GetStartes/GetStarted';

function FirstSetion() {
    const image = '/assets/illustration-intro.svg';
    return (
        <section className="first-section">
            <div className="container-fluid">
                <div className="first-section-container">
                    <div className="first-section-text">
                        <h1>Bring everyone together to build better products.</h1>
                        <p>
                            Manage makes it simple for software teams to plan day-to-day tasks
                            while keeping the larger team goals in view.
                        </p>
                        <GetStarted />
                    </div>
                    <div className="first-section-image">
                        <img src={image} alt="infographic" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FirstSetion
