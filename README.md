¡Perfecto! A continuación te presento un **README inicial** para una aplicación **Bloc de Notas con integración a la API de IMDB**, construida en **React Native** para dispositivos móviles. Este README está diseñado para ayudar a otros desarrolladores a entender rápidamente el proyecto, cómo configurarlo y cómo empezar a trabajar en él.

---

# 📒 Bloc de Notas + 🎬 IMDB App (React Native)

Una aplicación móvil construida con **React Native** que permite a los usuarios crear notas y vincularlas con películas o series obtenidas desde la **API de IMDB**. Ideal para los cinéfilos que desean guardar ideas, críticas o simplemente hacer un seguimiento de lo que han visto o desean ver.

---

## 🚀 Características principales

* 📝 Crear, editar y eliminar notas.
* 🔍 Buscar películas y series mediante la API de IMDB.
* 📌 Asociar una nota a una película o serie.
* 🎨 Interfaz intuitiva y adaptable a Android y iOS.
* ☁️ Almacenamiento local (con opción a sincronización futura en la nube).

---

## 🛠️ Tecnologías utilizadas

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/) (para desarrollo rápido y testing)
* [IMDB API](https://rapidapi.com/blog/imdb-api/)
* [React Navigation](https://reactnavigation.org/) (gestión de pantallas)
* [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) (almacenamiento local)
* [Axios](https://axios-http.com/) (consumo de API)

---

## 📦 Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/fabia1cm2001-pixel/Block-de-notas.git

# 2. Entra al directorio del proyecto
cd bloc-notas-imdb-app

# 3. Instala las dependencias
npm install

# 4. Inicia la app con Expo
npx expo start
```

---

## 🔑 Configuración de la API de IMDB

1. Regístrate en [RapidAPI](https://rapidapi.com/) y suscríbete a la **IMDB API**.
2. Obtén tu `X-RapidAPI-Key` y `X-RapidAPI-Host`.
3. Crea un archivo `.env` en la raíz del proyecto y agrega:

```env
IMDB_API_KEY=tu_api_key_aqui
IMDB_API_HOST=tu_api_host_aqui
```

4. Asegúrate de que el proyecto esté leyendo variables de entorno (usa `react-native-dotenv` o similar si es necesario).

---

## 📱 Capturas de pantalla (opcional)

*Proximamente...*

---

## 🧩 Estructura del proyecto

```bash
bloc-notas-imdb-app/
│
├── src/
│   ├── components/       # Componentes reutilizables
│   ├── screens/          # Pantallas principales (Notas, Buscar, Detalles)
│   ├── services/         # Lógica para consumir la API de IMDB
│   ├── storage/          # Manejo de AsyncStorage
│   └── utils/            # Funciones auxiliares
│
├── assets/               # Imágenes, íconos, etc.
├── App.js                # Entry point
└── .env                  # Variables de entorno
```

---

## ✅ Próximas funcionalidades

* 🔄 Sincronización con una base de datos en la nube.
* 📅 Agregar recordatorios o fechas de estreno vinculadas.
* 📂 Categorías o etiquetas para las notas.
* 👤 Autenticación de usuario (opcional).

---

## 🤝 Contribuciones

¡Contribuciones son bienvenidas! Si quieres ayudar:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Sube tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

