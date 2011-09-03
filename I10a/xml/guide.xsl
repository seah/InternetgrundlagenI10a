<?xml version="1.0" encoding="utf-8"?> <!-- XSLT-bearbeitung seah-->
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <!-- Das Template, wie die Links und Bilder Tag´s in der XML verarbeitet werden, werden definiert.-->  
  <xsl:template match="Link" name="Links">
        <xsl:variable name="episode" select="Episode"/>
        <xsl:variable name="beschreibung" select="$episode/Beschreibung"/>
        <a>
            <xsl:attribute name="href">
                <xsl:value-of select="." />
            </xsl:attribute>
			<xsl:value-of select="@name" />
			<img>
			<xsl:attribute name="src">
			../gfx/layout/Speechbubble1.png
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
    <!-- Speichert die id der aktuellen Episode -->
    <xsl:variable name="episodenr" select="$episode/@id"/>
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
        <link rel="stylesheet" type="text/css" href="../css/main.css"/>
      </head>
      <body>
        <div id="Layout">

          <div id="leftnav">
            <ul>
              <li id="Link1">
                <span class="himym">
                  <a href="Willkommen_1.xml">Willkommen</a>
                </span>
              </li>

              <li id="Link2">
                <span class="himym">
                  <a href="Episode1_1.xml">Episode 1</a>
                </span>
              </li>

              <li id="Link3">
                <span class="himym">
                  <a href="Episode2_1.xml">Episode 2</a>
                </span>
              </li>

              <li id="Link4">
                <span class="himym">
                  <a href="Episode3_1.xml">Episode 3</a>
                </span>
              </li>

              <li id="Link5">
                <span class="himym">
                  <a href="Episode4_1.xml">Episode 4</a>
                </span>
              </li>
            </ul>
          </div>


          <div id="topnav">
            <ul>
              <li id="Button1">
                <a href="../index.html"/>
              </li>

              <li id="Button2">
                <a href="../html/HIMYM_Bar.htm"/>
              </li>

              <li id="Button3">
                <a href="../html/HIMYM_Quiz.htm"/>
              </li>

              <li id="Button4">
                <a href="Willkommen_1.xml"/>
              </li>

              <li id="Button5">
                  <a href="../html/HIMYM_Medien.htm" />
              </li>


              <li id="Button6">

              </li>
            </ul>
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
                  <div class="test">
                    <xsl:element name="a">
                      <xsl:attribute name="href">
                        <xsl:value-of select="$titel"/>_<xsl:value-of select="$seitenr - 1"/>.xml
                      </xsl:attribute>
                      zurück
                    </xsl:element>
                  </div>
                </xsl:if>
                <xsl:if test="$seite/@lastpage != 'true'">
                  <div class="test">
                    <xsl:element name="a">
                      <xsl:attribute name="href">
                        <xsl:value-of select="$titel"/>_<xsl:value-of select="$seitenr + 1"/>.xml
                      </xsl:attribute>
                      weiter
                    </xsl:element>
                  </div>
                </xsl:if>
                <div class="test2">
                  <xsl:value-of select="$seitenr"/>/<xsl:value-of select="$beschreibung/@seiten"/>
                </div>
              </div>

              <!-- Die Bilder werden ausgelesen und in das Div-Element gelesen -->
              <div id="Bilder">
                  <xsl:apply-templates select="$beschreibung/Bild"/>
              </div>

            </div>

          </div>

        </div>


      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>