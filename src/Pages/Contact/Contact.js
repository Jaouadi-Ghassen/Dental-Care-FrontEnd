import React from "react";
import contactS from "./Contact.module.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import dentalpic from "../../Assets/Images/dentalpic.jpg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import contact from "../../Assets/Images/contact.png";
import { HeaderImage } from "../../Components/HeaderImage/HeaderImage";
import { Accordion } from "../../Components/QNA/Accordion";

export const Contact = () => {

  const header = "Une équipe Tunisienne à votre service";
  const parag1 =
    "Les représentants du service clientèle sont disponibles à tout moment pour répondre aux questions concernant votre assurance dentaire, les demandes de remboursement, les procédures de paiement, les modifications de vos coordonnées ou d'autres sujets.";
  const parag2 =
    "Nos Conseillers Experts suivent et assistent les candidats aux soins dans la recherche du meilleur traitement au meilleur prix puis organisent le traitement dans des cliniques dentaires d’exception en Hongrie, Roumanie et Espagne.";

  return (
    <>
      <HeaderImage
        Image={contact}
        header="Contacter nous"
        content="N'hésitez pas à nous contacter si vous avez des questions concernant nos traitements ou pour prendre un rendez-vous chez le dentiste."
      />
      <div className={contactS.top}>
        <h1 className={contactS.header}>{header}</h1>
        <p className={contactS.parag}>{parag1}</p>
        <p className={contactS.parag}>{parag2}</p>
      </div>
      <div className={contactS.section}>
        <div className={contactS.layout}>
          <div className={contactS.left}>
            <img src={dentalpic} alt="" className={contactS.image} />
            <h2>Envoyer votre demande</h2>
            <h5>Dental care</h5>
            <div className={contactS.coordinates}>
              <span className={contactS.icons}>
                {" "}
                <LocalHospitalIcon /> 56230167
              </span>
              <span className={contactS.icons}>
                {" "}
                <LocalPhoneIcon /> 56230167
              </span>
              <span className={contactS.icons}>
                {" "}
                <SendIcon /> 56230167
              </span>
              <span className={contactS.icons}>
                {" "}
                <LocationOnIcon /> 56230167
              </span>
            </div>
          </div>
          <form className={contactS.form}>
            <h1 className={contactS.title}>Completer cette forme</h1>
            <div className={contactS.flex}>
              <TextField
                required
                id="outlined-password-input"
                label="Nom"
                type="text"
                autoComplete="current-password"
                className={contactS.input}
              />
              <TextField
                required
                id="outlined-password-input"
                label="Prénon"
                type="text"
                autoComplete="current-password"
                className={contactS.input}
              />
            </div>
            <div className={contactS.flex}>
              <TextField
                required
                id="outlined-password-input"
                label="E-mail"
                type="text"
                autoComplete="current-password"
                className={contactS.input}
              />
              <TextField
                required
                id="outlined-password-input"
                label="Télephone"
                type="text"
                autoComplete="current-password"
                className={contactS.input}
              />
            </div>
         
            <TextField
              id="outlined-password-input"
              label="Sujet"
              type="text"
              autoComplete="current-password"
              className={contactS.input}
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
            />
            <Button
              variant="contained"
              className={contactS.log_btn}
              endIcon={<SendIcon />}
            >
              Envoyer
            </Button>
          </form>
        </div>
      </div>
      <Accordion/>
    </>
  );
};
