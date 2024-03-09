import React from 'react';
import './App.scss';
import Button from './components/button/Button';
import Section from './components/section/Section';
import Header from './components/header/Header';
import Input from './components/input/Input';
import Footer from './components/footer/Footer';
import { sampleContent, sampleContent2, sampleContent3, messages } from './constants';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <div className='intro-section'>
          <div className='intro'>
            <span>{messages.intro.tag}</span>
            <h1>{messages.intro.title}</h1>
            <p>{messages.intro.content}</p>
            <Button text={messages.intro.button}/>
          </div>
        </div>
        <div className='advantages-section'>
          {
            messages.advantages.map((advantage) => (
              <div key={advantage} className='box-item'>
                <img src = {advantage.icon} alt={advantage.title}/>
                <div className='item'>
                  <div className='item-title'>{advantage.title}</div>
                  <div className='item-content'>{advantage.content}</div>
                </div>
              </div>
            ))
          }          
        </div>
        <Section 
          title={sampleContent.title} 
          subTitle={sampleContent.subTitle} 
          imageList={sampleContent.imageList} 
          type={sampleContent.type}
        />
        <div className='beautify-section'>
          <div className='item'>
            <h1>{messages.beautify.title}</h1>
            <p>{messages.beautify.content}</p>
            <Button text={messages.beautify.button}/>
          </div>
          <div className='item item-picture'>
            <div className='circle'></div> 
            <img src={messages.beautify.image} alt="image"/>
          </div>
        </div>
        <Section 
          title={sampleContent2.title} 
          subTitle={sampleContent2.subTitle} 
          imageList={sampleContent2.imageList} 
          type={sampleContent2.type}
        />
        <div className='linebreak'></div>
        <Section 
          title={sampleContent3.title} 
          subTitle={sampleContent3.subTitle} 
          imageList={sampleContent3.imageList} 
          type={sampleContent3.type}
          style={{'paddingBottom': '130px'}}
        />
        <div className='form-section'>
          <h1>{messages.form.title}</h1>
          <p>{messages.form.content}</p>
          <Input type={messages.form.inputType} />
        </div>
      </main>
      <Footer information={messages.footer.information} album={messages.footer.album}/>
    </div>
  )
}

export default App;
