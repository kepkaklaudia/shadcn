import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "pl"] as const;
export const defaultLocale = "pl";
export const localePrefix = "always";

export const pathnames = {
  "/": "/",
  "/about-us": {
    en: "/about-us",
    pl: "/o-nas",
  },

  "/partners": {
    en: "/partners",
    pl: "/partnerzy",
  },

  "/downloads": {
    en: "/downloads",
    pl: "/do-pobrania",
  },
  "/contact": {
    en: "/contact",
    pl: "/kontakt",
  },

  
  "/admin-login": {
    en: "/admin-login",
    pl: "/administrator-logowanie",
  },
  "/forgot-password": {
    en: "/forgot-password",
    pl: "/zapomniales-haslo",
  },
  "/login": {
    en: "/login",
    pl: "/logowanie",
  },
  "/registration": {
    en: "/registration",
    pl: "/rejestracja",
  },
  "/reset-password": {
    en: "/reset-password",
    pl: "/resetuj-haslo",
  },
  "/cart": {
    en: "/cart",
    pl: "/koszyk",
  },
  "/cart/account": {
    en: "/cart/account",
    pl: "/koszyk/konto",
  },
  "/cart/summary": {
    en: "/cart/summary",
    pl: "/koszyk/podsumowanie",
  },

  "/favourites": {
    en: "/favourites",
    pl: "/ulubione",
  },

  "/orders": {
    en: "/orders",
    pl: "/zamowienia",
  },

  "/orders/order-details": {
    en: "/orders/order-details",
    pl: "/zamowienia/szczegoly-zamowienia",
  },

  "/orders/order-details/tracking": {
    en: "/orders/order-details/tracking",
    pl: "/zamowienia/szczegoly-zamowienia/sledzenie-zamowienia",
  },
  "/products": {
    en: "/products",
    pl: "/produkty",
  },
  "/products/[id]": {
    en: "/products/[id]",
    pl: "/produkty/[id]",
  },
  "/search": {
    en: "/search",
    pl: "/wyszukaj",
  },
  "/account/edit-profile": {
    en: "/account/edit-profile",
    pl: "/konto/edytuj-profil",
  },
  "/account/edit-profile/my-addresses": {
    en: "/account/edit-profile/my-addresses",
    pl: "/konto/edytuj-profil/moje-adresy",
  },
  "/account/settings": {
    en: "/account/settings",
    pl: "/konto/ustawienia",
  },
  "/privacy-policy": {
    en: "/privacy-policy",
    pl: "/polityka-prywatnosci",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
