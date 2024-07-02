document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const overlay = document.getElementById('overlay');

    // Funzione per aprire/chiudere il menu
    function toggleMenu() {
        const isActive = dropdownMenu.classList.contains('active');
        dropdownMenu.classList.toggle('active', !isActive);
        overlay.classList.toggle('active', !isActive);
    }

    // Evento click su menuToggle
    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleMenu();
    });

    // Evento click su overlay
    overlay.addEventListener('click', function() {
        dropdownMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Evento click su document per chiudere il menu se si clicca fuori
    document.addEventListener('click', function(event) {
        if (!dropdownMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            dropdownMenu.classList.remove('active');
            overlay.classList.remove('active');
        }
    });

    // Evento click su dropdownMenu per evitare la chiusura del menu
    dropdownMenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Trova l'elemento .episodio7
    var episodio7 = document.querySelector('.episodio7');

    if (episodio7) {
        // Crea l'elemento overlay-episodi
        var overlay = document.createElement('div');
        overlay.classList.add('overlay-episodi');

        // Crea l'elemento per il testo "Prossimamente"
        var testoProssimamente = document.createElement('div');
        testoProssimamente.classList.add('prossimamente');

        // Crea l'elemento p e impostalo all'interno di .prossimamente
        var paragraph = document.createElement('p');
        paragraph.innerText = 'Prossimamente';
        testoProssimamente.appendChild(paragraph);

        // Aggiungi il testo all'overlay
        overlay.appendChild(testoProssimamente);

        // Aggiungi l'overlay-episodi a .episodio7
        episodio7.appendChild(overlay);
    }
});


        document.addEventListener('DOMContentLoaded', function() {
            if (!localStorage.getItem('cookieConsent')) {
                document.body.insertAdjacentHTML('beforeend', `
                    <div id="cookie-banner" style="position: fixed; bottom: 0; left: 0; width: 100%; background: #fdffba; color: #000000; padding: 15px; text-align: center; z-index: 1000;">
                        <p>Utilizziamo i cookie per migliorare la tua esperienza sul nostro Sito. Per maggiori dettagli, leggi la nostra <a href="cookie.html" style="color: #d9534f; text-decoration: underline;"> <strong>Cookie Policy</strong></a>. Se continui a navigare, accetti l'uso dei cookie.</p>
                        <button id="accept-cookies" style="background: #0056b3; color: #fff; border: none; padding: 10px 20px; cursor: pointer; border-radius: 5px">Accetta</button>
                        <button id="decline-cookies" style="background: #d9534f; color: #fff; border: none; padding: 10px 20px; cursor: pointer; margin-left: 10px; border-radius: 5px;">Rifiuta</button>
                    </div>
                `);

                document.getElementById('accept-cookies').addEventListener('click', function() {
                    localStorage.setItem('cookieConsent', 'true');
                    document.getElementById('cookie-banner').style.display = 'none';
                });
            }
        });

        document.getElementById('decline-cookies').addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'false');
            document.getElementById('cookie-banner').style.display = 'none';
        });