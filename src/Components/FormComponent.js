import React, { useState } from 'react';
import styled from 'styled-components';
import { defaultCostsData } from '../data/defaultCostsData';
import { optionsData } from '../data/optionsData';
import DatePickerComponent from './DatePickerComponent';

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
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${(props) => props.marginTop}px;
`;

const Col = styled.div`
  padding: 10px 0px 0px 0px;
  flex: ${(props) => props.size};
  text-align: ${(props) => props.align};
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  width: 100%;
  align-items: center;
  display: flex;
  p {
    padding: 10px 0px 10px 0px;
  }
`;

const LabelMedia = styled.label`
  margin-bottom: 0.5rem;
  width: 100%;
  p {
    padding: 10px 0px 10px 0px;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 8px;
  width: 100%;
  height: 40px;
  margin-bottom: 0.5rem;
  outline: none;
  border-color: ${(props) => props.borderColor};
  .budgetInput {
    width: 90%;
  }
`;

const Checkbox = styled.input`
  padding: 0.5rem;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5rem;
  height: 20px;
`;

const Button = styled.button`
  width: 150px;
  border-radius: 10px;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
  color: white;
  border: none;
  cursor: pointer;
  color: #3f8cb0;
  &:hover {
    color: white;
    background-color: #3f8cb0;
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
        <Form onSubmit={console.log('hello')}>
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
          <Row>
            {optionsData.map((item, index) => (
              <Col key={index} size={item.size} align={item.align}>
                {item.name}
              </Col>
            ))}
          </Row>

          {costs.map((item, index) => (
            <Row key={index}>
              <Col size={1}>
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

          <Row marginTop={10}>
            <Col size={1}>
              <p>Total budget</p>
            </Col>
            <Col size={1}>
              <p>{getTotalCosts()}</p>
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
