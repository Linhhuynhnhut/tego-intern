import React from 'react';
import './footer.scss';

const Footer = ({information, album}) => {
  return (
    <div className='footer-container'>
        <div className='information'>
            <h1>{information.title1}</h1>
            <p>{information.content}</p>
            <h1>{information.title2}</h1>
        </div>
        <div className='album'>
            <h1>{album.title}</h1>
            <div className='image-list'>
                {
                    album.imageList.map((img) => (
                        <div className='image-item'>
                            <img src={img} alt='pic'/>
                        </div>

                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Footer;