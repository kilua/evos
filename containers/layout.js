import Link from 'next/link'
import Head from 'next/head'

export default function Layout({
  children,
  title = 'Evos',
}) {
  return (
    <div>
    {``}
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <style>
            {
                `
                * { margin : 0px;}
                `
            }
        </style>
      </Head>
      <main>
      {children}
      </main>
    </div>
  )
}