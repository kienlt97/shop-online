import React from 'react'
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'

const NavBarComponent = () => {
    const onChange = () => {}
    const renderContent = (type, options) => {
        switch(type) {
            case 'text':
                return options.map((option) => {
                    return <WrapperTextValue>{option}</WrapperTextValue>
                })
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display:'flex',  flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                        {options.map((option)=> {
                            return (
                                <Checkbox style={{marginLeft: 0}} value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )
            case 'star':
                return options.map((option)=> {
                        return (
                            <div style={{display: 'flex', gap: '5px'}}>
                                <Rate style={{fontSize: '12px'}} disabled defaultValue={option}/>                              
                                <span>{`tu ${option} sao`}</span>
                            </div>
                        )
                    })
            case 'price':
                return options.map((option)=> {
                        return (
                            <WrapperTextPrice>
                               {option}
                            </WrapperTextPrice>
                        
                        )
                    })        
            default:
                return {}
        }
    }
    return (
        <div>
            <WrapperLableText>Lable</WrapperLableText>
            <WrapperContent>
                {renderContent('text', ['Tu lanh', 'TV', 'MayGiat'])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('checkbox', [
                    {value: 'a', label: 'a'},
                    {value: 'b', label: 'b'}
                ])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('star', [1, 2, 3])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('price', ['duoi 400', 'tren 50'])}
            </WrapperContent>
        </div>
    )
}

export default NavBarComponent