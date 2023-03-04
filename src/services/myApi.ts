import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR3VzdGF2byIsImVtYWlsIjoiZ3VzdGF2b0BlbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRNY05LN2ZtQnI0bS8vWkZDdzR2NnZ1M3IwWjc0UVJnaUFXOXlqUUNLV1lqRVVhak01RUpNaSIsImlkIjoiNjQwMzc4MWFmMmYyOWNkODI0OGFhMGUwIiwiaWF0IjoxNjc3OTQ5MDUxLCJleHAiOjM2Nzc5NDkwNTF9.5cbaZvMC1gYguw2BkBqcxAZ8R5RP5DauPyudBx0TtSk"

export const myApi = axios.create({
  baseURL: 'http://localhost:3001',
  headers: { ['x-access-token'] : token }
})