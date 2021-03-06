import React from "react"

import Layout from "../components/generic/layout/layout"
import SEO from "../components/generic/seo/seo"
import Hero from "../components/hero/hero"
import Section from "../components/container/section"
import Frida from "../components/frida/frida"

const IndexPage = props => (
  <Layout title={"Frida"}>
    <SEO title="about" path={props.location.pathname} />
    <Hero backgroundColor="lila">
      <h6 style={{ fontWeight: 800 }}>ABOUT</h6>

      <h1 style={{ fontWeight: 800 }}>
        Warum wir <Frida></Frida> ins Leben gerufen haben
      </h1>
    </Hero>
    <Section backgroundColor="lila" type="text">
      <div>
        <p>
          #MeetFrida ist eine Initiative zur Förderung von Kunstschaffenden in
          Deutschland. Seit August 2020 bringt sie Kunst vom digitalen in den
          öffentlichen Raum. Sie bietet Künstlerinnen die Chance, ihre Kunst
          sichtbar zu machen und so neue Verkaufswege zu finden. Ob Malerei,
          Fotografie oder Skulptur, über 800 Werke sind inzwischen auf der
          Online-Gallery zu finden und zu kaufen. Mindestens eines der Werke
          jeder/s Künsterin kostet unter 500 EUR.
        </p>
        <br />
        <p>
          Neben der Online-Gallery www.meetfrida.art sind ausgewählte Arbeiten
          der Künstlerinnen im öffentlichen Raum zu sehen. Werke werden auf
          großflächigen Plakatwänden in ganz Deutschland gezeigt. Kunstdrucke
          machen Innenstädte im Rahmen von City Art Weeks zu Museen auf Zeit und
          Künstlerinnen bespielen mit offenen Ateliers Leerstände in
          verschiedenen Innenstädten. So wird Kunst – trotz der
          Corona-Beschränkungen – wieder sichtbar, selbst für Menschen, die
          sonst nicht mit Kultur in Berührung kommen. Und nebenbei entsteht die
          größte Outdoor-Gallery, die es in Deutschland je gab.
        </p>
        {/* <p>
          #MeetFrida ist eine neuartige Plattform, um Künstler*innen
          Sichtbarkeit zu geben und ihnen neue Verkaufswege zu eröffnen. Die
          neue Kunstschau zeigt junge Positionen aus Malerei, Fotografie und
          Skulptur sowohl online, als auch im öffentlichen Raum. Neben der
          Ausstellung in der Online-Gallery meetfrida.art und auf Instagram,
          sind die Arbeiten mindestens bis Ende 2020 auf OOH-Plakatwänden in
          ganz Deutschland zu sehen. Großflächige Plakatwände an Bahnhöfen und
          Straßen sowie digitale Werbeflächen, die laufend aktualisiert werden,
          gehören zum Portfolio. So werden die Werke – trotz der
          Corona-Beschränkungen in der Kunst – wieder sichtbar, selbst für
          Menschen, die sonst nicht mit Kunst in Berührung kommen. Und nebenbei
          entsteht die größte Outdoor-Gallery, die es in Deutschland je gab.
        </p>
        <br />
        <p>
          Das Ziel der Aktion: Die Unterstützung von Kunstschaffenden durch
          Sichtbarkeit und neue Verkaufswege. Der Erlös der Werke fließt deshalb
          zu 100 Prozent an die Künstler*innen, die Kunst kann über die Website,
          die Social Media-Kanäle und über die Outdoor-Gallery per QR-Code
          direkt erworben werden.
        </p>
        <br />
        <p>
          Qualitativ setzt #MeetFrida hohe Maßstäbe: Künstler*innen können sich
          per Open Call an der Online-Gallery beteiligen, wenn sie ein
          Kunststudium absolviert haben oder bereits mehrere Ausstellungen in
          ihrem Portfolio vorweisen können. Mindestens eines der Werke muss
          dabei unter 500 EUR kosten. Die Outdoor-Gallery wird in Kooperation
          mit der Spiegelberger Stiftung von internationalen Kunstexperten
          kuratiert. Diese definieren gemeinsame „Viewing Rooms“ mit
          Künstler*innen des Stiftungsprojekts PArt (www.producersart.com) und
          #MeetFrida. Alle Werke dieser Virtuellen Räume werden dann in der
          Outdoor-Gallery gezeigt. Den Anfang machten Georgie Pope, Chief
          Curator von Independent collectors, und Prof. Dr. Thomas Girst, BMW
          Art Program.
        </p>
        <br />

        <p>
          Warum Frida? Frida Kahlo ist Stilikone und Vorbild für viele
          Künstler*innen. Ihre Lebensgeschichte steht aber auch für den harten
          Weg, den Künstler*innen bis heute in der (Kunst-)Welt gehen. Gerade zu
          Zeiten von Corona. Aber wir wollen hier nicht Frida Kahlo besser
          kennenlernen, sondern alle Künstler*innen, die bei unserer Aktion
          mitmachen. Denn es geht um sie und ihre Kunst.
        </p> */}
        <br />
      </div>
    </Section>
  </Layout>
)

export default IndexPage
