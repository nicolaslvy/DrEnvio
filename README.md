 

# 🛍️ E-Commerce Productos + Precios Especiales

Este proyecto es una aplicación web full stack para gestionar productos y precios especiales, diseñada con una arquitectura limpia, moderna y sencilla. Utiliza **Node.js** con **Express** y **MongoDB** para el backend, y **React** con **TypeScript** y **TailwindCSS** para el frontend.

---

## 📚 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Scripts Útiles](#-scripts-útiles)
- [EndPoints API (Backend)](#-endpoints-api-backend)
- [Licencia](#-licencia)

---

## ✨ Características

### Productos
- Consultar productos y precios especiales segun usuario.
- Buscar producto por ID.
- visualizar productos a categorías, marcas y etiquetas.

### Precios Especiales
- CRUD completo de precios especiales (crear, consultar, editar y eliminar).
- Validación de existencia de la colección.
- Visualización diferenciada de precios especiales en el frontend.

### UI
- Interfaz moderna usando TailwindCSS.
- Visualización de productos y gestión sencilla.
- Navegación entre pantallas con React Router.

---

## 🛠️ Tecnologías

### Backend
- Node.js
- Express.js
- MongoDB (mongoose)
- Dotenv
- CORS
- Morgan

### Frontend
- React
- TypeScript
- TailwindCSS
- Axios
- React Router DOM

---

## 📁 Estructura del Proyecto

\`\`\`
ecommerce-app/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── index.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   ├── tailwind.config.js
│   └── package.json
\`\`\`

---

## ✅ Requisitos Previos

- Node.js v18+
- MongoDB Atlas o local
- npm o yarn

---

## ⚙️ Instalación

### 1. Clonar el repositorio

\`\`\`bash
git clone [https://github.com/tu-usuario/ecommerce-app.git](https://github.com/nicolaslvy/DrEnvio)
cd ecommerce-app
\`\`\`

---

### 2. Configurar el Backend

\`\`\`bash
cd backend
cp .env.example .env
# Edita .env con tu URL de MongoDB
npm install
npm run dev
\`\`\`

**Variables de entorno (\`.env\`)**

\`\`\`env
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce
\`\`\`

---

### 3. Configurar el Frontend

\`\`\`bash
cd ../frontend
npm install
npm run dev
\`\`\`

---

## 🔧 Scripts Útiles

### Backend

\`\`\`bash
npm run dev        # Inicia el backend en modo desarrollo
\`\`\`

### Frontend

\`\`\`bash
npm run dev        # Inicia la app de React
\`\`\`

---

## 📡 EndPoints API (Backend)

### Productos
- `GET /api/products`
- `GET /api/products/:id`


### Precios Especiales
- `GET /api/special-prices`
- `GET /api/special-prices/:id`
- `POST /api/special-prices`
- `PUT /api/special-prices/:id`
- `DELETE /api/special-prices/:id`

---

## 🪪 Licencia

MIT © NicolasOrtiz 
