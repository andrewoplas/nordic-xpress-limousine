export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "https://www.nordicxpresslimousine.dk";
};

export const getSiteName = () => "Nordic Xpress Limousine Service";

export const getAlternatesMetadata = (pathname: {
  en: string;
  da: string;
}) => ({
  alternates: {
    languages: {
      en: `${getBaseUrl()}/en${pathname.en}/`,
      de: `${getBaseUrl()}/da${pathname.da}/`,
      "x-default": `${getBaseUrl()}/en${pathname.en}/`,
    },
  },
});
