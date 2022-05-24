import styled from 'styled-components';
import { colors } from '../../css/globalStyles';

export const Table = styled.table`
border: solid 1px ${colors.backgroundDarkHigh};
color: ${colors.backgroundDarkHigh};
`;

export const TH = styled.th`
border-bottom: solid 3px ${colors.backgroundOrange};
background: ${colors.backgroundDark};
color: ${colors.mainTextLight};
/* font-weight: bold; */
width: 200px;
height: 70px;
`;

export const TD = styled.td`
padding: 20px;
border: solid 1px ${colors.backgroundDark};
background: white;
`;
