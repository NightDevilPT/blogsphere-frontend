import { useAppSelector } from "@/redux/hooks";
import { languagesTranslation } from "@/types/types";
import { useEffect, useState } from "react";

const useLanguageEffect = () => {
	const [dictionary, setDictionary] = useState<languagesTranslation>();
	const { lang } = useAppSelector((state) => state.language);

	const formatData = async (lang: string) => {
		const response = await fetch(`../dictionary/${lang}.json`); // Assuming data.json is in the public directory
		const jsonData = await response.json();
		setDictionary(jsonData);
	};

	useEffect(() => {
		formatData(lang);
	}, [lang]);

	return dictionary;
};

export default useLanguageEffect;
