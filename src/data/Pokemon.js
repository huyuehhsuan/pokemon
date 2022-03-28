class Pokemon {
    async getPokemon(id) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return res.json();
    }

}

export default Pokemon