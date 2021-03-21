# El Tres en Raya más Tonto

El juego del 3 en raya es un juego de mesa mundialmente conocido y con unas reglas muy sencillas. En el juego participan dos jugadores y se trata de colocar, en un tablero de 3 por 3 posiciones, 3 fichas formando una _raya_ o línea continua. Cada jugador coloca su ficha en turnos alternativos. El juego termina cuando todo el tablero está ocupado por fichas o uno de los jugadores consigue situar sus fichas formando una línea, ya sea horizontal, vertical o diagonal.

## Enunciado del ejercicio

Se trata de desarrollar un programa que simule a los dos jugadores poniendo fichas sobre el tablero de forma aleatoria.

## Guia para abordar el problema

En los apartados siguientes, se detallan las partes en que puedes desmenuzar el problema principal, para que la solución se haga más fácil. 

En cada apartado te doy unas pistas o introduzco algunas funciones JavaScript para ayudarte a resolver el sub-problema. En casi todos los apartados te pido que pienses en como lo harías tú antes de seguir. Si tu idea es posible, sigue adelante y prográmala. Lo mío es solo una propuesta.

### Estructura de datos para el tablero

Piensa un poco como representarías el tablero de juego en un programa escrito en JavaScript antes de seguir adelante.

El tablero se puede definir como un _array_ de 3 por 3 (o bien _n_ por _n_ si queremos generalizar)

Hay muchas formas de representar las fichas en un _array_. Te sugiero usar un _0_ para posición libre, _1_ para indicar una ficha del primer jugado y _2_ para representar una ficha del segundo jugador.

> #### Tareas
>
> - Crea una función que inicialice el _array_ que representa nuestro tablero al inicio de la partida

### Poner fichas en el tablero

En este ejercicio, nuestros jugadores no van a usar ninguna estrategia y se limitarán a poner fichas al azar en el tablero.

#### Números aleatorios en JavaScript

La librería _Math_, incluida en el estándar ECMAScript, nos permite obtener un número aleatorio con decimales entre 0 y 1 usando la función `random()`. Como verás más adelante, necesitaremos números enteros aleatorios entre 0 y un número entero menor que el número de casillas del tablero. En el caso normal de uno de 3x3, ese número es 8. Antes de continuar, piensa como obtendrías dichos números aleatorios.

Usando matemáticas sencillas, podemos obtener el entero aleatorio entre 0 y el número de casillas, multiplicando el valor que nos retorna `Math.random()`, que está comprendido entre 0 y 1, por el número de casillas de nuestro tablero. Hay que tener en cuenta que este número aleatorio debe ser a su vez un número entero. Para ello podemos usar el método `Math.floor( n )` para convertir el número _n_ a un entero sin decimales.

> #### Tareas
>
> - Escribir una función que nos devuelva un número entero aleatorio entre 0 y el valor pasado por parámetro.

#### Buscar casillas vacías

Una vez más, la forma de buscar las casillas vacía para poder poner una ficha en ella, se puede hacer de diversas formas. Piensa un poco, antes de seguir, en la solución que tú propondrías.

El problema de buscar una casilla vacía es trivial. En cambio, elegir al azar una de ellas no es tan fácil. Una solución sencilla es crear un _array_ de una sola dimensión en el que cada elemento de ese _array_ sea un **objeto** con las coordenadas _x_ e _y_ de todas las casillas vacías encontradas.

Una vez tengamos el _array_ con las coordenadas vacías, podremos elegir al azar el **índice** de uno de los elementos de ese _array_ usando la función que hemos hecho en el apartado anterior.

> #### Tareas
>
> - Crear una función que nos devuelva un _array_ con las coordenadas de las casillas vacías del tablero
>
> - Escribe una función que sitúe una ficha de un jugador al azar en una casilla vacía de tablero.

#### Comprobando si hay un ganador

Piensa en cada una de las opciones que hay para ser ganador. Si ya lo has pensado, habrás llegado a una conclusión de que existen cuatro formas de ganar. Siendo las tres fichas del mismo jugador, las posibilidades son:

- Tener las 3 fichas en una misma columna.
- Tener las 3 fichas en una misma fila.
- Tener las 3 fichas en la diagonal descendente.
- Tener las 3 fichas en la diagonal ascendente.

_Las dos últimas posibilidades se pueden juntar en una sola, pero haciéndolo por separado se entiende mejor_

Así pues, habrá que hacer funciones para contar fichas iguales en las columnas, en las filas y en las diagonales del tablero.

> Tareas
>
> - Crear una función que, dada una columna, nos retorne el jugador que tiene tres fichas en ella. Si no hay jugador ganador, entonces que devuelva 0. 
> - Lo mismo que el anterior, pero para las filas.
> - Lo mismo que antes, pero para la diagonal descendente. Ten en cuenta que, en una matriz, la diagonal descendente tiene los índices de coordenadas iguales.
> - Igual que antes, pero para la diagonal ascendente. En una matriz, la diagonal ascendente tiene los índices de coordenadas invertidos.
> Crear una función que nos diga quien es el jugador ganador o 0 si hay empate. Esta función llamará, si es necesario, a todas las funciones anteriores para cada una de las columnas, de las filas y de las diagonales. 

#### Juntándolo todo

Finalmente hemos llegado a la función principal. Esta se encargará de inicializar el juego, dar turnos alternativos a cada jugador y comprobar si hay un ganador.

El programa deberá mostrar el estado final del tablero y el jugador ganador, si lo hay. En caso contrario, debe decir que ha habido un empate.

Ten en cuenta las condiciones de finalización del juego que se citan al principio de este texto.

> #### Tareas
>
> - Escribir la función descrita y el programa que la llame.

#### Para nota

Generaliza el juego para un tablero cuadrado con un número cualquiera de casillas.

