var userClick1 = 0;
var userClick2 = 0;
var userSelectedCard1 = "";
var userSelectedCard2 = "";
var howManyCorrect = 0;
var sound = new Audio('assets/media/swipeCard.mp3');
var howManyClicks = 0;

function checkClickedCard(cardNum, cardId) {
    //Geklikte kaart disablen, want je mag maar een keer op dezelfde kaart klikken
    document.getElementById(cardId).disabled = true;
    //juiste waarde op de kaart zetten

    document.getElementById(cardId).value = cardNum;

    if (cardNum === 1) {
        document.getElementById(cardId).style = "background-image: url('assets/media/flower.jpg');background-size:cover;";
    }
    if (cardNum === 2) {
        document.getElementById(cardId).style = "background-image: url('assets/media/dam.jpg');background-size:cover;";
    }
    if (cardNum === 3) {
        document.getElementById(cardId).style = "background-image: url('assets/media/tommy.jpg');background-size:cover;";
    }
    if (cardNum === 4) {
        document.getElementById(cardId).style = "background-image: url('assets/media/snake.jpg');background-size:cover;";
    }
    //Lees en onthoudt klik1 en klik2
    if (userClick1 == 0) {
        sound.play();
        userClick1 = cardNum;
        userSelectedCard1 = cardId;
        howManyClicks++;
    } else {
        sound.play();
        userClick2 = cardNum;
        userSelectedCard2 = cardId;
        howManyClicks++;
    }
    document.getElementById('total').innerHTML = (howManyClicks);

    if (userClick2 != 0) {
        if (userClick1 == userClick2) {
            alert('Goedzo...');
            howManyCorrect++;
            if (howManyCorrect == 4) {
                sound.play();
                location.reload();
            }
        } else {
            alert('Fout...');
            sound.play();
            document.getElementById(userSelectedCard1).disabled = false;
            document.getElementById(userSelectedCard2).disabled = false;
            document.getElementById(userSelectedCard1).value = "";
            document.getElementById(userSelectedCard2).value = "";
            document.getElementById(userSelectedCard1).style = "background-image:none;";
            document.getElementById(userSelectedCard2).style = "background-image:none;";
        }

        userClick1 = 0;
        userClick2 = 0;

    }
}

function shuffleCards() {
    var numbers = new Array();
    var htmlDivStr = '';
    var teller = 0;
    var numberOfCards = 8;
    //Random nummer ophalen
    while (teller < numberOfCards) {
        var randomNumber = (Math.random() * (numberOfCards / 2)) + 1;
        randomNumber = Math.floor(randomNumber);
        if (numbers[randomNumber] != 4) {
            if (numbers[randomNumber] == 1) {
                numbers[randomNumber] = '4';
            } else {
                numbers[randomNumber] = '1';
            }
            htmlDivStr = htmlDivStr + '<input type="button" id="kaart' + teller + '" class="memoryCard" onclick="checkClickedCard(' + randomNumber + ', \'kaart' + teller + '\');" />';
            teller++;
        }
    }
    document.getElementById("memoryCards").innerHTML = htmlDivStr;
}
