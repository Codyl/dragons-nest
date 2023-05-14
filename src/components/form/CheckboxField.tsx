import React from 'react';

const CheckboxField = (props: {
  id:string,
  className: string,
  inputClass: string,
  field: any,
  form: any,
  disabled: boolean,
  label: string,
  placeholder: string,
  readOnly: boolean,
}) => {
  const {field, form} = props;
  return (
    <div>
      <input
        type='checkbox'
        {...field}
        {...props}
        $hasError={form.errors[field.name] && form.touched[field.name]}
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        disabled={props.disabled}
        className={props.inputClass}
      />
      <label className='text-gray-900 mb-1 ml-1' htmlFor={field.name}>
        {props.label}
      </label>
    </div>
  );
};

CheckboxField.displayName = 'CheckboxField';

export default CheckboxField;
