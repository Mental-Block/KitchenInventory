import { css } from "styled-components";

export const flex = css`
  display: flex;
`;

export const flexCenter = css`
  ${flex}
  justify-content: center;
`;

export const flexCenterCenter = css`
  ${flexCenter}
  align-items: center;
`;

export const flexColumn = css`
  ${flex}
  flex-direction: column;
`;

export const flexRow = css`
  ${flex}
  flex-direction: row;
`;

export const flexSpace = css`
  ${flex}
  justify-content: space-between;
`;

export const flexSpaceCenter = css`
  ${flexSpace}
  align-items: center;
`;

export const flexAroundCenter = css`
  ${flexCenterCenter}
  justify-content: space-around;
`;
