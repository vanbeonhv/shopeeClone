import { type RegisterOptions } from 'react-hook-form';

/* eslint-disable prettier/prettier */
type Rules = { [key: string]: RegisterOptions }
export const rules = {
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6-160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6-160 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6-160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6-160 ký tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Nhập lại password là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6-160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6-160 ký tự'
    }
  }
};
