import React, { useState, useEffect } from 'react';
import { update, generateData, isFormValid } from '../../utils/formAction';
import FormField from '../../FormField';
import styles from './Login.module.scss';
import { Button } from 'antd';
import { loginUser } from 'redux/actions/users';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

interface Props {
  loginUser(data: DataSubmit): any;
  user: any;
}

interface DataSubmit {
  email: string;
  password: string;
}

function Login({ user, loginUser }: Props) {
  const router = useRouter();
  // console.log(user);
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
      loginUser(dataToSubmit).then(console.log(user));
    } else {
      setForm({
        ...form,
        formError: true,
      });
    }
  };

  useEffect(() => {
    if (user) {
      if (user.role > 0) {
        router.push('/admin');
      } else {
        console.log('User');
      }
    }
  }, [user]);

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

const mapStateToProps = (state: any) => ({
  user: state.user.data,
});

export default connect(mapStateToProps, { loginUser })(Login);
