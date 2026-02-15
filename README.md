# 🍽️ Gestión de Restaurantes - Backend API

Una aplicación backend robusta y escalable para la gestión integral de restaurantes. Construida con **Node.js**, **Express** y **MongoDB**, proporciona una API REST completa para administrar proveedores, empleados, usuarios, pedidos, reservaciones, platillos y ventas.

## 📋 Descripción del Proyecto

**gestion-restaurante** es un sistema backend diseñado para simplificar y automatizar las operaciones de un restaurante. Proporciona funcionalidades para:

- ✅ Gestión de usuarios y autenticación
- ✅ Administración de empleados y proveedores
- ✅ Control de platillos y menú
- ✅ Registro de pedidos y ventas
- ✅ Sistema de reservaciones
- ✅ Validación de datos en tiempo real

## 🛠️ Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución JavaScript
- **Express.js** - Framework web minimalista
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **CORS** - Control de recursos compartidos entre orígenes
- **Morgan** - Logger de solicitudes HTTP
- **Helmet** - Seguridad HTTP
- **Dotenv** - Gestión de variables de entorno

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- Node.js (v14 o superior)
- npm (gestor de paquetes de Node)
- MongoDB (local o URI remota)

## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone <url-del-repositorio>
cd gestion_restaurantes
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con la siguiente configuración:

```env
PORT=3001
NODE_ENV=development
URI_MONGODB=mongodb://localhost:27017/gestion-restaurantes
```

**Variables:**
- `PORT` - Puerto en el que se ejecutará el servidor (default: 3001)
- `NODE_ENV` - Entorno de ejecución (development, production)
- `URI_MONGODB` - Cadena de conexión a MongoDB

### 4. Ejecutar el Servidor

```bash
npm start
```

El servidor estará disponible en: `http://localhost:3001`

## 📁 Estructura del Proyecto

```
gestion_restaurantes/
├── configs/
│   ├── app.js                      # Configuración principal de Express
│   ├── cors-configuration.js       # Configuración de CORS
│   ├── db.js                       # Conexión a MongoDB
│   └── helmet-configuration.js     # Configuración de seguridad
├── middlewares/
│   ├── check-validators.js         # Validador genérico
│   ├── empleados-validator.js      # Validador de empleados
│   ├── handle-error.js             # Manejador de errores
│   ├── pedidos-validator.js        # Validador de pedidos
│   ├── platillos-validators.js     # Validador de platillos
│   ├── proveedores-validators.js   # Validador de proveedores
│   ├── request-limit.js            # Limitador de solicitudes
│   ├── usuarios-validator.js       # Validador de usuarios
│   └── ventas-validators.js        # Validador de ventas
├── src/
│   ├── Empleados/
│   │   ├── empleados.controller.js
│   │   ├── empleados.model.js
│   │   └── empleados.routes.js
│   ├── Pedidos/
│   │   ├── pedidos.controller.js
│   │   ├── pedidos.model.js
│   │   └── pedidos.routes.js
│   ├── Platillos/
│   │   ├── platillos.controller.js
│   │   ├── platillos.model.js
│   │   └── platillos.routes.js
│   ├── Proveedores/
│   │   ├── proveedores.controller.js
│   │   ├── proveedores.model.js
│   │   └── proveedores.routes.js
│   ├── Reservaciones/
│   │   ├── reservaciones.controller.js
│   │   ├── reservaciones.model.js
│   │   └── reservaciones.routes.js
│   ├── Usuarios/
│   │   ├── usuarios.controller.js
│   │   ├── usuarios.model.js
│   │   └── usuarios.routes.js
│   └── Ventas/
│       ├── ventas.controller.js
│       ├── ventas.model.js
│       └── ventas.routes.js
├── index.js                        # Punto de entrada principal
├── package.json                    # Dependencias del proyecto
└── README.md                       # Este archivo
```

## 🏗️ Arquitectura Modular

El proyecto sigue un patrón modular donde cada funcionalidad está organizada en carpetas independientes con tres archivos:

- **`*.controller.js`** - Lógica de negocio y controladores
- **`*.model.js`** - Esquemas y modelos de datos (Mongoose)
- **`*.routes.js`** - Definición de rutas y endpoints

## 📡 Módulos y Endpoints

### URL Base
```
http://localhost:3001/gestionRestaurantes/v1
```

### 👥 Usuarios
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/usuarios` | Listar todos los usuarios |
| POST | `/usuarios` | Crear nuevo usuario |
| GET | `/usuarios/:id` | Obtener usuario por ID |
| PUT | `/usuarios/:id` | Actualizar usuario |
| DELETE | `/usuarios/:id` | Eliminar usuario |

### 👨‍💼 Empleados
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/empleados` | Listar todos los empleados |
| POST | `/empleados` | Crear nuevo empleado |
| GET | `/empleados/:id` | Obtener empleado por ID |
| PUT | `/empleados/:id` | Actualizar empleado |
| DELETE | `/empleados/:id` | Eliminar empleado |

### 🏢 Proveedores
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/proveedores` | Listar todos los proveedores |
| POST | `/proveedores` | Crear nuevo proveedor |
| GET | `/proveedores/:id` | Obtener proveedor por ID |
| PUT | `/proveedores/:id` | Actualizar proveedor |
| DELETE | `/proveedores/:id` | Eliminar proveedor |

### 🍽️ Platillos
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/platillos` | Listar todos los platillos |
| POST | `/platillos` | Crear nuevo platillo |
| GET | `/platillos/:id` | Obtener platillo por ID |
| PUT | `/platillos/:id` | Actualizar platillo |
| DELETE | `/platillos/:id` | Eliminar platillo |

### 📋 Pedidos
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/pedidos` | Listar todos los pedidos |
| POST | `/pedidos` | Crear nuevo pedido |
| GET | `/pedidos/:id` | Obtener pedido por ID |
| PUT | `/pedidos/:id` | Actualizar pedido |
| DELETE | `/pedidos/:id` | Eliminar pedido |

### 📅 Reservaciones
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/reservaciones` | Listar todas las reservaciones |
| POST | `/reservaciones` | Crear nueva reservación |
| GET | `/reservaciones/:id` | Obtener reservación por ID |
| PUT | `/reservaciones/:id` | Actualizar reservación |
| DELETE | `/reservaciones/:id` | Eliminar reservación |

### 💰 Ventas
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/ventas` | Listar todas las ventas |
| POST | `/ventas` | Registrar nueva venta |
| GET | `/ventas/:id` | Obtener venta por ID |

### ❤️ Health Check
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/health` | Verificar estado del servidor |

**Respuesta:**
```json
{
  "status": "ok",
  "service": "Gestion de restaurantes",
  "version": "1.0.0"
}
```

## 🔒 Seguridad

### CORS (Cross-Origin Resource Sharing)
La aplicación está configurada para:
- ✅ Aceptar solicitudes desde cualquier origen
- ✅ Permitir credenciales
- ✅ Métodos permitidos: GET, POST, PUT, DELETE
- ✅ Headers permitidos: Content-Type, Authorization

### Middleware de Seguridad
- **Helmet** - Protege la aplicación HTTP con headers de seguridad
- **Validadores** - Cada módulo incluye validación de datos
- **Limitador de solicitudes** - Control de rate limiting

## ✅ Validación de Datos

Cada módulo incluye un validador personalizado para garantizar la integridad de los datos:

- **empleados-validator.js** - Validación de datos de empleados
- **usuarios-validator.js** - Validación de datos de usuarios
- **pedidos-validator.js** - Validación de datos de pedidos
- **platillos-validators.js** - Validación de datos de platillos
- **proveedores-validators.js** - Validación de datos de proveedores
- **ventas-validators.js** - Validación de datos de ventas

## 📊 Logging

La aplicación utiliza **Morgan** para registrar todas las solicitudes HTTP. Los logs se muestran en la consola durante el desarrollo con el formato `dev`.

## 🐛 Manejo de Errores

El middleware `handle-error.js` centraliza el manejo de errores y proporciona respuestas consistentes.

## 📝 Variables de Entorno

| Variable | Descripción | Valor Default |
|----------|-------------|----------------|
| PORT | Puerto del servidor | 3001 |
| NODE_ENV | Ambiente de ejecución | development |
| URI_MONGODB | Conexión a MongoDB | mongodb://localhost:27017/gestion-restaurantes |

## 🚦 Estados HTTP Esperados

- **200 OK** - Solicitud exitosa
- **201 Created** - Recurso creado exitosamente
- **400 Bad Request** - Datos inválidos o incompletos
- **404 Not Found** - Recurso no encontrado
- **500 Internal Server Error** - Error del servidor

## 📚 Ejemplo de Solicitud

### Crear un usuario:
```bash
curl -X POST http://localhost:3001/gestionRestaurantes/v1/usuarios \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Juan Pérez",
    "email": "juan@example.com",
    "telefono": "1234567890"
  }'
```

### Obtener todos los usuarios:
```bash
curl -X GET http://localhost:3001/gestionRestaurantes/v1/usuarios
```

## 🔄 Ciclo de Vida de una Solicitud

1. La solicitud llega al servidor Express
2. Se aplican los middlewares (CORS, Morgan, body parser)
3. Se validan los datos según el módulo
4. El controlador procesa la lógica de negocio
5. El modelo interactúa con la base de datos
6. Se retorna la respuesta al cliente


## 📄 Licencia

Este proyecto está bajo la licencia especificada en el archivo LICENSE.

---

**Versión:** 1.0.0  
**Última actualización:** 2026  