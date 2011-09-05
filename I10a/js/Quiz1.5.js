/*
* Aufbau des Dokuments /seka/
*
* 1.Einführung                                 /seka/ 
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
*   3.2.Arrays: Handlungsstränge & Reaktionen  /seka & seah/
*
* Schlüssel für Verantwortungsbereiche:
*     
*      seha    -   Sebastian Ahlen
*      seka    -   Sergej Kasper
*      hepo    -   Henrik Porath
*      
* Entsprechend markierte Code-Blöcke wurden von der angegebenen Person erstellt./

/***********1.Einführung (technische Beschreibung der Quizfunktionalitäten)**********************************************************************************************************************************************************/

/*Diese Javascript- Datei dient der Darstellung des Contents für das Quiz in der HIMYM_Quiz.htm (im Folgenden mit ".htm" abgekürzt). 
Die Funktionsabfolgen, die bei sämtlichen Szenarien ausgeführt werden, sollen im Folgenden schrittweise erläutert werden.
Eine genauere Beschreibung der einzelnen Funktionen bzw. Codefragmente wird direkt im Code dokumentiert.

Schritt 1: Vorbereitung auf den Quizstart bzw. Das Einblenden einer Willkommensmaske

1.)Die "Quiz" -funktion dieser Datei wird bei dem Laden des body Tags der .htm zu ersten mal aktiv. 
2.)Sie blendet ein dem Quizstand 0 entsprechendes Bild ein und prüft, ob vom Spieler ein Name eingegeben wurde. 
3.)Da dies zunächst nicht der Fall ist, ruft diese die Funktion "zumAnfang" mit den Parametern (hidden, hidden) auf. 
4.)Diese Eingabe führt zum Ausblenden der Divboxen (kurz:Divs) mit der ID "reset" und "eingabe", sowie zum Einblenden der Div mit der ID "welcome". 
5.)Dies ist die Willkommensmaske (siehe div id="welcome") mit dem Formular zur Namenseingabe.

Schritt 2: Das Einleiten eines Quizversuchs

(a)Der User startet seinen ersten Versuch: 

1.)Der User hat die in der .htm die Divbox mit der id="welcome" vor sich.
2.)Hat ein Besucher seinen Namen eingegeben, wird bei Klick auf den Button mit dem value="zum Quiz" die Funktion "go" ausgeführt. 
3.)Diese prüft den Namen und führt bei korrekter Eingabe die funktion Quiz aus.
 
(b)Der User startet nach seinem ersten Versuch einen neuen:
1.) Der User hat in der .htm die divbox mit der id="reset" vor sich. 
2.)In dieser ist eine Aufforderung zum Neustart vorhanden, die von einem Link umschlossen ist, der onClick die funktion "reset" ausführt. 
3.)Diese Funktion setzt die Anzahl der Versuche auf +1, 
4.)setzt den Quizstand auf 0, 
5.)verdeckt über die funktion ZumAnfang die div mit der Versuchsauswertung, zeigt durch letztere die div für die Antwortauswahl an und startet die Quizfunktion.    

Schritt 3.1: Die Quizfunktion stellt eine Quizstage dar

1.)Die Quizfunktion blendet das dem Quizstand (am Anfang eines Versuchs = 0) entsprechende Bild ein 
2.) prüft, ob vom Spieler ein Name eingegeben wurde. (Dies muss der Fall sein sonst Schritt 1)
3.)Da dies diesmal zutrift, ruft diese die Funktion "schreibe" auf,
4.)welche den Beschreibungstext zum Quizstand (0te stelle des Arrays mhandlung ei Quizbegin) als Text und die div mit der ID Stage als Empfänger übergeben bekommt.
5.)die funktion "Quiz" fährt mit der Darstellung der Möglichkeiten fort.

Schritt 3.2: Die Quizfunktion stellt die Möglichkeiten zu der Quizstage dar

1.)"mreaktion" ist das Array für die Möglichkeiten. Jede Möglichkeit besteht aus drei Teilen. Einem Intro, einer Beschreibung und einer Wertung(für eine Erläuterung siehe 3.2 Arrays: Handlungsstränge & Reaktionen).
2.)Jede Möglichkeit aus dem Array steht in einem funktionalen Kontext mit je einem Radiobutton(siehe ebenfalls 3.2 Arrays: Handlungsstränge & Reaktionen). Durch die "Quiz"-Funktion wird dieser Kontext in der html sichtbar gebracht.
2.1.)Dies geschieht durch eine Schleife, die die ersten zwei Teile einer Wahlmöglichkeit in die span -Elemente neben den zugeordneten Radiobutton schreibt.
3.)Da die Anzahl der Wahlmöglichkeiten je nach Stage variieren kann, prüft die "Quiz" -Funktion bei jedem Radiobutton, ob die Wertung der Antwortmöglichkeit, die mit diesem in einen visuellen Kontext gesetzt werden soll, "none" ist. 
3.1)Ist die Wertung none handelt es sich um eine nicht benötigte Antwortmöglichkeit. Der zu ihr gehörige Radiobutton wird durch die "Quiz" -Funktion ausgeblendet.
3.2)Radiobuttons die zuvor ausgelendet wurden, werden, falls ihnen bei der aktuellen Stage eine Antwortmöglichkeit zugewiesen ist, eingeblendet.
4.)Die ersten beiden Teile einer jeden Möglichkeit der aktuellen Quizstage werden in den span Elementen hinter dem Radiobutton, der sie representiert angezeigt. 
5.)Bewegt ein Nutzer den Mauszeiger über das span -Element mit dem Intro einer Möglichkeit, wird ihm die Detailbeschreibung aus dem anderen, zur Möglichkeit gehörenden, span -Element der angezeigt (für eine technische Erläuterung siehe main.css Abschnitt 6 Kommentar x und .htm siehe p- Element in der div id="show1").
6.)Nach einer Auswahl der Antwort wird mit Klick auf den Button mit dem value="Das ist meine Antwort" die funktion "ladeSzenario" ausgeführt.
7.)Diese übernimmt die Auswertung der gewählten Antwort.

Schritt 4: Auswertung einer Antwort 

1.)Durch die Funktion "ladeSzenario" wird ermittelt, welche Radiobox ausgewählt wurde.
2.)Diese ermittelt die zur ausgewählten Radiobox gehörige Antwortmöglichkeit.
3.)Der dritte Teil der ausgewählten Möglichkeit, in dem sich die Wertigkeit der Antwort befindet wird von "ladeSzenrio" aus dem Array mhandlung bezogen.
4.)Als nächstes wird mit dem erhöhen der Variable "vstand" der Quizstand heraufgesetzt. 
5.)Danach wird festgelegt, was basierend auf der gegebenen Antwort passieren soll. Die Wertigkeit der gegebenen Antwort wird einer case- Abfrage unterzogen.
6.a.)Die Antwort entspricht in der Wertigkeit 0, 1 oder es gibt keine, weil der Nutzer nichts ausgewählt hat. ->Das Quiz endet aufgrund der Auswahl einer "sehr schlechten" Antwort. 
6.a.1.)Die Anzahl der sehr schlechten Antworten wird erhöht.
6.a.2.)Das Bild zu dem jeweiligen Fehlschlagszenario wird geladen und der entsprechende Text zur Niederlage in die div (id="Stage")geladen.
6.a.3.)Die Funktion ZumAnfang wird ausgeführt, sodass die div (id="eingabe") versteckt und die div mit der id="reset" angezeigt wird. 
6.a.4.)Die reset- div zeigt die Auswertung des Versuchs und den Link für den Neustart des Quiz an.(Das Prozedere würde bei Schritt 2 Variante (b) ansetzen)
6.b.)Die Antwort entspricht der Wertigkeit 2. ->Weil die Antwort ok ist, geht das Quiz mit dem bei 4.) heraufgesetzten Quizstand weiter oder endet einer Erfolgsmeldung.
6.b.1)Die Anzahl der Antworten, die ok waren, wird erhöht.
6.b.1)Es wird geprüft, ob der Quizstand auf den finalen Stand erhöht wurde.
6.b.a)Der Quizstand ist der finale Stand.
6.b.a.1)Die Verkündung des Sieges wird in die div (id="Stage")geladen und das passende Bild wird angezeigt. 
6.b.a.2)Es wird verfahren wie bei (6.a.3) und (6.a.4)
6.b.b)Der Quizstand ist nicht der fianle Stand.
6.b.b.1)Die Quiz Funktion wird ausgeführt.
6.c.)Die Antwort entspricht der Wertigkeit 3. -> Das Quiz geht mit dem bei 4.) heraufgesetzten Quizstand + 1 weiter (weil die Antwort gut war, wird eine Quizinstanz übersprungen) oder endet mit einem Erfolg. 
6.c.1)Die Variable "vstand" wird zum überspringen der nächsten Quizinstanz erhöht (gemäß 6.c.)).
6.c.2)Die Anzahl der Antworten, die gut waren wird erhöht.
6.c.3)Es wird geprüft, ob der Quizstand auf den finalen Stand erhöht wurde, oder darüber hinaus.
6.c.a)Der Quizstand ist der finale Stand. Weiter verfahren wie bei 6.b.a.1) und bei 6.b.a.2)
6.c.b)Der Quizstand ist nicht der fianle Stand. Weiter verfahren wie bei 6.b.b.1)
6.d.)Die Antwort entspricht der Wertigkeit 4. ->Weil die Antwort schlecht ist, entfernt man sich wieder von dem Ziel. Das Quiz setzt bei dem zuletzt erfolgreich beantworteten Quizstand wieder an.
6.d.1)Die Variable "vstand" wird zum zurückversetzen des Quizstandes gemäß 6.d. um 2 reduziert.
6.d.2)Die Anzahl der schlechten Antworten wird erhöht.
6.d.3)Die Quiz -Funktion wird ausgeführt.




/***********2.Funktionen**********************************************************************************************************************************************************/
/***********2.0.go**********************************************************************************************************************************************************/
/*Go lädt die Willkommensmaske (siehe Einleitung, Schritt 1)*/

function go()
{
    if (document.getElementsByName("sname") != "") {
        spielername = document.anmeldung.sname.value;
        mhandlung[0] = "Hi " + spielername + ". Du stehst mit Barney an der Bar. Eine Schönheit die ihresgleichen sucht lässt deinen Herzschlag stoppen. Du hörst nur 'Dips!!' und Barney ist an dir vorbei. Waas tust du?!? LOS!";
        mhandlung[1] = "Barneys erste Worte an Sie sind: 'Hi Barney Stinson! Ach ...und das ist " + String(spielername) + ". Stehst du auf Magie?' Funken sprühen aus seiner Hand und was auf ihr zurückbleibt, ist seine Nummer. Sie sagt: 'Hi ich bin Amy. Netter Zaubertrick, wo hast du denn das gelernt?' Was tust du?";
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
*die Situationsbeschreibung und die Auswahlmöglichkeiten dar, 
*solange dieses nicht durch eine Eingabe endet.*/
function Quiz() {
     var vbild = String(vstand) + '.jpg'; /* Der Name des darzustellenden Bildes wird zusammengesetzt. Die Bilder haben als Namen die Zahl des auf ihnen dargestellten Quizstandes.*/
     document.getElementById('Bild').src = "../gfx/Quiz/" + vbild; /*Pfadangabe des Bildes wird angefügt und an das src Argment von img übergeben*/

     if (spielername == "")/*Prüfen ob der Spielername gesetzt ist*/ {

        ZumAnfang("hidden", "hidden");/* Einblenden der Willkommensmaske siehe Schritt 1*/
    }
    else {
        vjetzigerMS = mhandlung[vstand];/*Die Beschreibung des aktuellen Standes wird aus dem Array "mhandlung" bezogen. */
        schreibe(vjetzigerMS, 'Stage'); /* Die Beschreibung wird in die Div mit der Id="Stage" geschrieben */
        var l = 0; /* l ist eine Laufvariable für das Array "mreaktion" */
        for (var k = 0; k < document.getElementsByName("Handlung").length; k++) /* Mit der Schleife werden alle Radiobuttons für die Handlungsmöglichkeiten durchlaufen. */
            {
            if (mreaktion[vstand][(l + 2)] == "none") {  /* Der dritte Teil jeder Antwortmöglichkeit des aktuellen Standes wird abgefragt. Ist der Wert ="none" ist diese keine gültige Antwortmöglichkeit*/
 
                document.getElementById("show" + (k + 1)).style.visibility = "hidden";  /* Zeige die Antwortmöglichkeit nicht an, da sie nur als Dummy existiert*/        
                }
            else {
                document.getElementById("show" + (k + 1)).style.visibility = "inherit"; /* Die Antwortmöglichkeit ist gültig. Zeige sie an.*/
                vmoeglichkeitIntro = mreaktion[vstand][l]; /*Die erste Zeile der Beschreibung der Möglichkeit wird aus dem Array "mreaktion bezogen" bezogen. */
                vmoeglichkeit = mreaktion[vstand][(l + 1)]; /*Der Rest der Beschreibung der Möglichkeit wird aus dem Array "mreaktion bezogen" bezogen. */
                schreibe(vmoeglichkeitIntro, 'moeglichkeit' + (k + 1) + 'Intro');/*Die erste Zeile der Beschreibung der Möglichkeit wird in den span mit der Id="moeglichkeit(Nummer der Möglichkeit)Intro" geschrieben.*/
                schreibe(vmoeglichkeit, 'Moeglichkeit' + (k + 1)); /*Der Rest der Beschreibung der Möglichkeit wird in den span mit der Id="moeglichkeit(Nummer der Möglichkeit)Intro" geschrieben.*/
            }
            l = l + 3;/* Da in dem Array mreaktion je 3 einträge für eine Möglichkeit stehen, muss die Laufvariable l wird um 3 erhöht werden*/
        }
    }
}


/***********2.2.ZumAnfang**********************************************************************************************************************************************************/
/* ZumAnfang ist die Funktion, die die Sichtbarkeit der drei Divboxen verwaltet, die in der Divbox "Quiztext" platzierten sind.
*Durch diese Funktion wird sichergestellt, das nur eine der von ihnen zur Zeit sichtbar ist.
* Desweiteren aktiviert sie die "schreibe" Funktion für den dynamischen Text der Willkommensmaske*/

function ZumAnfang(vreset, veingabe) {
    document.getElementById('reset').style.visibility = vreset;/*Die div mit der Id="reset" wird an dieser Stelle sichtbar oder unsichtbar gemacht.*/
    document.getElementById('eingabe').style.visibility = veingabe; /*Die div mit der Id="eingabe" wird an dieser Stelle sichtbar oder unsichtbar gemacht.*/
    if (vreset == "visible") {/*Anzeigen der Auswertung nach Quizbearbeitung*/
        vguteantworten = vguteantworten + vantwortgut; /*Die Summe der guten Antworten aller Versuche wird um die Summe der guten Antworten dieses Versuches erhöht. Ebenso wird mit den entsprechenden Variablen aller anderen Antwortkategoien verfahren. */
        vokantworten = vokantworten + vantwortok;/*s.o.*/
        vschlechteantworten = vschlechteantworten + vantwortschlecht; /*s.o.*/
        vsehrschlechteantworten = vsehrschlechteantworten + vantwortsehrschlecht; /*s.o.*/
        schreibe(spielername, "name"); /* Schreibt den Spielernamen in den span mit der id="name"*/
        schreibe(vversuch, "versuch");/* Schreibt die Versuchsnummer des abgeschlossenen Versuches in den span mit der id="name"*/ 
        schreibe('Legendäre Antworten: ' + String(vantwortgut) + '  je Spiel im Schnitt: ' + vguteantworten / vversuch, "Statistik1");/*Schreibt die Gesamtzahl der guten Antworten im aktuellen Versuch in den span mit der id="Statistik1".Ebenso wird mit den entsprechenden Variablen aller anderen Antwortkategoien verfahren.*/
        schreibe('gute Antworten: ' + String(vantwortok) + '  je Spiel im Schnitt: ' + vokantworten / vversuch, "Statistik2");/*Wie oben. Lediglich andere span (id=Statistik2)*/
        schreibe('schlechte Antworten: ' + String(vantwortschlecht) + '  je Spiel im Schnitt: ' + vschlechteantworten / vversuch, "Statistik3"); /*Wie oben. Lediglich anderer span (id=Statistik2)*/
        schreibe('richtig miese Antworten: ' + String(vantwortsehrschlecht) + '  je Spiel im Schnitt: ' + vsehrschlechteantworten / vversuch, "Statistik4"); /*Wie oben. Lediglich anderer span (id=Statistik2)*/
        vantwortgut = 0; /*Zurücksetzen der Zählvariable für alle guten Antworten eines Versuches zur Vorbereitung der Statistikerfassung für den neuen Versuch. Ebenso wird mit den entsprechenden Variablen aller anderen Antwortkategoien verfahren.*/
        vantwortschlecht = 0; /*s.o.*/
        vantwortsehrschlecht = 0; /*s.o.*/
        vantwortok = 0; /*s.o.*/
    }
    if (vreset == "hidden" && veingabe == "hidden") {/*Prüfe ob eine die div mit der Id="Eingabe" oder mit der Id="reset" sichtbar ist*/ 
        document.getElementById('welcome').style.visibility = "visible";/*Anzeigen der Willkommensmaske */
        schreibe("Willkommen zu dem offiziellen HIMYM Quiz. Das Singleleben in NewYork und dein Wingman, die HIMYM Flirtlegende Barney Stinson, erwarten dich. Wird das der Tag sein, von dem du eines Tages deinen Kindern erzählen wirst?", "Stage");/*Begrüßungstext wird in die div mit der Id="Stage geschrieben*/
    }
}

/***********2.3.schreibe**********************************************************************************************************************************************************/
/* Mit dieser Funktion wird Text in div und span Elemente über deren ID geschrieben.
* Bei dem IE und Firefox mussten jeweils unterschiedliche methoden verwendet werden, um dies zu tun.
* Weil Firefox im Gegensatz zum IE nicht den Objektzugriff über document.all unterstützt, 
* kann eine Fallunterscheidung getroffen werden, 
*die die Anwendung der richtigen methode für den benutzten browser ermöglicht.*/ 

  function schreibe(text, id) {

        if (document.all){

            document.getElementById(id).innerText = text;/*Wird von IE erkannt, von Firefox aber nicht*/
            }
        else 
            {

            document.getElementById(id).textContent = text; /* Wird von IE nicht erkannt, stattdessen aber von Firefox*/
            }
}




/***********2.4.ladeSzenario**********************************************************************************************************************************************************/

/*dieses Skript wird aufgerufen, wenn der user eine Eingabe tätigt.
*Es wird geprüft, ob die Eingabe des Users zu einem Endszenario führt.
*Falls ja wird eine entsprechende Rückmeldung in die div mit der id="Stage" geschrieben,
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
        switch (vdastuich)/* Durch diese case- Abfrage wird ermittelt, welche Wertigkeit der ausgewählten Möglichkeit entspricht.(siehe hierzu auch 3.2.Arrays: Handlungsstränge & Reaktionen, Das Array:"mhandlung") */
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
            schreibe("Fehler! Bitte an Admin melden.vdastuich ist kein gültiger Parameter. ","Stage");
            break;

        }
    vstand = vstand + 1;


    switch (vdaspassiert) /* Durch diese case- Abfrage wird festgelegt, welche Konsequenz die Antwort hat*/
        {
            case 0: /* siehe Einleitung Schritt 4 Punkt 6.a.)- 6.b.)*/
            vantwortsehrschlecht = 1;
            schreibe("Alter! Es gibt nur zwei wichtige Regeln, wenn du versuchst eine Frau auf subtile weise flach zu legen. Du darfst ihr nie die Wahrheit über deine Identität und/oder die Identität deines Copiloten offenbaren, ist die erste. Du darfst ihr deine Intention und/oder die Intention deines Copiloten nicht offenbaren, ehe sie im Netz deines bzw. seines Charms gefangen ist, ist die zweite. Siehst du was passiert, wenn du meinen Blog nicht liest?", "Stage");
            document.getElementById('Bild').src = '../gfx/Quiz/loss2.jpg';
            
            ZumAnfang("visible", "hidden");
            
                break;

            case 1: /* siehe Einleitung Schritt 4 Punkt 6.a.)-6.b.)*/
            vantwortsehrschlecht = 1;
            schreibe('Barney sagt: "Danke fürs mitspielen Bro,  so stelle ich mir einen Copiloten vor! Die hier kommt mit mir, aber die nächste gehört dir! Versprochen!"', "Stage")
            document.getElementById('Bild').src = '../gfx/Quiz/loss1.jpg';
            
            ZumAnfang("visible", "hidden");
            
            break;

        case 2: /* siehe Einleitung Schritt 4 Punkt Punkt 6.b.)-6.c.)*/
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

        case 3: /* siehe Einleitung Schritt 4 Punkt 6.c.)-6.d.)*/
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

        case 4: /* siehe Einleitung Schritt 4 Punkt 6.d.) fortlaufend */
            vstand = vstand - 2;
            vantwortschlecht = vantwortschlecht + 1;
            Quiz();            
            break;

        default: /* Falls der Nutzer keine Antwort ausgewählt hat siehe auch 6.a.) */
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
/* folgende Variablen halten die Anzahl der Antworten für den gegenwärtigen Versuch nach Antwortkategorien fest */
var vantwortgut = 0;
var vantwortschlecht = 0;
var vantwortsehrschlecht = 0;
var vantwortok = 0;
/* Setzen der spielername- Variable, die für die Personalisierung der Auswertung des Quiz */
var spielername = "";
/* folgende Variablen halten die Anzahl der Antworten für den gegenwärtigen Versuch nach Antwortkategorien fest */
var vguteantworten = 0;
var vokantworten = 0;
var vschlechteantworten = 0;
var vsehrschlechteantworten = 0;
/*Darstellung des aktuellen Stranges der Handlung*/
var strang = 0;



/***********3.2.Arrays: Handlungsstränge & Reaktionen**********************************************************************************************************************************************************/

/*In diesem Abschnitt wird auf die Verwendung der Arrays mhandlung und mreaktion eingegangen.
Das Array: "mhandlung"

In mhandlung stehen die einzelenen Beschreibungen zu den Quizszenarien, die in der div mit der id="Stage" erscheinen.

*Arrayeintrag [0] enthält die Beschreibung zum Beginn des Quiz.
*Alle weiteren Arrayeinträge repräsentieren nachfolgende Quizstände.
*Das Siegesszenario und die Fehlschlagsszenarien sind nicht enthalten, weil sie über die Funktion lade Szenario direkt in das div (id="Stage") geschrieben werden.
*/

mhandlung = new Array(3);
mhandlung[0] = "";
mhandlung[1] = "";
mhandlung[2] = "Nachdem ihr ausgetrunken habt, sagt sie:'Ist das nur mein Eindruck, oder ist der Mai Thai hier ganz schön stark? Egal, ich habe jetzt lust auf Party. In welchen Clubs ist heute was los?";

/*
Das Array: "mreaktion"

In dem Array mreaktionen stehen die Antwortmöglichkeiten.
Die erste Dimension des Arrays beschreibt die Stage, zu der die Möglichkeit gehört.

In der zweiten Dimension stehen je drei Stellen des Arrays für eine Möglichkeit: 

Stelle1 entspricht dem Intro.
Stelle2 entspricht der Detailbeschreibung.
Stelle3 entspricht der Wertung.

Die Anordnung der Möglichkeiten im Array stellt einen semantischen Zusammenhang zu den Radiobuttons her und ermöglichen die Auswertung.

Beispiel:

Die Stellen [0], [1] und [2] gehören jeweils zu der Möglichkeit, die in die span- Elemente (Id="Moeglichkeit1Intro" & "Moeglichkeit1")neben der ersten Radiobox geladen wird.
Wird diese mit dem value="a" übergebene Radiobox als "checked" ausgelesen (Einleitung Schritt 4 1.)), so stellt eine Caseabfrage fest, dass die erste Möglichkeit des aktuellen Quizstandes
zu betrachten ist. 
(Sie ermittelt über den Quizstandzähler den richtigen Eintrag in der ersten Dimension des Arrays
und bezieht die Wertigkeit der Antwort aus der dritten Stelle([2]) der zweiten Dimension des Arrays.

Für die Bedeutung der Wertungen siehe Schritt 4 in der Einleitung.

*/

mreaktion = new Array(2);
mreaktion[0] = new Array(12);
mreaktion[0][0]="Ich bleibe an der Bar sitzen und sehe einfach gut aus...";
mreaktion[0][1]="Frauen müssen schon zu mir kommen. Barney wird Sie mir schon gleich vorstellen.";
mreaktion[0][2] = 1;
mreaktion[0][3]="Ich torpediere Barneys Bemühungen...";
mreaktion[0][4]="indem ich ihn als notorischen Lügner entlarve, da ich die kaltblütige Täuschung von Frauen nicht gutheiße.";
mreaktion[0][5] = 0;
mreaktion[0][6]="Ich stelle mich lediglich zu den beiden...";
mreaktion[0][7]="damit Barney nicht darum herumkommt mich vorzustellen und seh dann weiter.";
mreaktion[0][8] = 2;
mreaktion[0][9] = "";
mreaktion[0][10] = "";
mreaktion[0][11] = "none";

mreaktion[1] = new Array(12);
mreaktion[1][0]="Ich lege die Hand um ihre Hüfte und sage:";
mreaktion[1][1]="' Wie wäre es, wenn wir zu dir fahren und ich dir zeige, was Barney mit der Kunst der Liebe meint! Sicherlich hast du auch eine heiße Freundin für ihn, damit er es ihr demonstrieren kann.";
mreaktion[1][2] = 0;
mreaktion[1][3]="Du siehst ihr tief in die Augen und sagst:";
mreaktion[1][4]="'Magie ist etwas tolles. Die Magie des Zauberers ist beeindruckend. Doch reicht sie an die Magie des Moments in dem sich die Augen zweier Menschen treffen, die im Begriff sind zu erkennen, dass sie füreinander bestimmt sind?";
mreaktion[1][5] = 3;
mreaktion[1][6]="Ich unterstütze Barney damit wir im Spiel bleiben:";
mreaktion[1][7]="'Dieser Mann wurde...', sage ich voller Stolz,'zur Würdigung seiner Verdienste auf besagten Gebieten, von der indischen Königin zum Ritter geschlagen!";
mreaktion[1][8] = 1;
mreaktion[1][9] = "Ich versuch die Stimmung noch weiter aufzulockern...";
mreaktion[1][10] = "indem ich uns ein paar Drinks besorge.";
mreaktion[1][11] = 2;


mreaktion[2] = new Array(12);
mreaktion[2][0] = "Warum feiern wir beide nicht eine private Party...";
mreaktion[2][1] = "in meiner Hose?!";
mreaktion[2][2] = 0;
mreaktion[2][3] = "Warum tanzen wir nicht gleich hier...";
mreaktion[2][4] = "Die Jukebox da drüben hat einige Al Green Platten auf Lager";
mreaktion[2][5] = 2;
mreaktion[2][6] = "Einen Drink mehr...";
mreaktion[2][7] = "sollten wir uns noch genehmigen, dann macht das Tanzen noch mehr Spaß!";
mreaktion[2][8] = 4;
mreaktion[2][9] = "";
mreaktion[2][10] = "";
mreaktion[2][11] = "none";
