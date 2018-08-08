import styled from 'styled-components';
import { sizes, palette } from 'themes';

const HeaderTitle = styled.h2`
  font-size: ${sizes.header.title};
  color: ${palette.white};
  font-weight: 600;
  font-family: 'Lucida' Grande, sans-serif;
`;

export default HeaderTitle;
