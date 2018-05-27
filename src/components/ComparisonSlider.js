import React from 'react'

const ComparisonSliderBanner = () => (
    <section id="ComparisonSlider" class="ComparisonSlider full-width-hero">
        <div class="ComparisonSlider-container ComparisonSlider-container--OverlayImage">
            <div class="OverlayImage-wrapper">
                <div id="particles-js" class="ComparisonSliderImage ComparisonSliderImage--Overlay"></div>
        </div>
        </div>
        <div class="ComparisonSlider-container ComparisonSlider-container--BaseImage">
            <div class="BaseImage-wrapper">
                <div class="ComparisonSliderImage ComparisonSliderImage--Base"></div>
            </div>
        </div>
        <div id="DragHandle" class="DragHandle">
            <span class="DragHandle-icon"></span>
        </div>
    </section> 
)

export default ComparisonSliderBanner