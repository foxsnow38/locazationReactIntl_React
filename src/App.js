import logo from './logo.svg';
import './App.css';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
import { useEffect, useState } from 'react';

const messages = {
  "tr-TR":{title: "Merhaba Dunya",description: "{count} yeni mesajin var "},
  "en-US":{title: "Hello World",description: "You have {count} new messages"},
  
}

function App() {
  const defaultLocale=localStorage.getItem("locale") ? localStorage.getItem("locale"): navigator.language

  console.log(defaultLocale)
  const [leanguage,setLeanguage] = useState(defaultLocale)
  useEffect(()=>{
   
  },[leanguage])
  return (
    <div className="App">
      <IntlProvider
      locale={leanguage}
      messages={messages[leanguage]}
      >
      <p>
        <FormattedMessage  id="title"
         
        />
        <br />

        <button onClick={()=> setLeanguage(`tr-TR`)}>TR</button><button onClick={()=> setLeanguage(`en-US`)}>EN</button>
        {/* <FormattedNumber value={19} style="currency" currency="EUR" /> */}

        <br />
        <br /> 
    
          <FormattedMessage id='description' values={{count:5}}/>

        
      </p>
    </IntlProvider>
    </div>
  );
}

export default App;
