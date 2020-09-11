import React, { useEffect, useState } from 'react';
import privateRoute from 'components/utils/privateRoute';
import styles from './Admin.module.scss';
import Link from 'next/link';
import { connect } from 'react-redux';
import { toggleRegisterLogin } from 'redux/actions/ui';
import Button from '@material-ui/core/Button';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    color: 'white!important',
    padding: '0',
    margin: '0.2em 1em',
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00acc1',
    },
  },
});

interface Props {
  toggleRegisterLogin(isOpen: boolean, status: string): any;
}

function Admin({ toggleRegisterLogin }: Props) {
  const [currentActive, setCurrentActive] = useState('nontification');
  const classes = useStyles();

  useEffect(() => {
    toggleRegisterLogin(false, 'none');
  });

  const handleMenuClick = (e: any, currentActive: string) => {
    setCurrentActive(currentActive);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <div className={styles.leftAdmin}>
          <Link href="/">
            <div className={styles.topMenu}>
              <div className={styles.logo}>
                <img src="/icons/logo.svg" alt="logo" />
              </div>
              <div className={styles.textWrapper}>
                <div className={styles.text}>PHƯƠNG NAM</div>
                <div className={styles.slogan}>Thách Thức Thời Gian</div>
              </div>
            </div>
          </Link>
          <hr />
          <div className={styles.mainMenu}>
            <Button
              className={classes.button}
              onClick={(e) => handleMenuClick(e, 'nontification')}
              // @ts-ignore
              style={currentActive === 'nontification' ? { backgroundColor: '#00acc1' } : null}
            >
              <div className={styles.menuItem}>
                <div className={styles.icon}>
                  <img src="/icons/alarm.svg" alt="alarm" />
                </div>
                <div className={styles.text}>Thông Báo</div>
              </div>
            </Button>
            <Button
              className={classes.button}
              onClick={(e) => handleMenuClick(e, 'messages')}
              // @ts-ignore
              style={currentActive === 'messages' ? { backgroundColor: '#00acc1' } : null}
            >
              <div className={styles.menuItem}>
                <div className={styles.icon}>
                  <img src="/icons/comment.svg" alt="comment" />
                </div>
                <div className={styles.text}>Tin Nhắn</div>
              </div>
            </Button>
            <Button
              className={classes.button}
              onClick={(e) => handleMenuClick(e, 'users')} // @ts-ignore
              style={currentActive === 'users' ? { backgroundColor: '#00acc1' } : null}
            >
              <div className={styles.menuItem}>
                <div className={styles.icon}>
                  <img src="/icons/people.svg" alt="people" />
                </div>
                <div className={styles.text}>Người Dùng</div>
              </div>
            </Button>
            <Button
              className={classes.button}
              onClick={(e) => handleMenuClick(e, 'posts')} // @ts-ignore
              style={currentActive === 'posts' ? { backgroundColor: '#00acc1' } : null}
            >
              <div className={styles.menuItem}>
                <div className={styles.icon}>
                  <img src="/icons/newspaper.svg" alt="news" />
                </div>
                <div className={styles.text}>Bài Viết</div>
              </div>
            </Button>
            <Button
              className={classes.button}
              onClick={(e) => handleMenuClick(e, 'products')} // @ts-ignore
              style={currentActive === 'products' ? { backgroundColor: '#00acc1' } : null}
            >
              <div className={styles.menuItem}>
                <div className={styles.icon}>
                  <img src="/icons/product.svg" alt="product" />
                </div>
                <div className={styles.text}>Sản Phẩm</div>
              </div>
            </Button>
            <Button
              className={classes.button}
              onClick={(e) => handleMenuClick(e, 'mores')} // @ts-ignore
              style={currentActive === 'mores' ? { backgroundColor: '#00acc1' } : null}
            >
              <div className={styles.menuItem}>
                <div className={styles.icon}>
                  <img src="/icons/more.svg" alt="more" />
                </div>
                <div className={styles.text}>Khác</div>
              </div>
            </Button>
          </div>
          <div className={styles.img}></div>
        </div>
        <div className={styles.rightAdmin}>this is right</div>
      </div>
    </ThemeProvider>
  );
}

export default privateRoute(connect(null, { toggleRegisterLogin })(Admin), true);
