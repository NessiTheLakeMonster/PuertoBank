# PuertoBank :euro: :bank:
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> 

Authors: 
+ [Jaime Rafael Fraile Bautista](https://github.com/Sp3cTRe02)
+ [Inés María Barrera Llerena](https://github.com/NessiTheLakeMonster)

----

# About the project

Desafío realizado en el segundo año del grado de ``Desarrollo de Aplicaciones Web`` en la asignatura de ``Desarrollo Web en Entorno Cliente``.

Hay navegación entre estas tres pestañas:
+ Inicio
+ Información cuenta
+ Tarjetas

------
## 1. Página principal (Inicio)

Contienen los datos de una persona que se cargan los datos por defecto la primera 
vez que se accede a la página.

 ``` html
	<h1>Datos del Cliente</h1>
	Nombre: <input type="text">
	Primer Apellido: <input type="text">
	Segundo Apellido: <input type="text">
	Nacionalidad: <input type="text">
```

Se deben poder modificar los datos
Validaciones a realizar
+ El nombre debe contener entre 3 y 20 caracteres
+ El primer apellido debe contener entre 3 y 20 caracteres
+ El segundo apellido debe contener entre 3 y 20 caracteres
+ Nacionalidad debe contener entre 3 y 15 caracteres

-------
## 2. Información de la cuenta

 ``` html
	<h1>Información de la Cuenta</h1>
	IBAN: <input type="text">
	Saldo: <input type="number">
	<input type="number" placeholder="Saldo a retirar">
	<input type="number" placeholder="Saldo a Ingresar">
```

Por default tendrá IBAN y saldo de 500 (campos no editables).

+ Botón retirar resta a el saldo
+ Botón ingresar suma al saldo

Se mostrara un mensaje en la propia página donde dice si se ha retirado o ingresado
correctamente el saldo

-----
## 3. Menú de Tarjetas

Sale una tabla dinamica con las tarjetas que ya estan agregadas

 ``` html
	<h1>Agregar tarjeta</h1>
	Numero: <input type="text">
	CVV: <input type="number">
	Activa: <checkbox>
	<button value="Guardar tarjeta">
```

+ CVV solo puede tener 3 digitos

Inicialmente deben estar cargadas estas dos tarjetas por defecto
+ Tarjeta 1
	+ Número de cuenta -> ``ES21 1465 0100 72 2030876293``
	+ Número de tarjeta -> ``1234 12345 123456``
	+ Activa -> Si
+ Tarjeta 2
	+ Número de cuenta -> ``ES21 1465 0100 72 2030876293``
	+ Número de tarjeta -> ``1234 12345 123456``
	+ Activa -> No
