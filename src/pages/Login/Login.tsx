import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
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
							<div className='mt-5'>
								<input
									type='email'
									name='email'
									className=' w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
									placeholder='Email/Số điện thoại/Tên đăng nhập'
								/>
								{/* Set min-height để text ko bị nhảy lên nhảy xuống khi hiện lỗi */}
								<div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>Email không hợp lệ</div>
							</div>
							<div className='mt-5'>
								<input
									type='password'
									name='password'
									className=' w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
									placeholder='Mật khẩu'
								/>
							</div>
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
