import React from 'react';
import type { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface Props {
	type: React.HTMLInputTypeAttribute;
	errorMessage?: string;
	placeholder: string;
	className?: string;
	name: string;
	register: UseFormRegister<any>;
	rules?: RegisterOptions;
}

const Input = ({ type, className, errorMessage, placeholder, name, register, rules }: Props) => {
	return (
		<div className={className}>
			<input
				type={type}
				className={'w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'}
				placeholder={placeholder}
				{...register(name, rules)}
			/>
			{/* Set min-height để text ko bị nhảy lên nhảy xuống khi hiện lỗi */}
			<div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errorMessage}</div>
		</div>
	);
};

export default Input;
