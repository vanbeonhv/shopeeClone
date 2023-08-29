import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import type { Schema } from 'src/utils/rules';
import { schema } from 'src/utils/rules';
import Input from 'src/components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { registerAccount, RegisterUser } from '../../api/auth.api';
import { omit } from 'lodash';
import { isAxiosError, isAxiosUnprocessableEntity } from '../../utils/utils';

interface FormData {
	email: string;
	password: string;
	confirm_password: string;
}
const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<Schema>({
		resolver: yupResolver(schema),
	});

	const registerAccountMutation = useMutation({
		mutationFn: (body: RegisterUser) => registerAccount(body),
	});

	// const rules = getRules(getValues);
	const onSubmit = handleSubmit((data) => {
		const tempBody = omit(data, ['confirm_password']);
		const body = { ...tempBody, name: 'Marc', phonenumber: '986090072', role: 'Customer' };
		registerAccountMutation.mutate(body, {
			onSuccess: (data) => console.log(data),
			onError: (error) => {
				if (isAxiosUnprocessableEntity(error)) {
					// const formError = error.setError();
				}
			},
		});
	});
	return (
		<div className='bg-orange'>
			<div className='container'>
				<div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-28 lg:pr-10'>
					<div className='lg:col-span-2 lg:col-start-4'>
						<form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
							<div className='text-2xl'>Đăng ký</div>
							<Input
								name='email'
								register={register}
								type='email'
								placeholder='Email/Số điện thoại/Tên đăng nhập'
								className='mt-5'
								errorsMessage={errors.email?.message}
							></Input>
							<Input
								name='password'
								register={register}
								type='password'
								placeholder='Mật khẩu'
								className='mt-2'
								errorsMessage={errors.password?.message}
							></Input>
							<Input
								name='confirm_password'
								register={register}
								type='password'
								placeholder='Nhập Lại Mật khẩu'
								className='mt-2'
								errorsMessage={errors.confirm_password?.message}
								autoComplete='on'
							></Input>
							<div className='mt-2'>
								<button
									type='submit'
									className='w-full border bg-orange py-3 px-2 text-center text-sm uppercase text-white hover:bg-orange-300'
								>
									Đăng ký
								</button>
							</div>
							<div className='mt-8 flex items-center justify-center'>
								<span className='text-sm text-slate-300'>Bạn đã có tài khoản? </span>
								<Link to='/login' className='ml-1	text-red-400'>
									Đăng nhập
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
