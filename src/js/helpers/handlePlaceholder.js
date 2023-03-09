/**
 * Handle the placeholder for an input.
 * @param {string} inputId - The id of the input
 * @param {string} placeholderIn - The placeholder on focus-in
 * @param {string} placeholderOut - The placeholder on focus-out
 */
const handlePlaceholder = (inputId, placeholderIn, placeholderOut) => {
  const input = document.getElementById(inputId);

  // On focus, if the input is empty then clear the placeholder
  input.addEventListener('focus', () => {
    if (input.value === '') {
      input.setAttribute('placeholder', placeholderIn);
    }
  });

  // On focusout, if the input is empty add the placeholder else remove it
  input.addEventListener('focusout', () => {
    if (input.value === '') {
      input.setAttribute('placeholder', placeholderOut);
    } else if (input.value !== '') {
      input.removeAttribute('placeholder');
    }
  });
};

export default handlePlaceholder;
