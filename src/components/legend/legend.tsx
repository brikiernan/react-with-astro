import './legend.css';

export const Legend: React.FC = () => (
  <div className='Legend-container'>
    <div className='Legend-item'>
      <div id='Legend-charlie' className='Legend-box' />
      <p>Charlie</p>
    </div>
    <div className='Legend-item'>
      <div id='Legend-delta' className='Legend-box' />
      <p>Delta</p>
    </div>
    <div className='Legend-item'>
      <div id='Legend-foxtrot' className='Legend-box' />
      <p>Foxtrot</p>
    </div>
    <div className='Legend-item'>
      <div id='Legend-hotel' className='Legend-box' />
      <p>Hotel</p>
    </div>
  </div>
);
