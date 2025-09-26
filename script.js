document.addEventListener('DOMContentLoaded', function() {

    function loadTextContent(elementId, filePath) {
        const element = document.getElementById(elementId);
        if (!element) {
            console.error(`Elemento com ID "${elementId}" não foi encontrado.`);
            return;
        }

        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ao carregar o arquivo: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                // CORREÇÃO: Usando innerHTML para renderizar a formatação HTML do texto
                element.innerHTML = data;
            })
            .catch(error => {
                console.error(`Falha ao buscar o conteúdo de "${filePath}":`, error);
                element.innerHTML = 'Erro ao carregar conteúdo.';
            });
    }

    // Carrega o conteúdo de cada arquivo .txt na sua respectiva seção
    loadTextContent('introducao-conteudo', '1_introducao.txt');
    loadTextContent('classificacao-conteudo', '2_classificacao.txt');
    loadTextContent('impactos-conteudo', '3_impactos.txt');
    loadTextContent('economia-circular-conteudo', '4_economia_circular.txt');
    loadTextContent('legislacao-conteudo', '5_legislacao.txt');
    loadTextContent('guia-pratico-conteudo', '6_guia_pratico.txt');

});

// A função initMap deve estar no escopo global (fora do 'DOMContentLoaded')
// para que a API do Google possa chamá-la.

/*function initMap() {
    // 1. DADOS DOS PONTOS DE COLETA (EXEMPLOS)
    // Para uma aplicação real, estes dados viriam de um banco de dados.
    const collectionPoints = [
        {
            position: { lat: -23.5506507, lng: -46.6333824 },
            title: 'Ponto de Coleta - Praça da Sé',
            info: '<strong>Ecoponto Sé</strong><br>Recebe pequenos eletrônicos e pilhas.<br>Aberto de Seg a Sex, das 8h às 17h.'
        },
        {
            position: { lat: -23.5613175, lng: -46.6565038 },
            title: 'Cooperativa Recicla - Bela Vista',
            info: '<strong>CoopBela</strong><br>Especializada em computadores e periféricos.<br>Agende a entrega pelo telefone.'
        },
        {
            position: { lat: -23.5475, lng: -46.6361 },
            title: 'Loja Varejista - Centro',
            info: '<strong>Ponto de Entrega Varejo</strong><br>Caixa de coleta para celulares e baterias na entrada da loja.'
        },
        {
            position: { lat: -23.5869, lng: -46.6823 },
            title: 'Ecoponto Ibirapuera',
            info: '<strong>Ecoponto Ibirapuera</strong><br>Ao lado do parque, recebe eletrodomésticos de pequeno porte.<br>Aberto todos os dias.'
        }
    ];

    // 2. OPÇÕES E CRIAÇÃO DO MAPA
    // Centralizando o mapa em São Paulo
    const mapOptions = {
        zoom: 12,
        center: { lat: -23.5505, lng: -46.6333 } // Centro de São Paulo
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // 3. ADICIONANDO MARCADORES E JANELAS DE INFORMAÇÃO
    const infoWindow = new google.maps.InfoWindow();

    collectionPoints.forEach(point => {
        const marker = new google.maps.Marker({
            position: point.position,
            map: map,
            title: point.title
        });

        // Adiciona um evento de clique para cada marcador
        marker.addListener('click', () => {
            infoWindow.setContent(point.info);
            infoWindow.open(map, marker);
        });
    });
}*/