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
    ul {
        display: flex;
        margin: 0 auto 40px;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
    }
`

const ListTabItem = styled.li`

`
