import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  color: #312e38;
  border-radius: 10px;
  border: 0;

  font-weight: 500;

  height: 56px;
  width: 100%;
  padding: 0 16px;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
