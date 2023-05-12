import React from 'react'

const Card = ({children}) => {
    return (
        <div
            className="w-full flex flex-row justify-center relative rounded-xl p-5 md:p-5  border-0 bg-white  "
            style={{ boxShadow: '0px 0px 18px #00000026' }} >

            { children }
        </div>
    )
}

export default Card