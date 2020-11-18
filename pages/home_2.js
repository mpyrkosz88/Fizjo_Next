import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import Head from 'next/head';

import AsideLink from '../components/Navigation/AsideNavigation/AsideLink/AsideLink';
import AsideNavigation from '../components/Navigation/AsideNavigation/AsideNavigation';
import Home2 from '../components/Home/Home_2/Home_2'

const Homepage2 = () => {
    return (
        <>
        <Head>
        <meta name="Description" content="Leczone schorzenia, ból pleców kręgosłupa, dyskopatia, zwyrodnienie stawów, kontuzje sportowe, stany pooperacyjne ">
        </meta>
            <title>Leczone schorzenia. Gabinet Fizjoterapii w Legnicy ul. Biegunowa. </title>
            <link rel="canonical" href="http://www.doleczychfizjoterapia.pl/home_2" />
        </Head>
            <main>
                <Grid container justify="space-between">
                    <Grid item sm={3}>
                    <AsideNavigation>
                    <li>
                        <AsideLink scroll={false} href="/">
                            Aktualności
                        </AsideLink>
                    </li>
                    <li>
                        <AsideLink scroll={false} href="/home_1">
                            O nas
                        </AsideLink>
                    </li>
                    <li>
                        <AsideLink scroll={false} href="/home_2">
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
                        <Home2 />
                    </Grid>
                </Grid>
            </main>
            </>
    )
}


export default Homepage2;