import CenteredBox from '../FlexBoxes/CenteredBox';
import { palette, sizes } from '../../themes';

const { secondaryBlue, primaryBlue, white, lightBlue } = palette;
const MenuButton = CenteredBox.extend`
    color:  ${({ isSelected }) => (isSelected ? white : lightBlue)}
    font-size: ${sizes.header.buttons};
    font-weight: 500;
    margin-right: 30px;
    cursor: pointer;
    height: 100%;
    width: 80px;
    background-color:
        ${({ isSelected }) => (isSelected ? secondaryBlue : primaryBlue)}
    &:hover {
        color: ${palette.white};
    }
`;

export default MenuButton;
