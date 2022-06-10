import React from 'react';
import Select from 'react-select';
import Calendar from 'react-calendar';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormTitle, FormInput, FormButton } from './BookHereElements';

const BookHere = () => {

  const options = [
    { value: 'private', label: 'Private Charter' },
    { value: 'sunset', label: 'Sunset Cruise' },
    { value: 'full', label: 'Full Day Sail & Snorkel' },
    { value: 'half', label: 'Half Day Sail & Snorkel' },
    { value: 'pizza', label: 'Pizza Pi Happy Hour Cruise' },
  ]




  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">St. Croix Charters</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Book your next adventure!</FormH1>
              <FormLabel htmlFor='for'>First Name</FormLabel>
              <FormInput type='text' required />
              <FormLabel htmlFor='for'>Last Name</FormLabel>
              <FormInput type='text' required />

              <FormLabel htmlFor='for'>Book Activity</FormLabel>
              <Select options={options} />
              
              <FormTitle htmlFor='for'>Group Size</FormTitle>
              <label>
                <input type="checkbox" /> 1
              </label>
              <label>
                <input type="checkbox" /> 2
              </label>
              <label>
                <input type="checkbox" /> 3
              </label>
              <label>
                <input type="checkbox" /> 4
              </label>
              <label>
                <input type="checkbox" /> 5+
              </label>
            
              <FormTitle htmlFor='for'>Select Date</FormTitle>
              <Calendar />
              <FormButton type='submit'>Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default BookHere;

// rafce
