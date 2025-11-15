const jobsListingSection = document.querySelector('.jobs-listings-container')
const filterLocation = document.querySelector('#filter-location')
const mensaje = document.querySelector('#filter-selected-value')
const jobs = document.querySelectorAll('.jobs-listings')
const filterTech = document.querySelector('#filter-technology')
const filterExpLvl = document.querySelector('#filter-exp-lvl')

// Este es el efecto del botón "aplicar" en la página de empleos
jobsListingSection.addEventListener('click', function(event) {
    const element = event.target
    if (element.classList.contains('button-apply-job')) {
        element.textContent = '¡Aplicado!'
        element.classList.add('is-applied')
        element.disabled = true
        }
    
})

// Para filtrar por ubicación
filterLocation.addEventListener('change', function() {
    const selectedLocation = filterLocation.value
    
    jobs.forEach(job => {
        // esta es una forma de recuperar el atributo "dataset"
        // const modalidad = job.dataset.modalidad

        // esta es otra forma de recuperar el atributo "dataset"
        const modalidad = job.getAttribute('data-modalidad') 
        
        if (selectedLocation === '' || selectedLocation === modalidad) {
            // muestra los valores no coincidentes con la condición
            job.style.display = 'flex'
        } else {
            // oculta los valores no coincidentes con la condición
            job.style.display = 'none'
        }
    })
})

// Para filtrar por tecnología
filterTech.addEventListener('change', function() {
    const selectedTech = filterTech.value

    jobs.forEach(job => {
        const tecnologia = job.getAttribute('data-tecnologia')

        if (selectedTech === '' || 
            selectedTech === tecnologia) {
            job.style.display = 'flex'
        } else {
            job.style.display = 'none'
        }
    })
})

// Para filtrar por nivel de experiencia
filterExpLvl.addEventListener('change', function() {
    const selectedExp = filterExpLvl.value

    jobs.forEach(job => {
        const experiencia = job.getAttribute('data-exp-lvl')

        if (selectedExp === '' ||
            selectedExp === experiencia) {
            job.style.display = 'flex'
        } else {
            job.style.display = 'none'
        }
    })
})


const searchInput = document.querySelector(`#empleos-search-input`)

searchInput.addEventListener(`input`, function() {
    // console.log(searchInput.value) 
})

const searchForm = document.querySelector('#empleos-search-form')

searchForm.addEventListener('submit', function(event) {
    event.preventDefault() //previene que se recargue la página
    console.log('submit')
})

const verOferta = document.querySelector('#oferta-n-0')

verOferta.addEventListener('click', function() {
    console.log(verOferta)
})



/* const botones = document.querySelectorAll('.button-apply-job');


botones.forEach(boton => {
    boton.addEventListener('click', function() {
    boton.textContent = '¡Aplicado!'
    boton.classList.add('is-applied')
    // deshabilitar botón para que no se pueda volver a hacer click
    boton.disabled = true
    })
});

*/
