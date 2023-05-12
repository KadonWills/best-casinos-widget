import { useState } from 'react';

import { Col, Tag, Typography, Rate, Row } from 'antd'
import Ratings from './Ratings'


const ExclusiveBonus = () => {
    const [ratingValue, setRatingValue] = useState(4.5);

    return (
        <Row className=' col-span-1 md:col-span-2 lg:flex lg:px-3 lg:justify-center lg:items-center    '>

            <Col span={12} className='  text-slate-600  hidden lg:hidden md:flex flex-col justify-center items-center'>
                <b className='text-[22px]'>PlayOjo Casino</b>
                <Ratings setValue={setRatingValue} value={ratingValue} />
            </Col>

            <fieldset className='bg-gray-300/50 w-full  md:w-1/2 lg:w-max  rounded-md border-2 border-[#00AA57]  lg:px-5 py-4 grid place-items-center relative'>
                <legend className='mx-auto text-slate-700 text-2xl font-bold px-1 font-sans'>BONUS</legend>
                <Tag style={{ boxShadow: "2px 2px 0px #00000029" }} className=" absolute -left-2 top-0 bg-[#FF5762] text-white uppercase border-0 font-bold text-[10px] font-sans z-50">Exclusivité</Tag>

                <Row className='flex flex-col'>

                    <Typography.Text className=' font-sans text-center font-bold text-[26px] md:text-lg  lg:text-2xl'> 250 CA$ </Typography.Text>
                    <Typography.Text className=' font-sans text-center text-3xl  md:text-lg lg:text-2xl font-normal'> +80 Tours Gratuits </Typography.Text>

                </Row>
            </fieldset>
            <Col className='hidden md:block lg:hidden w-full'>
                <button className='text-white h-min w-full lg:w-[240px] text-base  py-3  rounded-md uppercase my-3 border-0 font-bold bg-[#00AA57]' >Jouer</button>
            </Col>
        </Row>
    )
}

export default ExclusiveBonus