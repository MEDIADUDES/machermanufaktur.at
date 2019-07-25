import React from 'react';
import Helmet from 'react-helmet';

import Page from '../components/Page';

const analyticsOptOut = e => {
	if ((e.type === 'keypress' && e.which === 13) || e.type === 'click') {
		// eslint-disable-next-line no-undef
		gaOptout();
		// eslint-disable-next-line no-alert
		alert('Google Analytics erfolgreich deaktiviert.');
	}
};

const PrivacyPolicy = () => {
	return (
		<Page title="Privacy Policy">
			<Helmet>
				<meta name="robots" content="noindex" />
			</Helmet>
			<h1>Datenschutzerklärung</h1>
			<h2>1. Datenschutz auf einen Blick</h2>
			<h3>Allgemeine Hinweise</h3>{' '}
			<p>
				Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
				Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
				Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
				identifiziert werden können. Ausführliche Informationen zum Thema
				Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
				Datenschutzerklärung.
			</p>
			<h3>Datenerfassung auf dieser Website</h3>{' '}
			<p>
				<strong>
					Wer ist verantwortlich für die Datenerfassung auf dieser Website?
				</strong>
			</p>{' '}
			<p>
				Die Datenverarbeitung auf dieser Website erfolgt durch den
				Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser
				Website entnehmen.
			</p>{' '}
			<p>
				<strong>Wie erfassen wir Ihre Daten?</strong>
			</p>{' '}
			<p>
				Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
				mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein
				Kontaktformular eingeben.
			</p>{' '}
			<p>
				Andere Daten werden automatisch beim Besuch der Website durch unsere
				IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.
				Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
				Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website
				betreten.
			</p>{' '}
			<p>
				<strong>Wofür nutzen wir Ihre Daten?</strong>
			</p>{' '}
			<p>
				Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
				Website zu gewährleisten. Andere Daten können zur Analyse Ihres
				Nutzerverhaltens verwendet werden.
			</p>{' '}
			<p>
				<strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
			</p>{' '}
			<p>
				Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft,
				Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
				erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
				dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema
				Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen
				Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei
				der zuständigen Aufsichtsbehörde zu.
			</p>{' '}
			<p>
				Außerdem haben Sie das Recht, unter bestimmten Umständen die
				Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
				verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter
				„Recht auf Einschränkung der Verarbeitung“.
			</p>
			<h3>Analyse-Tools und Tools von Drittanbietern</h3>{' '}
			<p>
				Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
				ausgewertet werden. Das geschieht vor allem mit Cookies und mit
				sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt
				in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen
				zurückverfolgt werden.
			</p>{' '}
			<p>
				Sie können dieser Analyse widersprechen oder sie durch die
				Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen
				zu diesen Tools und über Ihre Widerspruchsmöglichkeiten finden Sie in
				der folgenden Datenschutzerklärung.
			</p>
			<h2>2. Hosting</h2>
			<h3>Externes Hosting</h3>{' '}
			<p>
				Diese Website wird bei einem externen Dienstleister gehostet (Hoster).
				Personenbezogenen Daten, die auf dieser Website erfasst werden, werden
				auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um
				IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
				Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige
				Daten, die über eine Website generiert werden, handeln.
			</p>{' '}
			<p>
				Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
				gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1
				lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
				Bereitstellung unseres Online-Angebots durch einen professionellen
				Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
			</p>{' '}
			<p>
				Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur
				Erfüllung seiner Leistungspflichten erforderlich ist und unsere
				Weisungen in Bezug auf diese Daten befolgen.
			</p>
			<p>
				<strong>Abschluss eines Vertrages über Auftragsverarbeitung</strong>
			</p>{' '}
			<p>
				Um die datenschutzkonforme Verarbeitung zu gewährleisten, haben wir
				einen Vertrag über Auftragsverarbeitung mit unserem Hoster geschlossen.
			</p>
			<h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
			<h3>Datenschutz</h3>{' '}
			<p>
				Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
				sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
				entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
				Datenschutzerklärung.
			</p>{' '}
			<p>
				Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
				Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
				persönlich identifiziert werden können. Die vorliegende
				Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
				sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
			</p>{' '}
			<p>
				Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei
				der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
				lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
				möglich.
			</p>
			<h3>Hinweis zur verantwortlichen Stelle</h3>{' '}
			<p>
				Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website
				ist:
			</p>{' '}
			<p>
				Dominic Pfeffer
				<br />
				Porzelangasse 3<br />
				1090 Wien
			</p>
			<p>
				Telefon: +43 699 198 310 28
				<br />
				E-Mail: office@machermanufaktur.at
			</p>
			<p>
				Verantwortliche Stelle ist die natürliche oder juristische Person, die
				allein oder gemeinsam mit anderen über die Zwecke und Mittel der
				Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen
				o. Ä.) entscheidet.
			</p>
			<h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>{' '}
			<p>
				Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
				Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
				jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an
				uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung
				bleibt vom Widerruf unberührt.
			</p>
			<h3>
				Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
				gegen Direktwerbung (Art. 21 DSGVO)
			</h3>{' '}
			<p>
				WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F
				DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS
				IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER
				PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN
				AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE
				RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE
				DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR
				IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI
				DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
				NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER
				DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG
				VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
			</p>{' '}
			<p>
				WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
				BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
				VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
				DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT
				ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
				WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT
				MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21
				ABS. 2 DSGVO).
			</p>
			<h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>{' '}
			<p>
				Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
				Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
				Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder
				des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht
				unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
				Rechtsbehelfe.
			</p>
			<h3>Recht auf Datenübertragbarkeit</h3>{' '}
			<p>
				Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
				oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder
				an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen
				zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen
				Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
				machbar ist.
			</p>
			<h3>SSL- bzw. TLS-Verschlüsselung</h3>{' '}
			<p>
				Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
				vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die
				Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
				TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
				dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt
				und an dem Schloss-Symbol in Ihrer Browserzeile.
			</p>{' '}
			<p>
				Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten,
				die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
			</p>
			<h3>Auskunft, Löschung und Berichtigung</h3>{' '}
			<p>
				Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
				das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
				personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
				Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung
				dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
				Daten können Sie sich jederzeit unter der im Impressum angegebenen
				Adresse an uns wenden.
			</p>
			<h3>Recht auf Einschränkung der Verarbeitung</h3>{' '}
			<p>
				Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
				personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit
				unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf
				Einschränkung der Verarbeitung besteht in folgenden Fällen:
			</p>{' '}
			<ul>
				{' '}
				<li>
					Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen
					Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu
					überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
					Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
					verlangen.
				</li>{' '}
				<li>
					Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
					geschah/geschieht, können Sie statt der Löschung die Einschränkung der
					Datenverarbeitung verlangen.
				</li>{' '}
				<li>
					Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie
					jedoch zur Ausübung, Verteidigung oder Geltendmachung von
					Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung
					die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
					verlangen.
				</li>{' '}
				<li>
					Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben,
					muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen
					werden. Solange noch nicht feststeht, wessen Interessen überwiegen,
					haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
					personenbezogenen Daten zu verlangen.
				</li>{' '}
			</ul>{' '}
			<p>
				Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt
				haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit
				Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung
				von Rechtsansprüchen oder zum Schutz der Rechte einer anderen
				natürlichen oder juristischen Person oder aus Gründen eines wichtigen
				öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats
				verarbeitet werden.
			</p>
			<h3>Widerspruch gegen Werbe-E-Mails</h3>{' '}
			<p>
				Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
				Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
				Werbung und Informationsmaterialien wird hiermit widersprochen. Die
				Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
				Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
				Spam-E-Mails, vor.
			</p>
			<h2>4. Datenerfassung auf dieser Website</h2>
			<h3>Cookies</h3>{' '}
			<p>
				Die Internetseiten verwenden teilweise so genannte Cookies. Cookies
				richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.
				Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und
				sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem
				Rechner abgelegt werden und die Ihr Browser speichert.
			</p>{' '}
			<p>
				Die meisten der von uns verwendeten Cookies sind so genannte
				„Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch
				gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie
				diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim
				nächsten Besuch wiederzuerkennen.
			</p>{' '}
			<p>
				Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
				Cookies informiert werden und Cookies nur im Einzelfall erlauben, die
				Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie
				das automatische Löschen der Cookies beim Schließen des Browsers
				aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität
				dieser Website eingeschränkt sein.
			</p>{' '}
			<p>
				Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs
				oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen
				(z. B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von
				Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein
				berechtigtes Interesse an der Speicherung von Cookies zur technisch
				fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine
				entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur
				Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf
				Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit
				widerrufbar.
			</p>{' '}
			<p>
				Soweit andere Cookies (z. B. Cookies zur Analyse Ihres Surfverhaltens)
				gespeichert werden, werden diese in dieser Datenschutzerklärung
				gesondert behandelt.
			</p>
			<h3>Server-Log-Dateien</h3>{' '}
			<p>
				Der Provider der Seiten erhebt und speichert automatisch Informationen
				in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
				übermittelt. Dies sind:
			</p>{' '}
			<ul>
				{' '}
				<li>Browsertyp und Browserversion</li>{' '}
				<li>verwendetes Betriebssystem</li> <li>Referrer URL</li>{' '}
				<li>Hostname des zugreifenden Rechners</li>{' '}
				<li>Uhrzeit der Serveranfrage</li> <li>IP-Adresse</li>{' '}
			</ul>{' '}
			<p>
				Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
				vorgenommen.
			</p>{' '}
			<p>
				Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit.
				f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der
				technisch fehlerfreien Darstellung und der Optimierung seiner Website –
				hierzu müssen die Server-Log-Files erfasst werden.
			</p>
			<h3>Anfrage per E-Mail, Telefon oder Telefax</h3>{' '}
			<p>
				Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
				Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
				(Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
				gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
				Einwilligung weiter.
			</p>{' '}
			<p>
				Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
				lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
				zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
				erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
				Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren
				berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein
				berechtigtes Interesse an der effektiven Bearbeitung der an uns
				gerichteten Anfragen haben.
			</p>{' '}
			<p>
				Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben
				bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
				Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
				(z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
				gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen
				– bleiben unberührt.
			</p>
			<h2>5. Analyse-Tools und Werbung</h2>
			<h3>Google Analytics</h3>{' '}
			<p>
				Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics.
				Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow
				Street, Dublin 4, Irland.
			</p>{' '}
			<p>
				Google Analytics verwendet so genannte „Cookies“. Das sind Textdateien,
				die auf Ihrem Computer gespeichert werden und die eine Analyse der
				Benutzung der Website durch Sie ermöglichen. Die durch den Cookie
				erzeugten Informationen über Ihre Benutzung dieser Website werden in der
				Regel an einen Server von Google in den USA übertragen und dort
				gespeichert.
			</p>{' '}
			<p>
				Die Speicherung von Google-Analytics-Cookies und die Nutzung dieses
				Analyse-Tools erfolgen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
				Websitebetreiber hat ein berechtigtes Interesse an der Analyse des
				Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu
				optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde (z.
				B. eine Einwilligung zur Speicherung von Cookies), erfolgt die
				Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
				DSGVO; die Einwilligung ist jederzeit widerrufbar.
			</p>{' '}
			<p>
				<strong>IP Anonymisierung</strong>
			</p>{' '}
			<p>
				Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert.
				Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten
				der Europäischen Union oder in anderen Vertragsstaaten des Abkommens
				über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA
				gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server
				von Google in den USA übertragen und dort gekürzt. Im Auftrag des
				Betreibers dieser Website wird Google diese Informationen benutzen, um
				Ihre Nutzung der Website auszuwerten, um Reports über die
				Websiteaktivitäten zusammenzustellen und um weitere mit der
				Websitenutzung und der Internetnutzung verbundene Dienstleistungen
				gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google
				Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit
				anderen Daten von Google zusammengeführt.
			</p>
			<p>
				<strong>Browser Plugin</strong>
			</p>{' '}
			<p>
				Sie können die Speicherung der Cookies durch eine entsprechende
				Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch
				darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
				Funktionen dieser Website vollumfänglich werden nutzen können. Sie
				können darüber hinaus die Erfassung der durch den Cookie erzeugten und
				auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an
				Google sowie die Verarbeitung dieser Daten durch Google verhindern,
				indem Sie das unter dem folgenden Link verfügbare Browser-Plugin
				herunterladen und installieren:{' '}
				<a
					href="https://tools.google.com/dlpage/gaoptout?hl=de"
					target="_blank"
					rel="noopener noreferrer"
				>
					https://tools.google.com/dlpage/gaoptout?hl=de
				</a>
				.
			</p>{' '}
			<p>
				<strong>Widerspruch gegen Datenerfassung</strong>
			</p>{' '}
			<p>
				Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern,
				indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie
				gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen dieser
				Website verhindert:{' '}
				<button
					type="button"
					onClick={analyticsOptOut}
					onKeyPress={analyticsOptOut}
				>
					Google Analytics deaktivieren
				</button>
				.
			</p>{' '}
			<p>
				Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics
				finden Sie in der Datenschutzerklärung von Google:{' '}
				<a
					href="https://support.google.com/analytics/answer/6004245?hl=de"
					target="_blank"
					rel="noopener noreferrer"
				>
					https://support.google.com/analytics/answer/6004245?hl=de
				</a>
				.
			</p>
			<p>
				<strong>Auftragsverarbeitung</strong>
			</p>{' '}
			<p>
				Wir haben mit Google einen Vertrag zur Auftragsverarbeitung
				abgeschlossen und setzen die strengen Vorgaben der deutschen
				Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.
			</p>
			<p>
				<strong>Speicherdauer</strong>
			</p>{' '}
			<p>
				Bei Google gespeicherte Daten auf Nutzer- und Ereignisebene, die mit
				Cookies, Nutzerkennungen (z. B. User ID) oder Werbe-IDs (z. B.
				DoubleClick-Cookies, Android-Werbe-ID) verknüpft sind, werden nach 14
				Monaten anonymisiert bzw. gelöscht. Details hierzu ersehen Sie unter
				folgendem Link:{' '}
				<a
					href="https://support.google.com/analytics/answer/7667196?hl=de"
					target="_blank"
					rel="noopener noreferrer"
				>
					https://support.google.com/analytics/answer/7667196?hl=de
				</a>
			</p>
			<h2>6. Plugins und Tools</h2>
			<h3>Google Web Fonts</h3>{' '}
			<p>
				Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
				genannte Web Fonts, die von Google bereitgestellt werden. Die Google
				Fonts sind lokal installiert. Eine Verbindung zu Servern von Google
				findet dabei nicht statt.
			</p>
		</Page>
	);
};

export default PrivacyPolicy;
