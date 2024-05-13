import React, { Component } from 'react'

interface MyProps {
  weather: string
  children : React.ReactNode
}

// const MyWeather: React.FC<MyProps> = ({children, weather}) => {

//   return (
//     <div>
//       {children}<br />
//       오늘의 날씨는 {weather}
//     </div>
//   )
// }

class MyWeather extends Component<MyProps>{
  render(){
    const {children, weather} = this.props
    return (
          <div>
            {children}<br />
            오늘의 날씨는 {weather}
          </div>
        )
  }
}

export default MyWeather