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
    portfolio_item_1: "Prix : 27 TND",
    portfolio_item_2: "Prix : 27 TND",
    portfolio_item_3: "Prix : 27 TND",
    contact_title: "Contact",
    contact_paragraph: "Pour commander, contactez-nous.",
    contact_label_name: "Nom & Prénom",
    contact_label_email: "Numéro de téléphone",
    contact_label_subject: "Adresse",
    contact_button: "Envoyer un message",
    footer_about: "© Bio Nature, Tous droits réservés.",
    loading_message: "Chargement",
    error_message: "Une erreur est survenue. Veuillez réessayer.",
    success_message: "Votre message est bien reçu!",
    info_address_title: "Adresse",
    info_address_detail: "Tunis, Tunisia",
    info_phone_title: "Appelez-nous",
    info_phone_detail: "+216 50 024 960"
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
    portfolio_item_1: "السعر: 27 دينار ",
    portfolio_item_2: "السعر: 27 دينار ",
    portfolio_item_3: "السعر: 27 دينار ",
    contact_title: "اتصل بنا",
    contact_paragraph: "للطلب، يرجى الاتصال بنا.",
    contact_label_name: "الاسم و اللقب",
    contact_label_email: "رقم الهاتف",
    contact_label_subject: "العنوان",
    contact_button: "إرسال الرسالة",
    footer_about: "© بيو ناتير، جميع الحقوق محفوظة.",
    loading_message: "جار التحميل",
    error_message: "حدث خطأ. يرجى المحاولة مرة أخرى.",
    success_message: "تم استلام رسالتك بنجاح!",
    info_address_title: "العنوان",
    info_address_detail: "تونس، تونس",
    info_phone_title: "اتصل بنا",
    info_phone_detail: "+216 50 024 960"
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
  document.querySelectorAll(".portfolio-info")[0].textContent = selectedLanguage.portfolio_item_1;
  document.querySelectorAll(".portfolio-info")[1].textContent = selectedLanguage.portfolio_item_2;
  document.querySelectorAll(".portfolio-info")[2].textContent = selectedLanguage.portfolio_item_3;

  document.getElementById("contact-title").textContent = selectedLanguage.contact_title;
  document.getElementById("contact-paragraph").textContent = selectedLanguage.contact_paragraph;
  document.querySelector("label[for='name-field']").textContent = selectedLanguage.contact_label_name;
  document.querySelector("label[for='email-field']").textContent = selectedLanguage.contact_label_email;
  document.querySelector("label[for='subject-field']").textContent = selectedLanguage.contact_label_subject;
  document.querySelector("button[type='submit']").textContent = selectedLanguage.contact_button;
  // Contact Feedback Messages
  document.querySelector(".loading").textContent = selectedLanguage.loading_message;
  document.querySelector(".error-message").textContent = selectedLanguage.error_message;
  document.querySelector(".sent-message").textContent = selectedLanguage.success_message;

  // Info Section
  document.querySelector(".info-item .bi-geo-alt + div h3").textContent = selectedLanguage.info_address_title;
  document.querySelector(".info-item .bi-geo-alt + div p").textContent = selectedLanguage.info_address_detail;
  document.querySelector(".info-item .bi-telephone + div h3").textContent = selectedLanguage.info_phone_title;
  document.querySelector(".info-item .bi-telephone + div p").textContent = selectedLanguage.info_phone_detail;

  document.getElementById("footer-about").textContent = selectedLanguage.footer_about;
}

// Appel de la fonction pour définir la langue par défaut lors du chargement de la page
window.onload = () => translateContent('tn');
