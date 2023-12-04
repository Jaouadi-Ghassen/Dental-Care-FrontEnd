import React from "react";
import style from "./Service.module.css";
import image from "../../Assets/Images/about-banner-05.jpg";
import { Link } from "react-router-dom";
import image1 from "../../Assets/Images/hollywood-smile-makeover.jpg";
import image2 from "../../Assets/Images/white-fillings-service.jpg";
import image3 from "../../Assets/Images/x-rays-service.jpg";
import image4 from "../../Assets/Images/bilgisi.jpg";

export const Service = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.header}>
          <p className={style.h1}>UNE EXPÉRIENCE DENTAIRE LUXUEUSE</p>
          <h1>Notre mission est de réimaginer les soins dentaires.</h1>
          <p>
            Notre mission est d'assurer la fourniture de soins dentaires de la
            plus haute qualité grâce à une approche honnête et éthique du
            traitement. soins dentaires de la plus haute qualité par une
            approche honnête et éthique du traitement.
          </p>
        </div>
        <div className={style.headerImage}>
          <img src={image} alt="" className={style.image} />
          <div className={style.background}></div>
          <div className={style.overlay}>
            <p>“Creating smiles generation to generation”</p>
          </div>
        </div>
        <div>
          <div className={style.info}>
            <p>
              Lors de la recherche d'informations, le patient en quête de soins
              dentaires nécessite des réponses spécifiques et adaptées à sa
              situation dentaire particulière. Il souhaite comparer non
              seulement les tarifs des traitements, mais aussi les modalités de
              prise en charge, et avoir une idée précise du montant restant à sa
              charge après les remboursements de l'assurance.
            </p>
            <p>
              Le devis dentaire lui offre une expertise personnalisée en
              proposant les options de traitement dentaire les mieux adaptées à
              ses besoins et demandes spécifiques. Ce devis est conçu sur mesure
              et détaille de manière précise les modalités des soins ainsi que
              celles liées aux séjours éventuels.
            </p>
            <p>
              Toutes ces informations permettent de documenter la démarche du
              patient et de prendre la décision la plus éclairée possible
              concernant son traitement et le choix de sa clinique dentaire.
            </p>
          </div>
        </div>
        <div className={style.section}>
          <div className={style.cardSection}>
            <div className={style.card}>
              <img src={image1} alt="" className={style.cardImage} />
              <h1>Hollywood Smile makover</h1>
              <p>Allah allah ye baba</p>
              <Link to="/About" className={style.btn}>
                En savoir plus
              </Link>
            </div>
            <div className={style.card}>
              <img src={image2} alt="" className={style.cardImage} />
              <h1>Hollywood Smile makover</h1>
              <p>Allah allah ye baba</p>
              <Link to="/About" className={style.btn}>
                En savoir plus
              </Link>
            </div>
            <div className={style.card}>
              <img src={image3} alt="" className={style.cardImage} />
              <h1>Hollywood Smile makover</h1>
              <p>Allah allah ye baba</p>
              <Link to="/About" className={style.btn}>
                En savoir plus
              </Link>
            </div>
            <div className={style.card}>
              <img src={image4} alt="" className={style.cardImage} />
              <h1>Hollywood Smile makover</h1>
              <p>Allah allah ye baba</p>
              <Link to="/About" className={style.btn}>
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
