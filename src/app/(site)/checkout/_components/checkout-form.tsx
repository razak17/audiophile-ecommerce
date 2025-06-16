import { useState } from "react";

export type CustomerInfo = {
	name: string;
	email: string;
	phone: string;
	address: string;
	zipCode: string;
	city: string;
	country: string;
	paymentMethod: "eMoney" | "cash";
	eMoneyNumber?: string;
	eMoneyPIN?: string;
};

// Define a type for form errors
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

	// Use the defined FormErrors type for the errors state
	const [errors, setErrors] = useState<FormErrors>({});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target; // Removed 'type' as it's not needed for the simplified logic
		setFormData((prev) => ({
			...prev,
			[name]: value, // Simplified: Removed redundant ternary
		}));
	};

	const validateForm = () => {
		const newErrors: FormErrors = {}; // Explicitly type newErrors
		const requiredFields = [
			"name",
			"email",
			"phone",
			"address",
			"zipCode",
			"city",
			"country",
		];

		requiredFields.forEach((field) => {
			if (!formData[field as keyof CustomerInfo]?.trim()) {
				// Added optional chaining and type assertion for safety
				newErrors[field as keyof CustomerInfo] = "This field is required";
			}
		});

		if (formData.paymentMethod === "eMoney") {
			if (!formData.eMoneyNumber) newErrors.eMoneyNumber = "Required";
			if (!formData.eMoneyPIN) newErrors.eMoneyPIN = "Required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e: React.FormEvent) => {
		// Type the event
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
			{/* Billing Details */}
			<div className="space-y-4">
				<h2 className="mb-4 text-sm font-bold tracking-wider text-[#D87D4A] uppercase">
					Billing Details
				</h2>

				{/* Name and Email */}
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					<div>
						<label htmlFor="name" className="mb-2 block text-sm font-bold">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className={`w-full border px-4 py-3 ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-[#D87D4A] focus:outline-none`}
							placeholder="Alexei Ward"
							required
						/>
						{errors.name && (
							<p className="mt-1 text-xs text-red-500">{errors.name}</p>
						)}
					</div>

					<div>
						<label htmlFor="email" className="mb-2 block text-sm font-bold">
							Email Address
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className={`w-full border px-4 py-3 ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-[#D87D4A] focus:outline-none`}
							placeholder="alexei@mail.com"
							required
						/>
						{errors.email && (
							<p className="mt-1 text-xs text-red-500">{errors.email}</p>
						)}
					</div>
				</div>

				{/* Phone Number */}
				<div>
					<label htmlFor="phone" className="mb-2 block text-sm font-bold">
						Phone Number
					</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						className={`w-full border px-4 py-3 ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-[#D87D4A] focus:outline-none`}
						placeholder="+1 202-555-0136"
						required
					/>
					{errors.phone && (
						<p className="mt-1 text-xs text-red-500">{errors.phone}</p>
					)}
				</div>
			</div>

			{/* Shipping Info */}
			<div className="space-y-4">
				<h2 className="mb-4 text-sm font-bold tracking-wider text-[#D87D4A] uppercase">
					Shipping Info
				</h2>

				{/* Address */}
				<div>
					<label htmlFor="address" className="mb-2 block text-sm font-bold">
						Your Address
					</label>
					<input
						type="text"
						id="address"
						name="address"
						value={formData.address}
						onChange={handleChange}
						className={`w-full border px-4 py-3 ${errors.address ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-[#D87D4A] focus:outline-none`}
						placeholder="1137 Williams Avenue"
						required
					/>
					{errors.address && (
						<p className="mt-1 text-xs text-red-500">{errors.address}</p>
					)}
				</div>

				{/* ZIP Code and City */}
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					<div>
						<label htmlFor="zipCode" className="mb-2 block text-sm font-bold">
							ZIP Code
						</label>
						<input
							type="text"
							id="zipCode"
							name="zipCode"
							value={formData.zipCode}
							onChange={handleChange}
							className={`w-full border px-4 py-3 ${errors.zipCode ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-[#D87D4A] focus:outline-none`}
							placeholder="10001"
							required
						/>
						{errors.zipCode && (
							<p className="mt-1 text-xs text-red-500">{errors.zipCode}</p>
						)}
					</div>

					<div>
						<label htmlFor="city" className="mb-2 block text-sm font-bold">
							City
						</label>
						<input
							type="text"
							id="city"
							name="city"
							value={formData.city}
							onChange={handleChange}
							className={`w-full border px-4 py-3 ${errors.city ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-[#D87D4A] focus:outline-none`}
							placeholder="New York"
							required
						/>
						{errors.city && (
							<p className="mt-1 text-xs text-red-500">{errors.city}</p>
						)}
					</div>
				</div>

				{/* Country */}
				<div>
					<label htmlFor="country" className="mb-2 block text-sm font-bold">
						Country
					</label>
					<input
						type="text"
						id="country"
						name="country"
						value={formData.country}
						onChange={handleChange}
						className={`w-full border px-4 py-3 ${errors.country ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-[#D87D4A] focus:outline-none`}
						placeholder="United States"
						required
					/>
					{errors.country && (
						<p className="mt-1 text-xs text-red-500">{errors.country}</p>
					)}
				</div>
			</div>

			{/* Payment Details */}
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
						<div>
							<label
								htmlFor="eMoneyNumber"
								className="mb-2 block text-sm font-bold"
							>
								e-Money Number
							</label>
							<input
								type="text"
								id="eMoneyNumber"
								name="eMoneyNumber"
								value={formData.eMoneyNumber}
								onChange={handleChange}
								className={`w-full border px-4 py-3 ${errors.eMoneyNumber ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-[#D87D4A] focus:outline-none`}
								placeholder="238521993"
								// Removed redundant required prop
							/>
							{errors.eMoneyNumber && (
								<p className="mt-1 text-xs text-red-500">
									{errors.eMoneyNumber}
								</p>
							)}
						</div>

						<div>
							<label
								htmlFor="eMoneyPIN"
								className="mb-2 block text-sm font-bold"
							>
								e-Money PIN
							</label>
							<input
								type="password"
								id="eMoneyPIN"
								name="eMoneyPIN"
								value={formData.eMoneyPIN}
								onChange={handleChange}
								className={`w-full border px-4 py-3 ${errors.eMoneyPIN ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-[#D87D4A] focus:outline-none`}
								placeholder="6891"
								// Removed redundant required prop
							/>
							{errors.eMoneyPIN && (
								<p className="mt-1 text-xs text-red-500">{errors.eMoneyPIN}</p>
							)}
						</div>
					</div>
				)}
			</div>

			{/* Hidden submit button for form submission from OrderSummary */}
			<button type="submit" className="hidden">
				Submit
			</button>
		</form>
	);
};

export default CheckoutForm;
