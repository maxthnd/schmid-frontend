<script setup lang="ts">

</script>

<template>
  <div class="impressum-view">
    <div class="imp-container">
      <img src="/assets/images/core/schmidlogo.webp" alt="Schmid GmbH Logo" class="imp-logo">
      <div class="imp-content">
        <div class="imp-head">
          <h2>Impressum</h2>
          <p>Angaben zum Unternehmen nach §5 TMG</p>
        </div>
        <div class="imp-body">
          <p>
            <strong>Schmid GmbH</strong><br />
            Untere Mäurichstraße 26<br />
            74196 Neuenstadt-Stein a.K.<br />
            Tel.: +49 (0) 62 64 – 92 60 88 – 0<br />
            Fax: +49 (0) 62 64 – 92 60 88 – 60<br />
            E-Mail: info@schmidgmbh.com<br />
            Internet: <a href="http://www.schmidgmbh.com" target="_blank">www.schmidgmbh.com</a><br /><br />

            Geschäftsführer: Thilo Schmid<br />
            Handelsregister: Amtsgericht Stuttgart HRB 10 81 55<br />
            USt.-IdNr.: DE 813 55 54 48
          </p>
          <h3>Haftungsbeschränkung</h3>
          <p>
            <strong>Inhalte dieser Website</strong> – Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der abrufbaren Inhalte erfolgt auf eigene Gefahr des Nutzers. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder.
          </p>
          <p>
            <strong>Externe Links</strong> – Diese Website enthält Verknüpfungen zu Websites Dritter („externe Links“). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle dieser externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.
          </p>

          <h3>Urheberrecht</h3>
          <p>
            Die auf dieser Website veröffentlichten Inhalte und Werke sind urheberrechtlich geschützt. Jede vom deutschen Urheberrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Autors oder Urhebers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Beiträge Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.
          </p>

          <h3>Datenschutz</h3>
          <p>
            Durch den Besuch der Website des Anbieters können Informationen über den Zugriff (Datum, Uhrzeit, betrachtete Seite) auf dem Server gespeichert werden. Diese Daten gehören nicht zu den personenbezogenen Daten, sondern sind anonymisiert. Sie werden ausschließlich zu statistischen Zwecken ausgewertet. Eine Weitergabe an Dritte, zu kommerziellen oder nichtkommerziellen Zwecken, findet nicht statt.
          </p>
          <p>
            Der Anbieter weist ausdrücklich darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen und nicht lückenlos vor dem Zugriff durch Dritte geschützt werden kann.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.imp-container {
  display: flex;
  flex-direction: row;
  padding: 30px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  gap: 20px;
}

.imp-content {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  line-height: 1.8;
}

.imp-head h2 {
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
}

.imp-head p {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.imp-body h3 {
  font-size: 20px;
  color: #333;
  margin-top: 20px;
}

.imp-body p {
  font-size: 14px;
  color: #444;
  margin-bottom: 15px;
}

.imp-body a {
  color: #1a73e8;
  text-decoration: none;
}

.imp-body a:hover {
  text-decoration: underline;
}

.imp-logo {
  height: 100px;
  object-fit: contain;
}
</style>
