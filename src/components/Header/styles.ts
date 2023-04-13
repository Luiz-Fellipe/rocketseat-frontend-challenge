import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;

  padding: 20px 0;

  background-color: ${({ theme }) => theme.colors.shape01};

  @media ${({ theme }) => theme.device.sm} {
    height: 80px;
  }

  margin-bottom: ${({ theme }) => theme.space["32"]};
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: ${({ theme }) => theme.space["16"]};

  padding: 0 20px;

  > div {
    display: flex;
    justify-content: center;
    align-items: end;
    gap: ${({ theme }) => theme.space["24"]};

    > input {
      width: 100%;
    }

    > button {
    }
  }

  @media ${({ theme }) => theme.device.sm} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SearchInput = styled.div`
  width: 352px;
  height: 42px;

  display: flex;
  align-items: center;

  border-radius: ${({ theme }) => theme.radii["8"]};
  background-color: #f3f5f6;

  padding-top: ${({ theme }) => theme.space["10"]};
  padding-bottom: ${({ theme }) => theme.space["10"]};
  padding-left: ${({ theme }) => theme.space["16"]};
  padding-right: ${({ theme }) => theme.space["16"]};

  > input {
    all: unset;
    width: 100%;
    height: 100%;

    font-size: ${({ theme }) => theme.fontSizes["14"]};
  }
`;

export const ButtonCart = styled.button`
  position: relative;

  background-color: transparent;
  border: none;
  cursor: pointer;

  &::after {
    content: attr(data-total-products);
    position: absolute;
    bottom: -1px;
    right: -9px;

    width: 17px;
    height: 17px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: ${({ theme }) => theme.fontSizes["10"]};
    color: ${({ theme }) => theme.colors.shape01};

    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.red};
  }
`;
