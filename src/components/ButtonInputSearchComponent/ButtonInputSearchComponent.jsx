import React from 'react'
import {Input,Button} from 'antd'
import {
    SearchOutlined
} from '@ant-design/icons';

const ButtonInputSearchComponent = (props) => {
    const {size, placeholder, textButton, bordered,
        backgroundColorInput = '#fff',
        backgroundColorButton = 'rgb(13, 92, 182)',
        colorButton = '#fff'
    } = props
    return (
        <div style={{display: 'flex', backgroundColor: '#fff'}}>
            <Input size={size}
                   placeholder ={placeholder}
                   bordered={bordered}
                   style={{backgroundColor: backgroundColorInput}} />
            <Button size={size}
                    bordered={bordered}
                    style={{backgroundColor : backgroundColorButton, color: colorButton}}
                    icon={<SearchOutlined />}
            >{textButton}</Button>
        </div>
    )
}
export default ButtonInputSearchComponent