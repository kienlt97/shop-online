import React from 'react'
import { Badge, Col } from 'antd'
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from "./style";

import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearchComponent from "../ButtonInputSearchComponent/ButtonInputSearchComponent";

const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader gutter={16}>
                <Col span={6}>
                    <WrapperTextHeader>TIKI</WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <ButtonInputSearchComponent
                        placeholder="input search text"
                        size="large"
                        textButton="Tìm kiếm"
                    />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        <div>
                            <WrapperTextHeaderSmall>Đăng nhập/ Đăng ký</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div>
                        <Badge count={4} size='small'>
                            <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                        </Badge>                    
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}
export default HeaderComponent