import styled from "styled-components";

export const CartWrapper = styled.main`
  max-width: 1120px;

  margin: 0 auto;

  padding: 0 20px 20px;

  @media (min-width: 1120px) {
    padding: 0;
  }
`;

export const CartContainer = styled.div`
  display: flex;

  flex-direction: column;

  @media ${({ theme }) => theme.device.sm} {
    flex-direction: row;
    gap: ${({ theme }) => theme.space["32"]};
  }
`;

export const CartContent = styled.div`
  width: 100%;
`;

export const CartContentHeader = styled.div`
  width: 100%;

  position: sticky;
  top: 0;
  z-index: 2;

  padding: ${({ theme }) => theme.space["24"]} 0;

  background-color: ${({ theme }) => theme.colors.background};

  > h1 {
    text-transform: uppercase;
    line-height: 36px;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes["24"]};
    color: ${({ theme }) => theme.colors.title};

    margin-bottom: 6px;
  }

  > span {
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSizes["16"]};
    color: ${({ theme }) => theme.colors.title};

    > strong {
      font-weight: 600;
    }
  }

  @media ${({ theme }) => theme.device.sm} {
    position: relative;
  }
`;

export const CartItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-bottom: ${({ theme }) => theme.space["32"]};
`;

export const CartItem = styled.div`
  width: 100%;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.shape01};
  border-radius: ${({ theme }) => theme.radii["8"]};

  img.img-next-radius-8 {
    border-top-left-radius: ${({ theme }) => theme.radii["8"]};
    border-top-right-radius: ${({ theme }) => theme.radii["8"]};
  }

  @media ${({ theme }) => theme.device.sm} {
    flex-direction: row;
    max-height: 211px;

    img.img-next-radius-8 {
      border-top-left-radius: ${({ theme }) => theme.radii["8"]};
      border-bottom-left-radius: ${({ theme }) => theme.radii["8"]};
      border-top-right-radius: 0;
    }
  }
`;

export const ItemInfo = styled.div`
  width: 100%;

  padding: 16px 20px;

  > p {
    line-height: 18px;

    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes["12"]};
    color: ${({ theme }) => theme.colors.title};

    margin-top: ${({ theme }) => theme.space["12"]};
    margin-bottom: ${({ theme }) => theme.space["24"]};
  }

  @media ${({ theme }) => theme.device.sm} {
    min-width: 450px;
    padding: 16px 30px;
  }
`;

export const ItemInfoHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > h2 {
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSizes["20"]};
    color: ${({ theme }) => theme.colors.title};
  }

  > button {
    all: unset;
    cursor: pointer;
  }
`;

export const ItemInfoFooter = styled.div`
  display: flex;
  justify-content: space-between;

  > strong {
    font-size: ${({ theme }) => theme.fontSizes["16"]};
    line-height: 24px;
  }
`;

export const OrderSummary = styled.aside`
  width: 100%;
  max-width: 352px;
  max-height: 700px;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.shape01};
  padding: 16px 24px;

  @media ${({ theme }) => theme.device.sm} {
    position: sticky;
    top: 24px;
    justify-content: space-between;
  }
`;

export const OrderResume = styled.div`
  > h2 {
    text-transform: uppercase;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes["20"]};
    line-height: 30px;
    color: ${({ theme }) => theme.colors.title};

    margin-bottom: 29px;
  }

  > hr {
    width: 100%;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.shape02};

    padding-bottom: ${({ theme }) => theme.space["12"]};
  }

  > button {
    all: unset;

    width: 100%;
    height: 44px;

    display: flex;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.shape01};
    font-weight: 500;
    line-height: 24px;
    font-size: ${({ theme }) => theme.fontSizes["16"]};

    background-color: ${({ theme }) => theme.colors.green};
    border-radius: ${({ theme }) => theme.radii["4"]};

    margin-top: 40px;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export const OrderPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.space["12"]} 0;

  font-size: ${({ theme }) => theme.fontSizes["16"]};
  color: ${({ theme }) => theme.colors.title};
  line-height: 24px;

  > span {
    font-weight: 400;
  }

  > strong {
    font-weight: 600;
  }
`;

export const OrderSumaryLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space["12"]};

  margin-top: 40px;
  margin-bottom: ${({ theme }) => theme.space["8"]};
  > button {
    all: unset;
    cursor: pointer;

    text-decoration: underline;
    text-transform: uppercase;

    font-size: ${({ theme }) => theme.fontSizes["14"]};
    line-height: 21px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
  }
`;
