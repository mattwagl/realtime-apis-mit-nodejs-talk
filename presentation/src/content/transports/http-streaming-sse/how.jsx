const React = require('react');

const ClientServerSequence = require('../../../components/ClientServerSequence.jsx');

const { ArrowLeft, ArrowRight, Step, Sequence } = ClientServerSequence;

module.exports = function () {
  return (
    <div className='slide--flex slide--horizontal'>
      <Sequence>
        <Step type='client'
              arrow={<ArrowRight />}
              fragment={true}
        >
            <p>
              new EventSource('http://…')<br />
              Request öffnen
            </p>
        </Step>
        <Step type='server'
              fragment={true}
        >
          <p>
            Request empfangen<br/>
            Response offen halten
          </p>
        </Step>
        <Step type='server'
              fragment={true}
              description='Heartbeats schreiben'
              arrow={<ArrowLeft type='keepalive' />}
        />
        <Step type='server'
              fragment={true}
              arrow={<ArrowLeft type='keepalive'/>}
        >
          <p>
            Daten verfügbar<br/>
            In Response schreiben<br/>
            Verbindung offen halten
          </p>
        </Step>
        <Step type='client'
              fragment={true}
        >
          <p>JSON parsen</p>
        </Step>
        <Step type='client'
              fragment={true}
        >
          <p>
            Verbindung offen lassen und<br/>
            auf Daten warten
          </p>
        </Step>
      </Sequence>
    </div>
  );
};
