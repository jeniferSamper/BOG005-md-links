# Markdown Links
## 1. Preámbulo
[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...) y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos Markdown normalmente contienen links (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir. 

## 2. Resumen del proyecto MD-LINKS
Esta es una libreria ejecutada con node.js, donde se le entrega al programa una ruta y se leen los archivos tipo Markdown, se extraen los links encontrados en cada archivo y si el usuario lo requiere se validan, tambien permite la opcion de mostrar estadisticas basicas sobre los links encontrados.

El programa es ejecutable mediante un CLI, y su programación esta basada en promesas y recursividad.

## 3. Diagrama de flujo}
![Diagrama 1](C:\Users\torbe\BOG005-md-links\Images\diagrama 1.png)
![Diagrama 2](C:\Users\torbe\BOG005-md-links\Images\diagrama 2.png)

## 4Documentación técnica de la librería
### 4.1 JavaScript API
#### `mdLinks(path, options)`

##### Argumentos

* `path`: Ruta **absoluta** o **relativa** al **archivo** o **directorio**.
Si la ruta pasada es relativa, debe resolverse como relativa al directorio
desde donde se invoca node - _current working directory_).
* `options`: Un objeto con **únicamente** las siguientes propiedades:
  - `validate`: Booleano que determina si se desea validar los links
    encontrados.
  - `stats`: Booleano que determina si se desea obtener un output
    con información estadística general.

##### Valor de retorno

La función debe **retornar una promesa** (`Promise`) que **resuelva a un arreglo**
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene
las siguientes propiedades

Con `validate:false` :

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.

Con `validate:true` :

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.
* `status`: Código de respuesta HTTP.
* `ok`: Mensaje `fail` en caso de fallo u `ok` en caso de éxito


### 4.2 CLI (Command Line Interface - Interfaz de Línea de Comando)
Para ejecutar md-links en la terminal, debe ingresarse de la siguiente manera:
`md-links <path-to-file> [options]`

El programa MD-links recibe una ruta relativa o absoluta como primer parametro y permite las siguientes opciones como entrada.
- Validate
- Stats

Si solo es ingresada la ruta, el resultado sera la ruta, el link y el texto del link.
```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

Si ingresas la opción --validate o --v, el módulo debe hacer una petición HTTP para averiguar si el link funciona o no. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como ok.

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```
Si ingresas la opción --stats o --s, obtendras estadisticas basicas sobre los links.
```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

Y si se combinan las opciones --validate & --stats obtendras estadísticas que necesiten de los resultados de la validación.
```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```