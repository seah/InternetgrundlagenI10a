<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
    <!--<xsl:param name="page" select="$merkeindex"></xsl:param> -->
    <!-- Ruft die eine Episode der guide.xml auf. -->
    <xsl:variable name="episode" select="Episode"/>
    <!-- Speichert die id der aktuellen Episode -->
    <xsl:variable name="episodenr" select="$episode/@id"/>

    <xsl:variable name="titel" select="$episode/Titel"/>

    <xsl:variable name="beschreibung" select="$episode/Beschreibung"/>
    
    <xsl:variable name="seite" select="$beschreibung/Seite"/>
    <xsl:variable name="seitenr" select="$seite/@id"/>
    <xsl:variable name="lastPage" select="$seite/@lastpage"/>

    <html>
      <head></head>
      <body>

        <!-- Debug call out -->
        <h1><xsl:value-of select="$titel"/>
        </h1>
    <xsl:value-of select="$seite"/>
    <!--<xsl:value-of select="$episodenr"/>-->

    <div>
        !kleiner!
    </div>
    <xsl:for-each select="$beschreibung/Seite">

        <xsl:value-of select="$beschreibung/Seite/@id"/>
    </xsl:for-each>

          <xsl:if test="$seite/@id != '1'">
            <div id="test">
              <xsl:element name="a">
                <xsl:attribute name="href">
                  Willkommen_<xsl:value-of select="$seitenr - 1"/>.xml
                </xsl:attribute>
                zurück
              </xsl:element>
            </div>
          </xsl:if>
        <xsl:if test="$seite/@lastpage != 'true'">
          <div id="test">
            <xsl:element name="a">
              <xsl:attribute name="href">
                Willkommen_<xsl:value-of select="$seitenr + 1"/>.xml
              </xsl:attribute>
              weiter
            </xsl:element>
          </div>
        </xsl:if>

      <a href="guide.xml" select="$seitenr + 1">!größer! </a>
      </body>
    </html>


  </xsl:template>
</xsl:stylesheet>