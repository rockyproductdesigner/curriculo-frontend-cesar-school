var formacao = [
    {
        'titulo': 'Especialização em Design de Artefatos Digitais',
        'local': 'Cesar School • 2020-21'
        
    },

    {
        'titulo': 'Graduação Tecnóloga em Fotografia',
        'local': 'Unicap • 2014-16'
        
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
        'idioma': 'Inglês',
        'nivel': 'Fluente'
        
    },
    {
        'idioma': 'Francês',
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





var listaCertificados = [
    {
        'curso': 'Product Research',
        'local': 'Mergo User Experience'
        
    },

    {
        'curso': 'Client Needs and Software Requirements',
        'local': 'Alberta University • Coursera'
        
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

for (var lista of listaCertificados){
    var item = `<li>
                    <span class="section__item-title">${lista.curso}</span><br></br>
                    <span class="section__item-subtitle">${lista.local}</span><br></br>
                 </li>`;


    formatado.push(item);
}

var certificadoNoHTML = document.getElementById('formacaoAdicional');
certificadoNoHTML.innerHTML = formatado.join('');





var listaXp = [
    {
        'posicao': 'Product Designer',
        'local': 'CESAR',
        'descricao': 'Gerenciamento de estratégia, design de interface, comunicação, desenvolvimento de produto de acordo com os requisitos dos stakeholders.'
        
    },

    {
        'posicao': 'Product Designer',
        'local': 'Imagine Free',
        'descricao': 'Responsável pela criação da identidade visual, design de interface, comunicação com stakeholders e mídia social dos produtos digitais.'
        
    },

    {
        'posicao': 'Designer/Video Producer',
        'local': 'Imagem Plural',
        'descricao': 'Designer da identidade visual, website e mídias sociais além de produtora de vídeo da concepção à finalização.'
        
    },

    {
        'posicao': 'Fotógrafa & Video Maker',
        'local': 'Folha de Pernambuco',
        'descricao': 'Fotógrafa e video maker da coluna social do jornal.'
        
    },

    {
        'posicao': 'Editora de Vídeo',
        'local': 'Quebra Coco Produções',
        'descricao': 'Editora de vídeo de programa televisivo diário e publicidade.'
        
    },
];


var formatado = [];

for (var lista of listaXp){
    var item = `<li>
                    <span class="section__item-title">${lista.posicao}</span><br></br>
                    <span class="section__item-subtitle">${lista.local}</span><br></br>
                    <span class="section__item-subsubtitle">${lista.descricao}</span><br></br>
                 </li>`;


    formatado.push(item);
}

var xpNoHTML = document.getElementById('experiencia');
xpNoHTML.innerHTML = formatado.join('');









