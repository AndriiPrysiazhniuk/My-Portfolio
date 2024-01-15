import styled from "styled-components";


export const Menu = (props: { menuItems: Array<string> }) => {

    const mappedMenuItems = props.menuItems.map((el, index) => {
        return <li key={index}><a href="">{el}</a></li>

    })

    return (
        <StyledMenu>
            <ul>
                {mappedMenuItems}
            </ul>
        </StyledMenu>
    )
}
const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        

        & > li > a {

        }
    }
`