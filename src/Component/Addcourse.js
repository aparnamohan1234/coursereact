import React, { useState } from 'react'

const Addcourse = () => {
  var [CourseTitle,setcoursetitle]=useState("")
  var [Duration,setduration]=useState("")
  var [Description,setdescription]=useState("")
  var [venue,setvenue]=useState("")
  var [Date,setdate]=useState("")
  const subdata=()=>{
      const data={"coursetitle":CourseTitle,"duration":Duration,"description":Description,"venue":venue,"date":Date}
      console.log(data)
  }
  return (
    <div>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">CourseTitle</label>
                <input onChange={(b)=>{setcoursetitle(b.target.value)}} type="text" className="form-control"/>
                </div>
                
        
        
   <div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label for="" className="form-label">Duration</label>
        <input onChange={(b)=>{setduration(b.target.value)}} type="text" className="form-control"/>
        </div>
        
</div>
    <div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label for="" className="form-label">Description</label>
        <input onChange={(b)=>{setdescription(b.target.value)}} type="text" className="form-control"/>
        </div>
        
</div>
    <div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label for="" className="form-label">venue</label>
    <input onChange={(b)=>{setvenue(b.target.value)}} type="text" className="form-control"/>
    </div>
    
</div>
    <div>
      <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
      <label for="" className="form-label">Date</label>
       <input onChange={(b)=>{setdate(b.target.value)}} type="text" className="form-control"/>
      </div>
       
      
    <div>
     <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
    <button onClick={subdata} className="btn btn-success">Register</button>
   </div>
    </div>
    </div>
    </div>
</div>
</div>
</div>



  )
}

export default Addcourse