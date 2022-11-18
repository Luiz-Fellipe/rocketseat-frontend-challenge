import styled from "styled-components";

export const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;

  max-width: 1120px;
  margin: 0 auto;

  padding: 0 20px;

  @media (min-width: 1120px) {
    padding: 0;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.space["24"]} ${({ theme }) => theme.space["32"]};

  @media ${({ theme }) => theme.device.sm} {
    justify-content: flex-start;
  }
`;

export const HomeHeader = styled.div`
  display: flex;

  flex-direction: column;

  @media ${({ theme }) => theme.device.sm} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
