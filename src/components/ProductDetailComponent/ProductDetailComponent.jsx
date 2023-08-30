import { Col, Image, Row } from 'antd'
import React from 'react'
import Ip1 from '../../assets/images/Ip14-1.png'
import Ip2 from '../../assets/images/Ip14-2.png'
import Ip3 from '../../assets/images/Ip14-3.jpg'
import Ip4 from '../../assets/images/Ip14-4.jpg'
import Ip5 from '../../assets/images/Ip14-5.jpg'
import { WrapperStyleColImage, WrapperStyleImage } from './style'

const ProductDetailComponent = () => {
  return (
    <Row style={{ padding: '16px', backgroundColor: '#fff' }}>
      <Col span={10}>
        <Image src={Ip1} alt='product-image' preview={false} />
        <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImage src={Ip2} alt='product-image' preview={false} />
          </WrapperStyleColImage>

          <WrapperStyleColImage span={4}>
            <WrapperStyleImage src={Ip3} alt='product-image' preview={false} />
          </WrapperStyleColImage>

          <WrapperStyleColImage span={4}>
            <WrapperStyleImage src={Ip4} alt='product-image' preview={false} />
          </WrapperStyleColImage>

          <WrapperStyleColImage span={4}>
            <WrapperStyleImage src={Ip5} alt='product-image' preview={false} />
          </WrapperStyleColImage>

          <WrapperStyleColImage span={4}>
            <WrapperStyleImage src={Ip2} alt='product-image' preview={false} />
          </WrapperStyleColImage>

          <WrapperStyleColImage span={4}>
            <WrapperStyleImage src={Ip3} alt='product-image' preview={false} />
          </WrapperStyleColImage>

        </Row>
      </Col>
      <Col span={14}>14</Col>
    </Row>
  )
}

export default ProductDetailComponent