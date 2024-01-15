import iconsSprite from '../../assets/images/sprite.svg'
import styled from "styled-components";
import {MyAnimation} from "../../Styles/Animations/Animation";

type PropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icon = (props: PropsType) => {
    return (
        <IconWrapper>
            <SvgIcon width={props.width || '50'} height={props.height || '50'} viewBox={props.viewBox || '0 0 50 50'}
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
            </SvgIcon>
        </IconWrapper>

    )
}
const IconWrapper = styled.div`
    //z-index: 0;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        display: inline-block;
        width: 80px;
        height: 80px;
        background-color: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);
        //z-index: 1;
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`
const SvgIcon = styled.svg`
    //position: relative;
    //
    //&::before {
    //    content: '';
    //    position: absolute;
    //    display: inline-block;
    //    width: 80px;
    //    height: 80px;
    //    background-color: rgba(255, 255, 255, 0.1);
    //    transform: rotate(45deg) translate(-50%, -50%);
    //    //z-index: 1;
    //    left: 50%;
    //    top: 50%;
    //    transform-origin:top left ;
    //}
`
