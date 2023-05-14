import React from 'react';
import { MdError } from 'react-icons/md';

const FieldWrapper = (props: {
  form: any,
  label: string,
  name: string,
  children: any,
  className: string,
  noValidateMessage: boolean,
}) => {
  const {form, label, name} = props;
  return (
    <div className={props.className}>
      <div className='flex w-full flex-col mb-1'>
        {label && (
          <label className='text-gray-900 font-bold mb-1' htmlFor={name}>
            {label}
          </label>
        )}
        {props.children}
      </div>
      {!props.noValidateMessage && form.errors[name] && form.touched[name] && (
        <div className='text-red-500 flex flex-row items-center gap-x-2'>
          <MdError size={20} />
          {form.errors[name]}
        </div>
      )}
    </div>
  );
};

export default FieldWrapper;
