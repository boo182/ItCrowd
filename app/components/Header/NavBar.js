import styled from 'styled-components';
import { palette, sizes } from 'themes';

export default styled.div`
  position: fixed;
  width: ${sizes.header.width};
  height: ${sizes.header.height};
  background-color: ${palette.primaryBlue};
  display: flex;
  padding-left: 20px;
`;
