import React from 'react'
import App from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';

class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  render() {
    const { Component, pageProps } = this.props
    return ( 
    <>
      <Head>
      <meta charSet="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      </meta>
      <meta name="Description" content="Gabinet Masażu i Fizjoterapii w Legnicy ul. Biegunowa mgr Arnold Doleczych. Fizjoterapia, Fizykoterapia, Masaż, Fala uderzeniowa, Masaż wodny, Hitop, Hivamat, Tesla stym">
      </meta>
      <meta name="keywords" content="Masaż, Fala uderzeniowa, Hitop, Hivamat, Laser wysokoenergetyczny, Fizjoterapia, Biegunowa, Legnica, Fizykoterapia, Kinezyterapia, Vanquish">
      </meta>
      <link rel="shortcut icon" href="static/favicon.ico"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous"/>
          <title>Gabinet Masażu i Fizjoterapii w Legnicy</title>
        </Head>
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
      </>
    )
  }
}

export default MyApp