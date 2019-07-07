import App, { Container } from 'next/app'
import Layout from '../components/layout/' 

import { APP_TITLE } from '../lib/constants'

export default class MyApp extends App {

  static async getInitialProps({ Component, ctx }){
    if(Component.getInitialProps){
        const { query, pathname } = await Component.getInitialProps(ctx)
        return { query, pathname }
    } else {
      return { query: "", pathname: "" }
    }
  }

  render(){
    const { Component: PageComponent, ...rest } = this.props

    return (
      <Container>
        <head><title>{APP_TITLE}</title></head>
        <Layout>
          <PageComponent {...rest}/>
        </Layout>
      </Container>
    )
  }
  
}