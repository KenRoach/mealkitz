import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context
interface LanguageContextType {
  language: 'es' | 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

// Define translations
const translations: Record<string, Record<string, string>> = {
  es: {
    navHome: 'Inicio',
    navPOS: 'POS',
    navStore: 'Tienda',
    navDashboard: 'Panel',
    navLogin: 'Login',
    heroTitle: 'Mealkitz.io – Vende, Opera y Crece',
    heroSubtitle: 'Plataforma todo-en-uno de POS (online y físico), Tienda en Línea y Panel de control.',
    heroButton: 'Únete a la Lista de Espera',
    whatWeDoTitle: '¿Qué hacemos?',
    posTitle: 'POS',
    posSubtitle: 'Factura y cobra con links, QR, AMEX y Yappy desde tu dispositivo',
    onlineStoreTitle: 'Tienda en Línea',
    onlineStoreSubtitle: 'Comparte tus productos y recibe pedidos en tiempo real',
    dashboardTitle: 'Panel de Control',
    dashboardSubtitle: 'Visualiza ventas, KPIs e inventario con reportes fáciles',
    idealForTitle: 'Ideal para',
    idealForSubtitle: 'Ofrecemos POS (online y físico), Tienda en Línea y Dashboards',
    idealForItems: 'Cocina oculta|Panaderías artesanales|Food trucks|Cafeterías boutique|Sodas panameñas|Catering profesional|Keto products|Heladerías artesanales|Fondas caseras|Cevicherías|Artesanía (pulseras, aretes, collares)|Queserías artesanales|Microcervecerías artesanales|Jabones y cremas|Cosméticos artesanales|Suscripción gastronómica|Carrito de comida|Pop-up shop|Catering comida casera|Almuerzos saludables|Tienda en línea',
    advantagesTitle: 'Nuestras Ventajas Principales',
    advantagesItems: 'Recibe sugerencias automáticas de menú y precios sin esfuerzo.|Atención por WhatsApp 24/7, como si tuvieras un asistente disponible siempre.|Conecta con otras apps fácilmente gracias a nuestra API abierta.',
    howItWorksTitle: '¿Cómo Funciona?',
    howItWorksSteps: 'Regístrate y sube tu menú|Vende con POS o Tienda en Línea|Acepta pagos automáticos|Analiza métricas y escala tu negocio',
    roadmapTitle: 'Roadmap de Funcionalidades',
    roadmapItems: 'Delivery propio – reparto local integrado|IA para Menús y Precios – recomendaciones automáticas|Insights Predictivos – anticipa demanda y gestiona stock|Marketplace Interno – conecta con compradores|Red de Agentes Locales – expande tus ventas|Microservicios & API Abierta – personaliza módulos',
    contactTitle: 'Hablemos',
    contactSubtitle: 'Si eres emprendedor gastronómico, artesano o dueño de pequeño negocio, déjanos tu nombre, email y WhatsApp.',
    formError: 'Por favor, completa todos los campos.',
    formSuccess: '¡Gracias! Pronto te contactaremos.',
    formName: 'Nombre completo',
    formEmail: 'Correo electrónico',
    formWhatsapp: 'WhatsApp (p.ej. +50761234567)',
    formButton: '¡Quiero Registrarme!',
    footerSlogan: 'Plataforma integral para emprendedores gastronómicos, artesanos y dueños de pequeños negocios.',
    footerContact: 'Contacto',
    footerPoweredBy: '© Powered by Mealkitz'
  },
  en: {
    navHome: 'Home',
    navPOS: 'POS',
    navStore: 'Store',
    navDashboard: 'Dashboard',
    navLogin: 'Login',
    heroTitle: 'Mealkitz.io – Sell, Operate, and Grow',
    heroSubtitle: 'All-in-one platform with POS (online and physical), Online Store, and Dashboard.',
    heroButton: 'Join the Waitlist',
    whatWeDoTitle: 'What We Do',
    posTitle: 'POS',
    posSubtitle: 'Invoice and collect payments with links, QR, AMEX, and Yappy from your device',
    onlineStoreTitle: 'Online Store',
    onlineStoreSubtitle: 'Share your products and receive orders in real time',
    dashboardTitle: 'Dashboard',
    dashboardSubtitle: 'Visualize sales, KPIs, and inventory with easy-to-read reports',
    idealForTitle: 'Ideal for',
    idealForSubtitle: 'We offer POS (online and physical), Online Store, and Dashboards',
    idealForItems: 'Ghost Kitchens|Artisan Bakeries|Food Trucks|Boutique Coffee Shops|Local Eateries|Professional Catering|Keto Products|Artisan Ice Cream Shops|Homestyle Diners|Ceviche Bars|Handicrafts (bracelets, earrings, necklaces)|Artisan Cheese Shops|Craft Microbreweries|Soaps and Creams|Handmade Cosmetics|Gourmet Subscriptions|Food Carts|Pop-up Shops|Homestyle Catering|Healthy Lunches|Online Store',
    advantagesTitle: 'Our Main Advantages',
    advantagesItems: 'Receive automatic menu and pricing suggestions effortlessly.|24/7 WhatsApp support, as if you always have an assistant available.|Easily connect with other apps thanks to our open API.',
    howItWorksTitle: 'How It Works',
    howItWorksSteps: 'Sign up and upload your menu|Sell with POS or Online Store|Accept automatic payments|Analyze metrics and scale your business',
    roadmapTitle: 'Features Roadmap',
    roadmapItems: 'In-house Delivery – integrated local delivery|AI for Menus & Pricing – automatic recommendations|Predictive Insights – anticipate demand and manage stock|Internal Marketplace – connect with buyers|Local Agent Network – expand your sales|Microservices & Open API – customize modules',
    contactTitle: 'Let\'s Talk',
    contactSubtitle: 'If you are a food entrepreneur, artisan, or small business owner, leave us your name, email, and WhatsApp.',
    formError: 'Please fill out all fields.',
    formSuccess: 'Thank you! We will contact you soon.',
    formName: 'Full name',
    formEmail: 'Email address',
    formWhatsapp: 'WhatsApp (e.g., +50761234567)',
    formButton: 'I want to Register!',
    footerSlogan: 'Comprehensive platform for food entrepreneurs, artisans, and small business owners.',
    footerContact: 'Contact',
    footerPoweredBy: '© Powered by Mealkitz'
  }
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create a provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'es' ? 'en' : 'es'));
  };

  const t = (key: string): string => {
    // For array-like strings, split and return as is for mapping
    const translation = translations[language][key] || key;
    return translation;
  };

  const value = { language, toggleLanguage, t };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook for easy consumption
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 