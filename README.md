# 🗣️ Taller: Reinas del chisme

Este es un proyecto orientado a objetos hecho en **Node.js**, que modela una red de "chismosas" con diferentes personalidades: una `Tía Vecina`, una `Compañera Curiosa` y una `Estudiante Espía`. Cada una tiene su propio estilo para recolectar y difundir información. Tocando temas de JavaScript como lo son clases, herencia, encapsulamiento y modularización.

---

## Requisitos

- Node.js v14 o superior
- npm (gestor de paquetes de Node)
- chalk

---

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/red-de-chismosas.git
cd red-de-chismosa
```

2. Instala dependencias:

```bash
npm install
```

## Estructura del proyecto:

📁 red-de-chismosas/
├── classes/
│   ├── Chismosa.js              # Clase abstracta base
│   ├── CompaneraCuriosa.js      # Clase hija: Compañera de oficina
│   ├── EstudiateEspia.js        # Clase hija: Estudiante chismosa
│   └── TiaVecina.js             # Clase hija: La clásica vecina
├── main.mjs                     # Script principal
├── package.json
└── README.md

## Clases:

### Chismosa (abstracta)
Clase base que define los atributos:
nombre — Nombre de la chismosa
reputacion — Nivel de respeto (0 a 10)
nivelChisme — Nivel de intensidad del chisme (0 a 10)
Tiene métodos que deben ser sobreescritos:
recolectarInfo()
contarChisme()

### TiaVecina
Recolecta información en reuniones del barrio.
Difunde chismes mientras ofrece café.
Recompensa: Si el chisme es fuerte (nivel ≥ 8), gana reputación.

### CompaneraCuriosa
Hace preguntas disimuladas en el trabajo.
Cuenta el chisme como "ejemplo de vida".
Gana reputación según lo convincente del chisme.

## EstudiateEspia
Recolecta leyendo chats ajenos en el salón.
Difunde chismes por estados de WhatsApp.
Aumenta su nivel de chisme, pero pierde reputación.


## Ejecucion del programa desde la consola:

```bash
node index.js
```


## Ejemplo de salida:

Aprovecha la reunion del barrio para escuchar discretamente
Difunde el chisme mientras ofrece cafe
EL nivel del Chisme es: 10
La reputacion es: 7
Aprovecha la reunion del barrio para escuchar discretamente
Difunde el chisme mientras ofrece cafe
EL nivel del Chisme es: 4
La reputacion es: 6
Hace preguntas aparentemente profesionales a los compañeros de trabajo
Comenta el chisme como ejemplo de vida en el trabajo
EL nivel del Chisme es: 10
La reputacion es: 3
Aprovecha la reunion del barrio para escuchar discretamente
Difunde el chisme mientras ofrece cafe
EL nivel del Chisme es: 6
La reputacion es: 5
Lee chats ajenos desde el último puesto del salón
Filtra el chisme por estados en WhatsApp
EL nivel del Chisme es: 6
La reputacion es: 0


## Intyegrantes:
- Sebastian Mauricio Betancourt Sinza
- Alejandro Naranjo Marin




