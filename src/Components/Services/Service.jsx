// App.js
import React from 'react';
import Card from '../Card/Card';
import card from './Service.module.css'
import { Link } from 'react-router-dom';



const bogliasco = "https://i-sam.unimedias.fr/2021/05/04/implants-dentaires.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=487&w=866";
const countyClare = "https://www.dentistejavea.com/images/1000-712/files/pages/traitements-dentaires/strongcouronnesstrong-et-strongbridgesstrong.jpg";
const craterRock = "https://www.chirurg-laser.com/wp-content/uploads/2019/11/hollywood-smile-1.jpg";

const Service = () => {


    return (
        <div className={card.body}>
            <div className={card.info}>
                <h1 className={card.tit}>Des soins dentaires adaptés à vos besoins</h1>
                <p className={card.desc}>Vous recherchez un traitement dentaire moderne et performant? Nous vous proposons de comparer les options de soins et évaluer les meilleures alternatives en terme de traitement.</p>
            </div>
            <div className={card.section} style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Card
                    title="Implants dentaires"
                    content="Traitement le plus performant"
                    imageUrl={bogliasco}
                />
                <Card
                    title="Couronnes et bridges"
                    content="Solution classique et économique"
                    imageUrl={countyClare}
                />
                <Card
                    title="Soins esthétiques dentaire"
                    content="Pour magnifier le sourire"
                    imageUrl={craterRock}
                />
            </div>
            <p className={card.goto}>
              <Link to="/Service" className={card.link}  style={{color: "green"}}>
                En savoire plus ...
              </Link>
            </p>
        </div>
    );
};

export default Service;
