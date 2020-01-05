//libraries
import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';

//components
import Heading2 from '../components/UI/Headings/Heading2';
import classes from '../styles/Cennik.scss';
import ListItem from '../components/UI/List/ListItem';

class Cennik extends Component {
  render () {
    return (
      <Layout>
      <main className={classes.Cennik}>
        <Grid container justify="space-between">
          <Heading2>Cennik</Heading2>      
            <ul>
              <ListItem>
                <div>Galwanizacja</div>
                <div>5 zł</div>
              </ListItem>
              <ListItem>
                <div>Jonofereza (z lekiem)</div>
                <div>5 zł</div>
              </ListItem>
              <ListItem>
                <div>Diadynami(DD)</div>
                <div>5 zł</div>
              </ListItem>
              <ListItem>
                <div>Tens</div>
                <div>8 zł</div>
              </ListItem>
              <ListItem>
                <div>Interdyn (ID)</div>
                <div>5 zł</div>
              </ListItem>
              <ListItem>
                <div>Ultradźwięki (UD)</div>
                <div>6 zł</div>
              </ListItem>
              <ListItem>
                <div>Ultradźwięki z lekiem</div>
                <div>8 zł</div>
              </ListItem>
              <ListItem>
                <div>Magnetoterapia</div>
                <div>6 zł</div>
              </ListItem>
              <ListItem>
                <div>Laser</div>
                <div>6 zł</div>
              </ListItem>
              <ListItem>
                <div>Lampa Solux</div>
                <div>5 zł</div>
              </ListItem>
              <ListItem>
                <div>Terapia skojrzeniowa</div>
                <div>8 zł</div>
              </ListItem>
              <ListItem>
                <div>Terapia przeciwobrzękowa</div>
                <div>10 zł</div>
              </ListItem>
              <ListItem>
                <div>Krioterapia miejscowa</div>
                <div>15 zł</div>
              </ListItem>
              <ListItem>
                <div>Masaż wibracyjny</div>
                <div>20 zł</div>
              </ListItem>
              <ListItem>
                <div>Kinezyterapia</div>
                <div>od 20 zł</div>
              </ListItem>
            </ul>
        </Grid>
      </main>      
      </Layout>
    )
  }
}

export default Cennik;

