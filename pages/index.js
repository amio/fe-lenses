import React from 'react'
import keep from '../now-keep'
import HtmlHead from '../components/html-head'
import LensRow from '../components/lens-row'

const db = require('../db.json')
RegExp.escape = RegExp.escape || function (text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      search: ''
    }
    this.onSearchInput = this.onSearchInput.bind(this)
  }

  onSearchInput (e) {
    const words = e.target.value
    this.setState({
      search: words,
      searchReg: new RegExp(RegExp.escape(words).replace(/\s+/, '|'), 'i')
    })
  }

  render () {
    keep(24)

    const noSearch = this.state.search === ''
    const lenses = noSearch ? db.lenses : db.lenses.filter(lens => {
      return this.state.searchReg.test(lens.name)
    })

    return <div>
      <HtmlHead />
      <header>
        <h1 style={styles.h1}>Full-frame E-mount lenses catalog</h1>
        <label className='search-bar'>
          <input className='search-input'
            placeholder='Search'
            value={this.state.search}
            onInput={this.onSearchInput} />
        </label>
      </header>
      <div className='lens-chart'>
        {
          lenses.map(lens => {
            return <LensRow {...lens} key={lens.model} />
          })
        }
      </div>

      <style jsx>{`
        header {
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .lens-chart {
          padding: 0.5em;
        }
        .search-bar {
          display: block;
          background-color: #E52;
        }
        .search-input {
          background: transparent;
          box-sizing: border-box;
          border: none;
          width: 100%;
          color: #FFF;
          font-size: 1rem;
          line-height: 1.8em;
          padding: 0.5em 1em;
        }
        .search-input::placeholder {
          color: rgba(255,255,255, 0.6);
        }
        .search-input:focus {
          background-color: rgba(191, 54, 12, 0.3);
          box-shadow: 0 0 8px #BF360C inset;
          outline: none;
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 1.5em;
          }
        }
      `}</style>
    </div>
  }
}

const styles = {
  h1: {
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    fontFamily: 'Palatino, Georgia, serif',
    margin: 0,
    padding: '0.7em',
    background: '#333',
    color: '#EEE'
  }
}
