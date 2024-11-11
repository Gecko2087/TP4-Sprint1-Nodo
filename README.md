# Trabajo Práctico 4 - Sprint 2: Servidor Express con Arquitectura MVC [Nodo Tecnológico]

Este trabajo práctico implementa un servidor Express con la arquitectura MVC, añadiendo una capa de servicio para manejar la lógica de negocio y una capa de persistencia para interactuar con los datos almacenados en un archivo `superheroes.txt`. 

La separación de responsabilidades en este patrón facilita la escalabilidad y la mantenibilidad del proyecto, permitiendo realizar cambios en la fuente de datos o la lógica de negocio sin afectar otras partes de la aplicación.

## Instrucciones de Uso

### Paso 1: Clonar el Proyecto
Clona el repositorio

### Inicia el servidor
node server.mjs

### Realizar Pruebas
Obtener información de un superhéroe por ID:
GET /superheroes/id/1

Buscar un superhéroe por atributo (en este caso, nombre):
GET /superheroes/atributo/nombreSuperHeroe/Spiderman

Obtener superhéroes cuya edad sea mayor a 30:
GET /superheroes/edad/mayorA30