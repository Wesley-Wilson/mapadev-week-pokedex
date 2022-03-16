//alert('neymar')
//Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela.
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

//Trabalhar com o evento do clique feito pelo usuário na listagem de pokémons. 
listaSelecaoPokemons.forEach(pokemon => {


    pokemon.addEventListener('click', () => {
        //- remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        //- ao clicar em pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar.
        const idPokemonSelecionado = pokemon.attributes.id.value 

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir) 
        cartaoPokemonParaAbrir.classList.add('aberto')

        //- remover a classe ativo que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})

