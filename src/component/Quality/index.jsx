import React, { Fragment, useState } from 'react'
import './style.scss'
import quality1 from '../../assets/Images/diamond1.gif'
import quality2 from '../../assets/Images/diamond5.gif'
import quality3 from '../../assets/Images/diamond3.gif'
import quality4 from '../../assets/Images/diamond4.gif'
import quality5 from '../../assets/Images/diamond5.gif'
import ring from '../../assets/Images/ring.jpg'

const Qualitydata = [
    { img: quality1, option: "Lab-Grown: ", quility: "Premium" },
    { img: quality2, option: "Natural:", quility: "Good" },
    { img: quality3, quility: "Better", secondOption: "Popular" },
    { img: quality4, quility: "Best" },
    { img: quality5, quility: "Hareloom" },
    { img: quality1, quility: "Premium" },
    { img: quality2, quility: "Premium" },
    { img: quality3, quility: "Premium" },
    { img: quality4, quility: "Premium" },
    { img: quality5, quility: "Premium" },
]
const QualityRing = [
    { weight: "0.80 cts", img: ring },
    { weight: "0.60 cts", img: ring },
    { weight: "0.50 cts", img: ring },
    { weight: "0.60 cts", img: ring },
    { weight: "0.70 cts", img: ring },
    { weight: "0.90 cts", img: ring },
    { weight: "0.10 cts", img: ring },
    { weight: "0.100 cts", img: ring },
    { weight: "0.101 cts", img: ring },
    { weight: "0.102 cts", img: ring },
    { weight: "0.10 cts", img: ring },
    { weight: "0.103 cts", img: ring },
]
const Quality = () => {
    const [active, setActive] = useState(0)
    const [activeweight, setActiveweight] = useState(0)

    const Handleweight = (e) => {
        setActiveweight(e)
    }
    const HandleQuality = (e) => {
        setActive(e)
    }
    return (
        <Fragment>
            <div className="quality_wrap mb-10">
                <h5 className='Quality_heading mb-10'>Gemstone Quality</h5>
                <div className="quality_slider">
                    {
                        Qualitydata.map((item, key) => {
                            return (
                                <div key={key} className={`quality_option ${active == key && "active_border"} `} onClick={() => HandleQuality(key)}>
                                    <p className='option_label'>{item.option && item.option}</p>
                                    <figure className="icon_wrap">
                                        <img className='icon' src={item.img} alt='icon' />
                                    </figure>
                                    <p>{item.quility}</p>
                                    <p className="bottom_option">{item.secondOption && item.secondOption}</p>
                                </div>
                            )
                        })
                    }
                </div>


            </div>
            <div className="quality_wrap mb-10">
                <h5 className='Quality_heading'>Total Carat Weight:1.90 Cts</h5>
                <div className="quality_slider padding">
                    {
                        QualityRing.map((item, key) => {
                            return (
                                <div key={key} className={`quality_option`} >
                                    <figure className={`icon_wrap ${activeweight == key && "active_border"}`} onClick={() => Handleweight(key)}>
                                        <img className='icon' src={item.img} alt='icon' />
                                    </figure>
                                    <p>{item.weight}</p>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Quality;