const React = require('react');

const ClientServerSequence = require('../../../components/ClientServerSequence.jsx');

const { ArrowLeft, ArrowRight, Step, Sequence } = ClientServerSequence;

module.exports = function () {
  return (
    <div className='slide--flex slide--horizontal'>
      <Sequence>
        <Step type='client'
              description={`new Websocket('ws://...');`}
              fragment={true}
              />
        <Step type='client'
              description='GET-Request mit Upgrade-Header senden'
              arrow={<ArrowRight />}
              fragment={true}
              />
        <Step type='server'
              fragment={true}
              description='Mit Upgrade-Header antworten'
              arrow={<ArrowLeft />}
              />
            <Step type='both'
              fragment={true}
              description='HTTP-Verbindung schließen und durch Websocket-Verbindung auf gleichem Port ersetzen'
              />
        <Step type='both'
              fragment={true}
              arrow={[
                <ArrowRight key={1} type='duplex server'/>,
                <ArrowLeft key={2} type='duplex client'/>,
                <ArrowRight key={3} type='duplex server'/>,
                <ArrowLeft key={4} type='duplex client'/>
              ]}
        >
          <p>Beide Parteien können jetzt Daten senden und empfangen</p>
        </Step>
        <Step type='both'
              description='Nachrichten werden in Frames zerteilt und wieder zusammengesetzt'
              fragment={true}
              />
      </Sequence>
    </div>
  );
};
