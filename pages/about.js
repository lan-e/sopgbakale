import React from "react";
import Image from "next/image";
import nasad from "../src/nasad.png";
import nasad2 from "../src/nasad2.png";
import zivo1 from "../src/zivo1.jpg";
import stroj from "../src/stroj.jpg";
const AboutUs = () => {
  return (
    <div>
      <div class="text-container">
        <h2>SOPG Bakale</h2>
        <div>Osnovani smo 2017. godine kao OPG Bakale.</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          aliquam nisl ut augue suscipit, eu pellentesque leo venenatis. Duis
          ultricies placerat lacus sit amet dapibus. Curabitur ut leo id orci
          tincidunt vulputate vitae fringilla nisi. Nullam porttitor dolor
          dolor, in elementum nisi sollicitudin sit amet. Curabitur nec gravida
          massa. Nulla lorem ante, hendrerit cursus diam vel, faucibus iaculis
          urna. Donec a laoreet arcu. Suspendisse a diam eu ipsum sodales
          imperdiet. Morbi ullamcorper sapien orci, a imperdiet arcu maximus
          congue. Pellentesque consectetur dui sed arcu malesuada sagittis.
          Nullam sodales efficitur convallis. Pellentesque aliquam odio quis
          sollicitudin posuere. Quisque libero ipsum, ultricies vel varius quis,
          faucibus sit amet lorem. Aenean iaculis ex nec arcu dignissim, ut
          venenatis sem ullamcorper. In pulvinar sit amet libero ac congue.
          Praesent condimentum tortor mauris, eget tristique lacus volutpat at.
          Vivamus bibendum ullamcorper pharetra. Cras quis nunc vitae nibh
          dignissim blandit id molestie metus. Curabitur ultrices ac nisi non
          vestibulum. Cras ut pharetra ex. Suspendisse potenti. Ut ullamcorper
          erat sem, quis commodo leo rutrum eu. In id erat dapibus, hendrerit
          augue eget, pulvinar purus. Maecenas viverra et turpis eget malesuada.
          Nunc id risus aliquam, vulputate augue quis, euismod mi. Curabitur
          ultrices ac nisi non vestibulum. Cras ut pharetra ex. Suspendisse
          potenti. Ut ullamcorper erat sem, quis commodo leo rutrum eu. In id
          erat dapibus, hendrerit augue eget, pulvinar purus. Maecenas viverra
          et turpis eget malesuada. Nunc id risus aliquam, vulputate augue quis,
          euismod mi. Curabitur ultrices ac nisi non vestibulum. Cras ut
          pharetra ex. Suspendisse potenti. Ut ullamcorper erat sem, quis
          commodo leo rutrum eu. In id erat dapibus, hendrerit augue eget,
          pulvinar purus. Maecenas viverra et turpis eget malesuada. Nunc id
          risus aliquam, vulputate augue quis, euismod mi.
        </div>
      </div>
      <div class="onama-container">
        <a>
          <Image src={nasad} alt="nasad" height="300" width="300" />
        </a>
        <a>
          <Image src={nasad2} alt="nasad" height="300" width="300" />
        </a>
        <a
          href="https://www.facebook.com/bakale5/posts/pfbid0Evnw3ohJUYEcbRWnPtmEqfUrNJ4JZ2MwCCVw4SU2d1M1y8gVDMPFaKBxyrAh5cHfl"
          target="_blank"
        >
          <Image src={stroj} alt="nasad" height="300" width="300" />
        </a>
        <a
          href="https://www.facebook.com/bakale5/posts/pfbid02mVVQhXHzBAZQY4zvxhPnJFDUpChQH45YmaV7BzkG8AnL1jHJACjEp7rBBCuiJLjzl"
          target="_blank"
        >
          <Image src={zivo1} alt="nasad" height="300" width="300" />
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
