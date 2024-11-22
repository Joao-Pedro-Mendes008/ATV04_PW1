const titleList = []

const titleMap = new Map()

const GenreSet = new Set()

const addBook = ((Title, Author, Genre) => {
    titleMap.set(Title, Genre, Author)
    titleList.push({Titulo: Title, Autor: Author, Genero: Genre})
})

const addGenre = ((Genre)=>{
    GenreSet.add(Genre)
})

const removeBook = ((Title) => {
    titleMap.delete(Title)
    titleList.splice(Title)
});

const verifyDisponibility = ((Title) => {
    let verification = titleList.find( b => b.Titulo === Title)
    if (verification){
        console.log('O livro está disponível')
    }
    else {
        console.log('O livro não está disponível')
    }
})

const listBooks = (() => {
    console.log(titleList)
})

const searchingFunction = ((SearchedGenre) => {
    let search = titleList.filter( g => g.Genero === SearchedGenre)
    console.log('Os titutos a seguir possuem o genero específicado: ')
    console.log(search)})


addBook('Dom Casmurro', 'Machado de Assis', 'Suspense')
addBook('Dom Casmurro 2', 'Machado de Assis', 'Suspense')

listBooks()

addGenre('Suspense')

verifyDisponibility('Dom Casmurro')

searchingFunction('Suspense')






