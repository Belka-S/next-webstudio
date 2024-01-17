type Info = { title: string; label?: string; href: string };
type ContactData = {
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
};

export const contactData: ContactData = {
  facebook: {
    title: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/',
  },
  github: {
    title: 'gitHub',
    label: 'github.com/Nick',
    href: 'https://github.com/',
  },
  instagram: {
    title: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/',
  },
  linkedin: {
    title: 'linkedin',
    label: 'linkedin.com/in/Nick',
    href: 'https://www.linkedin.com/',
  },
  mail: {
    title: 'mail',
    label: 'info@devstudio.com',
    href: 'mailto:info@devstudio.com',
  },
  map: {
    title: 'map',
    label: 'Ukraine, Kyiv, 26 Lesi Ukrainky Ave',
    href: 'https://goo.gl/maps/CPtrU1FHBa2aNyZL9',
  },
  phone: {
    title: 'phone',
    label: '+49 (171) 123-44-55',
    href: 'tel:+491711234455',
  },
  telegram: {
    title: 'telegram',
    label: 't.me/Nick',
    href: 't.me/Nick',
  },
  twitter: {
    title: 'twitter',
    label: 'X',
    href: 'https://twitter.com/',
  },
  whatsapp: {
    title: 'whatsapp',
    label: 'wa.me/491711234455',
    href: 'wa.me/491711234455',
  },
};
