# Ejercicio sobre mocks con Jest

Instalar las dependencias
```bash
    npm install
```

Lanzar los tests
```bash
    npm run test
```

## Objetivos

# 1. Instalar dependencias y lanzar los tests. Verás que algunos fallan.

# 2. Corregir el código en src/date-utils.js para que pase el último que falla "return Sunday".

# 3. El test para "return Monday" también falla. Nos falta mockear el retorno de Math.random() con un valor que nos asegure que siempre se selecciona ese día del array.

# 4. Implementar el test faltante. Queremos testear que al llamar a la función getRandomDay() ésta está llamando a su vez a Math.floor(). Para ello hay que "espíar" en dicho método del módulo Math. Esto puede ser deducido de los otros tests o repasando las diapositivas. NOTA: cambiar "it.skip" por "it" para que Jest no ignore este test.