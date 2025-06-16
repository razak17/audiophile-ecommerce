import { useState } from "react";
import { CustomerInfo } from "@/types";
import { InputField } from "@/components/ui/input-field";

type FormErrors = Partial<Record<keyof CustomerInfo, string>>;

const CheckoutForm = ({
	onSubmit,
}: {
	onSubmit: (data: CustomerInfo) => void;
}) => {
	const [formData, setFormData] = useState<CustomerInfo>({
		name: "",
		email: "",
		phone: "",
		address: "",
		zipCode: "",
		city: "",
		country: "",
		paymentMethod: "eMoney",
		eMoneyNumber: "",
		eMoneyPIN: "",
	});

	const [errors, setErrors] = useState<FormErrors>({});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const validateForm = () => {
		const newErrors: FormErrors = {};
		const requiredFields: (keyof CustomerInfo)[] = [
			"name",
			"email",
			"phone",
			"address",
			"zipCode",
			"city",
			"country",
		];

		requiredFields.forEach((field) => {
			if (!formData[field]?.trim()) {
				newErrors[field] = "This field is required";
			}
		});

		if (formData.paymentMethod === "eMoney") {
			if (!formData.eMoneyNumber?.trim()) newErrors.eMoneyNumber = "Required";
			if (!formData.eMoneyPIN?.trim()) newErrors.eMoneyPIN = "Required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validateForm()) {
			onSubmit(formData);
		}
	};
	return (
		<form
			id="checkout-form"
			onSubmit={handleSubmit}
			className="space-y-6"
			noValidate
		>
			<div className="space-y-4">
				<h2 className="mb-4 text-sm font-bold tracking-wider text-[#D87D4A] uppercase">
					Billing Details
				</h2>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					<InputField
						label="Name"
						id="name"
						name="name"
						type="text"
						value={formData.name}
						onChange={handleChange}
						placeholder="Alexei Ward"
						error={errors.name}
						required
					/>
					<InputField
						label="Email Address"
						id="email"
						name="email"
						type="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="alexei@mail.com"
						error={errors.email}
						required
					/>
				</div>

				<InputField
					label="Phone Number"
					id="phone"
					name="phone"
					type="tel"
					value={formData.phone}
					onChange={handleChange}
					placeholder="+1 202-555-0136"
					error={errors.phone}
					required
				/>
			</div>

			<div className="space-y-4">
				<h2 className="mb-4 text-sm font-bold tracking-wider text-[#D87D4A] uppercase">
					Shipping Info
				</h2>

				<InputField
					label="Your Address"
					id="address"
					name="address"
					type="text"
					value={formData.address}
					onChange={handleChange}
					placeholder="1137 Williams Avenue"
					error={errors.address}
					required
				/>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					<InputField
						label="ZIP Code"
						id="zipCode"
						name="zipCode"
						type="text"
						value={formData.zipCode}
						onChange={handleChange}
						placeholder="10001"
						error={errors.zipCode}
						required
					/>
					<InputField
						label="City"
						id="city"
						name="city"
						type="text"
						value={formData.city}
						onChange={handleChange}
						placeholder="New York"
						error={errors.city}
						required
					/>
				</div>

				<InputField
					label="Country"
					id="country"
					name="country"
					type="text"
					value={formData.country}
					onChange={handleChange}
					placeholder="United States"
					error={errors.country}
					required
				/>
			</div>

			<div className="space-y-4">
				<h2 className="mb-4 text-sm font-bold tracking-wider text-[#D87D4A] uppercase">
					Payment Details
				</h2>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					<p className="text-sm font-bold">Payment Method</p>

					<div className="space-y-4">
						<label
							className={`flex items-center border p-4 ${formData.paymentMethod === "eMoney" ? "border-[#D87D4A] ring-2 ring-[#D87D4A]" : "border-gray-300"} cursor-pointer rounded-lg`}
						>
							<input
								type="radio"
								name="paymentMethod"
								value="eMoney"
								checked={formData.paymentMethod === "eMoney"}
								onChange={handleChange}
								className="h-5 w-5 text-[#D87D4A] focus:ring-[#D87D4A]"
							/>
							<span className="ml-3 text-sm font-medium">e-Money</span>
						</label>

						<label
							className={`flex items-center border p-4 ${formData.paymentMethod === "cash" ? "border-[#D87D4A] ring-2 ring-[#D87D4A]" : "border-gray-300"} cursor-pointer rounded-lg`}
						>
							<input
								type="radio"
								name="paymentMethod"
								value="cash"
								checked={formData.paymentMethod === "cash"}
								onChange={handleChange}
								className="h-5 w-5 text-[#D87D4A] focus:ring-[#D87D4A]"
							/>
							<span className="ml-3 text-sm font-medium">Cash on Delivery</span>
						</label>
					</div>
				</div>

				{formData.paymentMethod === "eMoney" && (
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						<InputField
							label="e-Money Number"
							id="eMoneyNumber"
							name="eMoneyNumber"
							type="text"
							value={formData.eMoneyNumber}
							onChange={handleChange}
							placeholder="238521993"
							error={errors.eMoneyNumber}
						/>

						<InputField
							label="e-Money PIN"
							id="eMoneyPIN"
							name="eMoneyPIN"
							type="password"
							value={formData.eMoneyPIN}
							onChange={handleChange}
							placeholder="6891"
							error={errors.eMoneyPIN}
						/>
					</div>
				)}
			</div>

			<button type="submit" className="hidden">
				Submit
			</button>
		</form>
	);
};

export default CheckoutForm;
