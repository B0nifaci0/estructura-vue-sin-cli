/**  Instalación De un Proyecto De Vue con laravel webpack */


1.Crear la carpeta de tu proyecto.

2.abrirla en git bash y ejecutar npm init -y e 
	instalar vue : npm intall vue


3. Crear una carpeta src
    -Dentro de ella crea un archivo que se yale app.js
    -Crear la carpeta components

4. Instalar Laravel Mix->documentación (https://laravel-mix.com/docs/5.0/installation)

	-ejecutar en terminal npm install laravel-mix --save-dev

	-copiar el archivo  webpack.mix.js con el siguiente comando
	cp node_modules/laravel-mix/setup/webpack.mix.js ./

5. Dentro del packj.son copiar NPM SCRIPTS
"scripts": {
    "dev": "npm run development",
    "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "watch": "npm run development -- --watch",
    "hot": "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
    "prod": "npm run production",
    "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
}

6. Si todo est abien hasta este puento ya debe compilar nuestro proyecto 
	-Ejecutamos npm run

7. Crear  el archivo index.html dentro de la carpeta dist

8. Copiar el siguiente codigo en el archivo index.html
	
<!DOCTYPE html>
<html lang="es">  
  <head>    
    <title>Título de la WEB</title>    
    <meta charset="UTF-8">
    <meta name="title" content="Título de la WEB">
    <meta name="description" content="Descripción de la WEB">    
    <link href="http://dominio.com/hoja-de-estilos.css" rel="stylesheet" type="text/css"/>    
  </head>  
  <body>    
    <header>
      <h1> Hello Vue</h1>      
    </header>    
    <div id="app">
 	</div>
  </body>  
</html>


9. Instalar Axios con npm y declararlo donde se va a utilizar (https://github.com/axios/axios)
	-npm install axios
