import styled, { css } from "styled-components";

interface ICategoryItemProps {
  isActive: boolean;
}

export const ProductCategoryWrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;
`;

export const CategoryItem = styled.button<ICategoryItemProps>`
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  cursor: pointer;

  /* font-size: ${({ theme }) => theme.fontSizes["12"]}; */
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};

  padding-bottom: 4px;

  ${(props) =>
    props.isActive &&
    css`
      font-weight: 600;
      color: #41414d;

      border-bottom: 4px solid ${({ theme }) => theme.colors.orangeLow};
    `}

  @media ${({ theme }) => theme.device.sm} {
    font-size: ${({ theme }) => theme.fontSizes["16"]};
  }
`;
