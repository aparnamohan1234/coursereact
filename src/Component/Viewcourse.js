import React from 'react'
import Header from './Header'

const View = () => {
    var viewlist=[courselist,setcourselist]=useState([])
    axios.get("https://mylinkurcodesapp.herokuapp.com/getcourse").then(
        (response)=>{
            console.log(response.date)
            setcourselist(response.data)
        }
    )


  return (
    <div>
        <Header/>
        <div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            
                <table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">courseTitle</th>
      <th scope="col">courseDescription</th>
      <th scope="col">courseDuration</th>
      <th scope="col">coursevenu</th>
      <th scope="col">coursdate</th>
    </tr>
  </thead>
  <tbody>
    {viewlist.map((value,key)=>{
      return <tr>
      <td>{value.courseTitle}</td>
      <td>{value.courseDescription}</td>
      <td>{value.courseDuration}</td>
      <td>{value.coursevenue}</td>
      <td>{value.coursedate}</td>
     
    </tr>
    })}
    
    
    
  </tbody>
</table>



                    </div>
               

              </div>

            </div>

          </div>

        </div>
    </div>
    
  )
}

export default 
div.container