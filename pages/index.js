import Head from 'next/head'
import LensRow from '../components/lens-row'

const db = require('../db.json')

export default () => (
  <div>
    <Head>
      <title>E-mount lenses catalog</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <h1>E-mount lenses catalog</h1>
    </header>
    <segment>
      <div className='lens-chart'>
        {
          db.lenses.map(lens => {
            return <LensRow {...lens} key={lens.model} />
          })
        }
      </div>
    </segment>

    <style jsx>{`
      h1 {
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-family: serif;
        text-align: left;
      }
      .lens-chart {
        font-size: 14px;
      }

      @media (max-width: 600px) {
        .lens-chart {
          font-size: 12px;
        }
      }
    `}</style>
  </div>
)
