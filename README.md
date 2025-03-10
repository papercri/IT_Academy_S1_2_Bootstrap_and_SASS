# Proyecto: Landing Page con Bootstrap 5 y SASS

## Descripción

**Link**: [Bootstrap Layout](https://it-academy-s1-2-bootstrap-and-sass.vercel.app/)  

Este proyecto consiste en la creación de una landing page utilizando **Bootstrap 5 y SASS**. El objetivo es replicar un diseño dado, asegurando una correcta estructura y aplicando estilos personalizados mediante SASS.

## Tecnologías Utilizadas
- **HTML5**
- **SASS** para personalizar Bootstrap
- **Bootstrap 5** para la maquetación y los componentes predefinidos
- **Vite** para la gestión del proyecto y recarga rápida

## Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/papercri/IT_Academy_S1_2_Bootstrap_and_SASS.git
   ```
2. Accede al directorio del proyecto:
   ```bash
   cd IT_Academy_S1_2_Bootstrap_and_SASS
   ```
3. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```
5. Abre en tu navegador la url que sale en la terminal, por ejemplo:
   ```bash
      http://localhost:8080/
   ```
## Ejercicios
### Nivel 1
#### **Ejercicio 1: Barra de Navegación y Contenido Principal**
- Implementar una barra de navegación fija con `navBar` de Bootstrap.
- Diseñar el contenido principal con `Grid Responsive` de Bootstrap.
- **Requisitos:**
  - No usar CDN de Bootstrap.
  - Definir los colores principales con SASS:
    ```scss
    $primary: #5265E1;
    $secondary: #FA5959;
    ```

#### **Ejercicio 2: Sección de Funcionalidades**
- Estructurar la sección "Features" dentro del `Grid` de Bootstrap.
- Utilizar el componente `Tabs`, personalizándolo con SASS.
- **Requisito:** Diseño responsive.

#### **Ejercicio 3: Sección de Descargas**
- Implementar la sección de descargas.
- Posibilidad de personalizar `cards` de Bootstrap o crear nuevas clases.
- **Requisitos:** Diseño responsive y botones Bootstrap con `$primary`.

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
