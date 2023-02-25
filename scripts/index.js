let button = $('.application-button');

let applications = {
  'staff': 'https://forms.gle/srcKLdJEgKyjETAv8',
  'beta-tester': 'https://forms.gle/S1ZkZD6tLhjfbiik8',
  'builder': '',
};

button.on('click', e => {
  let position = e.target.getAttribute('data-position');
  if (!position) return;

  window.open(applications[position], '_blank');
});
