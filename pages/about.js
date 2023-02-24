import React from "react";
import Image from "next/image";
import nasad from "../src/nasad.jpg";
import nasad2 from "../src/nasad2.jpg";
import zivo1 from "../src/zivo1.jpg";
import stroj from "../src/stroj.jpg";
const AboutUs = () => {
  return (
    <div>
      <div className="text-container">
        <div className="text-container-item-left">
          <h2>SOPG Bakale</h2>
          <div>
            Osnovani 2017. godine. Od proizvoda nude med, lješnjak, propolis i
            prirodne sokove.
            <div>
              Ako ti je previše teksta, preskoči ovaj dio i pogledaj video :){" "}
            </div>
          </div>

          <div>
            <h3>Kako i zašto?</h3>
            Odluka o otvaranju OPG Bakale nastala je u potrebi što boljeg
            iskorištenja zemlje u vlasništvu obitelji Bakale. Za prihod, ali
            prvotno za potrebe vlastite obitelji. Hrvoje je sadnju ljeske
            započeo već kao student pa je tako nasad star već 6 godina i donosi
            plodove. Tu je imao potporu obitelji. Zajednički su odradili
            pripremu tla - bušenje rupa, kupnju sadnica i samo sađenje.
          </div>
          <div>
            <h3>Problemi?</h3>U poljoprivredi su najveći problem vremenski
            uvjeti. Najveći problem je bio mraz, koji uništi sav trud, rad i ne
            dobije se nikakav proizvod. Pokušavaju te probleme smanjiti kako ne
            bi imali probleme u poslovanju, ali i razočarali kupce.
          </div>
          <div>
            Hrvatska proizvodi samo 30-40% količine lješnjaka, dok se ostalo
            uvozi. To je ovaj SOPG potaklo na uzgoj baš ove kulture. Ovaj
            proizvod ne mora ići na tržište odmah nakon branja, već postoje
            mogućnosti prerade.
          </div>
          <div>
            <h3>Budućnost?</h3>
            Cilj je u budućnosti od lješnjaka proizvoditi ulje, brašno i maslac
            te koru od lješnjaka pretvarati u energiju, tj. pelete za grijanje.
            Trenutno već imaju mašinu koja pretvara granje koje se obrezuje u
            biomasu.
          </div>
        </div>

        <div className="text-container-item-right">
          <div className="embeded">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/tdjl_5MiC2s`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="contact">
            <h2>Kontakt podaci</h2>
            <div>Hrvoje Bakale</div>
            <div>Donja Gaza 9, 47000 Karlovac</div>
            <div>OIB: 29302962674</div>
            <div>MIBPG: 246798</div>
          </div>
        </div>
      </div>
      <div className="embeded">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1687.6335941563416!2d15.556252721888987!3d45.50327687495708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47643df8e1883f6f%3A0x2ee3fe77b213de28!2sOPG%20Bakale%20Hrvoje!5e1!3m2!1shr!2shr!4v1677256087997!5m2!1shr!2shr"
          width="90%"
          height="450"
          frameBorder="0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* <div className="onama-container">
        <a className="onama-image">
          <Image src={nasad} alt="onama" />
        </a>
        <a className="onama-image">
          <Image src={nasad2} alt="onama" />
        </a>
        <a
          className="onama-image"
          href="https://www.facebook.com/bakale5/posts/pfbid0Evnw3ohJUYEcbRWnPtmEqfUrNJ4JZ2MwCCVw4SU2d1M1y8gVDMPFaKBxyrAh5cHfl"
          target="_blank"
        >
          <Image src={stroj} alt="onama" />
        </a>
        <a
          className="onama-image"
          href="https://www.facebook.com/bakale5/posts/pfbid02mVVQhXHzBAZQY4zvxhPnJFDUpChQH45YmaV7BzkG8AnL1jHJACjEp7rBBCuiJLjzl"
          target="_blank"
        >
          <Image src={zivo1} alt="onama" className="onama-image" />
        </a>
      </div>*/}
    </div>
  );
};

export default AboutUs;
