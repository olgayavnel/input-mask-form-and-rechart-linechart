import styled from 'styled-components';

export const Section = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled.div`
  width: 700px;
  /** top and button 50px */
  margin: 50px auto;

  @media (max-width: 745px) {
    width: 90%;
    margin: 30px auto;
  }

  @media (max-width: 360px) {
    width: 100%;
    margin: 30px 10px;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  background-color: #f7f9ff;
  color: #336581;
  padding: 1.2rem;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${(props) => props.maxWidth}%;
  margin-top: ${(props) => props.marginTop}px;
  margin-bottom: ${(props) => props.marginBottom}px;
`;

export const Col = styled.div`
  padding-top: 0.6rem;
  flex: ${(props) => props.size};
  text-align: ${(props) => props.align};
  font-size: ${(props) => props.fontSize}rem;
  letter-spacing: ${(props) => props.letterSpacing}rem;
  font-weight: 500;

  @media (max-width: 745px) {
    font-size: 0.9rem;
  }

  @media (max-width: 360px) {
    font-size: 0.7rem;
  }
`;

export const LabelMedia = styled.label`
  margin-bottom: 0.5rem;
  width: 100%;
  font-weight: 500;
  font-size: 1.2rem;
  p {
    padding: 0.6rem 0rem;
    letter-spacing: 0.05rem;
  }

  @media (max-width: 745px) {
    font-size: 1rem;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  width: 100%;
  align-items: center;
  display: flex;
  p {
    padding: 0.6rem 0rem;
  }

  @media (max-width: 550px) {
    word-break: break-word;
    padding-right: 0.5rem;
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: transparent;
  border-radius: 8px;
  width: 100%;
  height: 40px;
  margin-bottom: 0.5rem;
  outline: none;
  color: #336581;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:focus {
    border: 1px solid #336581;
    border-color: ${(props) => props.borderColor};
  }

  .budgetInput {
    width: 90%;
  }
`;
