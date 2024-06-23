const element = document.querySelectorAll('#tel');

//for (let i in element) {
//   let phoneMask = IMask(element[i], {
//      mask: '+{3}{8} (000)000-00-00',
//      lazy: false,  // make placeholder always visible
//   });
//}

function iterate(item) {
}

element.forEach(iterate => {
   let phoneMask = IMask(iterate, {
      mask: '+{3}{8} (000)000-00-00',
      lazy: false,  // make placeholder always visible
   });
});

//# sourceMappingURL=inputMask.js.map
