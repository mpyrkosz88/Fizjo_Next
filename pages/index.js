import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';

import AsideLink from '../components/Navigation/AsideNavigation/AsideLink/AsideLink';
import AsideNavigation from '../components/Navigation/AsideNavigation/AsideNavigation';
import Home1 from '../components/Home/Home_1/Home_1'

class Index extends Component {
    render() {
        return (
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
        )
    }
}
export default Index;