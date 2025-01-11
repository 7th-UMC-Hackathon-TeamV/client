import { createGlobalStyle } from "styled-components";
import { resetStyles } from "./ResetStyles.style";
import { pretendardFont } from "./PretendardFont.style";
import { onAirStyles } from "./onAirStyles.style";

export const GlobalStyle = createGlobalStyle`
  ${resetStyles}
  ${pretendardFont}
  ${onAirStyles}
`;
