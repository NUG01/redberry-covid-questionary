import { configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";
import ka from "@vee-validate/i18n/dist/locale/ka.json ";


configure({
  generateMessage: localize({
    ka,
  }),
});
