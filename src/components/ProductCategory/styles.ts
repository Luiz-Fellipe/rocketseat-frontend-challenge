import styled, { css } from "styled-components";

interface ICategoryItemProps {
  isActive: boolean;
}

export const ProductCategoryWrapper = styled.div`
  display: flex;
  gap: 40px;

  width: 100%;

  margin: 0 auto;
`;

export const CategoryItem = styled.button<ICategoryItemProps>`
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  cursor: pointer;

  font-size: ${({ theme }) => theme.fontSizes["14"]};
  color: #737380;

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
