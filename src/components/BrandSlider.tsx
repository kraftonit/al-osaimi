"use client"
import Slider from 'react-infinite-logo-slider'

const BrandSlider = () => {

    return (
        <Slider
            width="350px"
            duration={20}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
        >
            <Slider.Slide>
                <h2 className="brand-text font-bold mx-auto text-7xl py-10">Google</h2>
            </Slider.Slide>
            <Slider.Slide>
                <h2 className="font-bold mx-auto text-7xl py-10">Apple</h2>
            </Slider.Slide>
            <Slider.Slide>
                <h2 className="brand-text font-bold mx-auto text-7xl py-10">Samsung</h2>
            </Slider.Slide>
            <Slider.Slide>
                <h2 className="font-bold mx-auto text-7xl py-10">Sony</h2>
            </Slider.Slide>
            <Slider.Slide>
                <h2 className="brand-text font-bold mx-auto text-7xl py-10">Xiaomi</h2>
            </Slider.Slide>
            <Slider.Slide>
                <h2 className="font-bold mx-auto text-7xl py-10">LG</h2>
            </Slider.Slide>
        </Slider>
    )
}

export default BrandSlider