import React from "react";


const Article = ({title, date='January 1, 1970', preview, minutes}) => {
    const coffee = (mins) => {
        const numberOfCoffee = Math.ceil(mins/5);
        let counter = 0;
        let cup = "☕️"
        const cups = []
        while (counter < numberOfCoffee){
            cups.push(cup)
            counter++
        }
        if (mins <= 1 ){
            return cups.join('') + ` ${mins} min read`;
        }else{
            return cups.join('') + ` ${mins} mins read`;
        }
        
    }

    const bentoBox = (mins) => {
        const numberOfBento = Math.ceil(mins/10);
        let counter = 0;
        let bento = "🍱"
        const bentoBoxes = []
        while (counter < numberOfBento){
            bentoBoxes.push(bento)
            counter++
        }
        
        if (mins <=1 ){
            return bentoBoxes.join('') + ` ${mins} min read`;
        }else {
            return bentoBoxes.join('') + ` ${mins} mins read`;
        }
    }

    return(
        <>
            <h3>{title}</h3>
            <small>{date}</small> &bull; <small>{minutes < 30 ? coffee(minutes) : bentoBox(minutes)}</small>
            <p>{preview}</p>
        </>
    );
}

export default Article;