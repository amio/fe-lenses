import FocalSpan from './focal-span'

export default (props) => (
  <div className='lens'>
    <div className='name'>
      { props.link ? <a className='link' href={props.link}>{props.name}</a> : props.name }
      <a className='google-link' target='_blank'
        href={'https://www.google.com/search?q=' + props.name.replace(/\s/g, '+')} />
    </div>
    <div className='focal'>
      <FocalSpan className='lens-span' {...props} />
    </div>

    <style jsx>{`
      .lens {
        display: flex;
        line-height: 4em;
        font-family: sans-serif;
      }
      .focal {
        flex: 1;
      }
      .name {
        width: 24em;
        padding-left: 1.5em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-radius: 3px;
      }
      .lens:hover .name {
        overflow: visible;
      }
      .link {
        color: #333;
        text-decoration: none;
      }
      .link:hover {
        text-decoration: underline;
      }
      .google-link {
        display: none;
        width: 1em;
        height: 1em;
        position: relative;
        top: 0.15em;
        left: 0.7em;
        background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M113.47 309.408L95.648 375.94l-65.14 1.378C11.043 341.21 0 299.9 0 256c0-42.45 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.5-8.215 32.14-8.215 49.456 0 18.792 3.405 36.797 9.65 53.408z" fill="#FBBB00"/><path d="M507.527 208.176C510.467 223.662 512 239.656 512 256c0 18.328-1.927 36.206-5.598 53.45-12.462 58.684-45.025 109.926-90.134 146.188l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.91h-136.89V208.175h245.899z" fill="#518EF8"/><path d="M416.253 455.624l.014.014C372.397 490.9 316.667 512 256 512c-97.49 0-182.252-54.49-225.49-134.68l82.96-67.91c21.62 57.697 77.278 98.77 142.53 98.77 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z" fill="#28B446"/><path d="M419.404 58.936l-82.933 67.896c-23.334-14.586-50.918-23.012-80.47-23.012-66.73 0-123.43 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z" fill="#F14336"/></svg>')
      }
      .lens:hover .google-link {
        display: inline-block;
      }

      @media (min-width: 640px) {
        .lens:hover {
          background-color: #F5F5F5;
        }
      }

      @media (max-width: 960px) {
        .lens {
          font-size: 12px;
        }
      }

      @media (max-width: 640px) {
        .lens {
          display: block;
          padding-top: 1em;
        }
        .name {
          width: auto;
          text-transform: uppercase;
          background-color: transparent;
          font-size: 12px;
          position: relative;
          top: 1em;
          line-height: 1em;
        }
        .link {
          color: #BBB;
        }
        .lens:hover .google-link {
          display: none;
        }
      }
    `}</style>
  </div>
)
