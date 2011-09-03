/*vstand beschreibt den Spielstand*/
var vstand = 0;
var vantwortgut = 0;
var vantwortschlecht = 0;
var vantwortsehrschlecht = 0;
var vantwortok = 0;
var vversuch = 1;
var spielername = "";

var vguteantworten = 0;
var vokantworten = 0;
var vschlechteantworten = 0;
var vsehrschlechteantworten = 0;
var strang = 0;

/*hier stehen die Milestones(mhandlung).
*Es ist bei Arrayeintrag...
*... bei Arrayeintrag [0] oder [1] eine Schlüsselsituation, auf die reagiert werden muss.
*... bei Arrayeintrag [2] die Beschreibung der ersten Sackgasse
*... bei Arrayeintrag [3] die Beschreibung der zweiten Sackgasse
*... bei Arrayeintrag [4] Siegesmitteilung */

mhandlung = new Array(3);
mhandlung[0] = new Array(1);
mhandlung[0][0] = "Hi" + spielername + ". Du stehst mit Barney an der Bar. Eine Schönheit die ihresgleichen sucht lässt deinen Herzschlag stoppen. Du hörst nur 'Dips!!' und Barney ist an dir vorbei. Waas tust du?!? LOS!";
mhandlung[1] = new Array(2);
mhandlung[1][0] = "Barneys erste Worte an Sie sind: 'Hi Barney Stinson! Ach ...und das ist" + String(spielername) + ". Stehst du auf Magie?' Funken sprühen aus seiner Hand und was auf ihr zurückbleibt, ist seine Nummer. Der Engel, dem wir uns gegenübersehen sagt: 'Hi ich bin Amy. Netter Zaubertrick, wo hast du denn das gelernt?' Barney sagt: 'Aus Indien habe ich eben mehr als nur die Perfektion der Liebeskunst mitgenommen. Sie glaubt Barney nicht 100%ig, aber auf ihren Lippen zeichnet sich ein Lächeln ab. Was tust du?";
mhandlung[1][1] = "Barneys erste Worte an Sie sind: 'Hi " + String(spielername) +" ! Ach ...und das ist Barney. Stehst du auf Magie?' Funken sprühen aus seiner Hand und was auf ihr zurückbleibt, ist seine Nummer. Der Engel, dem wir uns gegenübersehen sagt: 'Hi ich bin Amy. Netter Zaubertrick, wo hast du denn das gelernt?' Du sagt: 'Aus Indien habe ich eben mehr als nur die Perfektion der Liebeskunst mitgenommen. Sie glaubt Barney nicht 100%ig, aber auf ihren Lippen zeichnet sich ein Lächeln ab. Was tust du?";
mhandlung[2] = new Array(2);
mhandlung[2][0] = "Nachdem ihr ausgetrunken habt, sagt sie:'Ist das nur mein Eindruck, oder ist der Mai Thai hier ganz schön stark? Egal, ich habe jetzt lust auf Party. In welchen Clubs ist heute was los?";
mhandlung[2][1] = "Nachdem ihr ausgetrunken habt, sagt sie:'Ist das nur mein Eindruck, oder ist der Mai Thai hier ganz schön stark? Egal, ich habe jetzt lust auf Party. In welchen Clubs ist heute was los?";

/*Hier steht wie man auf die Milestones reagieren die möglichen Reaktionen 
*mit der zugehörigen Bewertung an der nachfolgenden Stelle des Arrays:
*2 entspricht der richtigen Reaktion (nächster Milenstein wir geladen, bzw. Sieg verkündet)
*1 entspricht dem dem ersten Fehlschlagszenario, Barney gewinnt (Aufmunterung des Spielers, Aufforderung zum Neuladen des Quiz)
*0 entspricht dem dem zweiten Fehlschlagszenario, beide werden abserviert (Aufmunterung des Spielers, Aufforderung zum Neuladen des Quiz)
*/

mreaktion = new Array(2);
mreaktion[0] = new Array(12);
mreaktion[0][0]="Ich bleibe an der Bar sitzen und sehe einfach gut aus...";
mreaktion[0][1]="denn ich habe es nicht nötig aufzustehen. Frauen müssen schon zu mir kommen. Barney wird Sie mir gleich vorstellen, dann tue ich so, als hätte ich etwas wichtiges zu tun und würde gerade genug Zeit für einen 5 Minuten- Flirt und eine andere ca. 45 Minuten dauernde Aktivität haben.";
mreaktion[0][2] = 1;
mreaktion[0][3]="Noch ehe Barney zum Zug kommt torpediere ich seine Bemühungen...";
mreaktion[0][4]="indem ich ihn als notorischen Lügner entlarve. Dann sage ich ihr mit Nachdruck, dass ich die kaltblütige Täuschung von Frauen nicht gutheiße, auch wenn ich ihr, so heiß wie sie aussieht, so ziemlich alles erzählen würde, um sie ab zu schleppen. ";
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
/*dieses Skript wird aufgerufen, wenn der user eine Eingabe tätigt.
*Es wird geprüft, ob die Eingabe des Users zu einem Endszenario führt.
*Falls ja wird eine der situation entsprechende Meldung zurückgegeben,
*anderenfalls wird die Funktion Quiz mit vstand+1 gestartet.
*/

function ladeSzenario() 
{
    for (var j = 0; j < document.getElementsByName("Handlung").length; j++) 
        {
            if (document.getElementsByName("Handlung")[j].checked) 
            {
                var vdastuich = document.getElementsByName("Handlung")[j].value;
                document.getElementsByName("Handlung")[j].checked = "false";
            }
        }
    switch (vdastuich)
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


    switch (vdaspassiert) 
        {
        case 0:
            vantwortsehrschlecht = 1;
            schreibe("Alter! Es gibt nur zwei wichtige Regeln, wenn du versuchst eine Frau auf subtile weise flach zu legen. Du darfst ihr nie die Wahrheit über deine Identität und/oder die Identität deines Copiloten offenbaren, ist die erste. Du darfst ihr deine Intention und/oder die Intention deines Copiloten nicht offenbaren, ehe sie im Netz deines bzw. seines Charms gefangen ist, ist die zweite. Siehst du was passiert, wenn du meinen Blog nicht liest?", "Stage");
            document.getElementById('Bild').src = '../gfx/Quiz/loss2.jpg';
            
            ZumAnfang("visible", "hidden");
            
                break;

        case 1:
            vantwortsehrschlecht = 1;
            schreibe('Barney sagt: "Danke fürs mitspielen Bro,  so stelle ich mir einen Copiloten vor! Die hier kommt mit mir, aber die nächste gehört dir! Versprochen!"', "Stage")
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

/* Quiz stellt den Stand des Spiels durch das entsprechende Bild,
*die Situationsbeschreibung und die Auswahlmöglichkeiten dar, 
*solange dieses nicht durch eine Eingabe endet.*/

function Quiz() 
{

    if (spielername == "") {

        var vbild = String(vstand) + '.jpg';
        document.getElementById('Bild').src = "../gfx/Quiz/" + vbild;
        ZumAnfang("hidden", "hidden");
    }
    else {
        var vbild = String(vstand) + '.jpg';
        document.getElementById('Bild').src = "../gfx/Quiz/" + vbild;
        vjetzigerMS = mhandlung[vstand][strang];
        schreibe(vjetzigerMS, 'Stage');
        var l = 0;
        for (var k = 0; k < document.getElementsByName("Handlung").length; k++) {
            if (mreaktion[vstand][(l + 2)] == "none") {
                document.getElementById("show" + (k + 1)).style.visibility = "hidden";
            }
            else {
                document.getElementById("show" + (k + 1)).style.visibility = "inherit";
                vmoeglichkeitIntro = mreaktion[vstand][l];
                vmoeglichkeit = mreaktion[vstand][(l + 1)];
                schreibe(vmoeglichkeitIntro, 'moeglichkeit' + (k + 1) + 'Intro');
                schreibe(vmoeglichkeit, 'Moeglichkeit' + (k + 1));
            }
            l = l + 3;
        }
    }
}
  function schreibe(text, id) 
{

        if (document.all) 
            {

            document.getElementById(id).innerText = text;
            }
        else 
            {

            document.getElementById(id).textContent = text;
            }
}

    /*var vstand = 0;
    var Antwortgut = 0;
    var Antwortschlecht = 0;
    var Antwortsehrschlecht = 0;
    var Antwortok = 0;*/

function ZumAnfang(vreset, veingabe) {
    document.getElementById('reset').style.visibility = vreset;
    document.getElementById('eingabe').style.visibility = veingabe;
    if (vreset == "visible") {
        vguteantworten = vguteantworten + vantwortgut;
        vokantworten = vokantworten + vantwortok;
        vschlechteantworten = vschlechteantworten + vantwortschlecht;
        vsehrschlechteantworten = vsehrschlechteantworten + vantwortsehrschlecht;
        schreibe(spielername, "name");
        schreibe(vversuch, "versuch");
        schreibe('Legendäre Antworten: ' + String(vantwortgut) + '  je Spiel im Schnitt: ' + vguteantworten / vversuch, "Statistik1");
        schreibe('gute Antworten: ' + String(vantwortok) + '  je Spiel im Schnitt: ' + vokantworten / vversuch, "Statistik2");
        schreibe('schlechte Antworten: ' + String(vantwortschlecht) + '  je Spiel im Schnitt: ' + vschlechteantworten / vversuch, "Statistik3");
        schreibe('richtig miese Antworten: ' + String(vantwortsehrschlecht) + '  je Spiel im Schnitt: ' + vsehrschlechteantworten / vversuch, "Statistik4");
        vantwortgut = 0;
        vantwortschlecht = 0;
        vantwortsehrschlecht = 0;
        vantwortok = 0;
    }
    if (vreset == "hidden" && veingabe == "hidden") {
        document.getElementById('welcome').style.visibility = "visible";
        schreibe("Willkommen zu dem offiziellen HIMYM Quiz. Das Singleleben in NewYork und dein Wingman, die HIMYM Flirtlegende Barney Stinson, erwarten dich. Wird das der Tag sein, von dem du eines Tages deinen Kindern erzählen wirst?", "Stage");
    }
}

function reset() 
{
    ZumAnfang("hidden","visible");
    vstand = 0;
    vversuch = vversuch + 1;
    Quiz();
}

function go()
{
    if (document.getElementsByName("sname") != "") {
        spielername = document.anmeldung.sname.value;
        ZumAnfang("hidden", "visible");
        document.getElementById('welcome').style.visibility = "hidden";
        Quiz();
    }
    else {
        alert('Du hast keinen Namen angegeben!');
    }
}