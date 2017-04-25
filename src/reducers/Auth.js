/**
 * Copyright(c) omk 2016
 * Filename:
 * Author  : alixez
 */

import * as AuthTypes from '../actions/Auth';

const initialAuthState = {
  isLoggedIn: false,
  loading: false,
  user: {},
};

export default function(state = initialAuthState, action) {
  switch (action.type) {
    case AuthTypes.ROUTE.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case AuthTypes.ROUTE.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case AuthTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AuthTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        user: action.user,
      };
    case AuthTypes.FETCH_USER_FAIL:
      return {
        ...state,
        loading: false,
        isSuccess: true,
      };
    default:
      return state;
  }
}

export function auth(account, password, callback) {
  return dispatch => {
    dispatch({
      type: AuthTypes.FETCH_USER_REQUEST
    });
    return simpleLogin(account, password)
      .then(resp => {
        dispatch({
          type: AuthTypes.FETCH_USER_SUCCESS,
          user: resp.data.user,
        });
        if (typeof callback === 'function') {
          callback(true, resp);
        }
      })
      .catch(resp => {
        dispatch({
          type: AuthTypes.FETCH_USER_FAIL,
          user: resp.data.user,
        });
        if (typeof callback === 'function') {
          callback(false, resp);
        }
      })
  }
}

function simpleLogin(account, password) {
  setTimeout(() => {
    if (/\d{1,4}/.test(account) && password === '666666') {
      Promise.resolve({
        state: 200,
        data: {
          user: {
            name: 'alixez',
            phone: '18627894265',
          }
        }
      })
    } else {
      Promise.reject({
        state: 200,
        date: {
          message: '用户名或密码错误',
          user: {}
        }
      })
    }
  }, 3000);
}