# Proyecto NestJS: Upload CSV y Autenticación JWT

Este proyecto NestJS proporciona una API para subir archivos CSV, procesarlos y guardar los datos en una base de datos MongoDB. Además, implementa autenticación JWT para proteger las rutas de la API.

## Funcionalidades:

* **Subida de archivos CSV:** Permite subir archivos CSV a través de un endpoint `/csv` usando una petición POST.
* **Procesamiento de CSV:**  Procesa los archivos CSV usando la librería `SheetJS` si se configura para extraer los datos.
* **Almacenamiento en MongoDB:** Guarda los datos extraídos del CSV en una colección de MongoDB.
* **Autenticación JWT:**  Implementa autenticación JWT para proteger las rutas de la API.


## Tecnologías:

* NestJS
* MongoDB
* Mongoose
* JWT (JSON Web Tokens)
* Passport
* Swagger


## Instalación:

1. Clona el repositorio: `git clone <URL_DEL_REPOSITORIO>`
2. Instala las dependencias: `npm install`
3. Configura las variables de entorno:
    * `MONGODB_URI`:  URI de conexión a la base de datos MongoDB.
    * `JWT_SECRET`: Clave secreta para firmar los tokens JWT.
4. Inicia la aplicación: `npm run start`

## Uso:

* **Subir un archivo CSV:**  Envía una petición POST a `/csv` con el archivo CSV en el cuerpo de la solicitud (formato `multipart/form-data`).
* **login:** Envia una peticion POST a `/auth` con el email: felipe@mail.com por el body en formato json.

## Contribuciones:

Las contribuciones son bienvenidas. Por favor, crea un fork del repositorio y envía un pull request con tus cambios.
# csv-back
