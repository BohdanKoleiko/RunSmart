//import JustValidate from "just-validate";

function validForm(className) {
   for (let i in className) {
      const validate = new window.JustValidate(className[i]);

      validate
         .addField('#name', [
            {
               rule: 'required',
               errorMessage: 'Поле з ім`ям повинно бути заповнене'
            },
            {
               rule: 'minLength',
               value: 3,
               errorMessage: 'Має бути введено мінімум 3 символа'
            },
            {
               rule: 'maxLength',
               value: 20,
               errorMessage: 'Має бути введено максимум 20 символів'
            }
         ])
         .addField('#tel', [
            {
               rule: 'required',
               errorMessage: 'Поле обов`язкове для заповнення'
            },
            {
               rule: "customRegexp",
               value: '^([+][3][8-\s][(]{0}[0-9]{0,9}[)]{0,1}[-\s\d]*)|[(]{0}[0-9]{0,9}[)]{0,1}[-\s\d]*$',
               errorMessage: 'Не вірно введено номер телефону'
            },
            {
               rule: 'minLength',
               value: 10,
               errorMessage: 'Має бути введено мінімум 10 цифр'
            },
            {
               rule: 'maxLength',
               value: 18,
               errorMessage: 'Має бути введено максимум 14 цифр'
            }
         ])
         .addField('#email', [
            {
               rule: 'required',
               errorMessage: 'Поле обов`язкове для заповнення'
            },
            {
               rule: 'email',
               errorMessage: 'Не вірно введено пошту'
            }
         ]);
   }
}

validForm(['#order', '#callback', '#free-help__form']);
