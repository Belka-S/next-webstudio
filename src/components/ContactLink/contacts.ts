type Info = { title: string; label?: string; href: string };
type Contacts = {
  mail: Info;
  phone: Info;
  whatsApp: Info;
  telegram: Info;
  linkedIn: Info;
  gitHub: Info;
  map: Info;
};

export const contacts: Contacts = {
  mail: {
    title: 'mail',
    label: 'info@devstudio.com',
    href: 'mailto:info@devstudio.com',
  },
  phone: {
    title: 'phone',
    label: '+38 (096) 111-11-11',
    href: 'tel:+380961111111',
  },
  whatsApp: { title: 'whatsApp', label: '', href: '' },
  telegram: { title: 'telegram', label: '', href: '' },
  linkedIn: { title: 'linkedIn', label: '', href: '' },
  gitHub: { title: 'gitHub', label: '', href: '' },
  map: {
    title: 'map',
    label: 'Ukraine, Kyiv, 26 Lesi Ukrainky Ave',
    href: 'https://goo.gl/maps/CPtrU1FHBa2aNyZL9',
  },
};
