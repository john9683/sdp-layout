// модальное окно отправки сообщения - инициализация https://github.com/maxdenaro/graph-modal
(() => {
  const modal = new GraphModal();
})();


// маска, валидация формы и отправка на почту https://github.com/horprogs/Just-validate

const form = document.querySelector('.form__frame');
const telSelector = form.querySelector("input[type='tel']");
const inputMask = new Inputmask("+7(999)-999-99-99");
inputMask.mask(telSelector);

const validation = new JustValidate('.form__frame', {
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    color: "#F7F7F7",
  },
  errorLabelStyle: {
    color: '#FF6972',
  },
  successFieldCssClass: 'is-valid',
});

validation
  .addField('.form__name', [{
      rule: 'required',

      errorMessage: 'Имя - обязательное поле',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Имя слишком короткое',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя слишком длинное',
    },
  ])

.addField('.form__tel', [{
    rule: 'required',

    errorMessage: 'Телефон - обязательное поле',
  },
  {
    rule: "function",
    validator: function() {
      const phone = telSelector.inputmask.unmaskedvalue();
      return phone.length === 10;
    },
    errorMessage: 'Укажите корректный номер телефона',
  },
])

.addField('.form__mail', [{
      rule: 'required',

      errorMessage: 'Email - обязательное поле',
    },
    {
      rule: 'email',
      errorMessage: 'Укажите корректный email',
    },
  ])
  .addField('.checkbox__input', [{
    rule: 'required',
    value: 1,
    errorMessage: 'Примите пользовательское соглашение',
  }, ]).onSuccess((event) => {
    console.log("Validation passes and form submitted");

    console.log(event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          new GraphModal().open('success'); // модальное окно отправки сообщения -  https://github.com/maxdenaro/graph-modal
        } else { new GraphModal().open('error') } // модальное окно отправки сообщения -  https://github.com/maxdenaro/graph-modal
      }
    }
    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });