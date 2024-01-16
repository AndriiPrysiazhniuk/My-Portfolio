import styled from "styled-components";
import {theme} from "../../../../Styles/Theme";
import {ItemLink} from "../../../../components/ItemLink/ItemLink";


export const TabMenu = (props: { menuItems: Array<string> }) => {

    const mappedMenuItems = props.menuItems.map((el, index) => {
        return <ListTabItem key={index}>
            <ItemLink href="">
                {el}
            </ItemLink>
        </ListTabItem>

    })

    return (
        <StyledTabMenu>
            <ul>
                {mappedMenuItems}
            </ul>
        </StyledTabMenu>
    )
}
const StyledTabMenu = styled.nav`
    margin-bottom: 40px;
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
`

const ListTabItem = styled.li`

`
