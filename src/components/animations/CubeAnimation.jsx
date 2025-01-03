import "../styles/CubeStyles.css"

export default function CubeAnimation() {


  return (
    <div className="service_animation_coontainer" >
      <div className="container">
        <div className="cube">
          <div style={{ '--x': '-1', '--y': '0' }}>
            <span style={{ '--i': '3' }}></span>
            <span style={{ '--i': '2' }}></span>
            <span style={{ '--i': '1' }}></span>
          </div>
          <div style={{ '--x': '0', '--y': '0' }}>
            <span style={{ '--i': '3' }}></span>
            <span style={{ '--i': '2' }}></span>
            <span style={{ '--i': '1' }}></span>
          </div>
          <div style={{ '--x': '1', '--y': '0' }}>
            <span style={{ '--i': '3' }}></span>
            <span style={{ '--i': '2' }}></span>
            <span style={{ '--i': '1' }}></span>
          </div>
        </div>
        <div className="cube">
          <div style={{ '--x': '-1', '--y': '0' }}>
            <span style={{ '--i': '3' }}></span>
            <span style={{ '--i': '2' }}></span>
            <span style={{ '--i': '1' }}></span>
          </div>
          <div style={{ '--x': '0', '--y': '0' }}>
            <span style={{ '--i': '3' }}></span>
            <span style={{ '--i': '2' }}></span>
            <span style={{ '--i': '1' }}></span>
          </div>
          <div style={{ '--x': '1', '--y': '0' }}>
            <span style={{ '--i': '3' }}></span>
            <span style={{ '--i': '2' }}></span>
            <span style={{ '--i': '1' }}></span>
          </div>
        </div>
        <div className="cube">
          <div style={{ '--x': '-1', '--y': '0' }}>
            <span style={{ '--i': '3' }}></span>
            <span style={{ '--i': '2' }}></span>
            <span style={{ '--i': '1' }}></span>
          </div>
          <div style={{ '--x': '0', '--y': '0' }}>
            <span style={{ '--i': '3' }}></span>
            <span style={{ '--i': '2' }}></span>
            <span style={{ '--i': '1' }}></span>
          </div>
          <div style={{ '--x': '1', '--y': '0' }}>
            <span style={{ '--i': '3' }}></span>
            <span style={{ '--i': '2' }}></span>
            <span style={{ '--i': '1' }}></span>
          </div>
        </div>
      </div>
    </div>
  )

}
