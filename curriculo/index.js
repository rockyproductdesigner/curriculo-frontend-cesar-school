var formacao = [
    {
        'titulo': 'Especialização em Design de Artefatos Digitais',
        'local': 'Cesar School • 2020-21'
        
    },
    {
        'titulo': 'Graduação Tecnóloga em Fotografia',
        'local': 'UNICAP• 2014-2016'
        
    },

];

var formatado = [];

for (var curso of formacao){
    var item = `<li>
                    <span class="section__item-title">${curso.titulo}</span><br></br>
                    <span class="section__item-subtitle">${curso.local}</span><br></br>
                 </li>`;


    formatado.push(item);
}

var formacaoNoHTML = document.getElementById('formacaoAcademica');
formacaoNoHTML.innerHTML = formatado.join('');





var listaIdiomas = [
    {
        'idioma': 'Inglês 🇬🇧',
        'nivel': 'Fluente'
        
    },
    {
        'idioma': 'Francês 🇫🇷',
        'nivel': 'Avançado'
        
    },

];

var formatado = [];

for (var lingua of listaIdiomas){
    var item = `<li>
                    <span class="section__item-title">${lingua.idioma}</span><br></br>
                    <span class="section__item-subtitle">${lingua.nivel}</span><br></br>
                 </li>`;


    formatado.push(item);
}

var idiomaNoHTML = document.getElementById('idiomas');
idiomaNoHTML.innerHTML = formatado.join('');





var listaIdiomas = [
    {
        'curso': 'Product Research',
        'local': 'Mergo User Experience'
        
    },

    {
        'curso': 'Client Needs and Software Requirements',
        'local': 'Coursera'
        
    },

    {
        'curso': 'UX/UI/Front-End',
        'local': 'Design Culture'
        
    },

    {
        'curso': 'User Interface na Prática',
        'local': 'UI Lab'
        
    },


];

var formatado = [];

for (var lingua of listaIdiomas){
    var item = `<li>
                    <span class="section__item-title">${lingua.curso}</span><br></br>
                    <span class="section__item-subtitle">${lingua.local}</span><br></br>
                 </li>`;


    formatado.push(item);
}

var idiomaNoHTML = document.getElementById('formacaoAdicional');
idiomaNoHTML.innerHTML = formatado.join('');

