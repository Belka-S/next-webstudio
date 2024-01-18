type Info = { title: string; label?: string; href: string; svgId?: string };

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
    href: 'https://www.facebook.com/',
    svgId: 'contact-facebook',
  },
  github: {
    title: 'gitHub',
    label: 'github.com/Nick',
    href: 'https://github.com/',
    svgId: 'contact-github',
  },
  instagram: {
    title: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    svgId: 'contact-instagram',
  },
  linkedin: {
    title: 'linkedIn',
    label: 'linkedin.com/in/Nick',
    href: 'https://www.linkedin.com/',
    svgId: 'contact-linkedin',
  },
  mail: {
    title: 'mail',
    label: 'info@webstudio.com',
    href: 'mailto:info@devstudio.com',
    svgId: 'contact-mail',
  },
  map: {
    title: 'map',
    label: 'Ukraine, Kyiv, 26 Lesi Ukrainky Ave',
    href: 'https://goo.gl/maps/CPtrU1FHBa2aNyZL9',
    svgId: 'contact-map',
  },
  phone: {
    title: 'phone',
    label: '+38 (050) 123-44-55',
    href: 'tel:+380501234455',
    svgId: 'contact-phone',
  },
  telegram: {
    title: 'telegram',
    label: 't.me/Nick',
    href: 't.me/Nick',
    svgId: 'contact-telegram',
  },
  twitter: {
    title: 'twitter',
    label: 'X',
    href: 'https://twitter.com/',
    svgId: 'contact-twitter',
  },
  whatsapp: {
    title: 'whatsApp',
    label: 'wa.me/491711234455',
    href: 'wa.me/491711234455',
    svgId: 'contact-whatsapp',
  },
};
