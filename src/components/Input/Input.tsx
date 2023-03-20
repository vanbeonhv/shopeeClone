import React from 'react';
import type { RegisterOptions, UseFormRegister } from 'react-hook-form';
interface Props {
	type: React.HTMLInputTypeAttribute;
	placeholder?: string;
	errorsMessage?: string;
	className?: string;
	name: string;
	register: UseFormRegister<any>;
	rules?: RegisterOptions;
	autoComplete?: string;
}
const Input = ({ type, placeholder, errorsMessage, className, name, register, rules, autoComplete }: Props) => {
	return (
		<div>
			<div className={className}>
				<input
					type={type}
					className=' w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
					placeholder={placeholder}
					autoComplete='on'
					{...register(name, rules)}
				/>
				{/* Set min-height để text ko bị nhảy lên nhảy xuống khi hiện lỗi */}
				<div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errorsMessage}</div>
			</div>
		</div>
	);
};

export default Input;
