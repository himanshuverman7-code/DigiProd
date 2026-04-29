class ApiError extends Error {
  constructor(
    public code: number,
    message: string,
    public errors?: unknown,
  ) {
    super(message);
  }
}

export default ApiError;