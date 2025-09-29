// randomcodes.js
(function () {
  const codeEl  = document.getElementById('codes');
  const submit  = document.getElementById('submit');
  if (!codeEl) { console.warn('#codes not found'); return; }

  function generateCode(len = 8) {
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < len; i++) {
      const idx = Math.floor(Math.random() * str.length);
      code += str.charAt(idx);
    }
    return code;
  }

  const code = generateCode();
  codeEl.textContent = code; // or .innerText

  // Optional: keep the submit button disabled until the input matches the code
  const input = document.querySelector('input[name="randomcode"]');
  if (input && submit) {
    submit.disabled = true;
    input.addEventListener('input', () => {
      submit.disabled = input.value.trim() === code ? false : true;
    });
  }
})();
