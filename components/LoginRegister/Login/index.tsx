import React, { useState } from 'react';
import { update, generateData, isFormValid } from '../../utils/formAction';
import FormField from '../../FormField';
import styles from './login.module.scss';
import './login.module.scss';
import { Button } from 'antd';
import { loginUser } from 'redux/actions/users';
import { connect } from 'react-redux';

interface Props {
  loginUser(data: DataSubmit): void;
}

interface DataSubmit {
  email: string;
  password: string;
}

function Login({ loginUser }: Props) {
  const [form, setForm] = useState({
    formError: false,
    formSuccess: '',
    formdata: {
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Email',
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        touched: false,
        validationMessage: '',
      },
      password: {
        element: 'input',
        value: '',
        config: {
          name: 'password_input',
          type: 'password',
          placeholder: 'Mật khẩu',
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: '',
      },
    },
  });

  const updateForm = (element: any) => {
    const newFormdata: any = update(element, form.formdata, 'login');

    setForm({
      ...form,
      formError: false,
      formdata: newFormdata,
    });
  };

  const submitForm = (e: any): void => {
    e.preventDefault();

    const dataToSubmit = generateData(form.formdata, 'login');
    const formIsValid = isFormValid(form.formdata, 'login');

    if (formIsValid) {
      loginUser(dataToSubmit);
    } else {
      setForm({
        ...form,
        formError: true,
      });
    }
  };
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.title}>ĐĂNG NHẬP</div>
      <form onSubmit={(event) => submitForm(event)}>
        <FormField id={'email'} formdata={form.formdata.email} change={(e: any) => updateForm(e)} />
        <FormField id={'password'} formdata={form.formdata.password} change={(e: any) => updateForm(e)} />
        <div className={styles.forgetPass}>Quên mật khẩu?</div>
        {form.formError && <div className={styles.errorLabel}>Kiểm tra lại thông tin</div>}
        <Button
          onClick={(event) => submitForm(event)}
          type="primary"
          style={{ backgroundColor: '#e91e63' }}
          className={styles.button}
          size="large"
        >
          Đăng nhập
        </Button>
      </form>
    </div>
  );
}

export default connect(null, { loginUser })(Login);
