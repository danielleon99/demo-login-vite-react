import { I18n } from "i18n-js";

export const i18n = new I18n({
    "en-EN": 
    {
      doc: "Docs"
    },
    "es-ES": 
    {
      doc: "Documentación"
    },
  });

i18n.enableFallback = true
i18n.defaultLocale = "es-ES";
i18n.locale = "es-ES";