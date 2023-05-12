import React, { useState } from 'react'
import { Col, Rate, Row } from 'antd'
import { InfoOutlined } from '@ant-design/icons'
import Ratings from './Ratings';

const LogoWithRatings = () => {
    const [ratingValue, setRatingValue] = useState(4.5);

    return (
        <Row gutter={10} className=' md:flex md:flex-row md:col-span-1 lg:col-span-2    justify-between md:justify-start lg:justify-between   md:items-center'>
            <Col className="absolute right-3  font-sans top-1 text-2xl text-[#FF5762] font-bold md:relative max-w-max pl-2 lg:px-5 lg:w-[50px]">01</Col>
            <Col span={12} className='lg:max-w-min'>

                <div className="w-[124px] h-[124px] md:w-[170px] md:h-[170px] lg:w-[124px] lg:h-[124px] rounded-full bg-[#6a45a5] relative">
                    <InfoOutlined className="stroke-2 rounded-full border border-slate-700 aspect-square w-7 h-7  absolute -top-3 -right-3 text-slate-500 text-sm justify-center font-bold" />
                </div>
            </Col>

            <Col span={12} className='md:hidden scale-110 md:scale-150 lg:scale-100 lg:flex lg:max-w-max  text-slate-600 flex flex-col justify-center items-center'>
                <b className='text-lg font-sans w-max'>PlayOjo Casino</b>
                <Ratings value={ratingValue} setValue={setRatingValue} />
            </Col>

            <Col>

            </Col>
        </Row>
    )
}

export default LogoWithRatings