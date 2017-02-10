export default ({type, focallength, focallengthwide, focallengthtele}) => {
  // y = 5 * sqrt(x)
  // Max 100 for 400mm lens.
  const posLeft = 5 * Math.sqrt(type === 'prime' ? focallength : focallengthwide)
  const barWidth = 5 * Math.sqrt(type === 'zoom' ? focallengthtele : 100) - posLeft
  return (
    <div className='focal-span'>
      {
        type === 'prime' && <span className='prime' style={{left: posLeft + '%'}}>
          { focallength }
        </span>
      }
      {
        type === 'zoom' && <span className='zoom' style={{
          left: posLeft + '%',
          width: barWidth + '%'
        }}>
          <span className='zoom-wide'>{ focallengthwide }</span>
          <span className='zoom-tele'>{ focallengthtele }</span>
        </span>
      }

      <style jsx>{`
        .focal-span {
          flex: 1;
          display: relative;
          font-family: Arial, sans-serif;
        }
        .prime, .zoom {
          position: relative;
          display: inline-block;
          border-radius: 2px;
          padding: 0 4px;
          font-size: 12px;
          line-height: 20px;
          background-color: royalblue;
          color: #FFF;
        }
        .prime {
          transform: translateX(-50%);
          background-color: #333;
        }
        .zoom-tele {
          position: absolute;
          right: 5px;
        }
      `}</style>
    </div>
  )
}
