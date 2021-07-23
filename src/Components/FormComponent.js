import React, { useState } from 'react';
import styled from 'styled-components';
import { defaultCostsData } from '../data/defaultCostsData';
import { optionsData } from '../data/optionsData';
import DatePickerComponent from './DatePickerComponent';
import { Button } from './FormButton';
import { Checkbox } from './FormCheckbox';

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  width: 700px;
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

const Form = styled.form`
  width: 100%;
  height: 100%;
  background-color: #f7f9ff;
  color: #336581;
  padding: 1.2rem;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${(props) => props.maxWidth}%;
  margin-top: ${(props) => props.marginTop}px;
  margin-bottom: ${(props) => props.marginBottom}px;
`;

const Col = styled.div`
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

const LabelMedia = styled.label`
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

const Label = styled.label`
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

const Input = styled.input`
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

function FormComponent() {
  const [costs, setCosts] = useState(defaultCostsData);

  const handleCostsChange = (event) => {
    const tempCosts = [...costs];
    const value = event.target.value;

    // validation for that it's number. If it is number, it will go on
    if (isNaN(value)) {
      return false;
    }

    // decimal point length validation
    if (decimalCount(value) > 2) {
      return false;
    }
    tempCosts[event.target.dataset.id]['status'] = '#3F8CB0';
    tempCosts[event.target.dataset.id][event.target.name] = value;

    setCosts(tempCosts);
  };

  const getTotalCosts = () => {
    return costs.reduce((total, item) => {
      return total + Number(item.price);
    }, 0);
  };

  // The function to calculate the length of the number after dot
  const decimalCount = (num) => {
    const numStr = String(num);
    if (numStr.includes('.')) {
      return numStr.split('.')[1].length;
    }
    return 0;
  };

  return (
    <Section>
      <Grid>
        <Form
          onSubmit={console.log('hello')}
          data-aos='zoom-in'
          data-aos-duration='500'
          data-aos-once='true'
          data-aos-anchor-placement='center bottom'
        >
          <Row>
            <LabelMedia>
              <p>Media Plan</p>
              <Input
                name='mediaPlan'
                type='text'
                placeholder='Provide Media Plan'
              />
            </LabelMedia>
          </Row>
          <Row>
            <DatePickerComponent />
          </Row>

          <Row marginBottom={10}>
            {optionsData.map((item, index) => (
              <Col
                key={index}
                fontSize={1.2}
                size={item.size}
                align={item.align}
                letterSpacing={0.05}
              >
                {item.name}
              </Col>
            ))}
          </Row>
          {costs.map((item, index) => (
            <Row key={index}>
              <Col size={1} fontSize={1} letterSpacing={0.05}>
                <Label
                  name='name'
                  data-id={index}
                  type='text'
                  value={item.name}
                >
                  {item.name}
                </Label>
              </Col>
              <Col size={1}>
                <Input
                  name='price'
                  data-id={index}
                  placeholder='$0.00'
                  value={item.price}
                  className='budgetInput'
                  onChange={handleCostsChange}
                  borderColor={item.status}
                />
              </Col>
              <Col size={1}>
                <Checkbox type='radio' name={item.checkbox} />
              </Col>
              <Col size={1}>
                <Checkbox type='radio' name={item.checkbox} />
              </Col>
            </Row>
          ))}

          <Row marginTop={10} maxWidth={50}>
            <Col size={1} fontSize={1.2} letterSpacing={0.05}>
              <p>Total budget</p>
            </Col>
            <Col size={1} fontSize={1.2}>
              <p>${getTotalCosts()}</p>
            </Col>
          </Row>
          <Row marginTop={10}>
            <Col size={1} align='right'>
              <Button>Copy plan</Button>
              <Button>Save plan</Button>
            </Col>
          </Row>
        </Form>
      </Grid>
    </Section>
  );
}

export default FormComponent;
