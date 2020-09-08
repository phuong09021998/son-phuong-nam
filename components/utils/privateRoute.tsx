import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from 'redux/actions/users';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { withRouter } from 'next/router';

const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

export default function Auth(ComposedClass: any, adminRoute = false) {
  class AuthenticationCheck extends Component {
    state = {
      loading: true,
    };

    componentDidMount() {
      const { getUser }: any = this.props;
      getUser();
    }

    componentDidUpdate() {
      const { users, router }: any = this.props;
      const { loading } = this.state;

      if (adminRoute && loading) {
        if (users.error || users.data.role < 1) {
          router.push('/');
        } else {
          return this.setState({ loading: false });
        }
      } else if (!adminRoute && loading) {
        if (users.error) {
          router.push('/');
        } else {
          return this.setState({ loading: false });
        }
      }
    }

    render() {
      const { user }: any = this.props;
      const { loading } = this.state;

      if (loading) {
        return (
          <div
            style={{
              width: '100%',
              marginTop: '10em',
              textAlign: 'center',
            }}
          >
            <Spin indicator={antIcon} />
          </div>
        );
      }

      return <ComposedClass {...this.props} user={user} />;
    }
  }

  function mapStateToProps(state: any) {
    return {
      users: state.users,
    };
  }

  return connect(mapStateToProps, { getUser })(withRouter(AuthenticationCheck as any));
}
