import React from "react";
import about from "../../Assets/Images/diana.jpg";
import style from "./About.module.css";
import { HeaderImage } from "../../Components/HeaderImage/HeaderImage";
import jaque from "../../Assets/Images/about1.jpg";
import image from "../../Assets/Images/about2.jpg";

export const About = () => {
  return (
    <>
      <HeaderImage
        Image={about}
        header="A propos de nous"
        content="List des cliniques nous offre"
        className={style.image}
      />
      <div className={style.About}>
        <div className={style.rectangle}></div>
        <img src={jaque} alt="" className={style.person} />
        <div className={style.content2}>
          <h1>À propos de nous</h1>
          <p>
            Chez DentalCare, nous sommes dévoués à offrir des services dentaires
            de haute qualité à nos patients. Avec une équipe de professionnels
            hautement qualifiés et bienveillants, nous nous efforçons de fournir
            le plus haut niveau de soins dans un environnement chaleureux et
            accueillant. Notre engagement envers l'excellence en matière de
            soins dentaires est soutenu par notre équipe de professionnels
            passionnés, qui mettent en œuvre leurs compétences exceptionnelles
            pour garantir le bien-être et la satisfaction de nos patients.
            Chaque membre de notre équipe partage une vision commune : celle de
            créer des sourires sains et radieux tout en offrant une expérience
            agréable et réconfortante. Nous croyons fermement que chaque visite
            chez DentalCare devrait être une expérience positive .
          </p>
        </div>
      </div>
      <hr />
      <div className={style.Clinic}>
        <div className={style.content}>
          <h1>Des cliniques dentaires exclusives</h1>
          <p>
            Grâce à une approche dédiée à l’internationale et de nombreuses
            années d’expérience, Eurodentaire organise les soins dentaires en
            toute confiance et sécurité dans des cliniques dentaires haut de
            gamme et exclusives.
          </p>
          <p>
            Les cliniques internationales labellisées par Eurodentaire font
            partie du haut du panier. Elles disposent des infrastructures, des
            équipements et des équipes indispensables à la pratique d’une
            dentisterie internationale de haut vol. Elles suivent des protocoles
            dentaires stricts et adhèrent aux valeurs comme au bon
            fonctionnement de nos services dans une totale transparence .
          </p>
        </div>
        <div className={style.rectangle}></div>
        <img src={image} alt="" className={style.image2} />
      </div>
      <hr />
      <div className={style.About}>
        <div className={style.rectangle}></div>
        <img src={jaque} alt="" className={style.person} />
        <div className={style.content2}>
          <h1>Un nouveau chapitre de notre histoire</h1>
          <p>
            Nous avons évolué en parallèle avec une société en mutation, une
            économie changeante et de nouvelles technologies, tout en préservant
            notre engagement envers les soins dentaires et la santé
            bucco-dentaire. Aujourd'hui, nous nous préparons à écrire un nouveau
            chapitre dans notre histoire dentaire. Nous sommes entrés dans une
            nouvelle ère post-transformation digitale. Une ère où les besoins et
            les usages en matière de soins dentaires sont constamment
            réinventés. Il est devenu nécessaire pour nous d'ancrer cette
            nouvelle réalité du domaine des soins dentaires, tout en tournant
            une nouvelle page.
          </p>
        </div>
      </div>
      <hr />
      <div className={style.Clinic}>
        <div className={style.content}>
          <h1>Des cliniques dentaires exclusives</h1>
          <p>
            Grâce à une approche dédiée à l’internationale et de nombreuses
            années d’expérience, Eurodentaire organise les soins dentaires en
            toute confiance et sécurité dans des cliniques dentaires haut de
            gamme et exclusives.
          </p>
          <p>
            Les cliniques internationales labellisées par Eurodentaire font
            partie du haut du panier. Elles disposent des infrastructures, des
            équipements et des équipes indispensables à la pratique d’une
            dentisterie internationale de haut vol. Elles suivent des protocoles
            dentaires stricts et adhèrent aux valeurs comme au bon
            fonctionnement de nos services dans une totale transparence .
          </p>
        </div>
        <div className={style.rectangle}></div>
        <img src={image} alt="" className={style.image2} />
      </div>
    </>
  );
};
