import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import Head from 'next/head';

import AsideLink from '../components/Navigation/AsideNavigation/AsideLink/AsideLink';
import AsideNavigation from '../components/Navigation/AsideNavigation/AsideNavigation';
import Home3 from '../components/Home/Home_3/Home_3'

const Homepage2 = () => {
    return (
        <>
        <Head>
        <meta name="Description" content="Wykonywane zabiegi, Fala uderzeniowa Głęboka elektromagnetostymulacja FMS, Laser wysokoenergetyczny Terapia energotonowa HITOP Tens Magnetoterapia pole magnetyczne ">
        </meta>
            <title>Wykonywane zabiegi. Gabinet Fizjoterapii w Legnicy ul. Biegunowa. </title>
          </Head>
            <main>
                <Grid container justify="space-between">
                    <Grid item sm={3}>
                        <AsideNavigation>
                            <li>
                                <AsideLink scroll={false} href="/">
                                    O nas
                                </AsideLink>
                            </li>
                            <li>
                                <AsideLink scroll={false} href="/home_2" >
                                    Leczone schorzenia
                                </AsideLink>
                            </li>
                            <li>
                                <AsideLink scroll={false} href="/home_3" >
                                    Wykonywane zabiegi
                                </AsideLink>
                            </li>
                        </AsideNavigation>
                    </Grid>
                    <Grid item sm={9}>
                        <Home3 />
                    </Grid>
                </Grid>
            </main>
            </>
    )
}


export default Homepage2;