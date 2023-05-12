import React from 'react'

import { Col, Typography, Row } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'

const advantages = ['Retraits rapide', 'Enregistrement en douceur', 'Benefices non imposable'];

const AdvantagesWithCTA = () => {
    return (
        <Row gutter={10} className='col-span-1 grid md:col-span-3 md:flex lg:flex-row-reverse lg:justify-between lg:items-center lg:h-max  md:p-2'  >

            <Col className='md:hidden lg:grid lg:place-items-center lg:h-full lg:w-1/2'>
                <button className='text-white h-min w-full md:w-max lg:max-w-[240px] cl:max-w-[240px] text-base md:px-4 lg:w-full  py-3  rounded-md uppercase my-3 lg:my-auto border-0 font-bold bg-[#00AA57]' >Jouer</button>
            </Col>

            <Col className='flex flex-col md:flex-row md:w-full lg:flex-col lg:w-1/2 md:space-y-0 md:justify-between lg:justify-normal lg:space-x-0 space-y-2 lg:space-y-2 '>
                {advantages.map((advantage) => (
                    <Row className='flex   space-x-2 items-center h-full  w-max'>
                        <span>
                            <CheckCircleFilled className='text-green-600 text-lg m-0 p-0' />
                        </span>
                        <span  className='font-sans font-medium flex text  align-middle' >{advantage} 
                        </span>
                    </Row>
                ))}
            </Col>

        </Row>
    )
}

export default AdvantagesWithCTA