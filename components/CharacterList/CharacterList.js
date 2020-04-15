import React from 'react';
import Character from '../Character/Character';

export default function CharacterList(props) {
    return props.characters.map(character => <Character character={character} />);

}