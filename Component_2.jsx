import image_1 from "../assets/card_1.webp"
import image_2 from "../assets/hm1-single-1.webp"
import { Button } from "./Button"
import React,{useState} from "react"

const Component_2 = () => {
    const [show, setShow] = useState(false)
    const data_handle = () => {
        setShow(!false)
    }
    const data_handle2 = () => {
        setShow(!true)
    }
    return (

        <>

            {show?
            <span classNameName="container">
                        <span className="card mb-3" style={{ maxWidth: "540px;" }}>
                            <span className="row g-0">
                                <span className="col-md-4">
                                    <img src={image_1} className="img-fluid rounded-start" alt="..." />
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

                <div class=" p-5  mb-3 text-center " style={{ maxWidth: " 540px;" }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={image_2} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8 mt-5 pt-5 ps-5 text-center ">
                        <div class="card-body">
                            <h5 class="card-title com_2p">30% off</h5>
                            <h1 class="card-title ">Comfort Chair</h1>
                            <p class="card-text">Collect from Daxone & get 30%</p>
                            <button onClick={data_handle}>Show Now</button>
                            
                        </div>
                    </div>
                </div>
            </div>
            }

        </>
    )


}
export { Component_2 }
