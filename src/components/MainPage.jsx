import LineAnimationComponent from "./LineAnimationComponent"





export default function mainPage({showSplashScreen}) {
  return (
    <div>
      <p>main page</p>
      <div>
        <LineAnimationComponent showSplashScreen={showSplashScreen} />
      </div>
    </div>
  )
}







