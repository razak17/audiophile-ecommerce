import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const CheckoutGoBack = () => {
	const router = useRouter();
	return (
		<div className="flex gap-2">
			<ChevronLeft size={18} color="#D87D4A" />
			<button
				onClick={() => router.back()}
				className="mb-10 inline-flex cursor-pointer items-center text-gray-500 hover:text-orange-500"
			>
				Go Back
			</button>
		</div>
	);
};

export default CheckoutGoBack;
