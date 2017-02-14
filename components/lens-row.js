import FocalSpan from './focal-span'

export default (props) => (
  <div className='lens'>
    <div className='name'>{props.name}</div>
    <div className='focal'>
      <FocalSpan className='lens-span' {...props} />
    </div>

    <style jsx>{`
      .lens {
        display: flex;
        line-height: 32px;
        font-family: sans-serif;
        margin: 4px 0;
      }
      .focal {
        flex: 1;
      }
      .name {
        width: 24em;
        background-color: #EEE;
        padding-left: 0.5em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-radius: 3px;
      }
      .lens:hover .name {
        overflow: visible;
      }

      @media (min-width: 960px) {
        .lens:hover {
          background-color: #F5F5F5;
        }
      }

      @media (max-width: 960px) {
        .name {
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
          background-color: transparent;
          font-size: 12px;
          line-height: 1em;
          color: #BBB;
        }
      }
    `}</style>
  </div>
)
