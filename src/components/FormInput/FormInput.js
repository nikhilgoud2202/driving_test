import React from 'react';
import { FormGroup, FormText, Input, Label } from 'reactstrap';

const FormInput = ({
  input,
  label,
  type,
  inputPlaceHolder,
  maxDate,
  minDate,
  meta: { error, touched },
  className
}) => (
    <FormGroup>
      <Label>{label}</Label>
      <Input
        {...input}
        type={type}
        placeholder={inputPlaceHolder}
        max={maxDate}
        min={minDate}
        className={className}
      />
      {touched && <FormText className="help-block error-color">{error}</FormText>}
    </FormGroup>
  );

export default FormInput;
