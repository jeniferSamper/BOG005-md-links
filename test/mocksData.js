const mocksData = {
  pathMD: 'C:\\Users\\torbe\\BOG005-md-links\\test\\prueba.md',
  dataValidateFalse: [
    {
      file: 'C:\\Users\\torbe\\BOG005-md-links\\test\\prueba.md',
      href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
      text: 'Funciones — bloques de código reutilizables - MDN',
      status: '',
      ok: ''
    },
    {
      file: 'C:\\Users\\torbe\\BOG005-md-links\\test\\prueba.md',
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects',
      text: 'Objetos en JavaScript',
      status: '',
      ok: ''
    }
  ],
  dataValidateTrue: [
    {
      file: 'C:\\Users\\torbe\\BOG005-md-links\\test\\prueba.md',
      href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
      text: 'Funciones — bloques de código reutilizables - MDN',
      status: 404,
      ok: 'Fail'
    },
    {
      file: 'C:\\Users\\torbe\\BOG005-md-links\\test\\prueba.md',
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects',
      text: 'Objetos en JavaScript',
      status: 200,
      ok: 'OK'
    }
  ],
  rutaIntento1: 'C:\\Users\\torbe\\BOG005-md-links\\intento1.md',
  dataIntento1: [
    {
      file: 'C:\\Users\\torbe\\BOG005-md-links\\intento1.md',
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects',
      text: 'Objetos en JavaScript',
      status: 200,
      ok: 'OK'
    }
  ]

}

module.exports = mocksData;