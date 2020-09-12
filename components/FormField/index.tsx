import React from 'react';

interface FormElement {
  element: string;
  value: string;
  config?: any;
  validation: {
    required?: boolean;
    email?: boolean;
    password?: boolean;
    confirm?: string;
    label?: string;
  };
  valid: boolean;
  touched: boolean;
  validationMessage?: string;
  showlabel?: boolean;
}

interface Change {
  event: any;
  id: string;
  blur?: boolean;
}
interface Props {
  formdata: FormElement;
  id: string;
  change(change: Change): void;
}

const Formfield = ({ formdata, change, id }: Props) => {
  const showError = () => {
    let errorMessage = null;

    if (formdata.validation && !formdata.valid) {
      errorMessage = <span>{formdata.validationMessage}</span>;
    }

    return errorMessage;
  };

  const renderTemplate = () => {
    let formTemplate = null;

    switch (formdata.element) {
      case 'input':
        formTemplate = (
          <div>
            {formdata.showlabel ? <p>{formdata.config.label}</p> : null}

            <input
              {...formdata.config}
              value={formdata.value}
              onBlur={(event) => change({ event, id, blur: true })}
              onChange={(event) => change({ event, id })}
            />
            {showError()}
          </div>
        );
        break;
      case 'select':
        formTemplate = (
          <div className="formBlock">
            {formdata.showlabel ? <p>{formdata.config.label}</p> : null}
            <select
              value={formdata.value}
              onBlur={(event) => change({ event, id, blur: true })}
              onChange={(event) => change({ event, id })}
            >
              {/* <option value="">Select one</option> */}
              {formdata.config.options.map((item: any, i: number) => (
                <option key={i} value={item.key}>
                  {item.value}
                </option>
              ))}
            </select>
            {showError()}
          </div>
        );
        break;
      case 'textarea':
        formTemplate = (
          <div className="formBlock">
            {formdata.showlabel ? <div className="label_inputs">{formdata.config.label}</div> : null}
            <textarea
              {...formdata.config}
              value={formdata.value}
              onBlur={(event) => change({ event, id, blur: true })}
              onChange={(event) => change({ event, id })}
            />
            {showError()}
          </div>
        );
        break;
      default:
        formTemplate = null;
    }

    return formTemplate;
  };

  return <>{renderTemplate()}</>;
};

export default Formfield;
