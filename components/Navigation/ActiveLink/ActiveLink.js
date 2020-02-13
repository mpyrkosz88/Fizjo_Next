import Link from "next/link";
import { useRouter } from "next/router";
import classes from './ActiveLink.scss';

const AsideLink = ({ children, href }) => {
  const router = useRouter();
  return (
    <Link href={href} scroll={false}>
      <a
        className={router.pathname === href ? classes.Active : null}
      >
        {children}
      </a>
    </Link>
  );
};

export default AsideLink