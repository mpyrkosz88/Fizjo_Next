import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import Head from 'next/head';

import AsideLink from '../components/Navigation/AsideNavigation/AsideLink/AsideLink';
import AsideNavigation from '../components/Navigation/AsideNavigation/AsideNavigation';
import News from '../components/Home/News/News'

class Index extends Component {
    render() {
        return (
            <>
                <Head>
                <meta name="Description" content="Doleczych Fizjoterapia Legnica. Vanquish modelowanie sylwestki. Fizjoterapia, Fizykoterapia, Masaż, Fala uderzeniowa, Masaż wodny, Hitop, Hivamat, Tesla stym">
                </meta>
                <title>Aktualności. Vanquish - Modelowanie sylwetki</title>
                    <link rel="canonical" href="http://www.doleczychfizjoterapia.pl/" />
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
                            <News />
                        </Grid>
                    </Grid>
                </main>
            </>
        )
    }
}
export default Index;