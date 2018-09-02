/**
 * connector between the client and the server.
 *
 * Promise based HTTP client for the browser and node.js
 */
import axios from 'axios';

const BASE_URI = 'https://fast-mesa-23278.herokuapp.com/';

export default () => axios.create({
  baseURL: BASE_URI,
});
