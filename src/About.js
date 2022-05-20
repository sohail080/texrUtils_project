import React, { useState } from 'react'

export default function About(props) {
let myStyle={
  color:props.mode==='dark'?'white':'black',
  backgroundColor:props.mode==='dark'?'rgb(77, 110, 140)':'white',
  border:'1px solid white'

}

  // const [myStyle, setMyStyle] = useState(
  //   {
  //     color:'black' ,
  //     backgroundColor: 'white'
  //   }  );
  //   const [btnText, setBtnText] = useState("Enable Dark Mood");
  //   function toggleMood() {
  //     if (myStyle.color==="white") {
  //       setMyStyle({
  //         color:'black' ,
  //         backgroundColor:' white',
  //       } );
  //       setBtnText("Enable Light Mood");
  //     }
  //     else
  //     {
  //       setMyStyle({
  //         color:'white' ,
  //         backgroundColor:' black',
  //         border:'1px solid white'
  //       } );
  //       setBtnText("Enable Dark Mood");
  //     }
  //   }
      
  return (
    <div className='container mt-2'>
      <h2 className='font-weight-bold' style={{color:props.mode==='dark'?'white':'black'}}>About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="card" style={myStyle}>
    <div  className="card-header" id="headingOne" >
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left " style={myStyle} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {props.first}
        </button> 
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
        Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
      </div>
    </div>
  </div>
  <div className="card" style={myStyle}>
    <div className="card-header" id="headingTwo" style={myStyle}>
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        {props.second}
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
        Some placeholder content for the second accordion panel. This panel is hidden by default.
      </div>
    </div>
  </div>
  <div className="card" style={myStyle}>
    <div className="card-header" id="headingThree" style={myStyle}>
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        {props.third}
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
        And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
      </div>
    </div>
  </div>
</div>
{/* <button type="button" className="btn btn-primary mx-1 my-1" onClick={toggleMood}>{btnText}</button> */}
    </div>
  )
}
