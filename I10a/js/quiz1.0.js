/*vstand beschreibt den Spielstand*/
var vstand = 0;

/*hier stehen die Milestones(mhandlung).
*Es ist bei Arrayeintrag...
*... bei Arrayeintrag [0] oder [1] eine Schl�sselsituation, auf die reagiert werden muss.
*... bei Arrayeintrag [2] die Beschreibung der ersten Sackgasse
*... bei Arrayeintrag [3] die Beschreibung der zweiten Sackgasse
*... bei Arrayeintrag [4] Siegesmitteilung */

mhandlung = new Array(2);
mhandlung[0] = "Du stehst mit Barney an der Bar. Eine Sch�nheit die ihresgleichen sucht l�sst deinen Herzschlag stoppen. Du h�rst nur 'Dips!!' und Barney ist an dir vorbei. Waas tust du?!? LOS!";
mhandlung[1] = "Barneys erste Worte an Sie sind: 'Hi Barney Stinson! Ach ...und das ist Ted. Stehst du auf Magie?' Funken spr�hen aus seiner Hand und was auf ihr zur�ckbleibt, ist seine Nummer. Der Engel, dem wir uns gegen�bersehen sagt: 'Hi ich bin Amy. Netter Zaubertrick, wo hast du denn das gelernt?' Barney sagt: 'Aus Indien habe ich eben mehr als nur die Perfektion der Liebeskunst mitgenommen. Sie glaubt Barney nicht 100%ig, aber auf ihren Lippen zeichnet sich ein L�cheln ab. Was tust du?"

/*Hier steht wie man auf die Milestones reagieren die m�glichen Reaktionen 
*mit der zugeh�rigen Bewertung an der nachfolgenden Stelle des Arrays:
*2 entspricht der richtigen Reaktion (n�chster Milenstein wir geladen, bzw. Sieg verk�ndet)
*1 entspricht dem dem ersten Fehlschlagszenario, Barney gewinnt (Aufmunterung des Spielers, Aufforderung zum Neuladen des Quiz)
*0 entspricht dem dem zweiten Fehlschlagszenario, beide werden abserviert (Aufmunterung des Spielers, Aufforderung zum Neuladen des Quiz)
*/

mreaktion = new Array(2);
mreaktion[0] = new Array("Ich bleibe an der Bar sitzen und sehe einfach gut aus. Ich habe es nicht n�tig aufzustehen. Frauen m�ssen schon zu mir kommen. Barney wird Sie mir gleich vorstellen, dann tue ich so, als h�tte ich etwas wichtiges zu tun und w�rde gerade genug Zeit f�r einen 5 Minuten- Flirt und eine andere ca. 45 Minuten dauernde Aktivit�t haben.",1,"Noch ehe Barney zum Zug kommt torpediere ich seine Bem�hungen, indem ich ihn als notorischen L�gner entlarve. Dann sage ich ihr mit Nachdruck, dass ich die kaltbl�tige T�uschung von Frauen nicht guthei�e, auch wenn ich ihr, so hei� wie sie aussieht, so ziemlich alles erz�hlen w�rde, um sie ab zu schleppen. ",0,"Ich stelle mich lediglich zu den beiden, damit Barney nicht darum herumkommt mich vorzustellen und seh dann weiter.",2);
mreaktion[1] = new Array("Ich lege die Hand um ihre H�fte und sage:' Wie w�re es, wenn wir zu dir fahren und ich dir zeige, was Barney mit der Kunst der Liebe meint! Sicherlich hast du auch eine hei�e Freundin f�r ihn, damit er es ihr demonstrieren kann. ",0, "Du siehst ihr tief in die Augen und sagst: 'Magie ist etwas tolles. Die Magie des Zauberers ist beeindruckend. Doch reicht sie an die Magie des Moments in dem sich die Augen zweier Menschen treffen, die im Begriff sind zu erkennen, dass sie f�reinander bestimmt sind?",2, "Ich unterst�tze Barney damit wir im Spiel bleiben: 'Dieser Mann wurde...', sage ich voller Stolz,'zur W�rdigung seiner Verdienste auf besagten Gebieten, von der indischen K�nigin zum Ritter geschlagen!", 1);

/*dieses Skript wird aufgerufen, wenn der user eine Eingabe t�tigt.
*Es wird gepr�ft, ob die Eingabe des Users zu einem Endszenario f�hrt.
*Falls ja wird eine der situation entsprechende Meldung zur�ckgegeben,
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
            var vdaspassiert = mreaktion[vstand][1];
        break;
        case "b":
            var vdaspassiert = mreaktion[vstand][3];
        break;
        case "c":
            var vdaspassiert = mreaktion[vstand][5];
        break;
        default:
            schreibe("Fehler! Bitte an Admin melden.vdastuich ist kein g�ltiger Parameter. ","Stage");
        break;
        }
    vstand = vstand + 1;
    /*Das zweite switch kann weg, sobald passende Reaktionen die variablen im Array mreaktion ersetzen*/
    switch (vdaspassiert) 
        {
            case 0:
                schreibe("Alter! Es gibt nur zwei wichtige Regeln, wenn du versuchst eine Frau auf subtile weise flach zu legen. Du darfst ihr nie die Wahrheit �ber deine Identit�t und/oder die Identit�t deines Copiloten offenbaren, ist die erste. Du darfst ihr deine Intention und/oder die Intention deines Copiloten nicht offenbaren, ehe sie im Netz deines bzw. seines Charms gefangen ist, ist die zweite. Siehst du was passiert, wenn du meinen Blog nicht liest?", "Stage");
                document.getElementById('Bild').src = 'gfx/Quiz/loss2.jpg';
                ZumAnfang("visible","hidden");
                break;
        case 1:
            schreibe('Barney sagt: "Danke f�rs mitspielen Bro,  so stelle ich mir einen Copiloten vor! Die hier kommt mit mir, aber die n�chste geh�rt dir! Versprochen!"', "Stage")
            document.getElementById('Bild').src = 'gfx/Quiz/loss1.jpg';
            ZumAnfang("visible","hidden");
            break;
        case 2:
            if (vstand == 2) {
                schreibe("...and it is ON!", "Stage")
                document.getElementById('Bild').src = 'gfx/Quiz/win.jpg';
                ZumAnfang("visible","hidden");
            }
            else {
                Quiz();
            }
            break;
        default:
            schreibe("Na klaar... Nichts tun klappt immer!", "Stage");
            document.getElementById('Bild').src = 'gfx/Quiz/nada.gif';
            ZumAnfang("visible","hidden");
            break;
        }
}

/* Quiz stellt den Stand des Spiels durch das entsprechende Bild,
*die Situationsbeschreibung und die Auswahlm�glichkeiten dar, 
*solange dieses nicht durch eine Eingabe endet.*/

function Quiz() 
{

   var vbild = String(vstand) + '.jpg';
   document.getElementById('Bild').src = "gfx/Quiz/" + vbild;
   
   vjetzigerMS = mhandlung[vstand];
   vmoeglichkeit1 = mreaktion[vstand][0];
   vmoeglichkeit2 = mreaktion[vstand][2];
   vmoeglichkeit3 = mreaktion[vstand][4];
   
   schreibe(vjetzigerMS, 'Stage');
   schreibe(vmoeglichkeit1, 'Moeglichkeit1');
   schreibe(vmoeglichkeit2, 'Moeglichkeit2');
   schreibe(vmoeglichkeit3, 'Moeglichkeit3');
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



function ZumAnfang(vreset,veingabe)
{
document.getElementById('reset').style.visibility = vreset;
document.getElementById('eingabe').style.visibility = veingabe;
}

function reset() 
{
    ZumAnfang("hidden","visible");
    vstand = 0;
    Quiz();
}

