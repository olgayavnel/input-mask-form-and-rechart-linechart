import styled from 'styled-components';

export const Button = styled.button`
  width: 150px;
  border-radius: 10px;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
  margin-left: 0.6rem;
  border: none;
  cursor: pointer;
  background-color: white;
  color: #336581;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  letter-spacing: 0.05rem;
  transition: 0.3s;

  &:hover {
    color: white;
    background-color: #336581;
  }

  @media (max-width: 745px) {
    font-size: 0.9rem;
  }

  @media (max-width: 447px) {
    margin-top: 1rem;
  }

  @media (max-width: 360px) {
    font-size: 0.7rem;
  }
`;
