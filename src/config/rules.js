// ===============================================================================================
// ===============================================================================================
// strategy #1
//                              Vee-Validate & @vee-validate/rules
//  if you need few rules, and want to declare them in more readable way, it's the best approach
// ===============================================================================================
// ===============================================================================================
import { defineRule } from "vee-validate"; // npm install vee-validate --save
import { required, email, min } from "@vee-validate/rules"; // npm install @vee-validate/rules

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);

// ===============================================================================================
// ===============================================================================================
//  strategy #2
//                      Or you can also globally define all the available rules
//                              in the @vee-validate/rules package:
// ===============================================================================================
// ===============================================================================================
//
//        import { defineRule } from 'vee-validate';
//        import AllRules from '@vee-validate/rules';
//
//        Object.keys(AllRules).forEach(rule => {
//            defineRule(rule, AllRules[rule]);
//        });
//
//
//
// ===============================================================================================
// ===============================================================================================
//   strategy #3
//                                You can also declare your custom rules:
//                      [!] note: name of the rule should be in snake_case format
// ===============================================================================================
// ===============================================================================================
//
//
      let regex = /@[a-zA-Z]+\.[a-zA-Z]e/i;
     defineRule('redberry_email', value => {
         if (value && !regex.test(value) && value.slice(-12)!=='@redberry.ge') {
             return 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)';
         }
         return true;
     });
//
    //  defineRule('redberry_email', (value, [limit]) => {
    //      // The field is empty so it should pass
    //      if (!value || !value.length) {
    //          return true;
    //      }
//
//          if (value.length < limit) {
//              return `This field must be at least ${limit} characters`;
//          }
//
//          return true;
//      });
//
// ===============================================================================================
// ===============================================================================================
