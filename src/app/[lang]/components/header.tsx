import NavLink from "@/shared/components/nav-link";
import LocaleSwitchLink from "@/shared/components/locale-switch-link";
import { getDictionary, Locale, locales } from "../dictionaries";

export default async function LangHeader({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary(lang);

  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center gap-2 px-6 py-4">
        <div className="flex flex-wrap gap-2">
          <NavLink href={`/${lang}`}>{dictionary.nav.home}</NavLink>
          <NavLink href={`/${lang}/no-placeholder`}>{dictionary.nav.noPlaceholder}</NavLink>
          <NavLink href={`/${lang}/static`}>{dictionary.nav.static}</NavLink>
          <NavLink href={`/${lang}/dynamic-placeholder`}>{dictionary.nav.dynamicPlaceholder}</NavLink>
        </div>
        <div className="ml-auto flex flex-wrap gap-2">
          <LocaleSwitchLink
            locales={locales}
            currentLocale={lang}
          />
        </div>
      </nav>
    </header>
  );
}
