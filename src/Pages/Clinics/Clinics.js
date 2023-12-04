import React from "react";
import clinic from "../../Assets/Images/atikah.jpg";
import style from "./Clinics.module.css";
import { HeaderImage } from "../../Components/HeaderImage/HeaderImage";

export const Clinics = () => {
  return (
    <>
      <HeaderImage
        Image={clinic}
        header="Les Cliniques"
        content="List des cliniques nous offre"
      />
      <div className={style.wrapper}>
        <div className={style.card}>
          <img src={clinic} alt="" className={style.image} />
          <div className={style.carContent}>
            <h1 className={style.cardTitle}>Clinique Violet</h1>
            <h4 className={style.location}>Nabeul</h4>
            <p className={style.desc}>
              kjhfmkJZHENFMOKLEZMFODKJPZEIOFH PQUIEHSFD PC9QUIOHEF PMIOUQKEH
              DFMIUZHE FMUIK HJE%FOILh zùeofiyh ZOEUSFH %ouzehf
              cùOpzaejfùpiqzjeùfqlihzenf piqzh eùfpi ùqoizehf ùlje fùiopo
            </p>
            <button className={style.btn}>Voire plus</button>
          </div>
        </div>
        <div className={style.card}>
          <img src={clinic} alt="" className={style.image} />
          <div className={style.carContent}>
            <h1 className={style.cardTitle}>Clinique Amen</h1>
            <h4 className={style.location}>Nabeul</h4>
            <p className={style.desc}>
              kjhfmkJZHENFMOKLEZMFODKJPZEIOFH PQUIEHSFD PC9QUIOHEF PMIOUQKEH
              DFMIUZHE FMUIK HJE%FOILh zùeofiyh ZOEUSFH %ouzehf
              cùOpzaejfùpiqzjeùfqlihzenf piqzh eùfpi ùqoizehf ùlje fùiopo{" "}
            </p>
            <button className={style.btn}>Voire plus</button>
          </div>
        </div>
        <div className={style.card}>
          <img src={clinic} alt="" className={style.image} />
          <div className={style.carContent}>
            <h1 className={style.cardTitle}>Clinique Salem </h1>
            <h4 className={style.location}>Sousse</h4>
            <p className={style.desc}>
              kjhfmkJZHENFMOKLEZMFODKJPZEIOFH PQUIEHSFD PC9QUIOHEF PMIOUQKEH
              DFMIUZHE FMUIK HJE%FOILh zùeofiyh ZOEUSFH %ouzehf
              cùOpzaejfùpiqzjeùfqlihzenf piqzh eùfpi ùqoizehf ùlje fùiopo{" "}
            </p>
            <button className={style.btn}>Voire plus</button>
          </div>
        </div>
      </div>
    </>
  );
};
