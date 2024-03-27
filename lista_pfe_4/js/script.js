window.addEventListener('load', function () {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzdiMmUwZmUxMTY4OTU0OGM5ZGU1ZGRkYjQyMDcyMiIsInN1YiI6IjY1ZmI3YTU2NzcwNzAwMDE3YzA3MzZjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q1FJTtvyBZBPLFcnxTkmnJkrAB36DwqsgQN3QTwyAjw'
        }
    };

    const linguagem = 'pt-br';
    const paginas = [1]; // Apenas a primeira página para obter os 10 filmes mais populares

    const filmesPromises = paginas.map(pagina => {
        return fetch(`https://api.themoviedb.org/3/movie/popular?language=${linguagem}&page=${pagina}`, options)
            .then(response => response.json())
            .then(data => data.results)
            .catch(error => console.error('Erro ao obter filmes:', error));
    });

    Promise.all(filmesPromises)
        .then(results => {
            const filmes = results.flat().slice(0, 10); // Apenas os 10 filmes mais populares
            fetch('https://api.themoviedb.org/3/genre/movie/list?language=pt-BR', options)
                .then(response => response.json())
                .then(genresData => {
                    const genresMap = new Map(genresData.genres.map(genre => [genre.id, genre.name]));

                    filmes.forEach(filme => {
                        const objFilme = document.createElement('div');
                        objFilme.setAttribute('class', 'filme');
                        const tituloFilme = document.createElement('p');
                        const mediaNota = document.createElement('p');
                        const voteCount = document.createElement('p');
                        const generos = document.createElement('p');

                        tituloFilme.textContent = `${filme.title}`;
                        tituloFilme.setAttribute('style', 'font-weight: bold;');
                        mediaNota.textContent = `Nota média: ${filme.vote_average}`;
                        voteCount.textContent = `Votos: ${filme.vote_count}`;
                        const genreNames = filme.genre_ids.map(genreId => genresMap.get(genreId)).join(', ');
                        generos.textContent = `Gêneros: ${genreNames}`;

                        const capaFilme = document.createElement('img');
                        const url = `https://image.tmdb.org/t/p/w500`;
                        capaFilme.setAttribute('src', `${url}${filme.poster_path}`);

                        objFilme.appendChild(capaFilme);
                        objFilme.appendChild(tituloFilme);
                        objFilme.appendChild(mediaNota);
                        objFilme.appendChild(voteCount);
                        objFilme.appendChild(generos);

                        document.getElementById('box-filmes').appendChild(objFilme);
                    });
                })
                .catch(error => console.error('Erro ao obter gêneros:', error));
        })
        .catch(error => console.error('Erro ao processar filmes:', error));
});
