import React from 'react';
import Moment from 'moment'
import { Card, ListGroup } from 'react-bootstrap';

export default function Character(props) {
    const {character} = props;

    return (                        
        <Card style={{ width: '15rem', float: 'left', margin: '1rem 15px 0 0', height: '29rem' }} key={character.id}>
            <div className="image-container">
                <Card.Img variant="top" src={character.image} />
                <div className="char-name-container">
                    <Card.Title>{character.name}</Card.Title>
                    <span>ID: {character.id} </span>-<span> Created: {Moment(character.created).fromNow()}</span> 
                </div>
            </div>
            <Card.Body>
                <div>
                    <ListGroup variant="flush" style={{ fontSize:'12px' }}>
                        <ListGroup.Item>
                            <span className="desc-label">Status:</span>
                            <span className="desc-value">{character.status}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span className="desc-label">Species:</span>
                            <span className="desc-value">{character.species}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span className="desc-label">Gender:</span>
                            <span className="desc-value">{character.gender}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span className="desc-label">Origin:</span>
                            <span className="desc-value">{character.origin.name}</span>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Card.Body>
        </Card>
    )
}