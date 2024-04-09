import { useState, useEffect } from 'react';
import React, { Component }  from 'react';

function getElement(moveCard: MoveCard): JSX.Element {
    if (moveCard.originalTitleText == null || moveCard.primaryImage == null) {
        return (
            <div></div>
        );
    }

    return (
        <div>
            <figure style={{ textAlign: 'center', }}>
                <div style={{width: '60px'}}>
                </div>
                <img src={moveCard.primaryImage.url} width={100} alt="" />
                <figcaption>{moveCard.originalTitleText.text}</figcaption>
            </figure>
        </div>
    )
}

class MoveCard {
    originalTitleText: { text: string } = { text: '' };
    primaryImage: { url: string } = { url: '' };

}

class ResultSearchTitle {
    results: [MoveCard] = [new MoveCard()];
}

const MovieDataBase = (keyWord: string) => {
    const url = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${keyWord}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd3d6615146msh9ac20ccf638b7dep1fb763jsnc5716d6693d4',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };
    const [movieCards, setMovieCard] = useState<ResultSearchTitle>(new ResultSearchTitle());
    useEffect(() => {
        fetch(url, options)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setMovieCard(data);
            });
    }, [keyWord]);
    return (
        <div>
            {movieCards.results?.map((movieCard: MoveCard): JSX.Element => {
                return getElement(movieCard);
            })}
        </div>
    );
};

export default MovieDataBase;