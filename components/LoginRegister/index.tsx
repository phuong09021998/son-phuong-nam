import React, { useEffect } from 'react';
import { Drawer } from 'antd';
import { connect } from 'react-redux';
import { toggleRegisterLogin } from 'redux/actions/ui';
import { getUser } from 'redux/actions/users';
import Login from './Login';
import styles from './LoginRegister.module.scss';

interface Props {
  registerLogin: {
    isOpen: boolean;
    status: string;
  };
  toggleRegisterLogin(isOpen: boolean, status: string): void;
  getUser(): void;
  users: any;
}

function LoginRegister({ registerLogin, toggleRegisterLogin, getUser, users }: Props) {
  const onClose = () => {
    toggleRegisterLogin(false, 'none');
  };

  useEffect(() => {
    getUser();
  }, [users]);

  return (
    <Drawer placement="right" closable={false} onClose={onClose} visible={registerLogin.isOpen} width={400}>
      <div className={styles.drawer}>
        {registerLogin.status === 'login' && <Login close={onClose} />}
        {/* {registerLogin.status === 'register' && <div>I'm a register</div>} */}
      </div>
    </Drawer>
  );
}

const mapStateToProps = (state: any) => ({ registerLogin: state.ui.registerLogin, user: state.users.data });

export default connect(mapStateToProps, { toggleRegisterLogin, getUser })(LoginRegister);
