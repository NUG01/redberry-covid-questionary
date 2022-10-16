import { defineRule, configure } from 'vee-validate';
import { localize } from "@vee-validate/i18n";
import { required,email,min } from '@vee-validate/rules';
import en from "@vee-validate/i18n/dist/locale/en.json ";
import ka from "@vee-validate/i18n/dist/locale/ka.json ";
import { setLocale } from '@vee-validate/i18n';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

configure({
  generateMessage: localize({
    en:{
      fields: {
       
      },
    },
    ka:{
      fields: {
        first_name: {
          required: 'სახელის ველის შევსება აუცილებელია',
          min: 'სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს',
        },
        last_name: {
          required: 'გვარის ველის შევსება აუცილებელია',
          min: 'გვარი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს',
        },
        email: {
          required: 'მეილის ველის შევსება აუცილებელია',
          email: 'თქვენ მიერ შეყვანილი მეილი არასწორია',
        },
        covid_date: {
          required: 'თარიღის ველის შევსება აუცილებელია'
        },
        had_covid: {
          required: 'არჩევნის გაკეთება აუცილებელია'
        },
        had_vaccine: {
          required: 'არჩევნის გაკეთება აუცილებელია'
        },
        vaccination_stage: {
          required: 'არჩევნის გაკეთება აუცილებელია'
        },
        waiting: {
          required: 'არჩევნის გაკეთება აუცილებელია'
        },
        had_antibody_test: {
          required: 'არჩევნის გაკეთება აუცილებელია'
        },
        non_formal_meetings: {
          required: 'არჩევნის გაკეთება აუცილებელია'
        },
        number_of_days_from_office: {
          required: 'არჩევნის გაკეთება აუცილებელია'
        },
      },
    }
  }),
});
setLocale('ka');
