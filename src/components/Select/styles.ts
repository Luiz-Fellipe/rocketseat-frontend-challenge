import styled from "styled-components";
import {
  Trigger,
  Content,
  Viewport,
  ScrollUpButton,
  ScrollDownButton,
  Item,
  ItemText,
  ItemIndicator,
  Icon,
} from "@radix-ui/react-select";

export const SelectTrigger = styled(Trigger)`
  all: unset;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 17px;

  width: 65px;
  height: 40px;

  border-radius: ${({ theme }) => theme.radii["8"]};
  background-color: #f3f5f6;
  border: 1px solid #a8a8b3;

  font-size: ${({ theme }) => theme.fontSizes["16"]};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
`;

export const SelectIcon = styled(Icon)`
  position: relative;
  width: 10px;
  height: 8px;
`;

export const SelectContent = styled(Content)`
  /* width: 40px; */
  width: 100%;

  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.shape01};
  border-radius: ${({ theme }) => theme.radii["8"]};

  z-index: 3;

  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const SelectItem = styled(Item)`
  position: relative;
  cursor: pointer;

  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes["16"]};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};

  padding-left: ${({ theme }) => theme.space["16"]};
  padding-right: ${({ theme }) => theme.space["16"]};
  padding-top: ${({ theme }) => theme.space["12"]};
  padding-bottom: ${({ theme }) => theme.space["12"]};

  &[data-state="checked"] {
    background-color: #f3f5f6;
    font-weight: 600;
  }

  &[data-highlighted] {
    font-weight: 600;
  }
`;

export const SelectItemText = styled(ItemText)`
  font-size: ${({ theme }) => theme.fontSizes["16"]};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
`;

export const SelectItemIndicator = styled(ItemIndicator)``;

export const SelectViewport = styled(Viewport)`
  /* padding: 5px; */
  margin: 0;
`;

export const SelectScrollUpButton = styled(ScrollUpButton)`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;

  transform: rotate(180deg);
`;
export const SelectScrollDownButton = styled(ScrollDownButton)`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;
`;
