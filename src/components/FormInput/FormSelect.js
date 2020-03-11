import React from 'react';

export const Select = props => {
  const renderSelectOptions = (key, index) => {
    return (
      <option
        key={`${index}-${key}`}
        value={key}
      >
        {props.options[key]}
      </option>
    );
  }

  if (props && props.options) {
    return (
      <div className="form-group">
        <label htmlFor="{props.label}">{props.label}</label>
        <select {...props.input} className="form-control" id="{props.label}">
          <option value="">Select</option>
          {Object.keys(props.options).map(renderSelectOptions)}
        </select>
      </div>
    )
  }
  return <div></div>
}

export default Select;
