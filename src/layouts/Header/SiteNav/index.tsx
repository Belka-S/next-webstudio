import Link from 'next/link';

const SiteNav = () => {
 return (
  <nav>
   <Link href={'/'}>Studio</Link>
   <Link href={'/portfolio'}>Portfolio</Link>
   <Link href={'/contact'}>Contact</Link>
  </nav>
 );
};

export default SiteNav;
