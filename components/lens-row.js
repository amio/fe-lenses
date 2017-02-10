import FocalSpan from './focal-span'

export default (props) => (
  <div className='lens'>
    <div className='name'>{props.name}</div>
    <FocalSpan {...props} />

    <style jsx>{`
      .lens {
        display: flex;
        line-height: 32px;
        font-family: sans-serif;
        margin: 4px 0;
      }
      .lens:hover {
        background-color: #F5F5F5;
      }
      .name {
        width: 16rem;
        background-color: #EEE;
        padding-left: 0.5em;
        white-space: nowrap;
      }
    `}</style>
  </div>
)
