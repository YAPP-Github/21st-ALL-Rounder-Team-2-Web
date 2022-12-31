import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  position: relative;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.div`
  margin-right: 9px;
`;

export const OptionWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 8px;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 126px;
  height: 98px;
  padding: 4px 0;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
`;

export const Item = styled.div<{ active: boolean; }>`
  width: 94px;
  padding: 12px 0;
  margin: 0 16px;
  font-weight: ${(props) => (props.active ? 600 : 400)};
  font-size: 14px;
  line-height: 150%;
  color: ${(props) => (props.active ? "#333333" : "#828282")};
  border-bottom: 0.4px solid #bdbdbd;

  &:nth-last-child(1) {
    border-bottom: none;
  }
`;
