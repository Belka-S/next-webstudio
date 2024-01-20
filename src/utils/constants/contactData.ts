type Info = { title: string; label?: string; link: string; svgId?: string };

export interface IContactData {
  facebook: Info;
  github: Info;
  instagram: Info;
  linkedin: Info;
  mail: Info;
  map: Info;
  phone: Info;
  telegram: Info;
  twitter: Info;
  whatsapp: Info;
}

export const contactData: IContactData = {
  facebook: {
    title: 'facebook',
    label: 'Facebook',
    link: 'https://www.facebook.com/',
    svgId: 'contact-facebook',
  },
  github: {
    title: 'gitHub',
    label: 'github.com/Nick',
    link: 'https://github.com/',
    svgId: 'contact-github',
  },
  instagram: {
    title: 'instagram',
    label: 'Instagram',
    link: 'https://www.instagram.com/',
    svgId: 'contact-instagram',
  },
  linkedin: {
    title: 'linkedIn',
    label: 'linkedin.com/in/Nick',
    link: 'https://www.linkedin.com/',
    svgId: 'contact-linkedin',
  },
  mail: {
    title: 'mail',
    label: 'info@webstudio.com',
    link: 'mailto:info@devstudio.com',
    svgId: 'contact-mail',
  },
  map: {
    title: 'map',
    label: 'Ukraine, Kyiv, 26 Lesi Ukrainky Ave',
    link: 'https://goo.gl/maps/CPtrU1FHBa2aNyZL9',
    svgId: 'contact-map',
  },
  phone: {
    title: 'phone',
    label: '+38 (050) 123-44-55',
    link: 'tel:+380501234455',
    svgId: 'contact-phone',
  },
  telegram: {
    title: 'telegram',
    label: 't.me/Nick',
    link: 't.me/Nick',
    svgId: 'contact-telegram',
  },
  twitter: {
    title: 'twitter',
    label: 'X',
    link: 'https://twitter.com/',
    svgId: 'contact-twitter',
  },
  whatsapp: {
    title: 'whatsApp',
    label: 'wa.me/491711234455',
    link: 'wa.me/491711234455',
    svgId: 'contact-whatsapp',
  },
};
