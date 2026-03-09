const DropdownSelect = ({ label, options, selected, setSelected }) => {
	return (
		<div className="flex flex-col gap-1.5 w-full">
			<label className="text-sm font-medium text-slate-700 ml-1">
				{label}
			</label>

			<select
				value={selected}
				onChange={(e) => setSelected(e.target.value)}
				className="px-4 py-2 bg-white border border-slate-500 rounded-lg 
									 focus:outline-none focus:ring-2 focus:ring-blue-500
									 appearance-none cursor-pointer text-slate-900"
			>
				<option value="" disabled>Selecione uma opção...</option>
				
				{options.map((opt) => (
					<option key={opt.id || opt.value} value={opt.value}>
						{opt.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default DropdownSelect;
