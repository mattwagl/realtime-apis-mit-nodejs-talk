const React = require('react');

const ClientServerSequence = require('../../../components/ClientServerSequence.jsx');

const { ArrowLeft, ArrowRight, Step, Sequence } = ClientServerSequence;

module.exports = function () {
  return (
    <div className='slide--flex slide--horizontal'>
      <Sequence>
        <Step type='client'
              description='An Auth-Dienst weiterleiten'
              fragment={true}
              />
        <Step type='client'
              fragment={true}>
          <p>
            Auth-Dienst erstellt und signiert Token
            <svg width='48' height='48' viewBox='0 0 24 24'><path d='M10 8h-5v-1h5v1zm0 1h-5v1h5v-1zm0 2h-5v1h5v-1zm-2 2h-3v1h3v-1zm10.692-3.939c-.628-.436-.544-.327-.782-1.034-.099-.295-.384-.496-.705-.496h-.003c-.773.003-.64.044-1.265-.394-.129-.092-.283-.137-.437-.137s-.308.045-.438.137c-.629.442-.492.397-1.265.394h-.003c-.321 0-.606.201-.705.496-.238.71-.156.6-.781 1.034-.198.137-.308.353-.308.578l.037.222c.242.708.242.572 0 1.278l-.037.222c0 .224.11.441.309.578.625.434.545.325.781 1.033.099.296.384.495.705.495h.003c.773-.003.64-.044 1.265.394.129.093.283.139.437.139s.308-.046.438-.138c.625-.438.49-.397 1.265-.394h.003c.321 0 .606-.199.705-.495.238-.708.154-.599.782-1.033.197-.137.307-.355.307-.579l-.037-.222c-.242-.709-.24-.573 0-1.278l.037-.222c0-.225-.11-.443-.308-.578zm-3.192 3.189c-.967 0-1.75-.784-1.75-1.75 0-.967.783-1.751 1.75-1.751s1.75.784 1.75 1.751c0 .966-.783 1.75-1.75 1.75zm1.241 2.758l.021-.008h1.238v7l-2.479-1.499-2.521 1.499v-7h1.231c.415.291.69.5 1.269.5.484 0 .931-.203 1.241-.492zm-16.741-13.008v17h11v-2h-9v-13h20v13h-2v2h4v-17h-24z'/></svg>
          </p>
        </Step>
        <Step type='client'
              fragment={true}
              arrow={<ArrowRight />}
        >
          <p>Token speichern & bei jeder Anfrage an API mitsenden</p>
        </Step>
        <Step type='server'
              fragment={true}>
          <p>
            <svg width='48' height='48' viewBox='0 0 24 24'><path d='M10 8h-5v-1h5v1zm0 1h-5v1h5v-1zm0 2h-5v1h5v-1zm-2 2h-3v1h3v-1zm10.692-3.939c-.628-.436-.544-.327-.782-1.034-.099-.295-.384-.496-.705-.496h-.003c-.773.003-.64.044-1.265-.394-.129-.092-.283-.137-.437-.137s-.308.045-.438.137c-.629.442-.492.397-1.265.394h-.003c-.321 0-.606.201-.705.496-.238.71-.156.6-.781 1.034-.198.137-.308.353-.308.578l.037.222c.242.708.242.572 0 1.278l-.037.222c0 .224.11.441.309.578.625.434.545.325.781 1.033.099.296.384.495.705.495h.003c.773-.003.64-.044 1.265.394.129.093.283.139.437.139s.308-.046.438-.138c.625-.438.49-.397 1.265-.394h.003c.321 0 .606-.199.705-.495.238-.708.154-.599.782-1.033.197-.137.307-.355.307-.579l-.037-.222c-.242-.709-.24-.573 0-1.278l.037-.222c0-.225-.11-.443-.308-.578zm-3.192 3.189c-.967 0-1.75-.784-1.75-1.75 0-.967.783-1.751 1.75-1.751s1.75.784 1.75 1.751c0 .966-.783 1.75-1.75 1.75zm1.241 2.758l.021-.008h1.238v7l-2.479-1.499-2.521 1.499v-7h1.231c.415.291.69.5 1.269.5.484 0 .931-.203 1.241-.492zm-16.741-13.008v17h11v-2h-9v-13h20v13h-2v2h4v-17h-24z'/></svg>
            Token auf Validität prüfen
          </p>
        </Step>
        <Step type='server'
              fragment={true}>
          <p>Authorisierungs-Meta-Daten (claims) auslesen</p>
        </Step>
        <Step type='client'
              fragment={true}
              arrow={<ArrowRight />}>
            <p>Ablaufdatum prüfen</p>
            <p>
              Mit altem Ausweis beim Auth-Dienst neuen erstellen
              <svg width='48' height='48' viewBox='0 0 24 24'><path d='M10 8h-5v-1h5v1zm0 1h-5v1h5v-1zm0 2h-5v1h5v-1zm-2 2h-3v1h3v-1zm10.692-3.939c-.628-.436-.544-.327-.782-1.034-.099-.295-.384-.496-.705-.496h-.003c-.773.003-.64.044-1.265-.394-.129-.092-.283-.137-.437-.137s-.308.045-.438.137c-.629.442-.492.397-1.265.394h-.003c-.321 0-.606.201-.705.496-.238.71-.156.6-.781 1.034-.198.137-.308.353-.308.578l.037.222c.242.708.242.572 0 1.278l-.037.222c0 .224.11.441.309.578.625.434.545.325.781 1.033.099.296.384.495.705.495h.003c.773-.003.64-.044 1.265.394.129.093.283.139.437.139s.308-.046.438-.138c.625-.438.49-.397 1.265-.394h.003c.321 0 .606-.199.705-.495.238-.708.154-.599.782-1.033.197-.137.307-.355.307-.579l-.037-.222c-.242-.709-.24-.573 0-1.278l.037-.222c0-.225-.11-.443-.308-.578zm-3.192 3.189c-.967 0-1.75-.784-1.75-1.75 0-.967.783-1.751 1.75-1.751s1.75.784 1.75 1.751c0 .966-.783 1.75-1.75 1.75zm1.241 2.758l.021-.008h1.238v7l-2.479-1.499-2.521 1.499v-7h1.231c.415.291.69.5 1.269.5.484 0 .931-.203 1.241-.492zm-16.741-13.008v17h11v-2h-9v-13h20v13h-2v2h4v-17h-24z'/></svg>
              { " " }
              <svg width='48' height='48' viewBox='0 0 24 24'><path fill='#0091FF' d='M10 8h-5v-1h5v1zm0 1h-5v1h5v-1zm0 2h-5v1h5v-1zm-2 2h-3v1h3v-1zm10.692-3.939c-.628-.436-.544-.327-.782-1.034-.099-.295-.384-.496-.705-.496h-.003c-.773.003-.64.044-1.265-.394-.129-.092-.283-.137-.437-.137s-.308.045-.438.137c-.629.442-.492.397-1.265.394h-.003c-.321 0-.606.201-.705.496-.238.71-.156.6-.781 1.034-.198.137-.308.353-.308.578l.037.222c.242.708.242.572 0 1.278l-.037.222c0 .224.11.441.309.578.625.434.545.325.781 1.033.099.296.384.495.705.495h.003c.773-.003.64-.044 1.265.394.129.093.283.139.437.139s.308-.046.438-.138c.625-.438.49-.397 1.265-.394h.003c.321 0 .606-.199.705-.495.238-.708.154-.599.782-1.033.197-.137.307-.355.307-.579l-.037-.222c-.242-.709-.24-.573 0-1.278l.037-.222c0-.225-.11-.443-.308-.578zm-3.192 3.189c-.967 0-1.75-.784-1.75-1.75 0-.967.783-1.751 1.75-1.751s1.75.784 1.75 1.751c0 .966-.783 1.75-1.75 1.75zm1.241 2.758l.021-.008h1.238v7l-2.479-1.499-2.521 1.499v-7h1.231c.415.291.69.5 1.269.5.484 0 .931-.203 1.241-.492zm-16.741-13.008v17h11v-2h-9v-13h20v13h-2v2h4v-17h-24z'/></svg>
            </p>
        </Step>
        <Step type='both'
              description='And they lived happily…'
              fragment={true}
              />
      </Sequence>
    </div>
  );
};