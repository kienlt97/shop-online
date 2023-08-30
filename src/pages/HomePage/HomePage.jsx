import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProduct, WrapperTypeProduct } from './style'
import SliderComponet from '../../components/SliderComponent/SliderComponent'
import silder1 from '../../assets/images/slider1.jpg'
import silder2 from '../../assets/images/slider2.png'
import silder3 from '../../assets/images/slider3.jpg'
import silder4 from '../../assets/images/slider4.png'
import silder5 from '../../assets/images/slider5.png'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
// import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

const HomePage = () => {
    const arr = ['TV', 'Tu Lanh', 'LapTop']
    return (
        <>
            <div style={{ padding: `0 120px` }}>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return (
                            <TypeProduct name={item} key={item} />
                        )
                    })}
                </WrapperTypeProduct>
            </div>
            <div id="container" style={{ backgroundColor: "#efefef", padding: `0 120px`, height: '1000px', width: '100%' }}>
                <SliderComponet arrImages={[silder1, silder2, silder3, silder4, silder5]} />
                <WrapperProduct>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </WrapperProduct>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <WrapperButtonMore textButton="Xem thêm" type="outline" styleButton={{
                        border: '1px solid rgb(11, 116, 229)', color: 'rgb(11, 116, 229)',
                        with: '240px', height: '38px', borderRadius: '4px'
                    }} styleTextButton={{ fontWeight: 500 }} />
                </div>
                <NavBarComponent/>
            </div>
        </>
    )
}
export default HomePage