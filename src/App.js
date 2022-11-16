import './App.css';
import QRCode from 'qrcode'
import {useState} from 'react'


function App() {

  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState('')

  const GenerateQrCode = () => {
    QRCode.toDataURL(url, {
      width: 800,
      margin: 2,
      color:{
        dark: '#335383ff',
        light: 'ffffffff'
      }
    }, (err, url) => {
      if(err) return console.error(err)

      console.log(url)
      setQrcode(url)

    })
  }


  return (
    <div className="App text-white">
      
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={url}
        onChange={(e)=>setUrl(e.target.value)}
        placeholder="https://google.com" />
      <button onClick={GenerateQrCode}>Generate</button>
      
      {qrcode && <>
        <img src={qrcode} />
        <a href={qrcode} className='text-success' download="qrcode.png">Download</a>
      </>}

      <br />
      <code>
        <a href='https://www.npmjs.com/package/qrcode'>
          https://www.npmjs.com/package/qrcode
        </a>
      </code>

    </div>
  );
}

export default App;
