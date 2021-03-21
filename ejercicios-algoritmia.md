# Ejercicios de Algoritmia

## Función Fibonacci

La serie de Fibonacci es una famosa secuencia de números con unas propiedades muy interesantes y sorprendentes. Si te interesa [aquí](https://en.wikipedia.org/wiki/Fibonacci_number#History) tienes más información.

La serie de Fibonacci se crea muy fácilmente. Se empieza con 0 y 1 y el siguiente elemento de la serie se obtiene sumando los dos anteriores. Así pues, tenemos que el tercer número de la serie es 1, como resultado de sumar 0 y 1.

En la tabla representamos _n_ (el enésimo número de la secuencia) y _F(n)_ que es el número de Fibonacci de _n_


| n  	| 0 | 1 | 2 |
|-----|---|---|---|
| F(n)| 0 | 1 | 1 |

La fórmula para calcular el número _n_ de Fibonacci es:

`F(n) = F(n-2) + F(n-1)`

Por lo tanto, F(3) se obtiene sumando:

- `F(3-2) = F(1) = 1` (según la tabla anterior)
y
- `F(3-1) = F(2) = 1`

es decir, `F(3) = 2`

la tabla quedaría completada con:

| n  	| 0 | 1 | 2 | 3 |
|-----|---|---|---|---|
| F(n)| 0 | 1 | 1 | 2 |

Para F(4) tendríamos, 

`F(4-2) + F(4-1) = F(2) + F(3) = 1 + 2 = 3`

| n  	| 0 | 1 | 2 | 3 | 4 |
|-----|---|---|---|---|---|
| F(n)| 0 | 1 | 1 | 2 | 3 |

Para F(5),

`F(5-2) + F(5-1) = F(3) + F(4) = 2 + 3 = 5`

<br/>

y así sucesivamente. Para los 10 primeros números, la tabla quedaría así:

| n  	| 0 | 1 | 2 | 3 | 4 | 5 | 6 |  7 |  8 |  9 | 
|-----|---|---|---|---|---|---|---|---:|---:|---:|
| F(n)| 0 | 1 | 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 

## Ejercicios Fibonacci

1. Función de Fibonacci 
	Escribe una función que retorne todos los números de la serie de Fibonacci hasta el número dado en el parámetro.

2. Pares de Fibonacci
	Escribe una función que, al igual que la función de Fibonacci, retorne la serie hasta el número dado por parámetro pero solo los números pares de Fibonacci.

3. Suma de los números de Fibonacci
	Escribe una función que retorne la suma total de todos los números de Fibonacci hasta el número dado.







