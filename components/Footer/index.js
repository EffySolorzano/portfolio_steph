import React from 'react';
import Socials from '../Socials';
import Link from 'next/link';
import Button from '../Button';
import ContactForm from '../ContactForm';

const Footer = ({ isModalOpen, openModal, closeModal }) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <Button type="primary" onClick={openModal}>Hit me up!</Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div> 
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{' '}
        <Link href="https://portfolio-steph.vercel.app/">
          <a className="underline underline-offset-1">Stephanie Solórzano</a>
        </Link>
      </h1>
      {isModalOpen && <ContactForm onClose={closeModal} />}
    </>
  );
};

export default Footer;
