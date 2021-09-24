import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Label } from '../../atoms/Label/Label';
import { Input } from '../../atoms/Input/Input';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  //odnosimy się bezpośrednio do styled-componentu
  ${Label} {
    margin: 10px 0;
  }
`;

const FormField = ({ value, onChange, label, name, id, type = 'text' }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      {/* data-testid --> dodajemy po to żeby mieć po czym złapać inputa w trakcie testowania ->
      info na ten temat znajdziesz w dokumentacji react testing library*/}
      <Input name={name} id={id} type={type} onChange={onChange} value={value} data-testid={label} />
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
