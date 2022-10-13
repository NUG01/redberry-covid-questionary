
import { defineRule } from "vee-validate"; 
import { required, email, min } from "@vee-validate/rules"; 

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);


    let regex = /@[a-zA-Z]+\.[a-zA-Z]e/i;
    defineRule('redberry_email', value => {
    if (value && !regex.test(value) && value.slice(-12)!=='@redberry.ge') {
        return 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)';
    }
        return true;
     });

    let regex2 = /(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])\/((19|20)\d\d)/;
    defineRule('covid_date', value => {
    if (value && !regex2.test(value)) {
        return 'გთხოვთ შეიყვანოთ თარიღი ფორმატით (15/05/2022)';
    }
        return true;
     });