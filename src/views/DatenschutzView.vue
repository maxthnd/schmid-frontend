<script setup lang="ts">
</script>

<template>
  <div class="datenschutz-view">
    <div class="ds-container">
      <img src="/assets/images/core/schmidlogo.webp" alt="" class="ds-logo">
      <div class="ds-content">
        <div class="ds-head">
          <h2>Datenschutzerklärung</h2>
          <p>Informationen zur Verarbeitung Ihrer Bewerberdaten</p>
        </div>
        <div class="ds-body">
          <h3>1. Verantwortlicher</h3>
          <p>
            Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            <br />
            Schmid GmbH, Untere Mäurichstraße 26, 74196 Neuenstadt-Stein a.K.
            <br />
            E-Mail: info@schmidgmbh.com
          </p>

          <h3>2. Erhebung und Verarbeitung personenbezogener Daten</h3>
          <p>
            Im Rahmen des Bewerbungsprozesses erheben wir personenbezogene Daten. Dazu gehören unter anderem:
            <ul>
              <li>Name, Vorname</li>
              <li>Kontaktdaten (Adresse, E-Mail, Telefonnummer)</li>
              <li>Lebenslauf, Zeugnisse, Anschreiben</li>
              <li>Weitere Angaben, die Sie uns im Rahmen Ihrer Bewerbung zur Verfügung stellen</li>
            </ul>
            Diese Daten werden ausschließlich für die Bearbeitung Ihrer Bewerbung verwendet.
          </p>

          <h3>3. Zweck und Rechtsgrundlage der Verarbeitung</h3>
          <p>
            Die Verarbeitung Ihrer Bewerberdaten erfolgt zur Entscheidung über die Begründung eines Beschäftigungsverhältnisses (§ 26 BDSG) und auf Basis von Art. 6 Abs. 1 lit. b DSGVO.
            Sofern Sie uns eine Einwilligung zur weiteren Speicherung Ihrer Daten für zukünftige Stellenangebote erteilen, erfolgt dies auf Basis von Art. 6 Abs. 1 lit. a DSGVO.
          </p>

          <h3>4. Weitergabe von Daten</h3>
          <p>
            Ihre Daten werden nur innerhalb unseres Unternehmens an die für das konkrete Bewerbungsverfahren zuständigen Stellen weitergeleitet. Eine Weitergabe an Dritte erfolgt nicht ohne Ihre ausdrückliche Einwilligung.
          </p>

          <h3>5. Dauer der Speicherung</h3>
          <p>
            Nach Abschluss des Bewerbungsverfahrens werden Ihre Daten gelöscht, sofern kein Beschäftigungsverhältnis zustande kommt. Eine längere Speicherung Ihrer Daten erfolgt nur, wenn Sie uns Ihre ausdrückliche Einwilligung erteilt haben, beispielsweise zur Aufnahme in unseren Bewerberpool.
          </p>

          <h3>6. Ihre Rechte</h3>
          <p>
            Sie haben das Recht, jederzeit Auskunft über die bei uns gespeicherten personenbezogenen Daten zu erhalten. Zudem haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer Daten. Weitere Informationen zu Ihren Rechten entnehmen Sie bitte der allgemeinen Datenschutzerklärung.
          </p>

          <h3>7. Kontakt</h3>
          <p>
            Bei Fragen zur Verarbeitung Ihrer Bewerberdaten oder zur Wahrnehmung Ihrer Rechte wenden Sie sich bitte an:
            <br />
            Schmid GmbH, Untere Mäurichstraße 26, 74196 Neuenstadt-Stein a.K.
            <br />
            E-Mail: info@schmidgmbh.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ds-container{
  display: flex;
  flex-direction: row;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 30px;
  gap: 20px;
  max-width: 900px;
}

.ds-content {
  display: flex;
  flex-direction: column;
}

.ds-logo {
  height: 84px;
}

.ds-body h3 {
  margin-top: 15px;
  font-size: 18px;
}

.ds-body p {
  margin-bottom: 15px;
}

.ds-body ul {
  list-style: disc;
  padding-left: 20px;
}

.ds-head {
  margin-bottom: 20px;
}
</style>
