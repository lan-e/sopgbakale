import React from "react";
import Image from "next/image";
import nasad from "../src/nasad.jpg";
import nasad2 from "../src/nasad2.jpg";
import zivo1 from "../src/zivo1.jpg";
import stroj from "../src/stroj.jpg";
const AboutUs = () => {
  return (
    <div>
      <div class="text-container">
        <div class="text-container-item-left">
          <h2>SOPG Bakale</h2>
          <div>Osnovani 2017. godine kao OPG Bakale.</div>
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
            uvjeti. Najveći problem je bio mraz, koji uništi sav trud i rad i ne
            dobije se nikakav proizvod. Pokušavaju te probleme smanjiti kako ne
            bi imali probleme u poslovanju, ali i razočarali kupce.
          </div>
          <div>
            Hrvatska proizvodi samo 30-40% količine lješnjaka, dok se ostalo
            uvozi. To je ovaj SOPG potaklo na uzgoj baš ove kulture. Ovaj
            proizvod ne mora ići na tržište odmah nakon branja, već postoje
            mogućnosti prerade.
          </div>
        </div>
        <div class="text-container-item-right">
          <h3>Budućnost?</h3>
          Cilj je u budućnosti od lješnjaka proizvoditi ulje, brašno i maslac te
          koru od lješnjaka pretvarati u energiju, tj. pelete za grijanje.
          Trenutno već imaju mašinu koja pretvara granje koje se obrezuje u
          biomasu. Tom biomasom suše se lješnjaci jer pelete koriste kao
          ogrijevnu vrijednost.
        </div>
      </div>
      <div class="onama-container">
        <a class="onama-image">
          <Image src={nasad} alt="onama" />
        </a>
        <a class="onama-image">
          <Image src={nasad2} alt="onama" />
        </a>
        <a
          class="onama-image"
          href="https://www.facebook.com/bakale5/posts/pfbid0Evnw3ohJUYEcbRWnPtmEqfUrNJ4JZ2MwCCVw4SU2d1M1y8gVDMPFaKBxyrAh5cHfl"
          target="_blank"
        >
          <Image src={stroj} alt="onama" />
        </a>
        <a
          class="onama-image"
          href="https://www.facebook.com/bakale5/posts/pfbid02mVVQhXHzBAZQY4zvxhPnJFDUpChQH45YmaV7BzkG8AnL1jHJACjEp7rBBCuiJLjzl"
          target="_blank"
        >
          <Image src={zivo1} alt="onama" class="onama-image" />
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
