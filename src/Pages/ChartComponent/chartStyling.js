import styled from 'styled-components';

export const ChartWrapper = styled.section`
  /* display: flex;
  flex-direction: column; */
  /* min-height: 50vh; */
  margin: 3rem;
  padding: 2rem;
  background-color: #f7f9ff;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const TextWrap = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  color: #336581;
  letter-spacing: 0.05rem;
  margin-bottom: 1.5rem;
  padding: 0.6rem;

  .icon {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  h3 {
    align-self: center;
    font-weight: 400;
  }
`;
