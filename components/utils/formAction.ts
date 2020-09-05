interface FormElement {
  element: string;
  value: string;
  config?: {
    name: string;
    type: string;
    placeholder: string;
  };
  validation: {
    required?: boolean;
    email?: boolean;
    password?: boolean;
    confirm?: string;
  };
  valid: boolean;
  touched: boolean;
  validationMessage?: string;
}

interface Formdata {
  [name: string]: FormElement;
}

export const validate = (element: FormElement, formdata: Formdata) => {
  let error = [true, ''];

  if (element.validation.email) {
    const valid = /\S+@\S+\.\S+/.test(element.value);
    const message = `${!valid ? 'Email không hợp lệ' : ''}`;
    error = !valid ? [valid, message] : error;
  }

  if (element.validation.confirm) {
    const valid = element.value.trim() === formdata[element.validation.confirm].value;
    const message = `${!valid ? 'Mật khẩu nhập lại không chính xác' : ''}`;
    error = !valid ? [valid, message] : error;
  }

  if (element.validation.required) {
    const valid = element.value.trim() !== '';
    const message = `${!valid ? 'Bạn phải nhập mục này' : ''}`;
    error = !valid ? [valid, message] : error;
  }

  return error;
};

export const update = (element: any, formdata: Formdata, formName: string) => {
  const newFormdata: Formdata = {
    ...formdata,
  };
  const newElement: FormElement = {
    ...newFormdata[element.id],
  };

  newElement.value = element.event.target.value;

  if (element.blur) {
    const validData = validate(newElement, formdata);
    newElement.valid = validData[0] as boolean;
    newElement.validationMessage = validData[1] as string;
  }

  newElement.touched = element.blur;
  newFormdata[element.id] = newElement;

  return newFormdata;
};

export const generateData = (formdata: Formdata, formName: string) => {
  const dataToSubmit: any = {};

  for (const key in formdata) {
    if (key !== 'confirmPassword') {
      dataToSubmit[key] = formdata[key].value;
    }
  }

  return dataToSubmit;
};

export const isFormValid = (formdata: Formdata, formName: string) => {
  let formIsValid = true;

  for (const key in formdata) {
    formIsValid = (formdata[key].valid && formIsValid) as boolean;
  }
  return formIsValid;
};
