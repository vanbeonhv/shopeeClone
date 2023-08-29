import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Schema } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../utils/rules';
import { useMutation } from '@tanstack/react-query';
import { login, LoginUser } from '../../api/auth.api';
import Input from '../../components/Input';

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Schema>({ resolver: yupResolver(schema) });

	console.log(errors);

	const loginMutation = useMutation({
		mutationFn: (body: LoginUser) => login(body),
	});

	const onSubmit = handleSubmit((data) => {
		console.log(data);
	});
	return (
		<div className='bg-orange'>
			<div className='mx-auto max-w-7xl px-4'>
				<div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-28 lg:pr-10'>
					<div className='lg:col-span-2 lg:col-start-4'>
						<form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit}>
							<div className='text-2xl'>Đăng nhập</div>
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
							<div className='mt-5'>
								<button
									type='submit'
									className='w-full border bg-orange py-3 px-2 text-center text-sm uppercase text-white hover:bg-orange-300'
								>
									Đăng nhập
								</button>
							</div>
							<div className='mt-8 flex items-center justify-center'>
								<span className='text-sm text-slate-300'>Bạn mới biết đến Shopee?</span>
								<Link to='/register' className='ml-1	text-red-400'>
									Đăng ký
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
