import React from 'react'
import { Col, Typography } from 'antd'
import { LockFilled, CheckCircleFilled } from '@ant-design/icons'

const Header = () => {
    return (
        <Col className='w-full'>

            <Typography.Text className='uppercase font-bold leading-tight tracking-[-0.27px] font-sans text-[27px] text-[#333a40]' >LES MEILLEURS CASINOS EN LIGNE DU MOMENT</Typography.Text>
            <Typography.Text className='text-[#6c6c78] font-medium font-sans text-xs md:text-lg lg:text-base flex flex-row space-x-1 items-center tracking-[-0.12px]' >
                <span>Tous nos casinos sont: </span> <LockFilled className="text-[#00AA57]" /> <span>Autorisé</span>  <CheckCircleFilled className="text-[#00AA57]" />  <span>Revu par nos experts</span>
            </Typography.Text>
        </Col>
    )
}

export default Header