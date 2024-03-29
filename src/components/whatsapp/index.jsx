

const Whatsapp = () => {
  return (
    <a
      href="https://api.whatsapp.com/message/7EJ3JJN4UHDJC1"
      rel="noreferrer"
      target="_blank"
      aria-label="Comunicarse al Whatsapp"
      className="hidden lg:fixed z-50 bottom-5 right-10 md:flex flex-col items-center text-green-700"
    >
      <figure>
        <img src="/megatech/icons/whatsapp.svg" alt="WhatsApp logo" className="w-full h-full" />
        <figcaption className="border border-green-700 bg-white px-2 rounded-3xl">
          Escribenos
        </figcaption>
      </figure>
    </a>
  );
};

export default Whatsapp;
