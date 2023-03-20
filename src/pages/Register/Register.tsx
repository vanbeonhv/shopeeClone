import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Input from 'src/components/Input';
import { getRules } from 'src/utils/rules';
import Input from 'src/components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import type { Schema } from 'src/utils/rules';
import { schema } from 'src/utils/rules';
interface FormData {
	email: string;
	password: string;
	confirm_password: string;
}
const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Schema>({
		resolver: yupResolver(schema)
	});
	// const rules = getRules(getValues);
	const onSubmit = handleSubmit((data) => {
		console.log(data);
	});
	console.log('errors: ', errors);
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
							<Input
								type='email'
								errorMessage={errors.email?.message}
								placeholder='Email/Số điện thoại/Tên đăng nhập'
								className='mt-8'
								name='email'
								register={register}
								rules={rules.email}
							/>
							<Input
								type='password'
								errorMessage={errors.password?.message}
								placeholder='Mật khẩu'
								className='mt-2'
								name='password'
								register={register}
								rules={rules.password}
							/>
							<Input
								type='password'
								errorMessage={errors.confirm_password?.message}
								placeholder='Nhập lại mật khẩu'
								className='mt-2'
								name='confirm_password'
								register={register}
								rules={rules.confirm_password}
							/>
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
