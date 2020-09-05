import React, { Fragment, useState } from 'react';
import { Drawer } from 'antd';
import { connect } from 'react-redux';
import { toggleRegisterLogin } from 'redux/actions/ui';
import styles from './login-register.module.scss';
import { update, generateData, isFormValid } from '../utils/formAction';
import FormField from '../FormField';

interface Props {
  registerLogin: {
    isOpen: boolean;
    status: string;
  };
  toggleRegisterLogin(isOpen: boolean, status: string): void;
}

function LoginRegister({ registerLogin, toggleRegisterLogin }: Props) {
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
          placeholder: 'Enter your email',
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
          placeholder: 'Enter your password',
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
      console.log(dataToSubmit);
    } else {
      setForm({
        ...form,
        formError: true,
      });
    }
  };

  const renderLogin = () => (
    <Fragment>
      <div className={styles.drawer}>
        <div className={styles.title}>ĐĂNG NHẬP</div>
        <form onSubmit={(event) => submitForm(event)}>
          <FormField id={'email'} formdata={form.formdata.email} change={(e: any) => updateForm(e)} />

          <FormField id={'password'} formdata={form.formdata.password} change={(e: any) => updateForm(e)} />

          {form.formError && <div className={styles.errorLabel}>Kiểm tra lại thông tin</div>}
          <button onClick={(event) => submitForm(event)}>Đăng nhập</button>
        </form>
      </div>
    </Fragment>
  );

  const onClose = () => {
    toggleRegisterLogin(false, 'none');
  };

  return (
    <Drawer placement="right" closable={false} onClose={onClose} visible={registerLogin.isOpen} width={400}>
      {registerLogin.status === 'login' && renderLogin()}
      {/* {registerLogin.status === 'register' && <div>I'm a register</div>} */}
    </Drawer>
  );
}

interface State {
  ui: {
    registerLogin: {
      isOpen: boolean;
      status: string;
    };
  };
}

const mapStateToProps = (state: State) => ({ registerLogin: state.ui.registerLogin });

export default connect(mapStateToProps, { toggleRegisterLogin })(LoginRegister);
