import React from 'react'
 function Gate(props) {
return( 
     <div> 
      {props.check === "Open" ? <h1>Gate is open</h1>: <h1>Gate is close</h1>}
     </div>
)
}
export default Gate