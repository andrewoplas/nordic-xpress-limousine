import type { CookieConsentConfig } from "vanilla-cookieconsent";

const pluginConfig: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: "box inline",
      position: "bottom left",
      equalWeightButtons: false,
      flipButtons: false,
    },
    preferencesModal: {
      layout: "box",
      position: "left",
      equalWeightButtons: false,
      flipButtons: true,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^(_ga|_gid)/,
          },
        ],
      },
    },
  },
  language: {
    default: "en",
    autoDetect: "document",
    translations: {
      en: {
        consentModal: {
          title: "We use cookies to enhance your experience.",
          description:
            'Our website uses tracking cookies to understand how you interact with it. The tracking will be enabled only if you accept explicitly. <a href="#privacy-policy" data-cc="show-preferencesModal" class="cc__link">Manage preferences</a>',
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          showPreferencesBtn: "Manage preferences",
          footer: `
            <a href="/en/privacy-policy">Privacy Policy</a>
            <a href="/en/terms-and-conditions">Terms and Conditions</a>
          `,
        },
        preferencesModal: {
          title: "Cookie preferences",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          savePreferencesBtn: "Save preferences",
          closeIconLabel: "Close",
          sections: [
            {
              title: "Cookie Usage",
              description:
                'We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="/en/privacy-policy" class="cc__link">privacy policy</a>.',
            },
            {
              title: "Strictly necessary cookies",
              description:
                "Strictly necessary cookies are essential for the website to function properly. They enable core functionalities like security, network management, and accessibility. These cookies cannot be switched off in our systems as they are vital for providing services you have requested, such as logging in or filling out forms.",
              linkedCategory: "necessary",
            },
            {
              title: "Performance and Analytics cookies",
              linkedCategory: "analytics",
              cookieTable: {
                headers: {
                  name: "Name",
                  domain: "Service",
                  description: "Description",
                  expiration: "Expiration",
                },
                body: [
                  {
                    name: "_ga",
                    domain: "Google Analytics",
                    description:
                      'Cookie set by <a href="#das">Google Analytics</a>.',
                    expiration: "Expires after 12 days",
                  },
                  {
                    name: "_gid",
                    domain: "Google Analytics",
                    description:
                      'Cookie set by <a href="#das">Google Analytics</a>',
                    expiration: "Session",
                  },
                ],
              },
            },
            {
              title: "More information",
              description:
                'For any queries in relation to our policy on cookies and your choices, please <a class="cc__link" href="mailto:contact@nordicxpresslimousine.dk">contact us</a>.',
            },
          ],
        },
      },
      da: {
        consentModal: {
          title: "Vi bruger cookies til at forbedre din oplevelse.",
          description:
            'Vores hjemmeside bruger sporing cookies for at forstå, hvordan du interagerer med den. Sporingen vil kun blive aktiveret, hvis du eksplicit accepterer. <a href="#privacy-policy" data-cc="show-preferencesModal" class="cc__link">Administrer præferencer</a>',
          acceptAllBtn: "Accepter alle",
          acceptNecessaryBtn: "Afvis alle",
          showPreferencesBtn: "Administrer præferencer",
          footer: `
            <a href="/da/privatlivspolitik">Privatlivspolitik</a>
            <a href="/da/vilkaar-og-betingelser">Vilkår og Betingelser</a>
          `,
        },
        preferencesModal: {
          title: "Cookie-præferencer",
          acceptAllBtn: "Accepter alle",
          acceptNecessaryBtn: "Afvis alle",
          savePreferencesBtn: "Gem præferencer",
          closeIconLabel: "Luk",
          sections: [
            {
              title: "Cookie-brug",
              description:
                'Vi bruger cookies til at sikre hjemmesidens grundlæggende funktionaliteter og for at forbedre din online oplevelse. Du kan for hver kategori vælge at til-/framelde dig, når du vil. For flere detaljer vedrørende cookies og andre følsomme data, læs venligst den fulde <a href="/da/privatlivspolitik" class="cc__link">privatlivspolitik</a>.',
            },
            {
              title: "Strengt nødvendige cookies",
              description:
                "Strengt nødvendige cookies er afgørende for, at websitet fungerer korrekt. De muliggør grundlæggende funktioner som sikkerhed, netværksstyring og tilgængelighed. Disse cookies kan ikke slås fra i vores systemer, da de er vitale for at levere de tjenester, du har anmodet om, såsom at logge ind eller udfylde formularer.",
              linkedCategory: "necessary",
            },
            {
              title: "Ydelses- og analysecookies",
              linkedCategory: "analytics",
              cookieTable: {
                headers: {
                  name: "Navn",
                  domain: "Service",
                  description: "Beskrivelse",
                  expiration: "Udløb",
                },
                body: [
                  {
                    name: "_ga",
                    domain: "Google Analytics",
                    description:
                      'Cookie sat af <a href="#das">Google Analytics</a>.',
                    expiration: "Udløber efter 12 dage",
                  },
                  {
                    name: "_gid",
                    domain: "Google Analytics",
                    description:
                      'Cookie sat af <a href="#das">Google Analytics</a>',
                    expiration: "Session",
                  },
                ],
              },
            },
            {
              title: "Mere information",
              description:
                'For eventuelle spørgsmål i forhold til vores politik om cookies og dine valg, bedes du <a class="cc__link" href="mailto:contact@nordicxpresslimousine.dk">kontakte os</a>.',
            },
          ],
        },
      },
    },
  },
};

export default pluginConfig;
