export function setCharactersFiltersAction (characters) {
    const data = {
        species: [],
        gender: [],
        status: []
    };

    characters.forEach(character => {
        if (data.species && data.species.indexOf(character.species) === -1) {
            data.species = data.species.concat(character.species);
        }

        if (data.gender && data.gender.indexOf(character.gender) === -1) {
            data.gender = data.gender.concat(character.gender);
        }

        if (data.status && data.status.indexOf(character.status) === -1) {
            data.status = data.status.concat(character.status);
        }
    });
    return {type: 'SET_FILTERS', payload: data}
}