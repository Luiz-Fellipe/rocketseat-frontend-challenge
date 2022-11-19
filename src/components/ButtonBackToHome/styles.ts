import styled from "styled-components";
export const ButtonBack = styled.button`
  all: unset;

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 10px;

  font-weight: 500;
  color: ${({ theme }) => theme.colors.text02};

  margin-bottom: ${({ theme }) => theme.space["24"]};
`;
