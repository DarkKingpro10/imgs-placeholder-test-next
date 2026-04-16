import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const locales = ["en", "es"] as const;
const defaultLocale = "en";

function isLocale(value: string): value is (typeof locales)[number] {
	return (locales as readonly string[]).includes(value);
}

function getLocaleFromPath(pathname: string) {
	const firstSegment = pathname.split("/")[1];

	return isLocale(firstSegment) ? firstSegment : null;
}

function getPreferredLocale(request: NextRequest) {
	const preferredLanguage = request.headers
		.get("accept-language")
		?.toLowerCase();

	if (preferredLanguage?.startsWith("es")) {
		return "es";
	}

	return defaultLocale;
}

export default function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;

	if (
		pathname.startsWith("/_next") ||
		pathname.startsWith("/api") ||
		pathname.includes(".")
	) {
		return NextResponse.next();
	}

	const localeFromPath = getLocaleFromPath(pathname);

	if (localeFromPath) {
		const headers = new Headers(request.headers);
		headers.set("x-locale", localeFromPath);

		return NextResponse.next({
			request: {
				headers,
			},
		});
	}

	// root case "/" → redirigir explícitamente
	if (pathname === "/") {
		console.log("Redirecting to default locale:", defaultLocale);
		const url = request.nextUrl.clone();
		url.pathname = `/${defaultLocale}`;
		return NextResponse.redirect(url);
	}

	const preferredLocale = getPreferredLocale(request);
	const url = request.nextUrl.clone();
	url.pathname = `/${preferredLocale}${pathname === "/" ? "" : pathname}`;

	return NextResponse.redirect(url);
}

export const config = {
	matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
