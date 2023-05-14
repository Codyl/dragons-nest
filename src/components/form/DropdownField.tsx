import React from 'react';
import { Select } from '../Styled';
import FieldWrapper from './FieldWrapper';

const DropdownField = (props: {
  id: string,
  className: string,
  field: any,
  form: any,
  disabled: boolean,
  label: string,
  type: string,
  placeholder: string,
  readOnly: boolean,
  children: any,
  options: {value: any, label: string}[],
}) => {
  const { field, form } = props;

  return (
    <FieldWrapper
      name={field.name}
      label={props.label}
      form={form}
      className={props.className}
    >
      <Select
        {...field}
        {...props}
        $hasError={form.errors[field.name] && form.touched[field.name]}
        placeholder={props.placeholder}
        readOnly={props.readOnly || props.disabled}
        disabled={props.disabled}
      >
        <option value=''>Select</option>
        {props.children ||
          props.options?.map((option, index) => (
            <option key={index} value={option?.value || option}>
              {option?.label}
            </option>
          ))}
      </Select>
    </FieldWrapper>
  );
};

export default DropdownField;
