import React from 'react';
import FieldWrapper from './FieldWrapper';

const InputField = (props: {
  id: string,
  className: string,
  inputClass: string,
  field: any,
  form: any,
  disabled: boolean,
  label: string,
  type: string,
  max?: any,
  min?: any,
  placeholder?: string,
  normalize: (value: string) => void,
  readOnly: boolean,
  icon?: any,
  noValidateMessage: boolean,
}) => {
  const {field, form, type: inputType} = props;
  return (
    <FieldWrapper
      name={field.name}
      label={props.label}
      form={form}
      className={props.className}
      noValidateMessage={props.noValidateMessage}
    >
      <div className='flex flex-row items-center'>
        <input
          {...field}
          {...props}
          onChange={(event) => {
            form.setFieldValue(field.name, props.normalize(event.target.value));
          }}
          type={inputType}
          max={props.max}
          min={props.min}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          disabled={props.disabled}
          className={`${props.inputClass} ${
            props.icon && 'pr-10'
          } border border-black rounded w-full`}
        />
        {props.icon &&
          React.cloneElement(props.icon, {
            className: 'text-black -ml-8',
            size: 24,
          })}
      </div>
    </FieldWrapper>
  );
};

InputField.displayName = 'TextField';

export default InputField;
