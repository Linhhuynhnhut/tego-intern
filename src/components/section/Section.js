import React from 'react';
import './section.scss';

const Section = ({title, subTitle, imageList, type, style }) => {
  return (
    <div className='section' style={style}>
        <div className='title_container'>
            <span className='title'>{title}</span>
            <span className='subTitle'>{subTitle}</span>
        </div>
        <div className={type}>
            <div className='image_container'>
                <img src={imageList[0].source} className={imageList[0].css}/>
                <div className='index'>1.</div>
                <span className='title'>{imageList[0].title}</span>
                <span className='content'>{imageList[0].content}</span>
            </div>
            <div className='image_container'>
                <img src={imageList[1].source} className={imageList[1].css}/>
                <div className='index'>2.</div>
                <span className='title'>{imageList[1].title}</span>
                <span className='content'>{imageList[1].content}</span>
            </div>
            <div className='image_container'>
                <img src={imageList[2].source} className={imageList[2].css}/>
                <div className='index'>3.</div>
                <span className='title'>{imageList[2].title}</span>
                <span className='content'>{imageList[2].content}</span>
            </div>

        </div>
    </div>
  )
}

export default Section;