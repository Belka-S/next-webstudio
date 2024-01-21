import s from './MapFrame.module.scss';

const MapFrame = () => {
  return (
    <section className={s.map}>
      <h1 className="hidden">Contacts</h1>
      <iframe
        className={s.map__frame}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.775541247346!2d30.537047534579646!3d50.42665351686074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0e033ecbe9%3A0x57a4dffefec77da0!2z0LHRg9C7LiDQm9C10YHQuCDQo9C60YDQsNC40L3QutC4LCAyNiwg0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2sde!4v1669040813031!5m2!1sru!2sde"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default MapFrame;
