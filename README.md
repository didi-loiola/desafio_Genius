# Jogo Genius

O Genius lançado em 1980 pela Estrela foi o primeiro jogo eletrônico vendido no Brasil, sendo a versão do Simon, do fabricante americano Hasbro. Muitos brinquedos eletrônicos da Estrela dos anos 80, como o Pégasus, Colossus, Gênius e outros, saíram de linha.

Em 1987, a Prosoft desenvolveu um Genius para MSX 1 O programa foi desenvolvido em Basic.

O Genius original possuía três jogos diferentes e quatro níveis de dificuldade.

## Desafio de código na DIO

Inserindo os primeiros arquivos

Feito o design do jogo na tela, com algumas cores personalizadas

Iniciando com o arquivo JS com as primeiras funções definidas: shuffleOrder e ligthColor. Além das variáveis que irão selecionar as caixas para mostrar quando estarão acesas.

Adicionado nova função que verifica o que o usuário clicou quando a luz do jogo acendeu.

Adicionado a funções que retorna as cores, para próximo nível do jogo, para quando o jogador errar, iniciar o jogo

Pequenos ajustes nos arquivos index.html e style.css

Adicionando título e botão de iniciar o jogo. E adicionando algumas estilizações em h1, h2 e buttom.

Adicionado imagens ao repositório com Screenshots das telas do jogo.

## Explicando as funções
* suffleOrder - cria ordem aleatória de cores;
* ligthColor - acende a próxima cor;
* checkOrder - Checa se os boões clicados são na mesma ordem gerada no jogo;
* Click - Função para o clique do usuário;
* createColorElement - mostra qual elemento será colorido
* nextLevel - próximo nível
* gameOver - finaliza o jogo e iniciar de novo logo em seguida
* playGame - alerta e inicia o jogo

## Atualizações Futuras
* Corrigir alerta de continuar o jogo mesmo depois de errar quando removo a função playGame() de dentro da função gameOver()
* Adicionar High-Score
* Adicionar mais modos de jogo

## Fotos da aplicação

![Screenshot 1](/img/Captura1?raw=true "Tela Inicial")

![Screenshot 2](/img/Captura2?raw=true "Inicio do Jogo")

![Screenshot 3](/img/Captura3?raw=true "Passando de uma fase")

![Screenshot 4](/img/Captura4?raw=true "Fim de Jogo")