<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<!--/XSLT-Erstellung seah/
    Im Folgenden wird die guide.xsl beschrieben.
    Die Dokumentation der HTML bestandteile befinden sich
    in der index.htm. Die Dokumentation der XML-Struktur,
    befindet sich in der Willkommen_1.xml.
    
    Der Stylesheet besteht aus 3 Templates.
    - Das allgemeine Template
    - Das Link Template
    - Das Bilder Template
    
    Das allgemeine Template enthält die HTML-Definitionen
    der Seite und liest den Inhalt einer XML ein.
    
    Das Link Template ersetzt alle Link-Tags.
    
    Das Bilder Template bindet Bilder, in die Bilderleiste ein.
    
    -->
  <!-- Das Template, wie die Links und Bilder Tag´s in der XML verarbeitet werden, werden definiert.-->  
  <xsl:template match="Link" name="Links">
        <xsl:variable name="episode" select="Episode"/>
        <xsl:variable name="beschreibung" select="$episode/Beschreibung"/>
    <!-- Erzeugung eines HTML-Links aus einem <Link/>-Tag in der XML. -->
        <a>
            <xsl:attribute name="href">
                <xsl:value-of select="." />
            </xsl:attribute>
			<xsl:value-of select="@name" />
    <!-- Verschachtelung der Bilder in das Link-Tag um die Sprechblase und
         das Charakterbild zu definieren-->
			<img>
			<xsl:attribute name="src">
			../gfx/layout/Speechbubble.png
			</xsl:attribute>
			<xsl:attribute name="class">
			Bubble
			</xsl:attribute>
			<xsl:attribute name="alt">
				<xsl:value-of select="@alt" />
			</xsl:attribute>
			</img>
			<img>
			<xsl:attribute name="src">
			../gfx/layout/<xsl:value-of select="@bild"/>.png
			</xsl:attribute>
			<xsl:attribute name="class">
			SpeechBubbleHead
			</xsl:attribute>
			<xsl:attribute name="alt">
				<xsl:value-of select="@alt"/>
			</xsl:attribute>
			</img>
        </a>
    </xsl:template>
	<xsl:template match="h1" name="Titel">
					<h1>
		<xsl:value-of select="."/>
		</h1>
	</xsl:template>
  <!-- Das Bilder Template, welches definierte <Bild/> Tags
       nach HTML umwandelt. -->
    <xsl:template match="Bild" name="Bilder">
        <img>
            <xsl:attribute name="src">
                <xsl:value-of select="."/>
            </xsl:attribute>
            <xsl:attribute name="alt">
                <xsl:value-of select="@alt"/>
            </xsl:attribute>
        </img>
    </xsl:template>
  <!--Die Seite wird ausgeführt-->
  <xsl:template match="/">
    <!-- Speichert den Pfad der Episode -->
    <xsl:variable name="episode" select="Episode"/>
    <!-- Speichert den Titel der aktuellen Episode -->
    <xsl:variable name="titel" select="$episode/Titel"/>
    <!-- Speichere die Bechreibung der Aktuellen Seite -->
    <xsl:variable name="beschreibung" select="$episode/Beschreibung"/>
    <!-- Speichere die restlichen Parameter der Aktuellen Seite -->
    <xsl:variable name="seite" select="$beschreibung/Seite"/>
    <xsl:variable name="seitenr" select="$seite/@id"/>
    <xsl:variable name="lastPage" select="$seite/@lastpage"/>
    
    <!-- Ausgabe der HTML -->
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>How I Met Your Mother</title>
        <link rel="stylesheet" type="text/css" href="../css/main.css" media="screen"/>
        <link rel="stylesheet" type="text/css" href="../css/print.css" media="print"/>
      </head>
      <body>
        <div id="Layout">

          <div id="leftnav">
            <ul>

              <li id="Link1">
                <span class="himym">
                  <a href="Episode1_1.xml">Episode 1</a>
                </span>
              </li>

              <li id="Link2">
                <span class="himym">
                  <a href="Episode2_1.xml">Episode 2</a>
                </span>
              </li>

              <li id="Link3">
                <span class="himym">
                  <a href="Episode3_1.xml">Episode 3</a>
                </span>
              </li>

            </ul>
          </div>


          <div id="topnav">
            <ul>
              <li id="Button1">
                <a href="../index.htm">
                  <img class="Bubble" src="../gfx/layout/SpeechBubble.png" alt="Blub"/>
                  <img class="SpeechBubbleHead" src="../gfx/layout/TedBubble.png" alt="Blub"/>
                  <span class="himym">
                    Die Startseite mit News <br /> und Übersicht!
                  </span>
                </a>
              </li>

              <li id="Button2">
                <a href="../html/HIMYM_Bar.htm">
                  <img class="Bubble" src="../gfx/layout/SpeechBubble.png" alt="Blub"/>
                  <img class="SpeechBubbleHead" src="../gfx/layout/RobinBubble.png" alt="Blub"/>
                  <span class="himym">
                    Die Bar von How I Met Your Mother.<br />
                    Durchstöbere Mc Laren's!
                  </span>
                </a>
              </li>

              <li id="Button3">
                <a href="../html/HIMYM_Quiz.htm">
                  <img class="Bubble" src="../gfx/layout/SpeechBubble.png" alt="Blub"/>
                  <img class="SpeechBubbleHead" src="../gfx/layout/BarneyBubble.png" alt="Blub"/>
                  <span class="himym">
                    Das ultimate Quiz mit Barney Stinson.<br />
                    Teste dein Wissen vom Bro-Code!
                  </span>
                </a>
              </li>

              <li id="Button4">
                <a  href="../html/HIMYM_Show-Allgemein.htm">
                  <img class="Bubble" src="../gfx/layout/SpeechBubble.png" alt="Blub"/>
                  <img class="SpeechBubbleHead" src="../gfx/layout/LilyBubble.png" alt="Blub"/>
                  <span class="himym">
                    Infos über die Show.<br />
                    Mit Episoden-Guide und Charakterinfos!
                  </span>
                </a>
              </li>

              <li id="Button5">
                <a href="../html/HIMYM_Medien.htm">
                  <img class="Bubble" src="../gfx/layout/SpeechBubble.png" alt="Blub"/>
                  <img class="SpeechBubbleHead" src="../gfx/layout/MarshallBubble.png" alt="Blub"/>
                  <span class="himym">
                    Die Mediensammlung.<br />
                    Finde hier Bilder, Links und Videos!
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div id="Button6">

          </div>

          <div id="Content">
            <div id="Text">
                <div class="himym">
                  <!-- Dieses Skript lädt die aktuelle Seite mit Titel, Beschreibungen und Links -->
                  <xsl:apply-templates select="$seite" />
                </div>

              <!-- In der Navigation wird geprüft, ob die aktuelle Seite die letzte Seite ist,
                   dann wird weiter ausgeblendet, ist die Seite die erste Seite, dann wird zurück
                   ausgeblendet -->
              
              <div id="bottomnav">
                <xsl:if test="$seite/@id != '1'">
                  <div class="navbtn">
                    <xsl:element name="a">
                      <xsl:attribute name="href">
                        <xsl:value-of select="$titel"/>_<xsl:value-of select="$seitenr - 1"/>.xml
                      </xsl:attribute>
                      zurück
                    </xsl:element>
                  </div>
                </xsl:if>
                <xsl:if test="$seite/@lastpage != 'true'">
                  <div class="navbtn">
                    <xsl:element name="a">
                      <xsl:attribute name="href">
                        <xsl:value-of select="$titel"/>_<xsl:value-of select="$seitenr + 1"/>.xml
                      </xsl:attribute>
                      weiter
                    </xsl:element>
                  </div>
                </xsl:if>
                
                <!-- Die folgende Funktion stellt den Index der Seite dar. -->
                <div id="index">
                  <xsl:value-of select="$seitenr"/>/<xsl:value-of select="$beschreibung/@seiten"/>
                </div>
                
              </div>

            </div>

            <!-- Die Bilder werden ausgelesen und in das Div-Element eingebunden. -->

            <div id="Bilder">
              <xsl:apply-templates select="$beschreibung/Bild"/>
            </div>
            
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>