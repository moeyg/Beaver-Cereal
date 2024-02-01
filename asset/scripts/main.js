import ImportHTML from './importHTML.js';

// Import navbar
if (document.querySelector('.navbar')) {
  (async () => {
    await ImportHTML.importHTML('nav');
  })();
}

// Import cereal products
if (document.querySelector('.products')) {
  if (document.querySelector('.products_cereal-bar')) {
    (async () => {
      await ImportHTML.importHTML('products_cereal-bar');
    })();
  } else if (document.querySelector('.products_cereal-pack')) {
    (async () => {
      await ImportHTML.importHTML('products_cereal-pack');
    })();
  }
}
