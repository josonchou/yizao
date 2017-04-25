/**
 * Created by alixez on 17-4-22.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { LOGOUT } from '../actions/Auth';

class AuthButton extends React.Component {

    static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,
        logout: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
    };

    render() {
        return(
            <Button title={this.props.isLoggedIn ? 'Log Out' : 'Log In'} onPress={this.props.isLoggedIn ? this.props.logout : this.props.login} />
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchProps = dispatch => ({
    logout: () => dispatch({type: LOGOUT}),
    login: () => {
        console.log('Login clicked');
        dispatch(NavigationActions.navigate({ routeName: 'Login' }))
    }
});

export default connect(mapStateToProps, mapDispatchProps)(AuthButton);