import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'
import SliderComponet from '../../components/SliderComponent/SliderComponent'
import silder1 from '../../assets/images/slider1.jpg'
import silder2 from '../../assets/images/slider2.png'
import silder3 from '../../assets/images/slider3.jpg'
import silder4 from '../../assets/images/slider4.png'
import silder5 from '../../assets/images/slider5.png'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

const HomePage = () => {
    const arr = ['TV', 'Tu Lanh', 'LapTop']
    return (
        <>
            <div style={{padding: `0 120px` }}>
                <WrapperTypeProduct>
                    {arr.map((item)=>{
                        return (
                            <TypeProduct name = {item} key={item}/>
                        )
                    })}
                </WrapperTypeProduct>
            </div>
            <div id="container" style={{backgroundColor: "#efefef", padding: `0 120px`, height: '1000px'}}>
                <SliderComponet arrImages={[silder1, silder2, silder3, silder4, silder5]}/> 
                <div style={{ marginTop: '20px', display:'flex', alignItems: 'center', gap: '20px'}}>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                </div>
                <ButtonComponent textButton="Xem thêm" type="outline"/>
                <NavBarComponent/>
            </div>
        </>
    )
}
export default HomePage