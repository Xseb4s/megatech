import emailjs from '@emailjs/browser';

const sendEmail = (form) => {
  return emailjs.sendForm(
    `${import.meta.env.VITE_SERVICE}`,
    `${import.meta.env.VITE_TEMPLATE}`,
    form,
    `${import.meta.env.VITE_KEY}`
  );
};

export default sendEmail; 