import axios, { AxiosError, HttpStatusCode } from 'axios';

// eslint-disable-next-line import/no-named-as-default-member
export const isAxiosError = <T>(error: unknown): error is AxiosError<T> => axios.isAxiosError(error);

export const isAxiosUnprocessableEntity = <FormError>(error: unknown): error is AxiosError<FormError> =>
	isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity;
