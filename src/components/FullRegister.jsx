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

	const pcdType = [
		{value: "Cadeira de Rodas", label: "Cadeira de Rodas"},
		{value: "Audiodescrição", label: "Audiodescrição"},
		{value: "Outros", label: "Outros"},
	];

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row gap-4 max-w-full">
				<Field label="Data" placeholder="Nome" />
				<Field label="Horário" placeholder="Nome" />
			</div>

			<div className="flex flex-row gap-4">
				<Field label="N° de visitantes" placeholder="10" type="number" fieldObj={ctx.numVisits}/>
				<Field label="N° de Responsáveis" placeholder="1" type="number" fieldObj={ctx.numResponsible}/>
			</div>

			<div className="flex flex-row gap-4">
				<DropdownSelect label="Tipo de Público" options={publicType}/>
			</div>

			<div className="flex flex-row gap-4">
				<Field label="N° de pessoas com deficiência" placeholder="SP" type="number" fieldObj={ctx.numPcd} />
				<DropdownSelect label="Necessidade para PcD" options={pcdType} />
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
				<Field label="Nome" placeholder="Nome" fieldObj={ctx.name}/>
			</div>

			<div className="flex flex-row gap-4">
				<Field label="Cidade" placeholder="São Carlos" fieldObj={ctx.city}/>
				<Field label="UF" placeholder="SP" className="w-16" fieldObj={ctx.state}/>
				<Field label="País" placeholder="Brasil" className="w-24" fieldObj={ctx.country}/>
			</div>

			<div className="flex flex-row gap-4">
				<Field label="E-mail" placeholder="exemplo@mail.com" fieldObj={ctx.email}/>
			</div>
		</div>
	);
};

const RegisterCNPJ = ({ctx}) => {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row gap-4 max-w-full">
				<Field label="Nome da Instituição" placeholder="Nome" />
			</div>

			<div className="flex flex-row gap-4">
				<Field label="CEP" placeholder="São Carlos"/>
				<Field label="Endereço" placeholder="São Carlos"/>
				<Field label="Número" placeholder="SP" className="w-16"/>
			</div>

			<div className="flex flex-row gap-4">
				<Field label="Bairro" placeholder="São Carlos"/>
				<Field label="Cidade" placeholder="São Carlos"/>
				<Field label="UF" placeholder="SP" className="w-16"/>
				<Field label="País" placeholder="Brasil" className="w-24"/>
			</div>

			<div className="flex flex-row gap-4">
				<Field label="Nome do responsável" placeholder="exemplo@mail.com" />
				<Field label="Ocupação do responsável" placeholder="exemplo@mail.com" />
			</div>

			<div className="flex flex-row gap-4">
				<Field label="E-mail" placeholder="exemplo@mail.com" />
			</div>
		</div>
	);
};

const createFormContext = () => {
	const [name, setName] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [country, setCountry] = useState("");
	const [email, setEmail] = useState("");
	const [numVisits, setNumVisits] = useState(0);
	const [numResponsible, setNumResponsible] = useState(0);
	const [numPcd, setNumPcd] = useState(0);
	const [obs, setObs] = useState("");

	const ctx = {
		name: {
			value: name,
			set: setName
		},
		city: {
			value: city,
			set: setCity
		},
		state: {
			value: state,
			set: setState
		},
		country: {
			value: country,
			set: setCountry
		},
		email: {
			value: email,
			set: setEmail
		},
		numVisits: {
			value: numVisits,
			set: setNumVisits
		},
		numResponsible: {
			value: numResponsible,
			set: setNumResponsible
		},
		numPcd: {
			value: numPcd,
			set: setNumPcd
		},
		obs: {
			value: obs,
			set: setObs
		}
	};

	return ctx;
};

const cleanContext = (ctx) => {
	Object.values(ctx).forEach(field => {
		if(typeof field.set === 'function') {
			field.set("");
		}
	});
};

const FullRegister = () => {
	const visitType = [
		{value: "cpf", label: "Pessoa Física"},
		{value: "cnpj", label: "Institucional"},
	];

	const [visitSelected, setVisitSelected] = useState("cpf");

	const ctx = createFormContext();

	return (
		<div className="flex bg-black p-4 rounded-lg">
			<div className="flex flex-row gap-4 p-4 bg-cyan-50 rounded-lg">
				<div className="flex flex-col gap-4 p-4">
					<p> <b> Dados da Pessoa/Instituição </b> </p>
					<DropdownSelect label="Tipo de Visitante" options={visitType} selected={visitSelected} setSelected={setVisitSelected}/>
					
					{(visitSelected === "cnpj" ? <RegisterCNPJ /> : <RegisterCPF ctx={ctx}/>)}
				</div>
	
				<div className="flex flex-col gap-4 p-4">
					<p> <b> Dados da Visitação </b> </p>
	
					<RegisterVisit ctx={ctx} />
					
					<div className="flex flex-row justify-end gap-4">
						<FormButton onClick={() => cleanContext(ctx)} text="Limpar" className="w-24"/>
						<FormButton text="Cancelar" className="w-24"/>
						<FormButton text="Enviar" className="w-24"/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FullRegister;
