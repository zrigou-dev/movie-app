import React from 'react'
import './RatedCyrcle.css'


const RatedCyrcle = ({rating}) => {
  const borderColors = ["#FF0000", "#FF4C00", "#FFA500", "#FFD700", "#ADFF2F"];
  const getBordereColor =(rating)=>{
    if (rating < 2) {
      return borderColors[0];
    } else if (rating < 4) {
      return borderColors[1];
    } else if (rating < 6) {
      return borderColors[2];
    } else if (rating < 8) {
      return borderColors[3];
    } else {
      return borderColors[4];
    }
  }
  const borderColor = getBordereColor(rating)
  const circleStyles = {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    backgroundColor: "hsla(0, 0%, 87%, 0.7)",
    border: `5px solid ${borderColor}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
  };
  return (
    <div style={circleStyles} className='cyrcle'>
{rating}
    </div>
  )
}

export default RatedCyrcle
