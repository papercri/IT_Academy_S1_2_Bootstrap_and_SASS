# Proyecto: Landing Page con Bootstrap 5, Vite y SASS

## Descripción
Este proyecto consiste en la creación de una landing page utilizando **Bootstrap 5, Vite y SASS**. El objetivo es replicar un diseño dado, asegurando una correcta estructura y aplicando estilos personalizados mediante SASS.

## Requisitos Previos
Antes de comenzar, es importante tener conocimientos en:
- **HTML y SASS**
- **Bootstrap 5**: Sistema de columnas y validaciones
- **Vite** para la gestión y optimización del proyecto
- **Media Queries en Bootstrap 5**

## Consideraciones Importantes
Evita estos errores comunes:
- No añadas etiquetas innecesarias de Bootstrap en los `div`.
- Mantén la estructura `container -> row -> col`.
- Respeta el diseño establecido sin modificaciones creativas.
- Asegúrate de importar Bootstrap correctamente en el proyecto.

## Tecnologías Utilizadas
- **HTML5**
- **SASS** para personalizar Bootstrap
- **Bootstrap 5** para la maquetación y los componentes predefinidos
- **Vite** para la gestión del proyecto y recarga rápida

## Instalación
1. Clona el repositorio:
   https://github.com/papercri/IT_Academy_S1_2_Bootstrap_and_SASS.git
   git clone https://github.com/papercri/IT_Academy_S1_2_Bootstrap_and_SASS.git

2. Accede al directorio del proyecto:
  cd IT_Academy_S1_2_Bootstrap_and_SASS
   ```
3. Instala las dependencias del proyecto:
  
   npm install
   ```
4. Inicia el servidor de desarrollo con Vite:

   npm run dev
   

## Ejercicios
### Nivel 1
#### **Ejercicio 1: Barra de Navegación y Contenido Principal**
- Implementar una barra de navegación fija con `navBar` de Bootstrap.
- Diseñar el contenido principal con `Grid Responsive` de Bootstrap.
- **Requisitos:**
  - No usar CDN de Bootstrap.
  - Definir los colores principales con SASS:
    ```scss
    $primary-color: #5265E1;
    $secondary-color: #FA5959;
    ```

#### **Ejercicio 2: Sección de Funcionalidades**
- Estructurar la sección "Features" dentro del `Grid` de Bootstrap.
- Utilizar el componente `Tabs`, personalizándolo con SASS.
- **Requisito:** Diseño responsive.

#### **Ejercicio 3: Sección de Descargas**
- Implementar la sección de descargas.
- Posibilidad de personalizar `cards` de Bootstrap o crear nuevas clases.
- **Requisitos:** Diseño responsive y botones Bootstrap con `$primary-color`.

#### **Ejercicio 4: Sección de FAQS**
- Implementar el componente `Accordion` y personalizarlo.
- **Requisitos:** Diseño responsive y uso de botones de Bootstrap.

### Nivel 2 (Opcional)
#### **Ejercicio 5: Footer y Formulario**
- Usar formularios de Bootstrap.
- Validar el campo de email con Bootstrap (`form validation`).
- **Requisito:** Mostrar un mensaje de error en caso de entrada vacía o formato incorrecto.

### Nivel 3 (Opcional)
#### **Ejercicio 6: Estados Activos y Efectos Hover**
- Personalizar estados activos en botones, enlaces, tabs y avisos.


