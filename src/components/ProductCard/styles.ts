import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  width: 256px;

  display: flex;
  flex-direction: column;

  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.shape01};
  border-radius: ${({ theme }) => theme.radii[8]};

  > strong,
  span {
    margin: 8px 12px;
  }

  > span {
    padding-bottom: 8px;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.shape02};

    font-weight: 300;
  }
`;
