import React, {useState} from 'react'

import propTypes from 'prop-types'

import './index.scss'

export default function Number(props) {

    const {value, placeholder, name, min, max, prefix, suffix, isSuffixPlural} = props;

    const [InputValue, SetInputValue] = useState(`${prefix}${value}${suffix}`);

    const onChange = e => {
        let value = String(e.target.value);
        if(prefix) value = value.replace(prefix);
        if(suffix) value = value.replace(suffix);

        const patternNumeric = new RegExp("[0-9]*");
        const isNumeric = patternNumeric.test(value);

        if(isNumeric && +value <= max && +value >= min) {
            props.onChange({
                target: {
                    name: name,
                    value: +value
                }
            });
            SetInputValue(`${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? "s" : ""}`);
        }
    };

    const minus = () => {
        value > min && onChange({
            name: name,
            value: +value - 1
        });
    };

    const plus = () => {
        value > min && onChange({
            name: name,
            value: +value + 1
        });
    };

    return (
        <div className= {["input-number mb-3", props.outerClassname].join(" ")}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text minus" onClick={minus}>
                        -
                    </span>
                </div>
                <input
                    min={min}
                    max={max}
                    name={name}
                    pattern="[0-9]*"
                    className="form-control"
                    placeholder={placeholder ? placeholder : "0"}
                    value={String(InputValue)}
                    onChange={onChange}
                />
                <div className="input-group-prepend">
                     <span className="input-group-text plus" onClick={plus}>
                        +
                    </span>
                </div>
            </div>
        </div>
    )
}

Number.defaultProps = {
    min: 1,
    max: 1,
    suffix: "",
    prefix: ""
};

Number.propTypes = {
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    onChange: propTypes.func,
    isSuffixPlural: propTypes.bool,
    placeholder: propTypes.string,
    outerClassname: propTypes.string
};