import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import Head from 'next/head';

import AsideLink from '../components/Navigation/AsideNavigation/AsideLink/AsideLink';
import AsideNavigation from '../components/Navigation/AsideNavigation/AsideNavigation';
import Home1 from '../components/Home/Home_1/Home_1'

class HomePage1 extends Component {
    render() {
        return (
            <>
                <Head>
                    <link rel="canonical" href="http://www.doleczychfizjoterapia.pl/home_1" />
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
                            <Home1 />
                        </Grid>
                    </Grid>
                </main>
            </>
        )
    }
}
export default HomePage1;