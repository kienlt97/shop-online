import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperImageStyle, WrapperPriceText, WrapperReporText, WrapperStyleTextSell } from './style';
import { StarFilled } from '@ant-design/icons';
import official from '../../assets/images/official.png'

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: '200px', height: '200px' }}
      style={{ width: 200 }}
      bodyStyle={{ padding: '10px' }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <WrapperImageStyle src={official} alt="official" />
      <StyleNameProduct>Inphone</StyleNameProduct>
      <WrapperReporText>
        <span style={{ marginRight: '4px' }}>
          <span>4.5</span>
          <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
        </span>
        <WrapperStyleTextSell>| Da ban 1000+</WrapperStyleTextSell>
      </WrapperReporText>
      <WrapperPriceText>
        19.000.000
        <WrapperDiscountText>-5%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  )
}

export default CardComponent