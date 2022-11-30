import styled, { css } from "styled-components";

interface IButtonPageProps {
  isActive?: boolean;
}

export const PagesWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  gap: 2px;

  margin-top: ${({ theme }) => theme.space["24"]};

  margin-bottom: ${({ theme }) => theme.space["32"]};

  > div {
    margin-left: 6px;
    display: flex;
    gap: 4px;
  }
`;

export const ButtonPage = styled.button<IButtonPageProps>`
  width: 32px;
  height: 32px;

  display: grid;
  place-items: center;

  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.colors.shape03};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii["8"]};

  transition: all 0.2s ease-in-out;

  ${({ isActive }) =>
    isActive &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.orangeLow};
      background-color: ${({ theme }) => theme.colors.shape01};
      color: ${({ theme }) => theme.colors.orangeLow};
      font-weight: 600;
    `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
