import React, { Component } from 'react'
 
  
class User extends Component {
 
  constructor(props){
    super(props);

    this.state ={
      durum:true
    }
  }


  render() {
    const {ad,soyad,maaş} = this.props
    const {durum} = this.state
    return (
      <div className='col-md-8 mb-4'>
        <div className='card'>
          <div className='card-header d-flex justify-content-between'>
            <h4 className='d-inline'>{ad}</h4>
            <i className='far fa-trash-alt' style={{cursor:'pointer',padding:"1rem"}}></i>

          </div>
          {
            durum ? <div className='card-body'>
            <p className='card-text'>Soyad : {soyad}</p>
            <p className='card-text'>Maaş : {maaş}</p>
            <p>{this.state.best}</p>
          </div> : console.log("false")
          }
          
        </div>

      </div>
    )
  }
}

export default User;
