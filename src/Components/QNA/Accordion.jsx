import React, { useState } from 'react';
import styles from './Accordian.module.css';
import img from '../../Assets/Images/dent-info-02.jpg'

export const Accordion = () => {
    const acc = [
        {
            question: 'Les dents de sagesse posent-elles toujours des problèmes ?',
            content: "Non. S'il y a suffisamment d'espace, elles se mettent généralement en position utile et ne posent pas plus de problèmes que n'importe quelle autre dent. Il y a souvent une légère gêne au moment de la percée, mais elle disparaît une fois que la dent est complètement en place.",
            isExpanded: false,
        },
        {
            question: 'À quelle fréquence ai-je besoin d’examens dentaires ?',
            content: "La plupart des gens supposent qu'ils ont besoin d'un examen dentaire une ou deux fois par an. Bien que cela soit considéré comme la norme, chaque personne a des besoins individuels avec son propre programme de soins préventifs idéal. Par conséquent, n'ayez jamais peur de demander combien d'examens vous avez besoin pour garder votre santé bucco-dentaire optimisée.",
            isExpanded: false,
        },
        {
            question: 'Comment puis-je éviter les problèmes dentaires ?',
            content: "Souvent, les patients qui souffrent de problèmes persistants tels que des caries ou des problèmes de gencives ne pensent pas à se demander s'il existe un moyen d'éviter d'autres problèmes. Bien que votre dentiste doive prendre toutes les mesures nécessaires pour vous aider à éviter de tels problèmes, il est toujours préférable d'adopter une approche plus proactive de vos propres soins dentaires.",
            isExpanded: false,
        },
        {
            question: 'Pourquoi dois-je remplacer les dents manquantes ?',
            content: "Si votre dentiste recommande de remplacer les dents manquantes, c'est parce que vous devez éviter d'autres dommages lorsque vos dents restantes commencent à se déplacer dans votre bouche. Cela peut causer toutes sortes de problèmes, y compris une perte de dents supplémentaire. Qu'il s'agisse d'une prothèse dentaire ou d'implants, les dents manquantes doivent être remplacées pour éviter des dommages irréparables dans le futur.",
            isExpanded: false,
        }
    ];

    const parag = "Nos FAQ sont les questions les plus fréquemment posées à notre ligne d'assistance dentaire au cours de l'année écoulée. Si vous avez une question à nous poser, vous pouvez vous adresser à notre service d'assistance dentaire par téléphone ou par courrier électronique. Vous pouvez également consulter notre bibliothèque d'informations sur la santé bucco-dentaire, qui contient un large éventail de conseils sur la santé bucco-dentaire sous forme de questions-réponses faciles à comprendre."

    const toggleAccordion = (index) => {
        setAccordionData((prevState) =>
            prevState.map((item, i) =>
                i === index ? { ...item, isExpanded: !item.isExpanded } : item
            )
        );
    };

    const [accordionData, setAccordionData] = useState(acc);

    return (
        <>
        <hr/>
            <div className={styles.wrapper}>
                <div className={styles.accd}>
                    <p className={styles.prag}>QUESTIONS FRÉQUEMMENT POSÉES SUR LA SANTÉ DENTAIRE</p>
                    <h1 className={styles.qna}>FAQs</h1>
                    <p className={styles.prag2}>{parag}</p>
                    {accordionData.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.accordion} ${item.isExpanded ? styles.expanded : ''
                                }`}
                        >
                            <button
                                className={styles.toggleBtn}
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className={styles.title}>{item.question}</span>
                                <span
                                    className={`${styles.icon} ${item.isExpanded ? styles.expandedIcon : ''
                                        }`}
                                ></span>
                            </button>
                            <div className={styles.content}>{item.content}</div>
                        </div>
                    ))}
                </div>
                <div className={styles.vl}></div>
                <div className={styles.imageWrapper}>
                    <img src={img} alt="" className={`${styles.image} ${styles.expandedImage}`} />
                </div>
            </div>
        </>
    );
};
