import TinySlider from "tiny-slider-react";
const ImageSlider = () => {
    const settings = {
        nav: true,
        controls: false,
        mouseDrag: true,
        loop: true,
        center: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayButtonOutput: false,
        touch: true,
        items: 1,
        navPosition: 'bottom',
        navContainer: ".slider_button",
        lazyload: false,
        autoHeight: false,
    };
    return (
        <div className="col-span-2">
            <div className="my-slider relative " >

                <TinySlider settings={settings} className="relative">
                    <div className=" bg-height xl:bg-height_xl overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/1920/785')` }} ></div>
                    <div className=" bg-height xl:bg-height_xl overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/1920/1085')` }} ></div>
                    <div className=" bg-height xl:bg-height_xl overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/1920/1780')` }} ></div>
                </TinySlider>
                <ul className='slider_button absolute bottom-0 mb-6 right-1/2 transform translate-x-1/2  inline-flex justify-center items-center space-x-3'>
                    <button className="w-3 h-3 focus:outline-none rounded-full bg-red-400"></button>
                    <button className="w-3 h-3 focus:outline-none rounded-full bg-red-400"></button>
                    <button className="w-3 h-3 focus:outline-none rounded-full bg-red-400"></button>
                </ul>
            </div>
        </div >
    )
}

export default ImageSlider