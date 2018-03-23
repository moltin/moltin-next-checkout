import Head from 'next/head';
import { Container } from 'semantic-ui-react'

export default ({ children, title = '' }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
      />
      <title>{title}</title>
    </Head>

    <Container>
      {children}
    </Container>
  </div>
)
