/*
* Aufbau des Dokuments /seka/
*
* 1.Einf�hrung                                 /seka/ 
*                
* 2.Funktionen                                 /seka/
*   2.1.Quiz                                   /seka/
*   2.2.ZumAnfang                              /seka/
*   2.3.schreibe                               /seka/
*   2.4.ladeSzenario                           /seka/
*   2.5.reset                                  /seka/ 
*
* 3.Globale Variablen & Arrays                 /seka/
*   3.1.Variablen: Spielstand & Statistik      /seka/
*   3.2.Arrays: Handlungsstr�nge & Reaktionen  /seka & seah/
*
* Schl�ssel f�r Verantwortungsbereiche:
*     
*      seha    -   Sebastian Ahlen
*      seka    -   Sergej Kasper
*      hepo    -   Henrik Porath
*      
* Entsprechend markierte Code-Bl�cke wurden von der angegebenen Person erstellt./

/***********1.Einf�hrung**********************************************************************************************************************************************************/

/*Diese Javascript- Datei dient der Darstellung des Contents f�r das Quiz in der HIMYM_Quiz.htm (im Folgenden mit ".htm" abgek�rzt). 
Die Funktionsabfolgen, die bei s�mtlichen Szenarien ausgef�hrt werden, sollen im Folgenden Schrittweise erl�utert werden.
Die genaue Beschreibung der einzelnen Funktionen bzw. Codefragmente wird direkt im Code dokumentiert.

Schritt 1: Vorbereitung auf den Quizstart bzw. Das Einblenden einer Willkommensmaske

1.)Die "Quiz" -funktion dieser Datei wird bei dem laden des body Tags der htm zu ersten mal aktiv. 
2.)Sie blendet ein dem Quizstand 0 entsprechendes Bild ein und pr�ft, ob  vom Spieler ein Name eingegeben wurde. 
3.)Da dies zun�chst nicht der Fall ist, ruft diese die Funktion "zumAnfang" mit den Parametern (hidden, hidden) auf. 
4.)Diese Eingabe f�hrt zum Ausblenden der Divboxen (kurz:Divs) mit der ID "reset" und "eingabe", sowie zum Einblenden der Div mit der ID "welcome". 
5.)Dies ist die Willkommensmaske (siehe .htm) mit dem Formular zur Namenseingabe.

Schritt 2: Das Einleiten eines Quizversuchs

(a)Der User startet seinen ersten Versuch: 

1.)Der User hat die in der .htm die Divbox mit der id="welcome" vor sich.
2.)Hat ein Besucher seinen Namen eingegeben, wird bei Klick auf den Button mit dem value="zum Quiz" die Funktion "go" ausgef�hrt. 
3.)Diese pr�ft den Namen und f�hrt bei korrekter Eingabe die funktion Quiz aus.
 
(b)Der User startet nach seinem ersten Versuch einen neuen:
1.) Der User hat in der .htm die divbox mit der id="reset" vor sich. 
2.)In dieser ist eine Aufforderung zum Neustart vorhanden, die von einem Link umschlossen ist, der onClick die funktion "reset" ausf�hrt. 
3.)Diese Funktion setzt die Anzahl der Versuche auf +1, 
4.)setzt den Quizstand auf 0, 
5.)verdeckt �ber die funktion ZumAnfang das div mit der Versuchsauswertung, zeigt durch letztere das div f�r die Antwortauswahl an und startet die Quizfunktion.    

Schritt 3.1: Die Quizfunktion stellt eine Quizstage dar

1.)Die Quizfunktion blendet das dem Quizstand (am Anfang eines Versuchs = 0) entsprechende Bild ein 
2.) pr�ft, ob vom Spieler ein Name eingegeben wurde. (Dies muss der Fall sein sonst Schritt 1)
3.)Da dies diesmal zutrift, ruft diese die Funktion "schreibe" auf,
4.)welche den Beschreibungstext zum Quizstand (0te stelle des Arrays mhandlung ei Quizbegin) als Text und die div mit der ID Stage als Empf�nger �bergeben bekommt.
5.)die funktion "Quiz" f�hrt mit der Darstellung der M�glichkeiten fort.

Schritt 3.2: Die Quizfunktion stellt die M�glichkeiten zu der Quizstage dar

1.)Jede M�glichkeit besteht aus drei Teilen ( f�r eine Erl�uterung siehe 3.2.Arrays: Handlungsstr�nge & Reaktionen). 
2.)Da die Anzahl der Wahlm�glichkeiten je nach Stage variieren kann, pr�ft die "Quiz" funktion, ob es zu jeder Radiobox eine Antwortm�glichkeit gibt. 
3.)Der dritte Teil der M�glichkeit wird abgefragt. Handelt es sich bei der 
3.)Gibt es eine Radiobox ohne Antwortm�glichkeit, wird diese ausgeblendet.
4.)Radioboxen die zuvor ausgelendet wurden, weil es f�r sie keine Antwortm�glichkeit gab, werden, falls ihnen bei der aktuell dargestellten Stage eine Antwortm�glichkeit zugewiesen ist, eingeblendet.
Die ersten beiden Teile jeder M�glichkeit der aktuellen Quizstage werden an die span Elemente hinter den Radiobuttons in der div �bergeben. Die Id des Spans dieser 

Schritt 3: Auswertung


Schritt 4: Abweichungen bei der Darstellung der weiteren Quizstages


/***********2.Funktionen**********************************************************************************************************************************************************/
/***********2.0.go**********************************************************************************************************************************************************/


function go()
{
    if (document.getElementsByName("sname") != "") {
        spielername = document.anmeldung.sname.value;
        ZumAnfang("hidden", "visible");
        document.getElementById('welcome').style.visibility = "hidden";
        Quiz();
    }
    else {
        alert("Du hast keinen Namen angegeben!");
    }
}

/***********2.1.Quiz**********************************************************************************************************************************************************/
/* Quiz stellt den Stand des Spiels durch das entsprechende Bild,
*die Situationsbeschreibung und die Auswahlm�glichkeiten dar, 
*solange dieses nicht durch eine Eingabe endet.*/
function Quiz() 
{
     var vbild = String(vstand) + '.jpg'; /* Der Name des darzustellenden Bildes wird zusammengesetzt. Die Bilder haben als Namen die Zahl des auf ihnen dargestellten Quizstandes.*/
     document.getElementById('Bild').src = "../gfx/Quiz/" + vbild; /*Pfadangabe des Bildes wird angef�gt und an das src Argment von img �bergeben*/

     if (spielername == "")/*Pr�fen ob der Spielername gesetzt ist*/ {

        ZumAnfang("hidden", "hidden");/* Einblenden der Willkommensmaske siehe Schritt 1*/
    }
    else {

        vjetzigerMS = mhandlung[vstand][strang];/*Die Beschreibung des aktuellen Standes wird aus dem Array "mhandlung" bezogen. */
        schreibe(vjetzigerMS, 'Stage'); /* Die Beschreibung wird in das Div mit der Id="Stage" geschrieben */
        var l = 0; /* l ist eine Laufvariable f�r das Array "mreaktion" */
        for (var k = 0; k < document.getElementsByName("Handlung").length; k++) /* Mit der Schleife werden alle Radiobuttons f�r die Handlungsm�glichkeiten durchlaufen. */
            {
            if (mreaktion[vstand][(l + 2)] == "none") {  /* Der dritte Teil jeder Antwortm�glichkeit des aktuellen Standes wird abgefragt. Ist der Wert ="none" ist diese keine g�ltige Antwortm�glichkeit*/
 
                document.getElementById("show" + (k + 1)).style.visibility = "hidden";  /* Zeige die Antwortm�glichkeit nicht an, da sie nur als Dummy existiert*/        
                }
            else {
                document.getElementById("show" + (k + 1)).style.visibility = "inherit"; /* Die Antwortm�glichkeit ist g�ltig. Zeige sie an.*/
                vmoeglichkeitIntro = mreaktion[vstand][l]; /*Die erste Zeile der Beschreibung der M�glichkeit wird aus dem Array "mreaktion bezogen" bezogen. */
                vmoeglichkeit = mreaktion[vstand][(l + 1)]; /*Der Rest der Beschreibung der M�glichkeit wird aus dem Array "mreaktion bezogen" bezogen. */
                schreibe(vmoeglichkeitIntro, 'moeglichkeit' + (k + 1) + 'Intro');/*Die erste Zeile der Beschreibung der M�glichkeit wird in den span mit der Id="moeglichkeit(Nummer der M�glichkeit)Intro" geschrieben.*/
                schreibe(vmoeglichkeit, 'Moeglichkeit' + (k + 1)); /*Der Rest der Beschreibung der M�glichkeit wird in den span mit der Id="moeglichkeit(Nummer der M�glichkeit)Intro" geschrieben.*/
            }
            l = l + 3;/* Da in dem Array mreaktion je 3 eintr�ge f�r eine M�glichkeit stehen, muss die Laufvariable l wird um 3 erh�ht werden*/
        }
    }
}


/***********2.2.ZumAnfang**********************************************************************************************************************************************************/
/* ZumAnfang ist die Funktion, die die Sichtbarkeit der drei Divboxen verwaltet, die in der Divbox "Quiztext" platzierten sind.
*Durch diese Funktion wird sichergestellt, das nur eine der von ihnen zur Zeit sichtbar ist.
* Desweiteren aktiviert sie die "schreibe" Funktion f�r den dynamischen Text der Willkommensmaske*/

function ZumAnfang(vreset, veingabe) {
    document.getElementById('reset').style.visibility = vreset;/*Das div mit der Id="reset" wird an dieser Stelle sichtbar oder unsichtbar gemacht.*/
    document.getElementById('eingabe').style.visibility = veingabe; /*Das div mit der Id="eingabe" wird an dieser Stelle sichtbar oder unsichtbar gemacht.*/
    if (vreset == "visible") {/*Anzeigen der Auswertung nach Quizbearbeitung*/
        vguteantworten = vguteantworten + vantwortgut; /*Die Summe der guten Antworten aller Versuche wird um die Summe der guten Antworten dieses Versuches erh�ht. Ebenso wird mit den entsprechenden Variablen aller anderen Antwortkategoien verfahren. */
        vokantworten = vokantworten + vantwortok;/*s.o.*/
        vschlechteantworten = vschlechteantworten + vantwortschlecht; /*s.o.*/
        vsehrschlechteantworten = vsehrschlechteantworten + vantwortsehrschlecht; /*s.o.*/
        schreibe(spielername, "name");/* Schreibt den Spielernamen in den span mit der id="name"*/
        schreibe(vversuch, "versuch");/* Schreibt die Versuchsnummer des abgeschlossenen Versuches in den span mit der id="name"*/ 
        schreibe('Legend�re Antworten: ' + String(vantwortgut) + '  je Spiel im Schnitt: ' + vguteantworten / vversuch, "Statistik1");/*Schreibt die Gesamtzahl der guten Antworten im aktuellen Versuch in den span mit der id="Statistik1".Ebenso wird mit den entsprechenden Variablen aller anderen Antwortkategoien verfahren.*/
        schreibe('gute Antworten: ' + String(vantwortok) + '  je Spiel im Schnitt: ' + vokantworten / vversuch, "Statistik2");/*Wie oben. Lediglich andere span (id=Statistik2)*/
        schreibe('schlechte Antworten: ' + String(vantwortschlecht) + '  je Spiel im Schnitt: ' + vschlechteantworten / vversuch, "Statistik3"); /*Wie oben. Lediglich anderer span (id=Statistik2)*/
        schreibe('richtig miese Antworten: ' + String(vantwortsehrschlecht) + '  je Spiel im Schnitt: ' + vsehrschlechteantworten / vversuch, "Statistik4"); /*Wie oben. Lediglich anderer span (id=Statistik2)*/
        vantwortgut = 0; /*Zur�cksetzen der Z�hlvariable f�r alle guten Antworten eines Versuches zur Vorbereitung der Statistikerfassung f�r den neuen Versuch. Ebenso wird mit den entsprechenden Variablen aller anderen Antwortkategoien verfahren.*/
        vantwortschlecht = 0; /*s.o.*/
        vantwortsehrschlecht = 0; /*s.o.*/
        vantwortok = 0; /*s.o.*/
    }
    if (vreset == "hidden" && veingabe == "hidden") {/*Pr�fe ob eine die div mit der Id="Eingabe" oder mit der Id="reset" sichtbar ist*/ 
        document.getElementById('welcome').style.visibility = "visible";/*Anzeigen der Willkommensmaske */
        schreibe("Willkommen zu dem offiziellen HIMYM Quiz. Das Singleleben in NewYork und dein Wingman, die HIMYM Flirtlegende Barney Stinson, erwarten dich. Wird das der Tag sein, von dem du eines Tages deinen Kindern erz�hlen wirst?", "Stage");/*Begr��ungstext wird in das div mit der Id="Stage geschrieben*/
    }
}

/***********2.3.schreibe**********************************************************************************************************************************************************/
/* Mit dieser Funktion wird Text in div und span Elemente �ber deren ID geschrieben.
* Bei dem IE und Firefox mussten jeweils unterschiedliche methoden verwendet werden, um dies zu tun.
* Weil Firefox im Gegensatz zum IE nicht den Objektzugriff �ber document.all unterst�tzt, 
* kann eine Fallunterscheidung getroffen werden, 
*die die Anwendung der richtigen methode f�r den benutzten browser erm�glicht.*/ 

  function schreibe(text, id) {

        if (document.all){

            document.getElementById(id).innerText = text;/*Wird von IE erkannt, von Firefox aber nicht*/
            }
        else 
            {

            document.getElementById(id).textContent = text; /* Wird von IE nicht erkannt daaf�r aber von Firefox*/
            }
}




/***********2.4.ladeSzenario**********************************************************************************************************************************************************/

/*dieses Skript wird aufgerufen, wenn der user eine Eingabe t�tigt.
*Es wird gepr�ft, ob die Eingabe des Users zu einem Endszenario f�hrt.
*Falls ja wird eine entsprechende R�ckmeldung in das div mit der id="Stage" geschrieben,
*das entsprechende Bild angezeigt und die Funktion ZumAnfang gestartet.
*Anderenfalls wird die Funktion Quiz mit vstand+1 gestartet.
*/
function ladeSzenario() 
{
    for (var j = 0; j < document.getElementsByName("Handlung").length; j++) /*Mit der Schleife wird der gecheckte Radiobutton ermittelt.*/
        {
            if (document.getElementsByName("Handlung")[j].checked) 
            {
                var vdastuich = document.getElementsByName("Handlung")[j].value; /* Der Wert des gecheckten Buttons wird bezogen.*/
            }
        }
    switch (vdastuich)/* Der Wert des gecheckten Buttons liegt (
        {
        case "a":
            var vdaspassiert = mreaktion[vstand][2];
            break;

        case "b":
            var vdaspassiert = mreaktion[vstand][5];
            break;

        case "c":
            var vdaspassiert = mreaktion[vstand][8];
            break;

        case "d":
            var vdaspassiert = mreaktion[vstand][11];
            break;

        default:
            schreibe("Fehler! Bitte an Admin melden.vdastuich ist kein g�ltiger Parameter. ","Stage");
            break;

        }
    vstand = vstand + 1;


    switch (vdaspassiert) 
        {
        case 0:
            vantwortsehrschlecht = 1;
            schreibe("Alter! Es gibt nur zwei wichtige Regeln, wenn du versuchst eine Frau auf subtile weise flach zu legen. Du darfst ihr nie die Wahrheit �ber deine Identit�t und/oder die Identit�t deines Copiloten offenbaren, ist die erste. Du darfst ihr deine Intention und/oder die Intention deines Copiloten nicht offenbaren, ehe sie im Netz deines bzw. seines Charms gefangen ist, ist die zweite. Siehst du was passiert, wenn du meinen Blog nicht liest?", "Stage");
            document.getElementById('Bild').src = '../gfx/Quiz/loss2.jpg';
            
            ZumAnfang("visible", "hidden");
            
                break;

        case 1:
            vantwortsehrschlecht = 1;
            schreibe('Barney sagt: "Danke f�rs mitspielen Bro,  so stelle ich mir einen Copiloten vor! Die hier kommt mit mir, aber die n�chste geh�rt dir! Versprochen!"', "Stage")
            document.getElementById('Bild').src = '../gfx/Quiz/loss1.jpg';
            
            ZumAnfang("visible", "hidden");
            
            break;

        case 2:
            vantwortok = vantwortok + 1;
            if (vstand >= 3) 
            {
                schreibe("...and it is ON!", "Stage")
                document.getElementById('Bild').src = '../gfx/Quiz/win.jpg';
                ZumAnfang("visible", "hidden");
            }
            else 
            {
                Quiz();
            }
            
            break;

        case 3:
            vstand = vstand + 1;
            vantwortgut = vantwortgut + 1;
            if (vstand >= 3) 
            {
                schreibe("...and it is ON!", "Stage")
                document.getElementById('Bild').src = '../gfx/Quiz/win.jpg';
                ZumAnfang("visible", "hidden");
            }
            else 
            {
                Quiz();
            }
            
            break;

        case 4:
            vstand = vstand - 1;
            vantwortschlecht = vantwortschlecht + 1;
            Quiz();            
            break;

        default:
            vantwortsehrschlecht = vantwortsehrschlecht + 1;
            schreibe("Na klaar... Nichts tun klappt immer!", "Stage");
            document.getElementById('Bild').src = '../gfx/Quiz/nada.gif';
            ZumAnfang("visible","hidden");
            break;
        }
}

/***********2.5.reset**********************************************************************************************************************************************************/
function reset() 
{
    ZumAnfang("hidden","visible");
    vstand = 0;
    vversuch = vversuch + 1;
    Quiz();
}

/***********3.Globale Variablen & Arrays**********************************************************************************************************************************************************/

/***********3.1.Variablen: Spielstand & Statistik**********************************************************************************************************************************************************/



/*vstand beschreibt den Spielstand*/
var vstand = 0;
/*Die Anzahl der Versuche wird abgespeichert*/
var vversuch = 1;
/* folgende Variablen halten die Anzahl der Antworten f�r den gegenw�rtigen Versuch nach Antwortkategorien fest */
var vantwortgut = 0;
var vantwortschlecht = 0;
var vantwortsehrschlecht = 0;
var vantwortok = 0;
/* Setzen der spielername- Variable, die f�r die Personalisierung der Auswertung des Quiz */
var spielername = "";
/* folgende Variablen halten die Anzahl der Antworten f�r den gegenw�rtigen Versuch nach Antwortkategorien fest */
var vguteantworten = 0;
var vokantworten = 0;
var vschlechteantworten = 0;
var vsehrschlechteantworten = 0;
/*Darstellung des aktuellen Stranges der Handlung*/
var strang = 0;



/***********3.2.Arrays: Handlungsstr�nge & Reaktionen**********************************************************************************************************************************************************/

/*hier stehen die einzelenen Quizszenarien (mhandlung).
*Es ist bei Arrayeintrag...
*... bei Arrayeintrag [0] oder [1] eine Schl�sselsituation, auf die reagiert werden muss.
*... bei Arrayeintrag [2] die Beschreibung der ersten Sackgasse
*... bei Arrayeintrag [3] die Beschreibung der zweiten Sackgasse
*/

mhandlung = new Array(3);
mhandlung[0] = new Array(1);
mhandlung[0][0] = "Hi" + spielername + ". Du stehst mit Barney an der Bar. Eine Sch�nheit die ihresgleichen sucht l�sst deinen Herzschlag stoppen. Du h�rst nur 'Dips!!' und Barney ist an dir vorbei. Waas tust du?!? LOS!";
mhandlung[1] = new Array(2);
mhandlung[1][0] = "Barneys erste Worte an Sie sind: 'Hi Barney Stinson! Ach ...und das ist" + String(spielername) + ". Stehst du auf Magie?' Funken spr�hen aus seiner Hand und was auf ihr zur�ckbleibt, ist seine Nummer. Der Engel, dem wir uns gegen�bersehen sagt: 'Hi ich bin Amy. Netter Zaubertrick, wo hast du denn das gelernt?' Barney sagt: 'Aus Indien habe ich eben mehr als nur die Perfektion der Liebeskunst mitgenommen. Sie glaubt Barney nicht 100%ig, aber auf ihren Lippen zeichnet sich ein L�cheln ab. Was tust du?";
mhandlung[1][1] = "Barneys erste Worte an Sie sind: 'Hi " + String(spielername) +" ! Ach ...und das ist Barney. Stehst du auf Magie?' Funken spr�hen aus seiner Hand und was auf ihr zur�ckbleibt, ist seine Nummer. Der Engel, dem wir uns gegen�bersehen sagt: 'Hi ich bin Amy. Netter Zaubertrick, wo hast du denn das gelernt?' Du sagt: 'Aus Indien habe ich eben mehr als nur die Perfektion der Liebeskunst mitgenommen. Sie glaubt Barney nicht 100%ig, aber auf ihren Lippen zeichnet sich ein L�cheln ab. Was tust du?";
mhandlung[2] = new Array(2);
mhandlung[2][0] = "Nachdem ihr ausgetrunken habt, sagt sie:'Ist das nur mein Eindruck, oder ist der Mai Thai hier ganz sch�n stark? Egal, ich habe jetzt lust auf Party. In welchen Clubs ist heute was los?";
mhandlung[2][1] = "Nachdem ihr ausgetrunken habt, sagt sie:'Ist das nur mein Eindruck, oder ist der Mai Thai hier ganz sch�n stark? Egal, ich habe jetzt lust auf Party. In welchen Clubs ist heute was los?";

/*Hier steht wie man auf die Milestones reagieren die m�glichen Reaktionen 
*mit der zugeh�rigen Bewertung an der nachfolgenden Stelle des Arrays:
*2 entspricht der richtigen Reaktion (n�chster Milenstein wir geladen, bzw. Sieg verk�ndet)
*1 entspricht dem dem ersten Fehlschlagszenario, Barney gewinnt (Aufmunterung des Spielers, Aufforderung zum Neuladen des Quiz)
*0 entspricht dem dem zweiten Fehlschlagszenario, beide werden abserviert (Aufmunterung des Spielers, Aufforderung zum Neuladen des Quiz)
*
*/

mreaktion = new Array(2);
mreaktion[0] = new Array(12);
mreaktion[0][0]="Ich bleibe an der Bar sitzen und sehe einfach gut aus...";
mreaktion[0][1]="denn ich habe es nicht n�tig aufzustehen. Frauen m�ssen schon zu mir kommen. Barney wird Sie mir gleich vorstellen, dann tue ich so, als h�tte ich etwas wichtiges zu tun und w�rde gerade genug Zeit f�r einen 5 Minuten- Flirt und eine andere ca. 45 Minuten dauernde Aktivit�t haben.";
mreaktion[0][2] = 1;
mreaktion[0][3]="Noch ehe Barney zum Zug kommt torpediere ich seine Bem�hungen...";
mreaktion[0][4]="indem ich ihn als notorischen L�gner entlarve. Dann sage ich ihr mit Nachdruck, dass ich die kaltbl�tige T�uschung von Frauen nicht guthei�e, auch wenn ich ihr, so hei� wie sie aussieht, so ziemlich alles erz�hlen w�rde, um sie ab zu schleppen. ";
mreaktion[0][5] = 0;
mreaktion[0][6]="Ich stelle mich lediglich zu den beiden...";
mreaktion[0][7]="damit Barney nicht darum herumkommt mich vorzustellen und seh dann weiter.";
mreaktion[0][8] = 2;
mreaktion[0][9] = "";
mreaktion[0][10] = "";
mreaktion[0][11] = "none";

mreaktion[1] = new Array(12);
mreaktion[1][0]="Ich lege die Hand um ihre H�fte und sage:";
mreaktion[1][1]="' Wie w�re es, wenn wir zu dir fahren und ich dir zeige, was Barney mit der Kunst der Liebe meint! Sicherlich hast du auch eine hei�e Freundin f�r ihn, damit er es ihr demonstrieren kann.";
mreaktion[1][2] = 0;
mreaktion[1][3]="Du siehst ihr tief in die Augen und sagst:";
mreaktion[1][4]="'Magie ist etwas tolles. Die Magie des Zauberers ist beeindruckend. Doch reicht sie an die Magie des Moments in dem sich die Augen zweier Menschen treffen, die im Begriff sind zu erkennen, dass sie f�reinander bestimmt sind?";
mreaktion[1][5] = 3;
mreaktion[1][6]="Ich unterst�tze Barney damit wir im Spiel bleiben:";
mreaktion[1][7]="'Dieser Mann wurde...', sage ich voller Stolz,'zur W�rdigung seiner Verdienste auf besagten Gebieten, von der indischen K�nigin zum Ritter geschlagen!";
mreaktion[1][8] = 1;
mreaktion[1][9] = "Ich versuch die Stimmung noch weiter aufzulockern...";
mreaktion[1][10] = "indem ich uns ein paar Drinks besorge.";
mreaktion[1][11] = 2;


mreaktion[2] = new Array(12);
mreaktion[2][0] = "Warum feiern wir beide nicht eine private Party...";
mreaktion[2][1] = "in meiner Hose?!";
mreaktion[2][2] = 0;
mreaktion[2][3] = "Warum tanzen wir nicht gleich hier...";
mreaktion[2][4] = "Die Jukebox da dr�ben hat einige Al Green Platten auf Lager";
mreaktion[2][5] = 2;
mreaktion[2][6] = "Einen Drink mehr...";
mreaktion[2][7] = "sollten wir uns noch genehmigen, dann macht das Tanzen noch mehr Spa�!";
mreaktion[2][8] = 4;
mreaktion[2][9] = "";
mreaktion[2][10] = "";
mreaktion[2][11] = "none";
