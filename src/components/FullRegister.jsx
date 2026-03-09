import { useState } from 'react';

import Field from '../components/Field'
import DropdownSelect from '../components/DropdownSelect'
import FormButton from '../components/FormButton'

const RegisterVisit = ({ctx}) => {
	const publicType = [
		{value: "Infantil", label: "Infantil"},
		{value: "Fundamental", label: "Fundamental"},
		{value: "Médio", label: "Médio"},
		{value: "Superior", label: "Superior"},
		{value: "Familiar", label: "Familiar"},
		{value: "Outros", label: "Outros"},
	];

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row gap-4 max-w-full">
				<Field label="Data" placeholder="Nome" />
				<Field label="Horário" placeholder="Nome" />
			</div>

			<div className="flex flex-row gap-4">
				<Field label="N° de visitantes" placeholder="São Carlos"/>
				<Field label="N° de Responsáveis" placeholder="SP" />
			</div>

			<div className="flex flex-row gap-4">
				<DropdownSelect label="Tipo de Público" options={publicType}/>
			</div>

			<div className="flex flex-row gap-4">
				<Field label="N° de pessoas com deficiência" placeholder="SP" />
				<DropdownSelect label="Necessidade para PcD" options={publicType}/>
			</div>

			<div className="flex flex-row gap-4">
				<Field label="Observações/Informações Adicionais" placeholder="SP" className="h-32"/>
			</div>
		</div>
	);
};

const RegisterCPF = ({ctx}) => {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row gap-4 max-w-full">
				<Field label="Nome" placeholder="Nome" />
			</div>

			<div className="flex flex-row gap-4">
				<Field label="Cidade" placeholder="São Carlos"/>
				<Field label="UF" placeholder="SP" className="w-16"/>
				<Field label="País" placeholder="Brasil" className="w-24"/>
			</div>

			<div className="flex flex-row gap-4">
				<Field label="E-mail" placeholder="exemplo@mail.com" />
			</div>
		</div>
	);
};

const FullRegister = () => {
	const visitType = [
		{value: "cpf", label: "Pessoa Física"},
		{value: "cnpj", label: "Institucional"},
	];

	const [visitSelected, setVisitSelected] = useState("cnpj");
	console.log(visitSelected);

	return (
		<div className="flex bg-black p-4 rounded-lg">
			<div className="flex flex-row gap-4 p-4 bg-cyan-50 rounded-lg">
				<div className="flex flex-col gap-4 p-4">
					<p> <b> Dados da Pessoa/Instituição </b> </p>
					<DropdownSelect label="Tipo de Visitante" options={visitType} selected={visitSelected} setSelected={setVisitSelected}/>
					
					<RegisterCPF />
				</div>
	
				<div className="flex flex-col gap-4 p-4">
					<p> <b> Dados da Visitação </b> </p>
	
					<RegisterVisit />
					
					<div className="flex flex-row justify-end gap-4">
						<FormButton text="Limpar" className="w-24"/>
						<FormButton text="Cancelar" className="w-24"/>
						<FormButton text="Enviar" className="w-24"/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FullRegister;
