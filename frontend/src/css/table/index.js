import styled from "styled-components";

export const StyledTD = styled.th`
    border: 1px solid ${(props) => props.theme.secondaryC};
    text-align: left;
    padding: 8px;
    font-weight: 600;  
`

export const StyledTH = styled(StyledTD)`font-size: 1.25rem;`

export const StyledTable = styled.table`
  width: 100%;
  color: ${(props) => props.theme.black};
  margin-bottom: 2rem;

  tbody tr{
    background-color: ${(props) => props.theme.lightGrey};

    :nth-child(even) {
    background-color: ${(props) => props.theme.white};
    }
  }
`;