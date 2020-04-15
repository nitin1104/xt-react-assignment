export function setCharactersFiltersAction (characters) {
    const data = {
        species: [],
        gender: [],
        status: []
    };

    characters.forEach(character => {
        console.log(" I am in ");
        if (data.species && data.species.indexOf(character.species) === -1) {
            console.log(" I am in one more step")
            data.species = data.species.concat(character.species);
        }

        if (data.gender && data.gender.indexOf(character.gender) === -1) {
            data.gender = data.gender.concat(character.gender);
        }

        if (data.status && data.status.indexOf(character.status) === -1) {
            data.status = data.status.concat(character.status);
        }
    });
    console.log('DATA', data)
    return {type: 'SET_FILTERS', payload: data}
    //this.props.dispatch({type: 'SET_FILTERS', payload: data})
}