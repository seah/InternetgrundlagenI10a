<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html"/>
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
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>How I Met Your Mother</title>
        <link rel="stylesheet" type="text/css" href="../css/main.css"/>
      </head>
      <body>
        <div id="Layout">

          <xsl:variable name="page2">Link1</xsl:variable>
          <div id="leftnav">
            <ul>
              <xsl:value-of select="$page2"/>
              <xsl:for-each select="Serie/Episode">
                <li id="Link1">
                  <a href="">
                    <xsl:value-of select="Titel"/>
                  </a>
                </li>
              </xsl:for-each>

            </ul>
          </div>


          <div id="topnav">
            <ul>
              <li id="Button1">
                <a href="../index.html"/>
              </li>

              <li id="Button2">
                <a href="../html/HIMYM Bar.htm"/>
              </li>

              <li id="Button3">
                <a href="../html/HIMYM Quiz.htm"/>
              </li>

              <li id="Button4">
                <a href="guide.xml"/>
              </li>

              <li id="Button5">
                <a href="../html/HIMYM Medien.htm"/>
              </li>


              <li id="Button6">

              </li>
            </ul>
          </div>

          <div id="Content">
            <div id="Text">
              <div class="Text">
                <h1>
                  <xsl:value-of select="$titel"/>
                </h1>
                <!-- Dieses Skript lädt die Willkommensseite und die erste Seite der Beschreibung -->
                <!--<xsl:if test="d">
                  <xsl:call-template name="pulldown">
                    <xsl:with-param name="merkeindex" select="$indexervariable"></xsl:with-param>
                  </xsl:call-template>
                </xsl:if> -->
                <xsl:value-of select="$seite" disable-output-escaping="yes"/>
              </div>
              <div id="bottomnav">
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
              </div>

              <!-- Falls die aktuelle Seite die letzte der Beschreibung ist, kann nicht mehr vorwärtsgeblättert werden. -->
              <!--              <div id="navigation">
                  <xsl:for-each select="$chapters/chapters/chapter">
                    <xsl:if test="@name = $chapter">
                      <xsl:variable name="chapterNr" select="@nr"/>
                      <xsl:call-template name="menu">
                        <xsl:with-param select="$chapterNr" name="id"/>
                      </xsl:call-template>
                    </xsl:if>
                  </xsl:for-each>
                </div> -->


              <!--         <xsl:if test="$lastPage != 'true'">
                <div id="vorblättern">
                  <xsl:element name="a">
                    <xsl:attribute name="id">ecke</xsl:attribute>
                    <xsl:attribute name="href">
                      <xsl:value-of select="$chapter"/>_<xsl:value-of select="$pagenr + 1"/>.xml
                    </xsl:attribute>
                    Vorblättern
                  </xsl:element>
                </div>
              </xsl:if>
            </div> -->

              <div id="Bilder">

              </div>

            </div>

            <div id="SpeechBubble">
            </div>

          </div>

        </div>


      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>