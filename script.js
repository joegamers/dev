let menuVisible = false;
let idiomaActual = 'en'; // Establecer el idioma predeterminado como inglés

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // Oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("flutter");
        habilidades[1].classList.add("dart");
        habilidades[2].classList.add("uiflutter");
        habilidades[3].classList.add("gestion-estados");
        habilidades[4].classList.add("widgets");
        habilidades[5].classList.add("firebase");
        habilidades[6].classList.add("Resolución");
        habilidades[7].classList.add("colaboracion");
        habilidades[8].classList.add("Conocimientos");
        habilidades[9].classList.add("Optimización");
        habilidades[10].classList.add("Mantenimiento");
        habilidades[11].classList.add("autodidacta");
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
}

// Objeto con las traducciones
const traducciones = {
    es: {
        // Menú
        inicio: "INICIO",
        sobreMi: "SOBRE MÍ",
        skills: "HABILIDADES",
        curriculum: "CURRÍCULUM",
        portfolio: "PORTAFOLIO",
        contacto: "CONTACTO",

        // Sección Inicio
        desarrollador: "Desarrollador web y móvil",

        // Sección Sobre Mí
        sobreMiTitulo: "Sobre Mí",
        sobreMiContenido: "¡Hola, soy Joel, un programador independiente con sólida experiencia en tecnologías web y móviles, especializado en el desarrollo con Flutter, Dart y la creación de interfaces atractivas. Además de destacar en HTML, CSS, JavaScript y Android Studio, tengo habilidades en WordPress, gestión de hosting, dominios, CPanel y SEO. Mi enfoque se centra en proporcionar soluciones personalizadas, eficientes e innovadoras. Estoy emocionado por enfrentar nuevos retos y seguir desarrollando mis habilidades, ansioso por colaborar en tus proyectos y aportar resultados excepcionales. ¡Espero con interés la oportunidad de trabajar contigo!",
        datosPersonales: "Datos Personales",
        cumpleanos: "Cumpleaños",
        telefono: "Teléfono",
        email: "Email",
        website: "Sitio Web",
        direccion: "Dirección",
        cargo: "Cargo",
        intereses: "Intereses",
        descargarCV: "Descargar CV",

        // Intereses
        android: "ANDROID",
        windows: "WINDOWS",
        ai: "IA",
        internet: "INTERNET",
        ajedrez: "AJEDREZ",
        futbol: "FÚTBOL",
        juegos: "JUEGOS",
        peliculas: "PELÍCULAS",

        // Sección Habilidades
        habilidades: "Habilidades",
        tecnicas: "Técnicas",
        profesionales: "Profesionales",
        desarrolloFlutter: "Desarrollo con Flutter",
        programacionDart: "Programación en Dart",
        disenoUIFlutter: "Diseño UI en Flutter",
        gestionEstados: "Gestión de Estados en Flutter",
        widgetsPersonalizados: "Widgets Personalizados en Flutter",
        integracionesFirebase: "Integraciones con Firebase",
        resolucionProblemas: "Resolución de Problemas",
        trabajoEquipo: "Trabajo en Equipo",
        disenoMaterial: "Diseño de Material",
        optimizacionRendimiento: "Optimización de Rendimiento",
        mantenimientoContinuo: "Mantenimiento Continuo",
        autodidacta: "Autodidacta",

        // Sección Currículum
        estudios: "Estudios",
        experienciaTrabajo: "Experiencia de trabajo",
        edicionPaginasWeb: "Edición de Páginas Web",
        descripcionEdicionWeb: "He realizado un curso integral sobre desarrollo de sitios web, donde apliqué diversas estrategias para la creación de blogs. Además, clasifiqué meticulosamente las diferentes plataformas tecnológicas disponibles y profundicé en los conceptos básicos de la web.",
        cicloDiversificado: "Ciclo Diversificado",
        descripcionCicloDiversificado: "Continué mi formación en el Ciclo Diversificado en la Escuela Técnica Industrial Robinsoniana Carlos Fiol, donde me especialicé en el área de electricidad. Durante estos años, adquirí habilidades técnicas y conocimientos especializados que me prepararon para enfrentar los desafíos del mundo laboral.",
        secundaria: "Secundaria",
        descripcionSecundaria: "Mi etapa de educación secundaria transcurrió en la Unidad Educativa Nacional Creación Las Tuniras. Aquí, amplié mis horizontes académicos y comencé a explorar áreas de interés que me motivaron a seguir aprendiendo. Durante este período, no solo adquirí conocimientos académicos, sino que también desarrollé habilidades sociales y personales que me han sido útiles en mi vida diaria y en mi desarrollo profesional.",
        pasanteElectricista: "Pasante Electricista",
        descripcionPasantia: "Durante mi tiempo en esta institución, pude aplicar los conocimientos adquiridos en mi formación técnica y colaborar en proyectos relacionados con el mantenimiento y la optimización de sistemas eléctricos.",
        tecnicoComputacion: "Técnico en Computación",
        descripcionTecnicoComputacion: "Desde 2012 hasta 2017, trabajé de forma independiente como técnico en computación, brindando servicios de mantenimiento, reparación y asesoramiento en sistemas informáticos. Durante este tiempo, mi pasión por la tecnología y mi constante búsqueda de actualización me permitieron ofrecer soluciones eficientes y mantenerme al día con las últimas tendencias del campo.",
        desarrolladorWeb: "Desarrollador Web",
        descripcionDesarrolladorWeb: "Durante el período comprendido entre 2018 y 2021, me desempeñé como desarrollador web de forma independiente. Durante estos años, trabajé como freelancer, colaborando en una variedad de proyectos de desarrollo web. Mi enfoque estaba en crear soluciones efectivas y atractivas para mis clientes, utilizando las últimas tecnologías y técnicas en diseño y desarrollo web.",

        // Sección Portafolio
        juegosRealizados: "Juegos Realizados",
        paginasWebRealizadas: "Páginas Web Realizadas",

        // Sección Contacto
        nombrePlaceholder: "Tú Nombre",
        telefonoPlaceholder: "Número telefónico",
        correoPlaceholder: "Dirección de correo",
        temaPlaceholder: "Tema",
        mensajePlaceholder: "Mensaje",
        enviarMensaje: "Enviar Mensaje",

        // Footer
        subirArriba: "Subir arriba"
    },
    en: {
        // Menu
        inicio: "HOME",
        sobreMi: "ABOUT ME",
        skills: "SKILLS",
        curriculum: "RESUME",
        portfolio: "PORTFOLIO",
        contacto: "CONTACT",

        // Home Section
        desarrollador: "Web and Mobile Developer",

        // About Me Section
        sobreMiTitulo: "About Me",
        sobreMiContenido: "Hello, I'm Joel, an independent programmer with solid experience in web and mobile technologies, specialized in development with Flutter, Dart, and creating attractive interfaces. In addition to excelling in HTML, CSS, JavaScript, and Android Studio, I have skills in WordPress, hosting management, domains, CPanel, and SEO. My focus is on providing customized, efficient, and innovative solutions. I'm excited to face new challenges and continue developing my skills, eager to collaborate on your projects and deliver exceptional results. I look forward to the opportunity to work with you!",
        datosPersonales: "Personal Information",
        cumpleanos: "Birthday",
        telefono: "Phone",
        email: "Email",
        website: "Website",
        direccion: "Address",
        cargo: "Position",
        intereses: "Interests",
        descargarCV: "Download CV",

        // Interests
        android: "ANDROID",
        windows: "WINDOWS",
        ai: "AI",
        internet: "INTERNET",
        ajedrez: "CHESS",
        futbol: "SOCCER",
        juegos: "GAMES",
        peliculas: "MOVIES",

        // Skills Section
        habilidades: "Skills",
        tecnicas: "Technical",
        profesionales: "Professional",
        desarrolloFlutter: "Flutter Development",
        programacionDart: "Dart Programming",
        disenoUIFlutter: "Flutter UI Design",
        gestionEstados: "State Management in Flutter",
        widgetsPersonalizados: "Custom Widgets in Flutter",
        integracionesFirebase: "Firebase Integrations",
        resolucionProblemas: "Problem Solving",
        trabajoEquipo: "Teamwork",
        disenoMaterial: "Material Design",
        optimizacionRendimiento: "Performance Optimization",
        mantenimientoContinuo: "Continuous Maintenance",
        autodidacta: "Self-taught",

        // Resume Section
        estudios: "Education",
        experienciaTrabajo: "Work Experience",
        edicionPaginasWeb: "Web Page Editing",
        descripcionEdicionWeb: "I have completed a comprehensive course on website development, where I applied various strategies for blog creation. Additionally, I meticulously classified the different technological platforms available and delved into the basic concepts of the web.",
        cicloDiversificado: "Diversified Cycle",
        descripcionCicloDiversificado: "I continued my education in the Diversified Cycle at the Carlos Fiol Robinsonian Industrial Technical School, where I specialized in the field of electricity. During these years, I acquired technical skills and specialized knowledge that prepared me to face the challenges of the working world.",
        secundaria: "Secondary Education",
        descripcionSecundaria: "My secondary education stage took place at the Las Tuniras National Creation Educational Unit. Here, I broadened my academic horizons and began to explore areas of interest that motivated me to continue learning. During this period, I not only acquired academic knowledge, but also developed social and personal skills that have been useful in my daily life and professional development.",
        pasanteElectricista: "Electrician Intern",
        descripcionPasantia: "During my time at this institution, I was able to apply the knowledge acquired in my technical training and collaborate on projects related to the maintenance and optimization of electrical systems.",
        tecnicoComputacion: "Computer Technician",
        descripcionTecnicoComputacion: "From 2012 to 2017, I worked independently as a computer technician, providing maintenance, repair, and consulting services for computer systems. During this time, my passion for technology and my constant search for updates allowed me to offer efficient solutions and stay up-to-date with the latest trends in the field.",
        desarrolladorWeb: "Web Developer",
        descripcionDesarrolladorWeb: "During the period between 2018 and 2021, I worked as an independent web developer. During these years, I worked as a freelancer, collaborating on a variety of web development projects. My focus was on creating effective and attractive solutions for my clients, using the latest technologies and techniques in web design and development.",

        // Portfolio Section
        juegosRealizados: "Games Developed",
        paginasWebRealizadas: "Websites Developed",

        // Contact Section
        nombrePlaceholder: "Your Name",
        telefonoPlaceholder: "Phone Number",
        correoPlaceholder: "Email Address",
        temaPlaceholder: "Subject",
        mensajePlaceholder: "Message",
        enviarMensaje: "Send Message",

        // Footer Section
        subirArriba: "Go to top"
    }
};

// Función para cambiar el idioma
function cambiarIdioma(nuevoIdioma) {
    idiomaActual = nuevoIdioma;
    document.documentElement.lang = idiomaActual;

    // Actualizar el texto del botón
    const botonIdioma = document.getElementById('cambiarIdioma');
    botonIdioma.textContent = idiomaActual === 'es' ? 'EN' : 'ES';

    // Actualizar los textos del menú
    const menuItems = document.querySelectorAll('#nav ul li a');
    menuItems.forEach(item => {
        const key = item.getAttribute('data-trad-key');
        item.textContent = traducciones[idiomaActual][key];
    });

    // Actualizar el título de desarrollador
    document.querySelector('.inicio h2').textContent = traducciones[idiomaActual].desarrollador;

    // Actualizar la sección Sobre Mí
    document.querySelector('#sobremi h2').textContent = traducciones[idiomaActual].sobreMiTitulo;
    document.querySelector('#sobremi p').textContent = traducciones[idiomaActual].sobreMiContenido;
    document.querySelector('#sobremi .col h3:first-of-type').textContent = traducciones[idiomaActual].datosPersonales;
    document.querySelector('#sobremi .col h3:last-of-type').textContent = traducciones[idiomaActual].intereses;
    document.querySelector('#sobremi button').textContent = traducciones[idiomaActual].descargarCV;

    // Actualizar Datos Personales
    const datosPersonales = document.querySelectorAll('#sobremi .col:first-of-type ul li strong');
    datosPersonales.forEach(dato => {
        const key = dato.getAttribute('data-trad-key');
        dato.textContent = traducciones[idiomaActual][key];
    });

    // Actualizar intereses
    document.querySelectorAll('#sobremi .interes span').forEach(span => {
        const key = span.getAttribute('data-trad-key');
        span.textContent = traducciones[idiomaActual][key];
    });

    // Actualizar la sección Habilidades
    document.querySelector('#skills h2').textContent = traducciones[idiomaActual].habilidades;
    document.querySelectorAll('#skills .col h3')[0].textContent = traducciones[idiomaActual].tecnicas;
    document.querySelectorAll('#skills .col h3')[1].textContent = traducciones[idiomaActual].profesionales;

    // Actualizar habilidades específicas
    document.querySelectorAll('#skills .skill span').forEach(span => {
        const key = span.getAttribute('data-trad-key');
        span.textContent = traducciones[idiomaActual][key];
    });

    // Actualizar la sección Currículum
    document.querySelector('#curriculum h2').textContent = traducciones[idiomaActual].curriculum;
    document.querySelectorAll('#curriculum .col h3')[0].textContent = traducciones[idiomaActual].estudios;
    document.querySelectorAll('#curriculum .col h3')[1].textContent = traducciones[idiomaActual].experienciaTrabajo;

    // Actualizar los elementos del currículum
    document.querySelectorAll('#curriculum .item h4, #curriculum .item p').forEach(element => {
        const key = element.getAttribute('data-trad-key');
        if (key && traducciones[idiomaActual][key]) {
            element.textContent = traducciones[idiomaActual][key];
        }
    });

    // Actualizar la sección Portafolio
    document.querySelector('#portfolio h2').textContent = traducciones[idiomaActual].portfolio;
    document.querySelectorAll('#portfolio .col-games h3')[0].textContent = traducciones[idiomaActual].juegosRealizados;
    document.querySelectorAll('#portfolio .col-web h3')[0].textContent = traducciones[idiomaActual].paginasWebRealizadas;

    // Actualizar la sección Contacto
    document.querySelector('#contacto h2').textContent = traducciones[idiomaActual].contacto;
    document.querySelector('#contacto input[placeholder]').placeholder = traducciones[idiomaActual].nombrePlaceholder;
    document.querySelectorAll('#contacto input[placeholder]')[1].placeholder = traducciones[idiomaActual].telefonoPlaceholder;
    document.querySelectorAll('#contacto input[placeholder]')[2].placeholder = traducciones[idiomaActual].correoPlaceholder;
    document.querySelectorAll('#contacto input[placeholder]')[3].placeholder = traducciones[idiomaActual].temaPlaceholder;
    document.querySelector('#contacto textarea').placeholder = traducciones[idiomaActual].mensajePlaceholder;
    document.querySelector('#contacto button').textContent = traducciones[idiomaActual].enviarMensaje;

    // Actualizar el footer
    document.querySelector('footer .arriba').setAttribute('title', traducciones[idiomaActual].subirArriba);
}

// Agregar el evento click al botón de cambio de idioma
document.addEventListener('DOMContentLoaded', () => {
    const botonIdioma = document.getElementById('cambiarIdioma');
    botonIdioma.addEventListener('click', () => cambiarIdioma(idiomaActual === 'es' ? 'en' : 'es'));

    // Establecer el idioma inicial
    cambiarIdioma(idiomaActual);
});