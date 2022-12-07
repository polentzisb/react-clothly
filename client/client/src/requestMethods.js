import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODRhMjk5Y2U0MTMyOWI0MGFmYzMxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTg0NzIxMiwiZXhwIjoxNjcwMTA2NDEyfQ.CqhOmL7Xaw2UqonWduMfKMmPslVjY2IVshJ3603B-1U"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});