<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>How I Met Your Mother</title>
        <link rel="stylesheet" type="text/css" href="../css/main.css"/>
      </head>
      <body>
        <div id="Layout">
          <xsl:variable name="page">Link1</xsl:variable>
          <div id="leftnav">
            <ul>         
              <xsl:value-of select="$page"/>
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
                <a href="index.html"/>
              </li>

              <li id="Button2">
                <a href="html/HIMYM Bar.htm"/>
              </li>

              <li id="Button3">
                <a href="html/HIMYM Quiz.htm"/>
              </li>

              <li id="Button4">
                <a href="xml/guide.xml"/>
              </li>

              <li id="Button5">
                <a href="html/HIMYM Medien.htm"/>
              </li>


              <li id="Button6">

              </li>
            </ul>
          </div>

          <div id="Content">
            <div id="Text">
              <div class="Text">
                <h1>
                  <xsl:value-of select="Serie/Episode/Titel"/>
                </h1>

                <xsl:value-of select="Serie/Episode/Beschreibung"/>
               </div>
            </div>

            <div id="Bilder">

            </div>

          </div>

          <div id="SpeechBubble">
          </div>

        </div>


      </body>
    </html>
  </xsl:template>  
</xsl:stylesheet>