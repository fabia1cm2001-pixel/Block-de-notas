# Bloc de Notas - Aplicación Móvil de Gestión de Notas

## 1. Identificación del Proyecto

- **Nombre de la App:** Bloc de Notas
- **Asignatura/Profesor:** Desarrollo de Aplicaciones Móviles / M.C. Leonel González Vidales
- **Periodo/Fecha:** Octubre 2025
- **URL del Repositorio:** https://github.com/fabia1cm2001-pixel/Block-de-notas
## 2. Descripción del Proyecto

Bloc de Notas es una aplicación móvil desarrollada con React Native y Expo que permite a los usuarios crear, editar, organizar y gestionar sus notas personales de manera eficiente. La aplicación cuenta con una interfaz moderna con tema azul oscuro y navegación fluida entre pantallas.

### Características Principales:
- 📝 **Gestión de Notas**: Crear, editar y eliminar notas de forma sencilla
- 📋 **Lista Organizada**: Visualización clara de todas tus notas
- 🔍 **Búsqueda Avanzada**: Encuentra tus notas rápidamente en el historial
- 🗂️ **Historial**: Acceso a notas eliminadas y archivadas
- 🎨 **Interfaz Moderna**: Diseño con tema azul y componentes estilizados
- 🧭 **Navegación Intuitiva**: Sistema de navegación con tabs y stacks
- 💾 **Gestión Eficiente**: Botones de guardar, editar, eliminar y buscar

### Funcionalidades Implementadas:
- Pantalla de inicio con autenticación
- Lista principal de notas activas
- Editor de notas con modo crear/editar
- Visualización detallada de cada nota
- Historial de notas archivadas y eliminadas
- Sistema de búsqueda en historial
- Navegación por tabs (Notas, Historial, Ajustes)
- Botones de acción (Regreso, Guardar, Eliminar, Editar, Buscar)

## 3. Tecnologías y Versiones Utilizadas

### Stack Tecnológico:
- **React Native:** 0.81.4
- **React:** 19.1.0
- **Expo:** ~54.0.3
- **React Navigation:** v7.1.17
- **React Navigation Native Stack:** v7.3.26
- **React Navigation Bottom Tabs:** v7.0.10
- **React Native Screens:** ~4.16.0
- **React Native Safe Area Context:** ~5.6.0
- **Native Base:** v3.4.28
- **Expo Vector Icons:** v14.0.0

### Herramientas de Desarrollo Requeridas:

- **Node.js:** v18.17.0 o superior
  ```bash
  node --version
  ```
- **NPM:** 9.0.0+ o Yarn v1.22.19+
  ```bash
  npm --version
  # o
  yarn --version
  ```
- **Expo CLI:** v6.3.0+
  ```bash
  npx expo --version
  ```
- **Android Studio:** v2022.3+ con Android SDK 33+ **o** Expo Go app en dispositivo físico
  ```bash
  # Verificar Android SDK
  adb --version
  ```

### Verificación de Entorno:
```bash
npx expo doctor
```

## 4. Estructura del Proyecto

### Organización de Archivos:
```
bloc-notas/
├── App.js                          # Componente principal de la aplicación
├── app.json                        # Configuración de Expo
├── package.json                    # Dependencias y scripts
├── index.js                        # Punto de entrada
├── assets/                         # Recursos estáticos
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
└── src/
    ├── components/                 # Componentes reutilizables
    │   └── Navigation/
    │       ├── IconBack.js         # Botón de regreso
    │       └── index.js
    ├── navigations/                # Configuración de navegación
    │   ├── AppNavigation.js        # Stack principal
    │   ├── HandlerNavigation.js    # Manejo Auth/App
    │   ├── Styles.styles.js        # Estilos de navegación
    │   ├── index.js
    │   ├── BottomTabNavigation/    # Navegación por tabs
    │   │   ├── BottomTabNavigation.js
    │   │   ├── BottomTabNavigation.styles.js
    │   │   └── index.js
    │   └── stacks/                 # Stack navigators
    │       ├── AuthNavigation.js   # Stack de autenticación
    │       ├── NotesNavigation.js  # Stack de notas
    │       ├── HistoryNavigation.js # Stack de historial
    │       ├── SettingsNavigation.js # Stack de ajustes
    │       └── index.js
    ├── screens/                    # Pantallas de la aplicación
    │   ├── Auth/                   # Pantallas de autenticación
    │   │   ├── AuthStartScreen.js
    │   │   ├── LoginScreen.js
    │   │   └── index.js
    │   ├── Notes/                  # Pantallas de notas
    │   │   ├── NotesListScreen.js
    │   │   ├── NoteEditorScreen.js
    │   │   ├── NoteViewScreen.js
    │   │   └── index.js
    │   ├── History/                # Pantallas de historial
    │   │   ├── HistoryScreen.js
    │   │   ├── SearchScreen.js
    │   │   └── index.js
    │   └── Settings/               # Pantallas de configuración
    │       ├── SettingsScreen.js
    │       └── index.js
    ├── utils/                      # Utilidades y constantes
    │   ├── index.js
    │   └── screens.js              # Nombres de pantallas
    └── screenshots/                # Capturas de pantalla
        ├── pantalla1.jpg           # Pantalla de inicio
        ├── pantalla2.jpg           # Pantalla de login
        └── pantalla3.jpg           # Pantalla principal de notas
```

### Arquitectura de la Aplicación:
- **App.js**: Componente raíz con NavigationContainer y Providers
- **HandlerNavigation.js**: Gestiona navegación entre Auth y App
- **BottomTabNavigation.js**: Tab navigator con 3 tabs principales
- **AuthNavigation.js**: Stack de pantallas de autenticación
- **NotesNavigation.js**: Stack de gestión de notas
- **HistoryNavigation.js**: Stack de historial y búsqueda
- **SettingsNavigation.js**: Stack de configuración

## 5. Instalación y Configuración

### Instalación de Dependencias:
```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/bloc-notas-app
cd bloc-notas-app

# Instalar dependencias con npm
npm install

# O con yarn
yarn install
```

### Dependencias del Proyecto:

| Dependencia | Versión | Propósito |
|-------------|---------|-----------|
| `@react-navigation/native` | ^7.1.17 | Core de navegación entre pantallas |
| `@react-navigation/native-stack` | ^7.3.26 | Stack navigator para navegación jerárquica |
| `@react-navigation/bottom-tabs` | ^7.0.10 | Tab navigator para menú inferior |
| `react-native-screens` | ~4.16.0 | Optimización de rendimiento para transiciones |
| `react-native-safe-area-context` | ~5.6.0 | Manejo de áreas seguras (notch, barras) |
| `native-base` | ^3.4.28 | Biblioteca de componentes UI |
| `@expo/vector-icons` | ^14.0.0 | Iconos para la aplicación |
| `expo-status-bar` | ~3.0.8 | Control de barra de estado |
| `expo` | ~54.0.3 | Framework de desarrollo móvil |
| `react` | 19.1.0 | Biblioteca de interfaz de usuario |
| `react-native` | 0.81.4 | Framework móvil multiplataforma |

### Instalar Dependencias Específicas:
```bash
# Navegación
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs

# Dependencias de navegación
npm install react-native-screens react-native-safe-area-context

# UI Components
npm install native-base

# Iconos
npm install @expo/vector-icons
```

### Verificar instalación:
```bash
npm list --depth=0
```

## 6. Ejecución de la Aplicación

### Scripts Disponibles:
```bash
# Iniciar servidor de desarrollo
npm start
# o
yarn start
# o
npx expo start

# Ejecutar en Android (emulador/dispositivo)
npm run android
# o
yarn android
# o
npx expo start --android

# Ejecutar en iOS (solo macOS)
npm run ios
# o
yarn ios
# o  
npx expo start --ios

# Ejecutar en web
npm run web
# o
yarn web
# o
npx expo start --web

# Iniciar con túnel (para redes restrictivas)
npx expo start --tunnel
```

### Primera Ejecución:
1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm start
   ```

3. **Conectar dispositivo:**
   - **Android:** Usar Expo Go o emulador
   - **iOS:** Usar Expo Go o simulador
   - **Web:** Se abrirá automáticamente en el navegador

4. **Escanear código QR:**
   - Abrir Expo Go en tu dispositivo
   - Escanear el código QR que aparece en la terminal
   - Esperar a que la aplicación se compile y cargue

### Notas de Entorno:
- **Emulador Android:** Debe estar iniciado antes de ejecutar `npm run android`
- **Dispositivo físico:** Usar Expo Go y escanear QR code
- **Túnel para redes restrictivas:** `npx expo start --tunnel`
- **Limpiar caché:** `npx expo start --clear` si hay problemas

## 7. Funcionalidades de la Aplicación

### Pantalla de Inicio (AuthStartScreen):
- **Pantalla de Bienvenida**: Primera vista al abrir la aplicación
- **Título Principal**: "Bloc de Notas"
- **Subtítulo**: "Organiza tus ideas"
- **Botón de Acción**: "Iniciar sesión"
- **Diseño**: Interfaz limpia con fondo blanco y tipografía azul

![Pantalla 1 - Inicio](src/screenshots/pantalla1.jpg)

### Pantalla de Login (LoginScreen):
- **Formulario de Acceso**: Pantalla para iniciar sesión
- **Título**: "Iniciar Sesión"
- **Subtítulo**: "Accede a tus notas"
- **Botón Entrar**: Acceso a la aplicación principal
- **Navegación**: Botón de regreso circular en la esquina superior izquierda
- **Header**: Barra superior azul con título centrado

![Pantalla 2 - Login](src/screenshots/pantalla2.jpg)

### Pantalla Principal de Notas (NotesListScreen):
- **Lista de Notas**: Visualización de todas las notas activas
- **Título del Header**: "Notas" en barra superior azul
- **Área de Contenido**: "Mis Notas" centrado
- **Tab Bar Inferior**: Navegación con 3 opciones
  - **Notas** (icono de documento) - Tab activo en azul
  - **Historial** (icono de reloj) - Gris inactivo
  - **Ajustes** (icono de engrane) - Gris inactivo
- **Diseño**: Fondo blanco con elementos centrados

![Pantalla 3 - Lista de Notas](src/screenshots/pantalla3.jpg)

### Pantalla de Editor de Notas (NoteEditorScreen):
- **Modo Crear/Editar**: Editor para nueva nota o modificar existente
- **Título**: "Nueva Nota" o "Editar Nota"
- **Área de Texto**: Campo principal para el contenido
- **Botón Guardar**: Persistir cambios (implementación pendiente)
- **Presentación**: Modal sobre la pantalla principal

### Pantalla de Vista de Nota (NoteViewScreen):
- **Visualización Completa**: Muestra el contenido de la nota seleccionada
- **Botones de Acción**:
  - **Editar**: Abre el editor con el contenido actual
  - **Eliminar**: Mueve la nota al historial
- **Navegación**: Botón de regreso al listado

### Pantalla de Historial (HistoryScreen):
- **Notas Archivadas**: Acceso a notas eliminadas o archivadas
- **Título**: "Historial"
- **Subtítulo**: "Notas eliminadas y archivadas"
- **Botón Buscar**: Acceso a búsqueda avanzada
- **Restaurar**: Opción para recuperar notas

### Pantalla de Búsqueda (SearchScreen):
- **Campo de Búsqueda**: Buscar por título o contenido
- **Resultados**: Lista filtrada de notas
- **Filtros**: Por fecha, categoría (implementación futura)
- **Presentación**: Modal para búsqueda rápida

### Pantalla de Configuración (SettingsScreen):
- **Opciones Generales**: Configuración de la aplicación
- **Preferencias**: Tema, notificaciones, respaldos
- **Información**: Versión de la app, créditos

### Componentes de Navegación:

#### Botón de Regreso (IconBack):
- **Ubicación**: Header izquierdo en todas las pantallas stack
- **Diseño**: Ícono de flecha izquierda circular
- **Función**: Regresar a la pantalla anterior
- **Color**: Blanco sobre fondo azul

#### Bottom Tab Bar:
- **Fondo**: Azul oscuro (#1e293b)
- **Tabs**: 3 opciones principales
- **Iconos**: Material Community Icons
- **Color Activo**: Azul brillante (#3b82f6)
- **Color Inactivo**: Gris (#94a3b8)
- **Altura**: 60px con padding vertical

### Flujo de Navegación:

```
AuthStartScreen (Inicio)
    ↓ [Iniciar sesión]
LoginScreen (Login)
    ↓ [Entrar]
BottomTabNavigation (App Principal)
    ├── Tab Notas
    │   ├── NotesListScreen (Lista)
    │   ├── NoteEditorScreen (Crear/Editar - Modal)
    │   └── NoteViewScreen (Ver Detalle)
    ├── Tab Historial
    │   ├── HistoryScreen (Historial)
    │   └── SearchScreen (Buscar - Modal)
    └── Tab Ajustes
        └── SettingsScreen (Configuración)
```

### Características Técnicas:
- **Navegación Stack**: Transiciones suaves entre pantallas
- **Navegación Tab**: Menú inferior persistente
- **Modales**: Presentación de editor y búsqueda
- **Diseño Responsivo**: Optimizado para diferentes tamaños
- **Tema Consistente**: Azul corporativo en toda la app
- **Componentes Modulares**: Código organizado y reutilizable
- **Safe Area**: Respeto por notch y barras del sistema

## 8. Desarrollo y Extensión

### Próximas Funcionalidades Sugeridas:
- **Persistencia Local**: Implementar AsyncStorage o SQLite para guardar notas
- **Categorías**: Organización de notas por categorías/etiquetas
- **Notas con Formato**: Editor rico con markdown o HTML
- **Recordatorios**: Notificaciones para notas importantes
- **Sincronización Cloud**: Backend con Firebase o similar
- **Modo Oscuro**: Tema oscuro alternativo
- **Exportar/Importar**: Compartir notas en diferentes formatos
- **Notas de Voz**: Grabación y transcripción
- **Adjuntar Imágenes**: Soporte multimedia en notas
- **Búsqueda Avanzada**: Filtros por fecha, categoría, favoritos
- **Papelera**: Recuperación de notas eliminadas (30 días)
- **Notas Compartidas**: Colaboración entre usuarios

### Estructura para Nuevas Pantallas:
```javascript
// Ejemplo: Pantalla de Categorías
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function CategoriesScreen() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorías</Text>
      {/* Contenido de la pantalla */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e40af',
  },
});
```

### Agregar Nuevas Rutas:

1. **Actualizar screens.js:**
```javascript
// src/utils/screens.js
export const screens = {
  // ... código existente
  notes: {
    // ... notas existentes
    categoriesScreen: "CategoriesScreen", // Nueva pantalla
  },
};
```

2. **Crear componente de pantalla:**
```javascript
// src/screens/Notes/CategoriesScreen.js
export function CategoriesScreen() {
  // Implementación
}
```

3. **Agregar al stack navigator:**
```javascript
// src/navigations/stacks/NotesNavigation.js
<Stack.Screen
  name={screens.tab.notes.categoriesScreen}
  component={CategoriesScreen}
  options={{ title: "Categorías" }}
/>
```

### Implementar Persistencia de Datos:
```bash
# Instalar AsyncStorage
npm install @react-native-async-storage/async-storage

# O SQLite para datos más complejos
npm install expo-sqlite
```

### Ejemplo de Guardar Notas:
```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Guardar nota
const saveNote = async (note) => {
  try {
    const notes = await AsyncStorage.getItem('notes');
    const notesArray = notes ? JSON.parse(notes) : [];
    notesArray.push(note);
    await AsyncStorage.setItem('notes', JSON.stringify(notesArray));
  } catch (error) {
    console.error('Error al guardar nota:', error);
  }
};

// Obtener notas
const getNotes = async () => {
  try {
    const notes = await AsyncStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
  } catch (error) {
    console.error('Error al obtener notas:', error);
    return [];
  }
};
```

## 9. Troubleshooting

### Problemas Comunes:

| Problema | Solución |
|----------|----------|
| **Error de instalación de native-base** | `npm install native-base --legacy-peer-deps` |
| **Metro cache corrupto** | `npx expo start --clear` |
| **Puerto ocupado** | `npx expo start --port 8082` |
| **Dependencias desactualizadas** | `npx expo doctor` luego `npx expo install --fix` |
| **Error con @expo/vector-icons** | `npm install @expo/vector-icons` |
| **Problema con safe-area** | `npx expo install react-native-safe-area-context` |
| **Screens no se actualiza** | `npx expo install react-native-screens` |
| **Tab navigation no aparece** | Verificar `@react-navigation/bottom-tabs` instalado |
| **IconBack no funciona** | Verificar que `native-base` esté instalado y configurado |

### Comandos Útiles:
```bash
# Verificar entorno completo
npx expo doctor

# Limpiar cache de Metro
npx expo start --clear

# Limpiar cache de npm
npm cache clean --force

# Reinstalar todas las dependencias
rm -rf node_modules package-lock.json
npm install

# O con yarn
rm -rf node_modules yarn.lock
yarn install

# Verificar instalación de dependencias específicas
npm list @react-navigation/native
npm list native-base
npm list @expo/vector-icons

# Actualizar Expo CLI
npm install -g expo-cli@latest

# Reparar dependencias de Expo
npx expo install --fix
```

### Errores Específicos:

#### Error: "Unable to resolve module ChevronLeftIcon"
```bash
npm install native-base
npx expo start --clear
```

#### Error: "NavigationContainer is not exported"
```bash
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
```

#### Error: "Bottom tabs not showing"
```bash
npm install @react-navigation/bottom-tabs
```

#### Error al compilar en Android:
```bash
cd android
./gradlew clean
cd ..
npx expo start --clear
```

### Verificación de Configuración:

**Verificar package.json:**
```json
{
  "dependencies": {
    "@react-navigation/native": "^7.1.17",
    "@react-navigation/native-stack": "^7.3.26",
    "@react-navigation/bottom-tabs": "^7.0.10",
    "native-base": "^3.4.28",
    "@expo/vector-icons": "^14.0.0",
    "react-native-screens": "~4.16.0",
    "react-native-safe-area-context": "~5.6.0"
  }
}
```

**Verificar App.js tiene los providers:**
```javascript
<NavigationContainer>
  <NativeBaseProvider>
    <GluestackUIProvider mode="light">
      {/* App content */}
    </GluestackUIProvider>
  </NativeBaseProvider>
</NavigationContainer>
```

## 10. Recursos y Documentación

### Documentación Oficial:
- [Documentación de Expo](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Docs](https://reactnative.dev/)
- [Native Base](https://docs.nativebase.io/)
- [Expo Vector Icons](https://icons.expo.fyi/)

### Tutoriales Recomendados:
- [React Navigation Stack Navigator](https://reactnavigation.org/docs/stack-navigator)
- [React Navigation Bottom Tabs](https://reactnavigation.org/docs/bottom-tab-navigator)
- [Native Base Getting Started](https://docs.nativebase.io/getting-started)
- [AsyncStorage Guide](https://react-native-async-storage.github.io/async-storage/)

### Recursos Adicionales:
- [Expo Components](https://docs.expo.dev/versions/latest/)
- [React Native Directory](https://reactnative.directory/)
- [Expo Forums](https://forums.expo.dev/)
- [Stack Overflow - React Native](https://stackoverflow.com/questions/tagged/react-native)

### Comunidad y Soporte:
- **Discord de Expo**: https://discord.gg/expo
- **GitHub Issues**: Reportar bugs en los repositorios correspondientes
- **Expo Forums**: Preguntar dudas específicas
- **Stack Overflow**: Buscar soluciones a problemas comunes

---

## Información del Proyecto

**Desarrollado por:** Fabian Castillo Mendoza 
**Profesor:** M.C. Leonel González Vidales  
**Asignatura:** Desarrollo de Aplicaciones Móviles  
**Última actualización:** 8 de octubre 2025  
**Versión:** 1.0.0  
**Licencia:** MIT

---

## Contacto y Contribuciones

Para reportar bugs, sugerencias o contribuir al proyecto:
- **Email:** tu.email@ejemplo.com
- **GitHub Issues**: https://github.com/fabia1cm2001-pixel/Block-de-notas
- **Pull Requests**: Las contribuciones son bienvenidas

---

## Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.