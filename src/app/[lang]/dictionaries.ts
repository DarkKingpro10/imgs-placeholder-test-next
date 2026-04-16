import "server-only";
import en from "./i18n/en";
import es from "./i18n/es";

export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const dictionaries = {
	en,
	es,
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function hasLocale(locale: string): locale is Locale {
	return locale in dictionaries;
}

export async function getDictionary(locale: Locale) {
	return dictionaries[locale];
}
