import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button.styled';
import { StyledTitle } from '../UsersList/UsersList.styles';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper.styled';

const Form = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    //zmieniamy Wrappera na form w styled-components
    // Form natywnie wyłapuje submit
    <ViewWrapper as="form" onSubmit={handleAddUser}>
      <StyledTitle>Add new student</StyledTitle>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

Form.propTypes = {
  handleAddUser: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
};

export default Form;
