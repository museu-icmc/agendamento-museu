const FormButton = ({text, onClick, bgColor="bg-blue-600", textColor="text-white", className=""}) => {
	return (
		<button
			onClick={onClick}
			className={
				`${bgColor} ${textColor}
				flex items-center justify-center
				px-6 py-2.5 rounded-lg border-none font-semibold 
				cursor-pointer transition-all duration-200
				hover:opacity-90 active:scale-95 ${className}`}
		>
			{text}
		</button>
	);
};

export default FormButton;
