# 💰 Comparador de Criptomonedas

Comparador de Criptomonedas es una aplicación web que permite consultar, visualizar y comparar precios de distintas criptomonedas en tiempo real.

Proyecto Full Stack: Backend Django + Frontend React.

---

## 🧩 Descripción General

La plataforma permite:

✅ Visualizar tabla de criptomonedas con datos actualizados  
✅ Consultar detalles de cada criptomoneda  
✅ Visualizar gráficas interactivas de precios  
✅ Filtrar y buscar criptomonedas  

---

## 🚀 Tecnologías utilizadas

**Backend:**
- Django
- Django REST Framework
- requests
- Python 3

**Frontend:**
- React
- Vite
- Axios
- Chart.js
- react-chartjs-2

---

## 📂 Estructura del Proyecto

```
comparador_criptos/
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   ├── backend/ (config Django)
│   └── app/ (lógica de la API)
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   └── src/
```

---

## ⚙️ Configuración y ejecución

### 1️⃣ Requisitos previos

- Python >=3.8
- Node.js >=14
- MySQL o SQLite (según settings)
- Git

---

### 2️⃣ Clonar el repositorio

```bash
git clone https://github.com/tu_usuario/tu_repositorio.git
cd tu_repositorio/comparador_criptos
```

---

### 3️⃣ Backend - Instalación de dependencias

```bash
cd backend
python -m venv env
source env/bin/activate  # Linux/Mac
env\Scripts\activate     # Windows
pip install -r requirements.txt
```

---

### 4️⃣ Configuración Django

Edita el archivo `backend/settings.py`:

- Configura la base de datos (por defecto usa SQLite)
- Asegúrate de tener `CORS_ALLOW_ALL_ORIGINS=True` si el frontend corre aparte.

Aplica migraciones:

```bash
python manage.py migrate
```

---

### 5️⃣ Cargar datos iniciales (opcional)

Si tienes scripts de carga, ejecútalos:

```bash
python manage.py loaddata datos_iniciales.json
```

---

### 6️⃣ Ejecutar servidor backend

```bash
python manage.py runserver
```
Por defecto en:

```
http://127.0.0.1:8000
```

---

### 7️⃣ Frontend - Instalación y ejecución

En otra terminal:

```bash
cd frontend
npm install
npm start
```
Frontend disponible en:

```
http://localhost:3000
```

---

## ✨ Endpoints principales del Backend

- `GET /api/criptos/` – Lista criptomonedas
- `GET /api/criptos/<id>/` – Detalle de criptomoneda

---

## 🛡️ Buenas prácticas de seguridad

✅ No subas `.env` al repositorio  
✅ Usa `DEBUG=False` en producción  
✅ Protege tu clave secreta Django  

---

## 📄 Licencia

Uso académico y personal.

---

## 🙌 Créditos

Desarrollado por tu equipo o tu nombre.
