import image_6 from "../assets/card_6.webp"
import React,{useState} from 'react'

function Card_6() {
    const [show, setShow] = useState(false)
    const data_handle = () => {
        setShow(!false)
    }
    const data_handle2 = () => {
        setShow(!true)
    }
  return (
    <>
    {
     show ?
     <span classNameName="container">
     <span className="card mb-3" style={{ maxWidth: "540px;" }}>
         <span className="row g-0">
             <span className="col-md-4">
                 <img src={image_6} className="img-fluid rounded-start" alt="..." />
             </span>
             <span className="col-md-8">
                 <span className="card-body">
                     <h5 className="card-title mb-5">Product Details</h5>
                     <p className="card-text">Life Style</p>
                     <h3 className="card-text">LaaVista Depro, FX 829 v1</h3>
                     
                     <button onClick={data_handle2} className='btn btn-primery'>
                     less Details
                 </button>
                 </span>
             </span>
         </span>
     </span>



 </span>
    
     :
     <div className="col-md-3 mb-2">
         <div className="text-center">
             <img height="180" src={image_6} alt="" />
             <div>
                 <h5>
                     Chair
                     <br />
                     Golden Easy Spot Chair
                     <br />
                     $210.00
                 </h5>
                 <button onClick={data_handle} className='btn btn-primery'>
                     More Details
                 </button>

             </div>
         </div>
     </div>

     
     }


 </>
  
  )
}

export  {Card_6}