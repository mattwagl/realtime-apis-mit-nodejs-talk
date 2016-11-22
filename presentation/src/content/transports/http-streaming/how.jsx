const React = require('react');

const ClientServerSequence = require('../../../components/ClientServerSequence.jsx');

const { ArrowLeft, ArrowRight, Step, Sequence } = ClientServerSequence;

module.exports = function () {
  return (
    <div className='slide--flex slide--horizontal'>
      <Sequence>
        <Step type='client'
              description={<div><strong><del>XHR-Request</del> fetch-Request</strong></div>}
              arrow={<ArrowRight />}
              />
        <Step type='server'
        >
          <p>
            Request empfangen<br/>
            Response offen halten
          </p>
        </Step>
        <Step type='server'
              description='Heartbeats schreiben'
              arrow={<ArrowLeft type='keepalive' />}
        />
        <Step type='server'
              arrow={<ArrowLeft type='keepalive'/>}
        >
          <p>
            Daten verfügbar<br/>
            In Response schreiben<br/>
            Verbindung offen halten
          </p>
        </Step>
        <Step type='client'
        >
          <p>JSON parsen und via Streaming-API (Node-Streams, Rx, Highland.js,…) zur Verfügung stellen</p>
        </Step>
        <Step type='client'>
          <p>
            Verbindung offen lassen und<br/>
            auf Daten warten
          </p>
        </Step>
      </Sequence>
    </div>
  );
};
