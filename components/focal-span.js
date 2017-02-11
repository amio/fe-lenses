export default ({type, focallength, focallengthwide, focallengthtele}) => {
  // x = 5 * sqrt(focallength) : Min 1(%) for 1mm lens, Max 100(%) for 400mm lens.
  // x = 7 * sqrt(focallength) : Min 1(%) for 1mm lens, Max 100(%) for ~200mm lens.
  const ratio = 7
  const offset = -23  // Currently no lens can be wider than 12mm
  const posLeft = ratio * Math.sqrt(type === 'prime' ? focallength : focallengthwide) + offset
  const posRight = ratio * Math.sqrt(type === 'prime' ? focallength : focallengthtele) + offset
  const barWidth = posRight - posLeft

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
          box-sizing: border-box;
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
