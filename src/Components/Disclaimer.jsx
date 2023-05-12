import React from 'react'
import { Typography, Row } from 'antd'

const Disclaimer = () => {
    return (
        <Row className=' mt-3  md:col-span-5 flex justify-center text-center lg:text-left lg:justify-start'>
            <Typography.Text className='text-[#6c6c78] text-[10px] text-center md:text-xs  m-0 p-0' >

                <b>18+</b> - Minimum bet amount - 100 - Some other important information - Terms & Conditions text - <b>Terms&ConditionLink.com</b>
            </Typography.Text>
        </Row>
    )
}

export default Disclaimer