import styled from "styled-components";
export const ButtonBack = styled.button`
  all: unset;

  position: relative;

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 10px;

  font-weight: 500;
  color: ${({ theme }) => theme.colors.text02};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors["orangeLow"]};
    z-index: 10;
  }
`;
