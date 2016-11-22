const React = require('react');

const ClientServerSequence = require('../../../components/ClientServerSequence.jsx');

const { ArrowLeft, ArrowRight, Step, Sequence } = ClientServerSequence;

module.exports = function () {
  return (
    <div className='slide--flex slide--horizontal'>
      <Sequence>
        <Step type='client'
              description='XHR-Request öffnen'
              arrow={<ArrowRight />}
              fragment={true}
              />
        <Step type='server'
              fragment={true}
        >
          <p>
            Request empfangen<br />
            Response offen halten
          </p>
        </Step>
        <Step type='server'
              fragment={true}
              description='Heartbeats senden'
              arrow={<ArrowLeft type='keepalive' />}
              />
        <Step type='server'
              fragment={true}
              arrow={<ArrowLeft/>}
        >
          <p>
            Daten verfügbar<br />
            Response senden<br />
            Verbindung schließen
          </p>
        </Step>
        <Step type='client'
              description='Daten empfangen und parsen'
              fragment={true}
              />
        <Step type='server'
              description='Neue Daten puffern'
              fragment={true}
              />
        <Step type='client'
              description='Und wieder von vorn…'
              arrow={<ArrowRight />}
              fragment={true}
              />
      </Sequence>
    </div>
  );
};
