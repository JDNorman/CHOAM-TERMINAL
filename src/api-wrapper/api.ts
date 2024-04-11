/* eslint-disable prettier/prettier */
import {writeFileSync} from 'fs';
import axios, {AxiosRequestConfig} from 'axios';
import {config} from '../config';

const API_URL = '';
const {IDENTIFIER} = config;

// create an empty object to store the data
// export let data: ApiData = {

// }

const axiosOpts: AxiosRequestConfig = {
  headers: {
    'Accept-Language': 'en-us',
  },
};

//let getDataCounter = 0;
export async function getData() {
}

export const mappedNames: {
  text: string[];
} = {
  text: [],
};

export {API_URL};
