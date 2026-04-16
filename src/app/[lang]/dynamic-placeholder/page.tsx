import HeaderPage from "@/shared/ui/header-page";
import { getDictionary, Locale } from "../dictionaries";

export default async function DynamicPlaceholder({
	params,
}: Readonly<{
	params: Promise<{ lang: Locale }>;
}>) {
	const { lang } = await params;

	const dictionary = await getDictionary(lang);

	return (
		<>
			<HeaderPage
				title={dictionary.static.title}
				description={dictionary.static.description}
				linkLabel={dictionary.static.linkLabel}
				reloadLabel={dictionary.static.reloadLabel}
			/>
      
		</>
	);
}
