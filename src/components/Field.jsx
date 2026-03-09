import { useState } from 'react';

const Field = ({ label, name, type="text", placeholder="", fieldObj={value:""}, className="flex-1"}) => {
	return (
		<div className={`flex flex-1 flex-col gap-1.5 ${className}`}>
			<label>
				{label}
			</label>

			<input
				id={name}
				type={type}
				placeholder={placeholder}
				value={fieldObj.value}
				onChange={(e) => fieldObj.set(e.target.value)}
				className={"flex-1 px-4 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"}
			/>
		</div>
	);
};

export default Field;
