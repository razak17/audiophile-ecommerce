import { CustomerInfo } from "@/types";

interface InputFieldProps {
	label: string;
	id: keyof CustomerInfo;
	name: keyof CustomerInfo;
	type: string;
	value: string | undefined;
	onChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	placeholder?: string;
	error?: string;
	required?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
	label,
	id,
	name,
	type,
	value,
	onChange,
	placeholder,
	error,
	required = false,
}) => (
	<div>
		<label htmlFor={id} className="mb-2 block text-sm font-bold">
			{label}
		</label>
		<input
			type={type}
			id={id}
			name={name}
			value={value || ""}
			onChange={onChange}
			className={`w-full border px-4 py-3 ${error ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-yellow-600 focus:outline-none`}
			placeholder={placeholder}
			required={required}
		/>
		{error && <p className="mt-1 text-xs text-red-500">{error}</p>}
	</div>
);
