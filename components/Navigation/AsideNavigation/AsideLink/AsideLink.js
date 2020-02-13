import Link from "next/link";
import { useRouter } from "next/router";
import classes from './AsideLink.scss';

const AsideLink = ({ children, href, className }) => {
  const router = useRouter();
  return (
    <Link href={href} scroll={false}>
      <a
        className={router.pathname === href ? classes.Active : classes.NotActive}
      >
        {children}
      </a>
    </Link>
  );
};

export default AsideLink