import React from 'react'

const ComparisonSliderBanner = () => (
    <section id="ComparisonSlider" className="ComparisonSlider full-width-hero">
        <div className="ComparisonSlider-container ComparisonSlider-container--OverlayImage">
            <div className="OverlayImage-wrapper">
                <div id="particles-js" className="ComparisonSliderImage ComparisonSliderImage--Overlay"></div>
        </div>
        </div>
        <div className="ComparisonSlider-container ComparisonSlider-container--BaseImage">
            <div className="BaseImage-wrapper">
                <div className="ComparisonSliderImage ComparisonSliderImage--Base"></div>
            </div>
        </div>
        <div id="DragHandle" className="DragHandle">
            <span className="DragHandle-icon"></span>
        </div>
    </section> 
)

export default ComparisonSliderBanner