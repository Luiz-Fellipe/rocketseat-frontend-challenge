import styled from "styled-components";

export const ProductWrapper = styled.main`
  max-width: 1120px;

  margin: 0 auto;

  padding: 0 20px;

  @media (min-width: 1120px) {
    padding: 0;
  }
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.space["16"]};

  @media ${({ theme }) => theme.device.sm} {
    flex-direction: row;
    gap: ${({ theme }) => theme.space["32"]};
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.title};
  }

  > h1 {
    line-height: 48px;
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSizes["24"]};
    color: ${({ theme }) => theme.colors.title};
  }

  > h2 {
    line-height: 30px;
    font-weight: 600;
    color: "#09090A";
    font-size: ${({ theme }) => theme.fontSizes["20"]};
  }

  > h3 {
    line-height: 24px;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes["16"]};
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    margin-bottom: ${({ theme }) => theme.space["8"]};
  }

  > span {
    margin-top: ${({ theme }) => theme.space["24"]};
    margin-bottom: ${({ theme }) => theme.space["32"]};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${({ theme }) => theme.fontSizes["12"]};
  }

  > p {
    line-height: 21px;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes["14"]};
    color: ${({ theme }) => theme.colors.title};
  }

  > button {
    all: unset;

    width: 100%;
    height: 44px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.space["12"]};

    cursor: pointer;
    margin-top: ${({ theme }) => theme.space["32"]};
    margin-bottom: ${({ theme }) => theme.space["24"]};
    background-color: ${({ theme }) => theme.colors.blue};

    border-radius: ${({ theme }) => theme.radii["4"]};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.background};

    @media ${({ theme }) => theme.device.sm} {
      margin-top: auto;
      margin-bottom: 0;
    }
  }

  @media ${({ theme }) => theme.device.sm} {
    max-width: 448px;
    > h1 {
      font-size: ${({ theme }) => theme.fontSizes["32"]};
    }

    > span {
      margin-bottom: 58px;
    }
  }
`;
