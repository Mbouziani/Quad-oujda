document.addEventListener('DOMContentLoaded', () => {
    const data = { 
        "brand":{
            "name": "Quad Oujda",
            "logo": "assets/quad_logo.png",
        },
        "home_section":{
            "title": "Libérez Votre Esprit d'Aventure", 
            "cover": "assets/quad_cover_1.jpg",
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
            ]
        }, 
        "about_section":{
            "title": "À Propos de Nous",
            "desc": "Bienvenue chez Quad Aventure! Nous sommes passionnés par l'aventure et dédiés à offrir des expériences inoubliables à nos clients. Que vous soyez un novice à la recherche de sensations fortes ou un expert du tout-terrain, nos quads de haute qualité et notre service exceptionnel vous garantiront une journée remplie d'excitation et de découvertes. Rejoignez-nous pour explorer des paysages époustouflants et créer des souvenirs impérissables. La sécurité, le plaisir et l'aventure sont au cœur de notre mission. Venez vivre l'aventure avec Quad Aventure!",
        },
        "location_section":{
            "title": "Notre Emplacement",
            "desc": "Retrouvez-nous au cœur de paysages naturels époustouflants. Utilisez notre carte interactive pour nous localiser facilement et planifier votre aventure en quad.",
            "mapUrl" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13120.176117015973!2d-1.9001560000000002!3d34.7040694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd786371fbcf7fe5%3A0x792d53376f0095ac!2sPharmacie%20Zone%20Industrielle!5e0!3m2!1sfr!2sma!4v1717415639671!5m2!1sfr!2sma",
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
                    "link": "mailto:bouzimoha150@gmail.com",
                    "class":"sc-instagram",
                    "icon":"fab fa-instagram"
                },
                {
                    "name": "snapchat", 
                    "link": "https://www.facebook.com/Cristiano/",
                    "class":"sc-snapshat",
                    "icon":"fab fa-snapchat-ghost"
                },
                {
                    "name": "gmail",
                    "link": "mailto:bouzimoha150@gmail.com",
                    "class":"sc-gmail",
                    "icon":"fas fa-envelope"
                },
                {
                    "name": "whatsapp",
                    "link": "https://www.Instagram.com/Cristiano/",
                    "class":"sc-whatsapp",
                    "icon":"fab fa-whatsapp"
                }
            ]
        },  
    };

    //-------------------------------------------------------------------------------------------------//

    // Home Section
    document.querySelector('.logo').style.backgroundImage = `url(${data.brand.logo})`; 
    document.getElementById('home').style.backgroundImage =`url(${data.home_section.cover})`; 
    document.getElementById('home-section-title').textContent = data.home_section.title;

    //-------------------------------------------------------------------------------------------------//

    // Product Section
    document.getElementById('product-section-title').textContent = data.product_section.title;
    document.getElementById('product-section-desc').textContent = data.product_section.desc;

    const productsGrid = document.getElementById('grid-container');
    data.product_section.products.forEach(pr => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.style.backgroundImage = `url(${pr.image})`;  
       // card.innerHTML = `<h3>${pr.title}</h3>`;
        productsGrid.appendChild(card);
    });
     
    //-------------------------------------------------------------------------------------------------//
    
    // Memory Section
    document.getElementById('memory-section-title').textContent = data.memory_section.title;
    document.getElementById('memory-section-desc').textContent = data.memory_section.desc;

    const memoriesGrid = document.getElementById('memory-grid');
    data.memory_section.memories.forEach(pr => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.style.backgroundImage = `url(${pr.image})`;   
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
        card.innerHTML = `<i class="${cn.icon}"></i>`;
        contactGrid.appendChild(card);
    });

    //-------------------------------------------------------------------------------------------------//

    // Footer Section 
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright-section-text').textContent = `© ${currentYear} ${data.brand.name}. All rights reserved.`;
     

     
});
