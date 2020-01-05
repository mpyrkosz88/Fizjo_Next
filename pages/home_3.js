import Grid from '@material-ui/core/Grid';
import Link from 'next/link';

import AsideNavigation from '../components/Navigation/AsideNavigation/AsideNavigation';
import Layout from '../components/Layout/Layout';
import Home3 from '../components/Home/Home_3/Home_3'

const Homepage2 = () => {

    return (
        <Layout>
            <main>
                <Grid container justify="space-between">
                    <Grid item sm={3}>
                        <AsideNavigation>
                            <li>
                                <Link href="/">
                                    <a>O nas</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/home_2">
                                    <a>Leczone schorzenia</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/home_3" >
                                    <a>Wykonywane zabiegi</a>
                                </Link>
                            </li>
                        </AsideNavigation>
                    </Grid>
                    <Grid item sm={9}>
                        <Home3 />
                    </Grid>
                </Grid>
            </main>
        </Layout>
    )
}


export default Homepage2;