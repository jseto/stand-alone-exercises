# Ejercicios con funciones

1. La velocidad de un vehículo se determina calculando la distancia recorrida por unidad de tiempo `v=d/t`. Escribir una función que retorne la velocidad alcanzada por un vehículo según los parámetros de distancia y tiempo introducidos.

2. La _ecuación de estado_ de los gases ideales permite determinar la presión a la que se encontrará un gas a temperatura dada. Debemos escribir una función que, según una temperatura dada, devuelva la presión a la que se encontrará una unidad de gas en un recipiente de 3 litros.

	La _ecuación de estado_ es `P = nRT / V`. 
	
	- _n_ son las unidades de gas.
	- _R_ es la constante de los gases ideales y vale 0.082.
	- _T_ es la temperatura a la que se encuentra el gas.
	- _V_ es el volumen que ocupa el gas.

3. Escribir una función que al introducir un año, nos diga si es bisiesto o no.

	Un año bisiesto es aquel que es divisible por 4 excepto aquellos que sean divisibles por 100. Si un año es divisible por 400 es bisiesto en cualquier caso.

	Por ejemplo, 1997 no fue bisiesto, 1996 si lo fue pero 1900 no. Por otro lado 2000 si lo fue. 

4. Escribir una función que, dado un array de valores ordenados pasado por parámetro, retorne la mediana de los elementos. 

	La mediana de un conjunto de números es el número medio en el conjunto (después que los números han sido arreglados del menor al mayor). Si hay un número par de datos, la mediana es el promedio de los dos números medios.

5. Escribir una función que retorne la _moda_ de los elementos de un array pasado por parámetro.

	La moda de un conjunto de números es el número que aparece más a menudo

6. Escribir una función a la que se le pasen dos array y devuelva otro array con la suma de cada elemento del primer array con todos los elementos del segundo array.

	|																			 |
	|--------------------------------------|
	| result[0] = array1[0] + array2[0..n] |
	| result[1] = array1[1] + array2[0..n] |
	|								...										 |
	| result[0] = array1[0] + array2[0..n] |

