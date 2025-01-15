const translations = {
  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_products: "Portefeuille",
    nav_contact: "Contact",
    hero_title: "🌿 Découvrez le Secret d’un Bien-être Naturel 🌟",
    hero_paragraph: "Dites adieu aux inconforts du quotidien avec nos produits 100 % naturels.",
    hero_btn: "Commencer",
    about_title: "Qui sommes-nous ?",
    about_paragraph: `"Chez Bio Nature, nous croyons au pouvoir de la nature pour améliorer votre quotidien. Notre produit phare, Belles de Râhât, est spécialement conçu pour :
    Apaiser le côlon grâce à ses propriétés naturelles anti-irritantes.
    Réduire les gaz et soulager les sensations d'inconfort.
    Vous offrir une solution 100 % naturelle, sans produits chimiques, adaptée à toute la famille.
    Avec des ingrédients soigneusement sélectionnés, nous vous garantissons efficacité, sécurité et sérénité."`,
    portfolio_title: "Portfolio",
    portfolio_paragraph: "Voici quelques photos de nos produits.",
    contact_title: "Contact",
    contact_paragraph: "Pour commander, contactez-nous.",
    footer_about: "© Bio Nature, Tous droits réservés."
  },
  tn: {
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_products: "المنتجات",
    nav_contact: "اتصل بنا",
    hero_title: "🌿 اكتشف سر الراحة الطبيعية 🌟",
    hero_paragraph: "% قل وداعًا للإزعاجات اليومية مع منتجاتنا الطبيعية 100",
    hero_btn: "ابدأ الآن",
    about_title: "من نحن؟",
    about_paragraph: `في بيو ناتير نؤمن بقوة الطبيعة لتحسين حياتكم اليومية. منتجنا الرئيسي، "بيل دي راهات"، مصمم خصيصًا ل 
                                    تهدئة القولون بفضل خصائصه الطبيعية المضادة للتهابات.
                                    تقليل الغازات وتخفيف مشاعر الانزعاج.
                                     تقديم حل طبيعي 100٪، بدون مواد كيميائية، مناسب لجميع أفراد الأسرة مع مكونات مختارة بعناية، نضمن لكم الفعالية والأمان والراحة`,
    portfolio_title: "معرض الصور",
    portfolio_paragraph: "بعض الصور لمنتجاتنا.",
    contact_title: "اتصل بنا",
    contact_paragraph: "للطلب، يرجى الاتصال بنا.",
    footer_about: "© بيو ناتير، جميع الحقوق محفوظة."
  }
};

function translateContent(lang) {
  const selectedLanguage = translations[lang];

  document.getElementById("nav-home").textContent = selectedLanguage.nav_home;
  document.getElementById("nav-about").textContent = selectedLanguage.nav_about;
  document.getElementById("nav-products").textContent = selectedLanguage.nav_products;
  document.getElementById("nav-contact").textContent = selectedLanguage.nav_contact;

  document.getElementById("hero-title").textContent = selectedLanguage.hero_title;
  document.getElementById("hero-paragraph").textContent = selectedLanguage.hero_paragraph;
  document.getElementById("hero-btn").textContent = selectedLanguage.hero_btn;

  document.getElementById("about-title").textContent = selectedLanguage.about_title;
  document.getElementById("about-paragraph").textContent = selectedLanguage.about_paragraph;

  document.getElementById("portfolio-title").textContent = selectedLanguage.portfolio_title;
  document.getElementById("portfolio-paragraph").textContent = selectedLanguage.portfolio_paragraph;

  document.getElementById("contact-title").textContent = selectedLanguage.contact_title;
  document.getElementById("contact-paragraph").textContent = selectedLanguage.contact_paragraph;

  document.getElementById("footer-about").textContent = selectedLanguage.footer_about;
}

// Appel de la fonction pour définir la langue par défaut lors du chargement de la page
window.onload = () => translateContent('tn');
