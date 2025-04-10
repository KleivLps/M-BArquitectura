
// Obtener las navbars
const navbarEstatica = document.getElementById('navbar-estatica');
const navbarOriginal = document.querySelector('.header');

// Función para manejar el scroll
function manejarScroll() {
    const scrollActual = window.pageYOffset;

    // Mostrar u ocultar la navbar estática
    if (scrollActual > 0) {
        navbarEstatica.style.opacity = '0';
        navbarEstatica.style.pointerEvents = 'none'; // Desactiva interacciones
        navbarOriginal.style.top = '0'; // Mueve la navbar original a la parte superior
    } else {
        navbarEstatica.style.opacity = '1';
        navbarEstatica.style.pointerEvents = 'auto'; // Activa interacciones
        navbarOriginal.style.top = '20px'; // Mueve la navbar original debajo de la navbar estática
    }
}




const navBoton = document.querySelector('.nav-boton');
const navList = document.querySelector('.nav-list');
let isScrolling = false;

// Función para cerrar el menú hamurguésa
function cerrarMenu() {
    navList.classList.remove('visible');
    navBoton.setAttribute('aria-label', 'Abrir menu');
}

// Control del scroll con debounce
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            if (window.innerWidth <= 768) {
                cerrarMenu();
            }
            isScrolling = false;
        });
    }
    isScrolling = true;
});


//termina la navbar

//empeiza el scroll de navbar estatica




// Control de scroll
let lastScroll = 0;

function manejarScroll() {
  const currentScroll = window.pageYOffset;
  const navbarHeight = navbarEstatica.offsetHeight;
  
  if (currentScroll > lastScroll && currentScroll > 50) {
    navbarEstatica.classList.add('scroll-oculto');
    navbarOriginal.style.top = '0';
  } else {
    navbarEstatica.classList.remove('scroll-oculto');
    navbarOriginal.style.top = `${navbarHeight}px`;
  }
  lastScroll = currentScroll;
}



// Cerrar menú hamburguesa al hacer clic fuera
document.addEventListener('click', (e) => {
  if (!navBoton.contains(e.target) && !navList.contains(e.target)) {
    navList.classList.remove('visible');
  }
});

// Cerrar menú hamburguesa al seleccionar opción
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('visible');
  });
});

// Event listeners
window.addEventListener('scroll', manejarScroll);
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navList.classList.remove('visible');
  }
});


// Ejecutar la función al cargar la página
manejarScroll();

// Ejecutar la función al hacer scroll
window.addEventListener('scroll', manejarScroll);

// Función para animar las secciones al hacer scroll
function animarSecciones() {
    const secciones = document.querySelectorAll('.seccion-animada');

    secciones.forEach((seccion) => {
        const rect = seccion.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            seccion.classList.add('visible');
        }
    });
}

// Evento de scroll para animar secciones
window.addEventListener('scroll', animarSecciones);

// Ejecutar la función al cargar la página para animar las secciones visibles
document.addEventListener('DOMContentLoaded', animarSecciones);

// Mostrar/ocultar menú en dispositivos móviles
const boton = document.querySelector(".nav-boton");
const navlist = document.querySelector(".nav-list");

boton.addEventListener("click", () => {
    navlist.classList.toggle("visible");

    if (navlist.classList.contains("visible")) {
        boton.setAttribute("aria-label", "Cerrar menu");
    } else {
        boton.setAttribute("aria-label", "Abrir menu");
    }
});

// Obtener elementos del DOM
const escribenosBtn = document.getElementById('escribenos-btn');
const escribenosBtnFooter = document.getElementById('escribenos-btn-footer');
const escribenosBtnServicios = document.getElementById('escribenos-btn-servicios');
const modal = document.getElementById('modal-formulario');
const fondoOscuro = document.getElementById('fondo-oscuro');
const cerrarModal = document.querySelector('.cerrar-modal');

// Función para abrir el modal con animación
function abrirModal() {
    modal.style.display = 'block';
    fondoOscuro.style.display = 'block';
    // Agregar la clase de animación de entrada
    modal.classList.remove('modal-exit');
    modal.classList.add('modal-enter');
}

// Función para cerrar el modal con animación
function cerrarModalConAnimacion() {
    // Agregar la clase de animación de salida
    modal.classList.remove('modal-enter');
    modal.classList.add('modal-exit');

    // Esperar a que termine la animación antes de ocultar el modal
    setTimeout(() => {
        modal.style.display = 'none';
        fondoOscuro.style.display = 'none';
    }, 300); // 300ms = duración de la animación
}

// Mostrar el modal al hacer clic en "Escríbenos" (botón principal)
if (escribenosBtn) {
    escribenosBtn.addEventListener('click', abrirModal);
}

// Mostrar el modal al hacer clic en "Escríbenos" (botón del footer)
if (escribenosBtnFooter) {
    escribenosBtnFooter.addEventListener('click', abrirModal);
}

if (escribenosBtnServicios) {
    escribenosBtnServicios.addEventListener('click', abrirModal);
}

// Ocultar el modal al hacer clic en el botón de cerrar
if (cerrarModal) {
    cerrarModal.addEventListener('click', cerrarModalConAnimacion);
}

// Ocultar el modal al hacer clic fuera del modal
if (fondoOscuro) {
    fondoOscuro.addEventListener('click', cerrarModalConAnimacion);
}

// Evitar que el modal se cierre al hacer clic dentro del formulario
if (modal) {
    modal.addEventListener('click', (event) => {
        event.stopPropagation();
    });
}

// Manejar el envío del formulario
const formularioContacto = document.getElementById('formulario-contacto');
if (formularioContacto) {
    formularioContacto.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe
        alert('Formulario enviado correctamente'); // Mensaje de confirmación
        cerrarModalConAnimacion(); // Cerrar el modal después de enviar
    });
}


/**************************************************** */

/*slider foro*/

let slideIndex = 0;

function moverSlider(n) {
  const slides = document.querySelector(".slider-container");
  const totalSlides = document.querySelectorAll(".tarjeta").length;
  const tarjetasPorSlide = window.innerWidth <= 450 ? 1 : 2;

  slideIndex += n;

  if (slideIndex < 0) {
    slideIndex = totalSlides - tarjetasPorSlide;
  } else if (slideIndex >= totalSlides - tarjetasPorSlide + 1) {
    slideIndex = 0;
  }

  const offset = -slideIndex * (100 / tarjetasPorSlide);
  slides.style.transform = `translateX(${offset}%)`;
};

//PROYECTOS

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider3');
    const slides = document.querySelectorAll('.slide3');
    const prevBtn = document.querySelector('.prev3');
    const nextBtn = document.querySelector('.next3');
    let currentIndex = 0;
    let autoSlideInterval;
  
    // Función para mover el slider
    function goToSlide(index) {
      if (index >= slides.length) index = 0;
      if (index < 0) index = slides.length - 1;
      
      slider.style.transform = `translateX(-${index * 100}%)`;
      document.querySelector('.slide3.active3')?.classList.remove('active3');
      slides[index].classList.add('active3');
      currentIndex = index;
      
      // Reiniciar auto-slide
      resetAutoSlide();
    }
  
    // Auto-deslizamiento
    function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, 5000);
    }
  
    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    }
  
    // Event Listeners
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  
    // Iniciar
    startAutoSlide();
  
    // Pausar al hacer hover (opcional)
    slider.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    slider.addEventListener('mouseleave', startAutoSlide);
  });