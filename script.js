document.addEventListener('DOMContentLoaded', () => {
    const data = { 
        "brand":{
            "name": "Quad Oujda",
             "logo": "assets/quad_logo.png",
          },
        "home_section":{
            "title": "Libérez Votre Esprit d'Aventure",  
            "cover":"https://images.unsplash.com/photo-1489731254138-5401fb834d9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, 
        "product_section":{
            "title": "Nos Quads",
            "desc": "Découvrez notre sélection de quads tout-terrain haut de gamme, prêts à vous emmener dans des aventures inoubliables dans la nature sauvage.",
            "products":[
                {
                    "title": "Card 1",
                    "image": "assets/quad1.jpg", 
                },
                {
                    "title": "Card 1",
                    "image": "assets/quad2.jpg", 
                },
                {
                    "title": "Card 1",
                    "image": "assets/quad_cover_2.jpg", 
                },
                
                {
                    "title": "Card 1",
                    "image": "assets/quad3.jpg", 
                },
                {
                    "title": "Card 1",
                    "image": "assets/quad4.jpg", 
                },{
                    "title": "Card 1",
                    "image": "assets/quad55.jpg", 
                },
                {
                    "title": "Card 1",
                    "image": "assets/quad8.jpg", 
                },
                {
                    "title": "Card 1",
                    "image": "assets/quad5.jpg", 
                },
                {
                    "title": "Card 1",
                    "image": "assets/quad7.jpg", 
                },
                {
                    "title": "Card 1",
                    "image": "assets/quad_cover_4.jpg", 
                },
                {
                    "title": "Card 1",
                    "image": "assets/quad6.jpg", 
                },
                {
                    "title": "Card 1",
                    "image": "assets/quad9.jpg", 
                },
            ]
        }, 
        "memory_section":{
            "title": "Aventures en Quad",
            "desc": "Vivez une aventure épique en quad avec tes meilleurs amis.",
            "memories":[
                {
                    "title": "Card 1",
                    "image": "assets/turn1.jpg", 
                },
                {
                    "title": "Card 1",
                    "image": "assets/turn2.jpg", 
                },
                {
                    "title": "Card 1",
                    "image": "assets/turn3.jpg", 
                }, 
                {
                    "title": "Card 1",
                    "image": "assets/turn4.jpg", 
                },
                {
                    "title": "Card 1",
                    "image": "assets/turn5.jpg", 
                },
                {
                    "title": "Card 1",
                    "image": "assets/turn6.jpg", 
                }, 
            ]
        }, 
        "about_section":{
            "title": "À Propos de Nous",
            "desc": "Bienvenue chez Quad Aventure! Nous sommes passionnés par l'aventure et dédiés à offrir des expériences inoubliables à nos clients. Que vous soyez un novice à la recherche de sensations fortes ou un expert du tout-terrain, nos quads de haute qualité et notre service exceptionnel vous garantiront une journée remplie d'excitation et de découvertes. Rejoignez-nous pour explorer des paysages époustouflants et créer des souvenirs impérissables. La sécurité, le plaisir et l'aventure sont au cœur de notre mission. Venez vivre l'aventure avec Quad Aventure!",
        },
        "location_section":{
            "title": "Notre Emplacement",
            "desc": "Retrouvez-nous au cœur de paysages naturels époustouflants. Utilisez notre carte interactive pour nous localiser facilement et planifier votre aventure en quad.",
            "mapUrl" :"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d839.5921448054809!2d-1.8686125941879523!3d34.739679721944086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDQ0JzIyLjciTiAxwrA1MicwNS4wIlc!5e0!3m2!1sfr!2sma!4v1718993023622!5m2!1sfr!2sma" ,
        },
        "contact_section":{
            "title": "Contactez-Nous",
            "desc": "Nous sommes ici pour répondre à toutes vos questions. Contactez-nous pour plus d'informations sur nos services de location de quads.",
            "contacts":[
                {
                    "name": "Facebook", 
                    "link": "https://www.facebook.com/Cristiano/",
                    "class":"sc-facebook",
                    "icon":"fab fa-facebook-f"
                },
                {
                    "name": "Instagram",
                    "link": "https://www.instagram.com/quad.oujda/",
                    "class":"sc-instagram",
                    "icon":"fab fa-instagram"
                },
                {
                    "name": "snapchat", 
                    "link": "https://snapchat.com/t/kEshJ02i",
                    "class":"sc-snapshat",
                    "icon":"fab fa-snapchat-ghost"
                },
                {
                    "name": "gmail",
                    "link": "mailto:quadoujda@gmail.com",
                    "class":"sc-gmail",
                    "icon":"fas fa-envelope"
                },
                 {
                    "name": "tiktok",
                    "link": "https://www.tiktok.com/@quad.oujda",
                    "class":"sc-tiktok",
                    "icon":"fab fa-tiktok"
                },
                {
                    "name": "whatsapp",
                    "link": "https://wa.me/+212627272318?text=Hello%20there!",
                    "class":"sc-whatsapp",
                    "icon":"fab fa-whatsapp"
                }
            ]
        },  
    };

    //-------------------------------------------------------------------------------------------------//

    // Home Section
    document.querySelector('.logo').src = data.brand.logo; 
    // document.getElementById('home').style.backgroundImage =`url(${data.home_section.cover})`;
    document.getElementById('home_img').src =data.home_section.cover; 
    document.getElementById('home-section-title').textContent = data.home_section.title;

    //-------------------------------------------------------------------------------------------------//

    // Product Section
    document.getElementById('product-section-title').textContent = data.product_section.title;
    document.getElementById('product-section-desc').textContent = data.product_section.desc;

    const productsGrid = document.getElementById('grid-container');
    data.product_section.products.forEach(pr => {
        const card = document.createElement('img');
        card.classList.add('product-card');
        card.src = pr.image;
        card.alt = "Quad" ;
        card.loading = "lazy" ;
        productsGrid.appendChild(card);
    });
     
    //-------------------------------------------------------------------------------------------------//
    
    // Memory Section
    document.getElementById('memory-section-title').textContent = data.memory_section.title;
    document.getElementById('memory-section-desc').textContent = data.memory_section.desc;

    const memoriesGrid = document.getElementById('memory-grid');
    data.memory_section.memories.forEach(pr => {
          const card = document.createElement('img');
        card.classList.add('product-card');
        card.src = pr.image;
        card.alt = "Quad" ;
        card.loading = "lazy" ;  
        memoriesGrid.appendChild(card);
    });
  
 //-------------------------------------------------------------------------------------------------//

    // About Section
    document.getElementById('about-section-title').textContent = data.about_section.title;
    document.getElementById('about-section-desc').textContent = data.about_section.desc;

    //-------------------------------------------------------------------------------------------------//

    // About Section
    document.getElementById('location-section-title').textContent = data.location_section.title;
    document.getElementById('location-section-desc').textContent = data.location_section.desc;
    document.getElementById('location-section-map').src = data.location_section.mapUrl;

    //-------------------------------------------------------------------------------------------------//

    // Contact Section
    document.getElementById('contact-section-title').textContent = data.contact_section.title;
    document.getElementById('contact-section-desc').textContent = data.contact_section.desc;

    const contactGrid = document.getElementById('contact-grid');
    data.contact_section.contacts.forEach(cn => {
        const card = document.createElement('a');
        card.classList.add('social-item');
        card.classList.add(cn.class);
        card.target ="_blank"  ;
        card.href=cn.link;
        card.innerText = cn.class;
        card.innerHTML = `<i class="${cn.icon}"></i>`;
        contactGrid.appendChild(card);
    });

    //-------------------------------------------------------------------------------------------------//

    // Footer Section 
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright-section-text').textContent = `© ${currentYear} ${data.brand.name}. All rights reserved.`;
     

     
});
