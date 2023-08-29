var i = 0;
const frasesJSON = {
    "frases": [
        `<br>¡Es hora de celebrar los logros de <span class="
         Nom3 ">Mariel</span>! Únete a nosotros en una tarde llena de alegría y orgullo mientras celebramos su titulación en Psicología.`,
        `¡Prepárate para una fiesta de titulación que dejará huella en la historia! Acompáñanos para festejar a <span class="
         Nom3 ">Mariel</span> y su increíble logro en Psicología. Habrá risas, música y ¡mucho color! `,
        `La perseverancia y el esfuerzo dan sus frutos. <span class="
         Nom3 ">Mariel</span> ha completado su carrera en Psicología y te invita a celebrar este hito en su vida. Únete a nosotros para inspirarnos mutuamente y celebrar su éxito. ¡Tu presencia significa mucho! `,
        `¡Prepárate para explorar los rincones más profundos de la mente en la fiesta de titulación de <span class="
         Nom3 ">Mariel</span> en Psicología! Únete a nosotros para una experiencia única llena de sorpresas y descubrimientos mentales. `,
        `Se cierra un libro y se abre un nuevo capítulo en la vida de <span class="
         Nom3 ">Mariel</span>. Acompáñanos en la fiesta de titulación para celebrar el inicio de un emocionante viaje. ¡Trae tu entusiasmo y expectativas para el futuro! `,
        `Es el momento de alzar las copas y brindar por un futuro lleno de éxitos. Únete a nosotros en la fiesta de titulación de <span class="
         Nom3 ">Mariel</span> en Psicología. Juntos celebraremos el cierre de un capítulo y el comienzo de un nuevo camino. `,
        `Es hora de celebrar el brillo de <span class="
         Nom3 ">Mariel</span> y sus logros en Psicología. Únete a la fiesta de titulación bajo las estrellas. Juntos aplaudiremos su éxito y le desearemos un futuro lleno de nuevas metas. `,
        `La Psicología trata sobre las conexiones entre las personas, y <span class="
         Nom3 ">Mariel</span> ha logrado mucho en este campo. Únete a la celebración de su titulación. Juntos celebraremos su capacidad de comprender y conectar con los demás. `,
        `<span class="
         Nom3 ">Mariel</span> ha completado el último pedazo del puzzle académico. Únete a la fiesta de titulación para celebrar este logro en su carrera de Psicología. ¡Habrá diversión, desafíos y muchas risas! `,
        `<span class="
         Nom3 ">Mariel</span> ha dejado una marca positiva en el mundo con su dedicación a la Psicología. Únete a nosotros en la fiesta de titulación para celebrar su capacidad de cambiar vidas y generar efectos positivos. `,
        `Celebremos los caminos despejados hacia el éxito. Únete a la fiesta de titulación de <span class="
         Nom3 ">Mariel</span>. Con su título en Psicología, <span class="
         Nom3 ">Mariel</span> está lista para enfrentar nuevos horizontes y desafíos. ¡Será una celebración llena de inspiración! `,
        `El horizonte se expande para <span class="
         Nom3 ">Mariel</span>, ¡y queremos celebrarlo contigo! Únete a la fiesta de titulación. Juntos brindaremos por sus logros en Psicología y por los emocionantes horizontes que le esperan. `,
        `La mente es un mundo por descubrir, y <span class="
         Nom3 ">Mariel</span> ha navegado en sus profundidades. Únete a nosotros para celebrar sus logros y explorar juntos los tesoros de la Psicología. `,
        `La empatía y la comprensión son las claves de la Psicología, y <span class="
         Nom3 ">Mariel</span> las ha dominado. Únete a nosotros para celebrar su titulación. Juntos, honraremos su capacidad para escuchar y entender a los demás. `,
        `<br>Acompáñanos en la Gala de Éxito de <span class="
         Nom3 ">Mariel</span>, donde celebraremos su titulación en Psicología. Te esperamos. ¡Será una noche de elegancia y logros! `,
        `<br>¿Qué sucede cuando juntas a amigos, familia y una graduada en Psicología? ¡Magia! Ven a la fiesta de <span class="
         Nom3 ">Mariel</span>. ¡Prepárate para ser estudiado! `,
        `<br>¿Necesitas una dosis de alegría? <span class="
         Nom3 ">Mariel</span> tiene la receta. Únete a su fiesta de titulación en Psicología. ¡La diversión está garantizada, sin recetas médicas! `,
        `¿Alguna vez quisiste que alguien simplemente te escuchara? <span class="
         Nom3 ">Mariel</span> es la graduada en Psicología perfecta para el trabajo. Únete a su fiesta. ¡Habrá consejos gratis! `,
        `¡Actualización importante! <span class="
         Nom3 ">Mariel</span> ha alcanzado el nivel de 'Graduada en Psicología'. ¡Celebra con nosotros! Prepárate para una fiesta épica de nivel experto. `,
        `<br>¡Es oficial! <span class="
         Nom3 ">Mariel</span> se ha graduado y estamos listos para la fiesta psicológica del año. Únete a la locura. ¡Prepara tu mente para la diversión! `,
        `¡Prepárate para una fiesta que se lleva la Psicología al siguiente nivel: el nivel del pastel! Únete a nosotros. <span class="
         Nom3 ">Mariel</span> está lista para la titulación y el pastel. `,
        `¿Alguna vez te preguntaste cómo se ve una mente brillante? ¡Ven y celebra con <span class="
         Nom3 ">Mariel</span>! Fiesta de titulación en Psicología. Mentes brillantes se unirán para festejar. `,
        `<br><span class="
         Nom3 ">Mariel</span> ha completado su terapia intensiva en Psicología. Únete a la sesión de risa. ¡Prepárate para una dosis de diversión curativa! `,
        `<br>¡No es una mentira! <span class="
         Nom3 ">Mariel</span> se gradúa y celebramos con una fiesta. ¿No nos crees? ¡Ven y compruébalo tú mismo! `
    ]
};

$(document)
    .ready(function () {
        actualizarH3ConFrase();
        $('.frame')
            .click(function () {
                $('.top')
                    .addClass('open');
                $('.message')
                    .addClass('pull');

                if (i == 0) {
                    window.scrollTo(0, 10000);

                    i = 1;
                } else {

                }
            })
    });

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Función para obtener una frase aleatoria
function obtenerFraseAleatoria() {
    const frases = frasesJSON.frases;
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    return frases[indiceAleatorio];
}

// Función para actualizar el contenido del elemento <h3>
function actualizarH3ConFrase() {
    const fraseAleatoria = obtenerFraseAleatoria();
    const h3Element = document.getElementById("txth3");
    h3Element.innerHTML = fraseAleatoria;
}



/* botones que abren modales */

function cambioContenido(btnPrecionado) {
    switch (btnPrecionado) {
        case 1:
            /* TODO: crear parte de la ubicacion */
            /* direccion: Calle 2 #165, Agrícola Pantitlán, Iztacalco, 08100 Ciudad de México, CDMX */
            /* Vinculo:https://goo.gl/maps/bHp2CGYxCX5YBAr19 */

            /* Frame: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853332.3097783695!2d-103.94465018749996!3d19.411549000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fc5d159c5ac1%3A0xd367857dea367daf!2zU0FMQSBCQUzDmk1DQU7DgU4!5e0!3m2!1ses-419!2smx!4v1692989778069!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */

            var h3Element = document.getElementById("contenidoTarjeta");
            h3Element.innerHTML = `

            <div class="split leftSplit">
            <div class="centered">
              
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d940.7548776497488!2d-99.06732613040866!3d19.411562963737182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDI0JzQxLjYiTiA5OcKwMDQnMDAuMSJX!5e0!3m2!1ses-419!2smx!4v1693333543533!5m2!1ses-419!2smx"
                width = "100%"
                height = "100%"
                style = "border:0;"
                allowfullscreen = "eneble"
                loading = ""
                referrerpolicy = "no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          
          <div class="split rightSplit">
            <div class="centered">
                <a class="txtUbic"  href="https://goo.gl/maps/8AEYfPcsZ8roAzcg7" target="_blank">Calle 2 #165, Agrícola Pantitlán, Iztacalco, 08100 Ciudad de México, CDMX</a>
                
              
            </div>
          </div>

            
            `;


            break;

        case 2:
            /* TODO: formulario de asistencia */
            break;

        case 3:

            var tarjeta = document.getElementById("contenidoTarjeta");
            tarjeta.innerHTML = `<h1 class="regalo">Tu presencia es el mejor de los regalos</h1>
            `;
            break;

        case 4:
            /* TODO: recordatorio google calendar */
            break;

        default:
            break;
    }
}