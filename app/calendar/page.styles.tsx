import styled from "styled-components";
import { colors } from "@/styles/colors";
import NavigationBar from "@/components/ui/NavigationBar/NavigationBar";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.bgColor};
`;

export const CalendarNavigationBar = styled(NavigationBar)`
  padding-top: 0px;
`;

export const Content = styled.div`
  padding-top: 16px;
`;
