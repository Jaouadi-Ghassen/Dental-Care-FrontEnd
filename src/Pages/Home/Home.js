import React, { useState } from "react";
import HomeStyle from "./Home.module.css";
import dentalpic from "../../Assets/Images/dentalpic.jpg";
import jaque from "../../Assets/Images/Jaque.jpg";
import image from "../../Assets/Images/dentalpic.jpg";
import Service from "../../Components/Services/Service";
import { ImageScroll } from "../../Components/Parallax/ImageScroll";
import { Counter } from "../../Components/Counter/Counter";
import { Header } from "../../Components/Header/Header";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Review } from "../../Components/Review/Review";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";

export const Home = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    pays: "",
    service: "",
    date: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Invoice Details", 10, 10);
    doc.text(`Nom du Client : ${formData.nom}`, 60, 30);
    doc.text(`Prenom : ${formData.prenom}`, 10, 40);
    doc.text(`Email : ${formData.email}`, 10, 50);
    doc.text(`Telephone : ${formData.telephone}`, 10, 60);
    doc.text(`Pays : ${formData.pays}`, 10, 70);
    doc.text(`Service : ${formData.service}`, 10, 80);
    doc.text(`Sujet : ${formData.date}`, 10, 90);
    doc.text(`Message : ${formData.message}`, 10, 100);
    doc.save("invoice.pdf");
  };

  const pays = [
    {
      value: "Tun",
      name: "Tunisie",
    },
    {
      value: "Hon",
      name: "Hongrie",
    },
    {
      value: "Rmn",
      name: "Roumanie",
    },
    {
      value: "Esp",
      name: "Espagne",
    },
  ];

  const service = [
    {
      id: "1",
      name: "Facettes dentaires",
    },
    {
      id: "2",
      name: "Implant dentaire",
    },
    {
      id: "3",
      name: "Hollywood Smile",
    },
    {
      id: "3",
      name: "Couronne dentaire",
    },
  ];
  return (
    <>
      <div className={HomeStyle.home}>
        <Header />
        <div className={HomeStyle.info1}>
          <h1 className={HomeStyle.title}>
            Soins dentaires au meilleur rapport qualité-prix
          </h1>
          <p>
            Pionnier dans la baisse du coût des soins dentaires et
            l’optimisation du reste à charge, Eurodentaire permet d’accéder aux
            soins de qualité en toute sécurité. Eurodentaire lutte ainsi contre
            le renoncement aux soins en proposant des soins dentaires
            d’excellence à prix abordable en Europe.
          </p>
          <button className={HomeStyle.btn}>Consulter les Prix</button>
        </div>
        <Service />
        <Counter />
        <ImageScroll />
        <div className={HomeStyle.About}>
          <div className={HomeStyle.rectangle}></div>
          <img src={jaque} alt="" className={HomeStyle.image} />
          <div className={HomeStyle.content2}>
            <h1>Un nouveau chapitre de notre histoire</h1>
            <p>
              Nous avons évolué en parallèle avec une société en mutation, une
              économie changeante et de nouvelles technologies, tout en
              préservant notre engagement envers les soins dentaires et la santé
              bucco-dentaire. Aujourd'hui, nous nous préparons à écrire un
              nouveau chapitre dans notre histoire dentaire. Nous sommes entrés
              dans une nouvelle ère post-transformation digitale. Une ère où les
              besoins et les usages en matière de soins dentaires sont
              constamment réinventés. Il est devenu nécessaire pour nous
              d'ancrer cette nouvelle réalité du domaine des soins dentaires,
              tout en tournant une nouvelle page.
            </p>
            <p className={HomeStyle.signin}>
              <Link
                to="/About"
                className={HomeStyle.link}
                style={{ color: "green" }}
              >
                En savoire plus ...
              </Link>
            </p>
          </div>
        </div>
        <hr />
        <div className={HomeStyle.info1}>
          <h1 className={HomeStyle.title}>
            Soins dentaires au meilleur rapport qualité-prix
          </h1>
          <p>
            Notre mission est de faciliter, encadrer et sécuriser les soins
            dentaires à l’étranger. Ethique et rassurant, Eurodentaire est le
            tiers de confiance qui garantit les droits des patients et fait
            appliquer les engagements des parties.
          </p>
          <p>
            Eurodentaire lutte ainsi contre le renoncement aux soins en
            proposant des soins dentaires d’excellence à prix abordable en
            Europe.
          </p>
          <p>
            Eurodentaire est dépositaire de la première charte qualité relative
            à la mobilité médicale des patients en contexte de soins
            transfrontaliers pour un tourisme dentaire responsable.
          </p>
          <button className={HomeStyle.btn}>Voire la charte qualité</button>
        </div>
        <hr />
        {/* <Accordion /> */}
        <div className={HomeStyle.Clinic}>
          <div className={HomeStyle.content}>
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
              dentisterie internationale de haut vol. Elles suivent des
              protocoles dentaires stricts et adhèrent aux valeurs comme au bon
              fonctionnement de nos services dans une totale transparence .
            </p>
            <button className={HomeStyle.btn}>
              Voire les cliniques dentaires
            </button>
          </div>
          <div className={HomeStyle.rectangle}></div>
          <img src={image} alt="" className={HomeStyle.image2} />
        </div>
        <hr />
      </div>
      <div className={HomeStyle.form_Control}>
        <div className={HomeStyle.Appointment_info}>
          <h1 className={HomeStyle.rendezVous_title}>Prendre un rendez-vous</h1>
          <p className={HomeStyle.rendezVous}>
            Si vous n'arrivez pas à nous joindre par téléphone ou à prendre un
            rendez-vous chez un dentiste en ligne, y compris un rendez-vous chez
            un dentiste d'urgence, veuillez remplir le formulaire de demande de
            rappel suivant et notre équipe amicale vous rappellera.
          </p>
        </div>
        <div className={HomeStyle.layout}>
          <div className={HomeStyle.left}>
            <img src={dentalpic} alt="" className={HomeStyle.image1} />
            <h2>"Une équipe et un service formidables"</h2>
            <p>
              Belle environnement. La consultation s'est déroulée de manière très
              engageante et et beaucoup de discussions entre moi et le Dr. avant
              l'intervention. Il m'a Il m'a expliqué tous les détails et les
              étapes à suivre. Les soins dentaires ont été effectués avec
              précision et exactitude. Une attention aux détails comme je n'en
              ai jamais connu auparavant. que je n'avais jamais connue
              auparavant.
            </p>
            <h3>Jaouadi ghassen</h3>
          </div>
          <form className={HomeStyle.form}>
            <h1 className={HomeStyle.rendezVous_title}>
              Completer cette forme
            </h1>
            <div className={HomeStyle.flex}>
              <TextField
                required
                id="outlined-password-input"
                label="Nom"
                type="text"
                autoComplete="current-password"
                className={HomeStyle.input}
                name="nom"
                value={formData.nom}
                onChange={handleInputChange}
              />
              <TextField
                required
                id="outlined-password-input"
                label="Prénon"
                type="text"
                autoComplete="current-password"
                className={HomeStyle.input}
                name="prenom"
                value={formData.prenom}
                onChange={handleInputChange}
              />
            </div>
            <div className={HomeStyle.flex}>
              <TextField
                required
                id="outlined-password-input"
                label="E-mail"
                type="text"
                autoComplete="current-password"
                className={HomeStyle.input}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <TextField
                required
                id="outlined-password-input"
                label="Télephone"
                type="text"
                autoComplete="current-password"
                className={HomeStyle.input}
                name="telephone"
                value={formData.telephone}
                onChange={handleInputChange}
              />
            </div>
            <TextField
              required
              id="outlined-select-currency"
              select
              label="Choisire votre pays"
              name="pays"
              value={formData.invoiceNumber}
              onChange={handleInputChange}
            >
              {pays.map((p) => (
                <MenuItem key={p.value} value={p.name}>
                  {p.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="outlined-select-currency"
              select
              label="Services"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
            >
              {service.map((e) => (
                <MenuItem key={e.id} value={e.name}>
                  {e.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-password-input"
              label=""
              type="date"
              className={HomeStyle.input}
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
            <Button
              variant="contained"
              className={HomeStyle.log_btn}
              endIcon={<SendIcon />}
              onClick={generatePDF}
            >
              Envoyer
            </Button>
          </form>
        </div>
        <Review />
      </div>
    </>
  );
};
