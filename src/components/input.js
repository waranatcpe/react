import React from "react";

const Input = props => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control has-icons-left has-icons-right">
        <input
          className="input"
          type="text"
          placeholder={props.alt}
          value={props.value}
          onChange={event =>
            props.onChangeFromComponent &&
            props.onChangeFromComponent(event.target.value)
          }
        />
        <span className="icon is-small is-left">
          <i className={props.icon}></i>
        </span>
      </div>
    </div>
  );
};

export default Input;
