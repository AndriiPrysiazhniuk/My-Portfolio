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
        <SvgIcon width={props.width || '50'} height={props.height || '50'} viewBox={props.viewBox || '0 0 50 50'}
                 fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </SvgIcon>
    )
}
const SvgIcon = styled.svg`
`
