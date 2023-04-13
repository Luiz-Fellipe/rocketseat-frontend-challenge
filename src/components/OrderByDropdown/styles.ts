import styled from "styled-components";
import { Content, Item, Trigger } from "@radix-ui/react-dropdown-menu";

export const DropdownMenuContent = styled(Content)`
  padding-bottom: ${({ theme }) => theme.space["12"]};
  padding-top: ${({ theme }) => theme.space["12"]};
  padding-left: ${({ theme }) => theme.space["16"]};
  padding-right: ${({ theme }) => theme.space["16"]};

  background-color: ${({ theme }) => theme.colors.shape01};
  border-radius: ${({ theme }) => theme.radii["4"]};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  z-index: 100;
`;

export const DropdownMenuTrigger = styled(Trigger)`
  all: unset;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes["14"]};
  color: ${({ theme }) => theme.colors.text};

  margin-left: auto;
  margin-top: ${({ theme }) => theme.space["24"]};

  @media ${({ theme }) => theme.device.sm} {
    margin-top: 0;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors["orangeLow"]};
    outline-offset: ${({ theme }) => theme.space["8"]};
  }
`;

export const DropdownMenuItem = styled(Item)`
  height: 24px;

  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes["14"]};
  color: ${({ theme }) => theme.colors.text};

  transition: color 0.2s ease-in-out;

  &[data-highlighted] {
    color: ${({ theme }) => theme.colors.orange};
  }
`;
