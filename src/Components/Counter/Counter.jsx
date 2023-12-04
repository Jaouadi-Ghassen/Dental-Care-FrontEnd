import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import counter from './Counter.module.css'

export const Counter = () => {

  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <ScrollTrigger onEnter={() => setCounterOn(true)}>
        <div className={counter.wrapper}>
          <div>
            <h1 className={counter.title}>Une équipe tunisienne à votre service</h1>
            <p className={counter.info}>Notre équipe est composée de professionnels français qui accompagnent le patient à chaque étape de son parcours de soin.</p>
            <p className={counter.info}>Nos Conseillers Experts suivent et assistent les candidats aux soins dans la recherche du meilleur traitement au meilleur prix puis organisent le traitement dans des cliniques dentaires d’exception en Hongrie, Roumanie et Espagne.</p>
          </div>
          <div className={counter.section}>
            <div className={counter.cree}>
              <h2>
                Créé en 2023
              </h2>
              par des tunisien pour le monde
            </div>
            <div className={counter.section1}>
              <h2>
                + de <span> </span>
                {counterOn && <CountUp start={0} end={500} duration={3} delay={0.7} />}
              </h2>
              traitements et séjours organisés
            </div>
          </div>
          <button className={counter.btn}>
            Découvrire notre équipe
          </button>
        </div>
      </ScrollTrigger>
    </>
  )
}
