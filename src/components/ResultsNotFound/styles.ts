import styled from "styled-components";

export const ResultsNotFoundWrapper = styled.div`
  width: 100%;
  height: 40vh;

  display: grid;
  place-items: center;

  > span {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes["16"]};
    color: ${({ theme }) => theme.colors.title};
    text-align: center;

    @media ${({ theme }) => theme.device.sm} {
      font-size: ${({ theme }) => theme.fontSizes["20"]};
    }
  }
`;
