import React from 'react'
import {AiFillFacebook} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
const Redes = () => {
  return (
    <div>
        <div class="siguenos">
        <hr className='title-line'></hr>
          <h3 class="titulosActive textoCentrado">Siguenos en redes</h3>
        <hr className='title-line'></hr>
      </div>

      <div className='siguenosIcons'>
        <div className='siguenosRedS'>
          <div className='containerIcon'>
            <AiFillFacebook className='redesIcon' />
          </div>
          <p className='titulosActive'>/legatto</p>
        </div>
        <div className='siguenosRedS'>
          <div className='containerIcon'>
            <AiOutlineInstagram className='redesIcon' />
            </div>
          <p className='titulosActive'>@legatto</p>
        </div>
      </div>
    </div>
  )
}

export default Redes