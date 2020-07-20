// validation script here
// let reg = /[a-z]{5-12}/gi;
// let reg2 = new RegExp(/[a-z]{5-12}/, 'i')

const inputs = document.querySelectorAll('input');

const patterns = {
  telephone: /^\d{11}$/
};

// validation function

function validate(field, regex) {
  if(regex.test(field.value)) {
    field.className = 'valid';
  } else {
    field.className = 'invalid'
  }
}


inputs.forEach((input) => {
  input.addEventListener('keyup', e => {
    // console.log(e.target.attributes.name.value)
    validate(e.target, patterns[e.target.attributes.name.value])
  })
})

