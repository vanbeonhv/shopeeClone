import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { getRules } from 'src/utils/rules';

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
		getValues
	} = useForm<FormData>();
	const rules = getRules(getValues);
	const onSubmit = handleSubmit((data) => {
		console.log(data);
	});
	console.log('errors: ', errors);
	return (
		<div className='bg-orange'>
			<div className='container mx-auto max-w-7xl px-4'>
				<div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-28 lg:pr-10'>
					<div className='lg:col-span-2 lg:col-start-4'>
						<form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
							<div className='text-2xl'>Đăng ký</div>
							<div className='mt-5'>
								<input
									type='email'
									className=' w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
									placeholder='Email/Số điện thoại/Tên đăng nhập'
									{...register('email', rules.email)}
								/>
								{/* Set min-height để text ko bị nhảy lên nhảy xuống khi hiện lỗi */}
								<div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errors.email?.message}</div>
							</div>
							<div className='mt-2'>
								<input
									type='password'
									autoComplete='on'
									className=' w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
									placeholder='Mật khẩu'
									{...register('password', rules.password)}
								/>
								<div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errors.password?.message}</div>
							</div>

							<div className='mt-2'>
								<input
									type='password'
									autoComplete='on'
									className=' w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
									placeholder='Nhập lại mật khẩu'
									{...register('confirm_password', {
										...rules.confirm_password
									})}
								/>
								<div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errors.confirm_password?.message}</div>
							</div>
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
