import { Col, Image } from "antd";
import styled from "styled-components";

export const WrapperStyleImage = styled(Image)`
    height: 64px;
    width: 64px;
`

export const WrapperStyleColImage = styled(Col)`
    flex-basis: unset;
    display: flex;
`


export const WrapperStyleNameProduct = styled.h1`
    color: rgb(36, 36, 36);
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
    word-break: break-work;
`


export const WrapperStyleTextSell = styled.span`
    color: rgb(120, 120, 120);
    font-size: 15px;
    line-height: 24px;
`

export const WrapperStylePriceProduct = styled.div`
    background: rgb(250, 250, 250);
    border-radius: 4px;
`

export const WrapperStylePriceTextProduct = styled.h1`
    font-size: 32px;
    line-height: 40px;
    margin-right: 8xp;
    font-weight: 500;
    padding: 10px;
    padding-top: 10px;
`