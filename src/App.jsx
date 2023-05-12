import React, { useState } from 'react'
import { Layout, Col, Tag, Row } from 'antd'
import Card from './Components/Card';
import LogoWithRatings from './Components/LogoWithRatings';
import Header from './Components/Header';
import Disclaimer from './Components/Disclaimer';
import AdvantagesWithCTA from './Components/AdvantagesWithCTA';
import ExclusiveBonus from './Components/ExclusiveBonus';


const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Layout>

      <main className='w-screen  h-screen  grid place-items-center bg-white' >
        <Row className='p-3 w-full max-w-[390px] md:max-w-none grid  md:px-10 lg:p-14 xl:p-20   '>

          <Header />

          <Col className='mt-[20px] w-full'>

            <Card >

              <Tag style={{ boxShadow: "2px 2px 0px #00000029" }} className="  absolute -left-2 top-10 bg-[#FF5762] text-white uppercase border-0 font-bold text-[10px] font-sans z-50">User Choice</Tag>

              <Row gutter={0} className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7  md:auto-rows-max items-center place-content-evenly px-0 mx-0 w-full '>

                <LogoWithRatings />


                <ExclusiveBonus />


                <AdvantagesWithCTA />

                <Disclaimer />

              </Row>

            </Card>

          </Col>

        </Row >

      </main>

    </Layout>

  );
}

export default App;