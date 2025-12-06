<p align="center">
  <img src="https://img.shields.io/badge/Real%20Estate-Luxury%20Homes-0A1628?style=for-the-badge&labelColor=D4AF37" alt="Real Estate"/>
</p>

<h1 align="center">🏠 LuxeHomes Real Estate Platform</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind"/>
  <img src="https://img.shields.io/badge/Vite-5.0-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License"/>
</p>

<p align="center">
  A modern, luxury real estate platform designed to showcase premium properties with an elegant navy and gold aesthetic.
</p>

---

## 📋 Table of Contents

| Section | Description |
|---------|-------------|
| [Overview](#-overview) | Project introduction and goals |
| [Tech Stack](#-tech-stack) | Technologies and frameworks used |
| [Features](#-features) | Key features and functionalities |
| [Site Architecture](#-site-architecture) | Flowchart of website structure |
| [User Journey](#-user-journey) | How users navigate the platform |
| [Pages](#-pages) | Detailed page descriptions |
| [Color Palette](#-color-palette) | Design system colors |
| [Getting Started](#-getting-started) | Installation and setup |

---

## 🎯 Overview

**LuxeHomes** is a premium real estate website designed to connect luxury property seekers with their dream homes. The platform features:

- 🏡 **Property Listings** - Browse curated luxury properties
- 👥 **Expert Agents** - Connect with experienced real estate professionals
- 💰 **Transparent Pricing** - Clear service tier options
- 📞 **Easy Contact** - Streamlined inquiry process

---

## 🛠 Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black) | UI Framework | 18.3.1 |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | Type Safety | 5.0+ |
| ![Tailwind](https://img.shields.io/badge/-Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) | Styling | 3.4+ |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white) | Build Tool | 5.0+ |
| ![React Router](https://img.shields.io/badge/-React%20Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white) | Navigation | 6.30+ |
| ![Shadcn/ui](https://img.shields.io/badge/-Shadcn%2Fui-000000?style=flat-square&logo=shadcnui&logoColor=white) | Components | Latest |
| ![Lucide](https://img.shields.io/badge/-Lucide-F56565?style=flat-square) | Icons | Latest |

---

## ✨ Features

```
┌─────────────────────────────────────────────────────────────────┐
│                    LUXEHOMES FEATURES                           │
├─────────────────────────────────────────────────────────────────┤
│  🏠 Property Browsing    │  Search and filter luxury listings  │
│  📸 Image Galleries      │  High-quality property photography  │
│  👤 Agent Profiles       │  Connect with expert professionals  │
│  💳 Pricing Plans        │  Flexible service tier options      │
│  📧 Contact Forms        │  Easy inquiry submission            │
│  📱 Responsive Design    │  Works on all devices               │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🗺 Site Architecture

```mermaid
graph TD
    A[🏠 Home Page] --> B[🏘 Properties]
    A --> C[👥 Agents]
    A --> D[💰 Pricing]
    A --> E[📞 Contact]
    
    B --> F[🏡 Property Detail]
    F --> G[📧 Contact Agent]
    
    C --> H[👤 Agent Profile]
    H --> G
    
    D --> I[📋 Select Plan]
    I --> E
    
    style A fill:#D4AF37,stroke:#0A1628,color:#0A1628
    style B fill:#1a2a4a,stroke:#D4AF37,color:#fff
    style C fill:#1a2a4a,stroke:#D4AF37,color:#fff
    style D fill:#1a2a4a,stroke:#D4AF37,color:#fff
    style E fill:#1a2a4a,stroke:#D4AF37,color:#fff
    style F fill:#0A1628,stroke:#D4AF37,color:#fff
    style G fill:#D4AF37,stroke:#0A1628,color:#0A1628
    style H fill:#0A1628,stroke:#D4AF37,color:#fff
    style I fill:#0A1628,stroke:#D4AF37,color:#fff
```

---

## 🚶 User Journey

```mermaid
flowchart LR
    subgraph Discovery
        A[Visit Website] --> B[Browse Properties]
    end
    
    subgraph Exploration
        B --> C{Interested?}
        C -->|Yes| D[View Details]
        C -->|No| B
    end
    
    subgraph Engagement
        D --> E[Contact Agent]
        E --> F[Schedule Viewing]
    end
    
    subgraph Conversion
        F --> G[Property Tour]
        G --> H[Make Offer]
    end
    
    style A fill:#D4AF37,color:#0A1628
    style H fill:#D4AF37,color:#0A1628
```

---

## 📄 Pages

### Page Structure Overview

| Page | Route | Purpose | Key Components |
|------|-------|---------|----------------|
| 🏠 **Home** | `/` | Landing page with hero & featured properties | Hero, PropertyCards, WhyChooseUs |
| 🏘 **Properties** | `/properties` | Full property catalog with filters | SearchFilters, PropertyGrid |
| 🏡 **Property Detail** | `/property/:id` | Individual property information | Gallery, Details, ContactAgent |
| 👥 **Agents** | `/agents` | Team of real estate professionals | AgentCards, ContactButtons |
| 💰 **Pricing** | `/pricing` | Service tier comparison | PricingTable, PlanCards |
| 📞 **Contact** | `/contact` | Inquiry form and location | ContactForm, Map, Info |

### Detailed Page Descriptions

<details>
<summary><b>🏠 Home Page</b></summary>

| Section | Description |
|---------|-------------|
| **Navbar** | Logo + navigation links (Home, Properties, Agents, Pricing, Contact) |
| **Hero** | Large banner with headline and CTA button |
| **Featured Properties** | Grid of 6 property cards with images, titles, prices |
| **Why Choose Us** | 4 feature cards with icons highlighting benefits |
| **Footer** | Quick links, social icons, contact information |

</details>

<details>
<summary><b>🏘 Properties Page</b></summary>

| Section | Description |
|---------|-------------|
| **Search Filters** | Location, property type, price range, bedrooms |
| **Property Grid** | Responsive grid of all available properties |
| **Property Cards** | Image, title, price, location, "View Details" button |

</details>

<details>
<summary><b>🏡 Property Detail Page</b></summary>

| Section | Description |
|---------|-------------|
| **Banner Image** | Large hero image of the property |
| **Property Info** | Title, price, location, key features |
| **Description** | Detailed property description |
| **Image Gallery** | 4 additional property images |
| **Contact Agent** | Button to reach the listing agent |

</details>

---

## 🎨 Color Palette

| Color | Hex | HSL | Usage |
|-------|-----|-----|-------|
| ![#0A1628](https://via.placeholder.com/20/0A1628/0A1628?text=+) Navy | `#0A1628` | `220 60% 10%` | Primary background |
| ![#1a2a4a](https://via.placeholder.com/20/1a2a4a/1a2a4a?text=+) Navy Light | `#1a2a4a` | `220 50% 20%` | Secondary background |
| ![#D4AF37](https://via.placeholder.com/20/D4AF37/D4AF37?text=+) Gold | `#D4AF37` | `45 65% 52%` | Primary accent |
| ![#E8D5A3](https://via.placeholder.com/20/E8D5A3/E8D5A3?text=+) Gold Light | `#E8D5A3` | `45 55% 77%` | Secondary accent |
| ![#FFFFFF](https://via.placeholder.com/20/FFFFFF/FFFFFF?text=+) White | `#FFFFFF` | `0 0% 100%` | Text on dark |

---

## 🚀 Getting Started

### Prerequisites

```bash
# Required
Node.js >= 18.0.0
npm >= 9.0.0
```

### Installation

```bash
# 1. Clone the repository
git clone <YOUR_GIT_URL>

# 2. Navigate to project directory
cd <YOUR_PROJECT_NAME>

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── assets/              # Images and static assets
│   ├── hero-banner.jpg
│   ├── property-*.jpg
│   └── agent-*.jpg
├── components/          # Reusable components
│   ├── ui/              # Shadcn UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── PropertyCard.tsx
├── pages/               # Page components
│   ├── Index.tsx        # Home page
│   ├── Properties.tsx
│   ├── PropertyDetail.tsx
│   ├── Agents.tsx
│   ├── Pricing.tsx
│   └── Contact.tsx
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles & design tokens
```

---

## 📊 Component Hierarchy

```mermaid
graph TD
    App[App.tsx] --> Nav[Navbar]
    App --> Routes[React Router]
    App --> Footer[Footer]
    
    Routes --> Home[Index Page]
    Routes --> Props[Properties Page]
    Routes --> Detail[Property Detail]
    Routes --> Agents[Agents Page]
    Routes --> Pricing[Pricing Page]
    Routes --> Contact[Contact Page]
    
    Home --> Hero[Hero Section]
    Home --> Featured[Featured Properties]
    Home --> Why[Why Choose Us]
    
    Featured --> Card[PropertyCard]
    Props --> Card
    
    style App fill:#D4AF37,color:#0A1628
    style Card fill:#1a2a4a,color:#fff
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| 📱 Mobile | `< 640px` | Single column |
| 📱 Tablet SM | `640px+` | 2 columns |
| 💻 Tablet | `768px+` | 2-3 columns |
| 🖥 Desktop | `1024px+` | 3-4 columns |
| 🖥 Large | `1280px+` | Full layout |

---

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-Lovable-D4AF37?style=for-the-badge" alt="Made with Intelligence"/>
</p>
