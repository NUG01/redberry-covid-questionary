
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