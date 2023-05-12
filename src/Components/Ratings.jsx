import React from 'react'
import { Col, Rate, Row } from 'antd'


const Ratings = ({ value, setValue }) => {
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

    return (<>
        <Rate allowHalf className='scale-125 flex justify-items-center flex-shrink justify-center flex-nowrap' tooltips={desc} onChange={(x) => setValue(x)} value={value} />
        {/* {ratingValue ? <span className="ant-rate-text">{desc[ratingValue - 1]}</span> : ''} */}
        <span className='text-yellow-400 font-sans font-bold text-[20px]'>
            {value ?? 0}/5
        </span>
    </>
    )
}

export default Ratings