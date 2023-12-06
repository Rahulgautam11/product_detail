import React, { useState } from 'react'

import ring from '../../assets/Images/ring.jpg'
import ring1 from '../../assets/Images/ring1.jpg'
import ring2 from '../../assets/Images/ring2.jpg'
import ring3 from '../../assets/Images/ring3.jpg'
import ring4 from '../../assets/Images/ring4.jpg'
import ring5 from '../../assets/Images/ring5.jpg'
import video1 from '../../assets/videos/diamond1.mp4'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Keyboard, Navigation, Pagination, Thumbs } from "swiper/modules";
import './style.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Video from '../Video'
import Quality from '../Quality'

const productsize = [20, 30, 10, 80, 60, 50, 30, 22, 44, 11, 66, 88]

const ProductDetail = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeSize, setactiveSize] = useState()
    const [Checked, setChecked] = useState(false)
    const [play, setplay] = useState()
    const [activeImg, setActiveImg] = useState(0)
    const [mute, setmute] = useState(false)


    const ImageData = [
        { img: ring },
        { vid: video1 },
        { img: ring2 },
        { img: ring3 },
        { img: ring4 },
        { img: ring5 },
        { img: ring1 },
        { img: ring2 },
        { img: ring3 },
        { img: ring4 },
        { img: ring5 },
    ]

    const settings = {
        spaceBetween: 10,
        pagination: {
            clickable: true,
        },
        keyboard: {
            enabled: true,
        },
        thumbs: { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null },
        modules: [FreeMode, Thumbs, Pagination, Keyboard],
        className: 'mySwiper2',
    }
    const settings2 = {
        onSwiper: setThumbsSwiper,
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
        modules: [FreeMode, Thumbs],
        className: "mySwiper",
    }

    const settingsSize = {
        navigation: true,
        spaceBetween: 30,
        slidesPerView: 5,
        modules: [Navigation],
    }


    const HandleSize = (e) => {
        setactiveSize(e)
    }
    const HandlePlay = () => {
        setplay(!play)
    }
    const HandleSound = () => {
        setmute(!mute)
    }

    return (
        <div className='Product_detail_wrap'>

            <div className="tittle_wrap mb-10">
                <p className='tittle mb-10'>Princess Diana Inspired Blue Sapphire Ring with Diamond Halo</p>
                <div className="review_wrap mb-20">
                    <i className="star_icon" />
                    <i className="star_icon" />
                    <i className="star_icon" />
                    <i className="star_icon" />
                    <i className="star_icon" />
                    <span>268 reviews</span>
                </div>

            </div>

            <div className={"product_detail mb-25"}>
                <Swiper
                    {...settings}
                    className={"swiper_product"}
                >
                    <div className="delivery_wrap">
                        <i className="shipping_icon" />
                        <p>Free Delivery by Dec 13</p>
                    </div>
                    {
                        ImageData.map((item, key) => {
                            return (
                                <SwiperSlide className={"product_img"} key={key}>

                                    {
                                        item.img ?
                                            <img src={item.img && item.img} alt='product-img' />
                                            :
                                            <Video src={item.vid} onPlay={HandlePlay} onSound={HandleSound} mute={mute} play={play} />
                                    }

                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <Swiper
                    {...settings2}
                >
                    {
                        ImageData.map((item, key) => {
                            return (
                                <SwiperSlide className={`product_grid_img ${activeImg == key && "border_active"}`} key={key} onClick={() => setActiveImg(key)}>
                                    {key === 0 ? <span className='count_product'><p>+4</p></span> : ""}
                                    {key === ImageData.length - 1 ? <span className='count_product'><p>+14</p></span> : ""}
                                    {item.img ?
                                        <img src={item.img && item.img} alt='product-img' />
                                        :
                                        <Video src={item.vid} gride={true} onPlay={HandlePlay} play={play} />
                                    }

                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </ div>

            <div className="amount_wrap mb-10">
                <p>&#36;3434</p>
                <del>&#36;3987</del>
                <p>(10% OFF)</p>
            </div>
            <div className="plane_wrap mb-10">
                <p className="plan">Pay as low as &#36;1718.55/month (0% interest)</p>
                <p className="plan underline">Select Plan</p>
            </div>
            <Quality />
            <div className="gifts_wraper mb-25">
                <div className="header_wraper">
                    <p>Amazing Free gifts</p>
                    <p className='header_timer'>hh : mm : ss</p>
                </div>
                <div className="gift_body">
                    <p>Free Garnet & Diamond Shell Pendant Earrings worth &#36;358</p>
                    <div className='image_wrap'>
                        <figure><img src={ring} alt="img" /></figure>
                    </div>
                </div>
                <div className="offer_btn">
                    <span>View Offer</span>
                </div>
            </div>

            <div className="size_wrapper mb-25">
                <div className="text_wrap mb-10">
                    <p>Select Size</p>
                    <p className='size_after'>Size Guide</p>
                </div>

                <Swiper {...settingsSize}>
                    {
                        productsize.map((item, key) => {
                            return (
                                <SwiperSlide className={`${activeSize == key ? "size_Slider-active" : ""}`} key={key} onClick={() => HandleSize(key)}>
                                    <p>{item}</p>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

            <button className="cart_button mb-25">ADD TO CART</button>

            <div className="shipping_wrap mb-20">
                <div className="shipping_icon_wrap mb-10">
                    <i className="shipping_icon" />
                    <p>Express Shipping (&#36;12 <span>Free</span>)</p>
                </div>
                <div className="shipping_icon_wrap mb-10">
                    <p>Order Within 02h:40m:56s & get it by <span>Dec 13</span></p>
                </div>
                <span className='more_btn'>
                    <a href="#">Know more</a>
                </span>
            </div>
            <div className="add_section mb-20">
                <span className='add_btn'>+</span>
                <p>Add Free Engraving</p>
            </div>
            <div className={`warranty_section ${Checked && "active_border"}`}>
                <input type="checkbox" checked={Checked} onClick={() => setChecked(!Checked)} />
                <div className='tittle_wrap'>
                    <div className="text_wrap" onClick={() => setChecked(!Checked)}>
                        <p>Add Enhanced Warranty for</p>
                        <span>&#36;333.69</span>
                    </div>
                    <span className='btn_underline'>
                        <a href="#">Know why</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
