import { Button } from '@chakra-ui/button';
import { ActiveLink } from '../ActiveLink/index';
import Logo from './Logo';

import styles from './styles.module.scss';

export function Header() { 
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Logo />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/products">
            <a>Plantas</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/exclusive">
            <a>Exclusivo</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/contato">
            <a>Contato</a>
          </ActiveLink>
        </nav>

        <Button>Buy Now</Button>
      </div>
    </header>
  );
}