import  globalStore from'../store/store';
import axios from 'axios';
// import { errorHandler, successHandler } from '@store/models/notification';
// import { logout } from '@store/models/auth';

// import { AxiosError, AxiosResponse } from 'axios';

// const BASE_API_URL = 'https://staging-api.isleepemr.com/api/v1' || '';
const BASE_API_URL = 'http://localhost:3000';
const store: any = globalStore


//  Get Call
const Get = async (route: any, routeOptions?: any) => {
  const accessToken = store.getState()?.auth?.token;
  const options = {
    headers: {
      Accept: 'application/json',
      // Authorization: `Bearer ${accessToken}`,
      // Origin: 'http://localhost:5173/',
      // 'ngrok-skip-browser-warning': '69420',
    },
    ...routeOptions,
    // withCredentials: withCredentials && true,
  };
  try {
    const response = await axios.get(`${BASE_API_URL}/${route}`, options);

    return response;
  } catch (error: any) {
    if (error?.response?.status === 401) {
      // store.dispatch(logout());
    }

    throw error
  }
};

//  Post Call
const Post = async (route: any, payload: any, showAlert = true, noBearer: boolean = false) => {
  const accessToken = store?.getState()?.auth?.token;

  try {
    const headers: any = { Accept: 'application/json', Origin: 'http://localhost:5173/' };
    if (!noBearer) {
      headers['Authorization'] = `Bearer ${accessToken}`;
    }
    const response = await axios.post(`${BASE_API_URL}/${route}`, payload, {
      headers,
    });

    const data = response?.data?.data;
    const status = response?.data?.status;

    if (showAlert) {
      if (response?.data?.message) {
        // store.dispatch(successHandler({ msg: response?.data?.message }));
      }
    }
    if (status) {
      return data;
    }
  } catch (response: any) {
    if (showAlert) {
      if (response?.response?.data?.error && typeof response?.response?.data?.error === 'string') {
        // store.dispatch(errorHandler({ msg: response?.response?.data?.error }));
      }
    }
    throw Error(response?.response?.data?.error);
  }
};

//  Patch Call
const Patch = async (route: any, payload: any, showAlert = true) => {
  const accessToken = store?.getState()?.auth?.token;
  try {
    const response = await axios.patch(`${BASE_API_URL}/${route}`, payload, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
        Origin: 'http://localhost:5173/',
      },
    });
    // const { data, status } = response.data;

    if (showAlert) {
      if (response?.data?.message) {
        // store.dispatch(successHandler({ msg: response?.data?.message }));
      }
    }
    const data = response?.data?.data;
    const status = response?.data?.status;
    if (status) {
      return data;
    } else {
      throw Error();
    }
  } catch (response: any) {
    if (showAlert) {
      if (response?.response?.data?.error && typeof response?.response?.data?.error === 'string') {
        // store.dispatch(errorHandler({ msg: response?.response?.data?.error }));
      }
    }
    throw Error(response?.response?.data?.error);
  }
};

//  Put Call
const Put = async (route: any, payload: any, showAlert = true) => {
  const accessToken = store?.getState()?.auth?.token;
  try {
    const response = await axios.put(`${BASE_API_URL}/${route}`, payload, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
        Origin: 'http://localhost:5173/',
      },
    });
    // const { data, status } = response?.data;
    const data = response?.data?.data;
    const status = response?.data?.status;

    if (showAlert) {
      if (response?.data?.message) {
        // store.dispatch(successHandler({ msg: response?.data?.message }));
      }
    }
    if (status) {
      return data;
    }
  } catch (response: any) {
    if (showAlert) {
      if (response?.response?.data?.error && typeof response?.response?.data?.error === 'string') {
        // store.dispatch(errorHandler({ msg: response?.response?.data?.error }));
        // const msg = response?.response?.data?.error?.message;
      }
    }
    throw Error(response?.response?.data?.error);
  }
};

//  Delete Call
const Delete = async (route: any, showAlert = true) => {
  try {
    const accessToken = store?.getState()?.auth?.token;

    const headers: any = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
        Origin: 'http://localhost:5173/',
      },
    };
    const response = await axios.delete(`${BASE_API_URL}/${route}`, headers);

    const data = response.data?.data;
    const status = response?.data?.status;
    if (showAlert) {
      if (response?.data?.message) {
        // store.dispatch(successHandler({ msg: response?.data?.message }));
      }
    }
    if (status) {
      return data;
    }
  } catch (response: any) {
    if (showAlert) {
      if (response?.response?.data?.error && typeof response?.response?.data?.error === 'string') {
        // store.dispatch(errorHandler({ msg: response?.response?.data?.error }));
      }
    }
    throw Error(response.response?.data?.error);
  }
};

export { Post, Put, Get, Patch, Delete };