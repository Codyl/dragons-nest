import React from 'react';

interface fields {
  formik: any;
  name: string;
  component: string;
  children: any;
  [props: string]: any;
}

const Field = React.forwardRef(
  ({ formik, name, component = 'input', children = null, ...props }: fields, ref) => {
    return React.createElement(
      component,
      {
        form: formik,
        field: {
          onChange: (event: Event) => formik.handleChange(event),
          onBlur: (event: Event) => formik.handleBlur(event),
          name: name,
          value: formik.values[name],
        },
        ref,
        ...props,
      },
      children
    );
  }
);

Field.displayName = 'Field';

export default Field;
