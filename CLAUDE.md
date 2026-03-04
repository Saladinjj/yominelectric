# CLAUDE.md — Yomin Electric International Trade Website

## Project Overview

Multi-page international trade website for Yomin Electric, an electrical products export company based in Zhejiang, China.

## Architecture

- **Frontend**: Static HTML + CSS + Vanilla JavaScript (no build tools)
- **Backend**: Node.js + Express (optional — frontend works standalone with data/products.json)
- **Data**: JSON file at `data/products.json`

## File Structure

```
/
├── index.html              # Homepage (DO NOT MODIFY)
├── products.html           # Product categories + grid
├── product-details.html    # Individual product page (URL: ?id=001)
├── about.html              # Company info, history, certifications
├── contact.html            # Contact form + info
│
├── assets/
│   ├── css/
│   │   ├── main.css        # Shared: nav, footer, reveal, typography
│   │   ├── products.css    # Products page styles
│   │   ├── product-details.css # Product detail page styles
│   │   ├── about.css       # About page styles
│   │   └── contact.css     # Contact page + form styles
│   │
│   └── js/
│       ├── main.js         # Shared: cursor, nav, reveal, language
│       ├── api.js          # API layer (fetch wrapper)
│       ├── products.js     # Product listing + filter logic
│       └── contact.js      # Form validation + submission
│
├── data/
│   └── products.json       # Product catalog data
│
└── backend/
    ├── server.js           # Express server entry point
    ├── config/config.js    # Environment config
    ├── routes/
    │   ├── products.js     # GET /api/products, GET /api/products/:id
    │   └── contact.js      # POST /api/contact, POST /api/quote
    ├── controllers/
    │   ├── productController.js
    │   └── contactController.js
    └── models/
        ├── productModel.js
        └── contactModel.js
```

## Running the Project

### Frontend Only (no backend needed)
Just open `index.html` in a browser or serve with any static file server:
```bash
npx serve .
# or
python3 -m http.server 8080
```

### With Backend API
```bash
cd /path/to/project
npm install
node backend/server.js
```
Then open `http://localhost:3000`

## Backend Setup

Install dependencies:
```bash
npm init -y
npm install express cors dotenv
npm install nodemailer  # optional, for email forwarding
```

## Environment Variables

Create a `.env` file in project root:
```
PORT=3000
NODE_ENV=development
CORS_ORIGIN=*

# Email config (optional — for contact form email delivery)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=sales@yominelectric.com
EMAIL_FROM=noreply@yominelectric.com
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | List all products |
| GET | /api/products?category=energy-meter | Filter by category |
| GET | /api/products/:id | Get single product |
| POST | /api/contact | Submit contact form |
| POST | /api/quote | Submit quote request |
| GET | /api/health | Health check |

## Design System

The site uses a consistent dark-mode design system:

| Variable | Value | Purpose |
|----------|-------|---------|
| `--bg` | `#0d0d0d` | Primary background |
| `--bgc` | `#181818` | Card background |
| `--tx` | `#f0ede8` | Primary text |
| `--mt` | `#888` | Muted text |
| `--ac` | `#c8a96e` | Gold accent |
| `--sf` | DM Serif Display | Heading font |
| `--ss` | DM Sans | Body font |

## Adding Products

Edit `data/products.json`. Each product follows this structure:

```json
{
  "id": "013",
  "name": "Product Name",
  "category": "Energy Meter",
  "category_id": "energy-meter",
  "voltage": "220V",
  "current": "5(60)A",
  "accuracy": "Class 1",
  "frequency": "50/60 Hz",
  "certification": "CE",
  "description": "Product description…",
  "applications": ["Application 1", "Application 2"],
  "image": "/assets/images/products/product-013.jpg",
  "images": [],
  "datasheet": "/assets/datasheets/product-013.pdf"
}
```

## Multilingual Support

The site supports English, French, and Arabic (with RTL layout).
Translation strings are in `assets/js/main.js` in the `T` object.

To add a new language:
1. Add the language code to the `T` object
2. Add a language button in nav/mobile menu with `data-lang="xx"`

## Git Branches

- `main` — Production-ready code
- `feature/products-page` — Products listing page
- `feature/product-details-page` — Product detail template
- `feature/about-page` — Company information page
- `feature/contact-page` — Contact form page
- `feature/backend-api` — Node.js API server
