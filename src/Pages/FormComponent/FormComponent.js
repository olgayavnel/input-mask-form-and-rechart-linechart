import React from 'react';
import { defaultCostsData } from '../FormComponent/data/defaultCostsData';
import { categoriesData } from './data/categoriesData';
import DatePickerComponent from './DatePickerComponent';
import { Button } from './FormButton';
import { Checkbox } from './FormCheckbox';
import {
  Col,
  Form,
  Grid,
  Input,
  Label,
  LabelMedia,
  Row,
  Section,
} from './styling/formStyling';
import useFormState from './useFormState';

function FormComponent() {
  const { costs, setCosts, handleChange, getTotalCosts } =
    useFormState(defaultCostsData);

  return (
    <Section>
      <Grid>
        <Form
          onSubmit={console.log('hello')}
          // data-aos='zoom-in'
          // data-aos-duration='500'
          // data-aos-once='true'
          // data-aos-anchor-placement='center bottom'
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
            {categoriesData.map((item, index) => (
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
                  onChange={handleChange}
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
