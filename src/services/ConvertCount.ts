export function formatNumber(number: number) {
	const suffixes = ["", "k", "M", "B", "T"];

	// Use Math.floor to get the integer part of the logarithm
	const magnitude = Math.floor(Math.log10(Math.abs(number)) / 3);

	// Divide the number by 10^(magnitude * 3) and round to 2 decimal places
	const formattedNumber = (number / Math.pow(10, magnitude * 3)).toFixed(1);

	// Extract the integer and decimal parts
	const [integerPart, decimalPart] = formattedNumber.split(".");

	// Check if the last two digits of the decimal part are zero
	const isDecimalZero = decimalPart === "00";
	const suffix = suffixes[magnitude];

	// If the last two digits are zero, return only the integer part
	if (isDecimalZero) {
		return `${integerPart}${suffix}`;
	}

	return `${integerPart}.${decimalPart}${suffix}`;
}
