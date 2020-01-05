import Grid from '@material-ui/core/Grid';
import Link from 'next/link';

import AsideNavigation from '../components/Navigation/AsideNavigation/AsideNavigation';
import Layout from '../components/Layout/Layout';
import Home1 from '../components/Home/Home_1/Home_1'

const Index = () => {

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
                        <Home1 />
                    </Grid>
                </Grid>
            </main>
        </Layout>
    )
}


export default Index;