        
/*chrome.storage.onChanged.addListener(function(changes, area){
    // listen to changes in storage, if default button were clicked, change valid to true
    for(key in changes){
        var storageChange = changes[key];
        break;
    }       
    //storageChange.newValue;
    // customization happened

});*/


 chrome.storage.sync.get('thisLine', function(data){
           if(data.thisLine != undefined)
                 defaultchange(data.thisLine);
            else
                 _default();
                                 
          });        

/* A dictionary that has keys searched in the document, and values selected by me */
function _default(){    
    var dictionary = {
    'fag' : 'friend',
    'Fag' : 'Friend',
    'FAG' : 'FRIEND',
    'fags' : 'friends',
    'Fags' : 'Friends',
    'BASTARD' : 'FRIEND',
    'Bastard' : 'Friend',
    'bastard' : 'friend',
    'bastards' : 'friends',
    'Bastards' : 'Friends',
    'cunt' : 'woman',
    'Cunt' : 'Woman',
    'cunts' : 'womans',
    'CUNT' : 'woman',
    'fuck' : 'stink',
    'Fuck' : 'Stink',
    'FUCK' : 'STINK',
    'fucks' : 'stinks',
    'fucking' : 'stinking',
    'Fucking' : 'Stinking',
    'fucked' : 'stinked',
    'Fucked' : 'Stinked',
    'fucker' : 'stinker',
    'Fuckers' : 'Stinkers',
    'dick' : 'male part',
    'Dick' : 'Male part',
    'DICK' : 'male part',
    'dicks' : 'male parts',
    'Dicks' : 'male parts',
    'vagina' : 'woman part',
    'Vagina' : 'Woman part',
    'VAGINA' : 'WOMAN part',
    'shit' : 'darn',
    'Shit' : 'Darn',
    'SHIT' : 'darn',
    'ass' : 'donkey',
    'Ass' : 'Donkey',
    'ASS' : 'donkey',
    'bitch' : 'pup',
    'Bitch': 'Pup',
    'bitches' : 'pups',
    'Bitches' : 'pups',
    'bitchy' : 'puppy',
    'BITCH':'Pup',
    'CUM' : 'juice',
    'Cum' : 'Juice',
    'cum' : 'juice',
    'pussy' : 'kitty',
    'pussies' : 'kitties',
    'Pussy' : 'Kitty',
    'Pussy' : 'Kitty',
    'damn' : 'shoot',
    'Damn' : 'Shoot',
    'boner' : 'bone',
    'Boner' : 'Bone',
    'blowjob' : 'skill',
    'handjob' : 'skill',
    'rimjob' : 'skill',
    'smegma' : 'juice',
    'bastard' : 'bum',
    'Bastard' : 'Bum',
    'fucker' : 'meanie',
    'tit' : 'girl',
    'tits' : 'girls',
    'Tits' : 'girls',
    'Titties' : 'girls',
    'titties' : 'girls',
    'boobs' : 'girls',
    'Boobs' : 'girls',
    'Boobies' : 'girls',
    'boobies' : 'girls',
    'porn' : 'bad video',
    'Porn' : 'Bad video',
    'PORN' : 'BAD VIDEO',
    'suck' : 'eat',
    'Suck' : 'Eat',
    'sucker' : 'eater',
    'douche' : 'meanie',
    'nigger' : 'meanie',
    'Nigger' : 'Meanie',
    'NIGGER' : 'MEANIE',
    'cock' : 'chicken',
    'Cock' : 'Chicken',
    'COCK' : 'CHICKEN',
    'whore' : 'lady',
    'Whore' : 'Lady',
    'nigga' : 'brotha',
    'Nigga' : 'Brotha',
    'queef' : 'rip',
    'jizz' : 'fluid',
    'Jizz' : 'Fluid',
    'pubes' : 'body part',
    'handjob' : 'act',
    'rimjob' : 'act',
    'rim' : 'act',
    'clit' : 'body part',
    'Clit' : 'Body part',
    'damn' : 'darn',
    'Damn' : 'Darn',
    'anus' : 'tooshie',
    'Anus' : 'Tooshie',
    'asshole' : 'donkey man',
    'Asshole' : 'donkey man',
    'faggot' : 'meanie',
    'Faggot' : 'Meanie',
    'slut' : 'girl',
    'Slut' : 'girl',
    'piss' : 'leek',
    'Piss' : 'Leek',
    'motherfucker' : 'lovely person',
    'Motherfucker' : 'lovely person',
    'clit': 'female part',
    'Clit' : 'female part',
    'clits': 'female part',
    'pornographic' : 'bad video',
    'pornography' : 'bad video',
    'Pornography' : 'Bad video',
    'Pornographic' : 'Bad video',
    'sexy' : 'lovely',
    'sex' : 'art',
    'Sexy' : 'Lovely',
    'Sex' : 'Art',
    'sexting' : 'art',
    'crap' : 'darn',
    'Crap' : 'Darn',
    'fag' : 'friend',
    'Fag' : 'Friend',
    'retard' : 'challenged',
    'porn' : 'bad video',
    'Retard' : 'Challenged'
}
    /* A regex expression to match the words found in the HTML Document */

    var regex = new RegExp('\\b(' + Object.keys(dictionary).join('|') + ')\\b', 'ig');

    /* A data structure for the text nodes to be inserted in */

    var treeWalker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    


    var textNodes = [];

    while(treeWalker.nextNode()){
        textNodes.push(treeWalker.currentNode);

       
    }

    /* Set the textnode equal to the value I selected */
    for (var i = 0, len = textNodes.length; i < len; i++) {
        textNodes[i].nodeValue = textNodes[i].nodeValue.replace(regex, function(match) {
             return dictionary[match]; // found the word online
    });
  } 
}

/* Another dictionary that has keys in the HTML document and values the user inputs */
function defaultchange(val){
       
    var dictionary2 = {
    'fag' : val,
    'fags' : val,
    'Fag' : val,
    'piss' : val,
    'Piss' : val,
    'crap' : val,
    'Crap' : val,
    'bastard' : val,
    'Bastard' : val,
    'Bastards' : val,
    'bastards' : val,
    'clit' : val,
    'clits' : val,
    'retard' : val,
    'cunt' : val,
    'Cunt' : val,
    'cunts' : val,
    'CUNT' : val,
    'fuck' : val,
    'Fuck' : val,
    'FUCK' : val,
    'fucks' : val,
    'fucking' : val,
    'Fucking' : val,
    'fucked' : val,
    'Fucked' : val,
    'dick' : val,
    'Dick' : val,
    'DICK' : val,
    'dicks' : val,
    'Dicks' : val,
    'vagina' : val,
    'Vagina' : val,
    'VAGINA' : val,
    'shit' : val,
    'Shit' : val,
    'SHIT' : val,
    'ass' : val,
    'Ass' : val,
    'ASS' : val,
    'bitch' : val,
    'Bitch': val,
    'bitches' : val,
    'Bitches' : val,
    'bitchy' : val,
    'BITCH': val,
    'CUM' : val,
    'Cum' : val,
    'cum' : val,
    'pussy' : val,
    'pussies' : val,
    'Pussy' : val,
    'Pussy' : val,
    'damn' : val,
    'Damn' : val,
    'boner' : val,
    'Boner' : val,
    'blowjob' : val,
    'handjob' : val,
    'rimjob' : val,
    'smegma' : val,
    'bastard' : val,
    'Bastard' : val,
    'fucker' : val,
    'tit' : val,
    'tits' : val,
    'Tits' : val,
    'Titties' : val,
    'titties' : val,
    'boobs' : val,
    'Boobs' : val,
    'Boobies' : val,
    'boobies' : val,
    'porn' : val,
    'Porn' : val,
    'PORN' : val,
    'suck' : val,
    'Suck' : val,
    'sucker' : val,
    'douche' : val,
    'nigger' : val,
    'Nigger' : val,
    'NIGGER' : val,
    'cock' : val,
    'Cock' : val,
    'COCK' : val,
    'whore' : val,
    'Whore' : val,
    'nigga' : val,
    'Nigga' : val,
    'queef' : val,
    'jizz' : val,
    'Jizz' : val,
    'pubes' : val,
    'handjob' : val,
    'rimjob' : val,
    'rim' : val,
    'damn' : val,
    'Damn' : val,
    'anus' : val,
    'Anus' : val,
    'asshole' : val,
    'Asshole' : val,
    'faggot' : val,
    'Faggot' : val,
    'slut' :  val,
    'Slut' : val,
    'motherfucker' : val,
    'Motherfucker' : val,
    'clit': val,
    'Clit' : val,
    'clits': val,
    'porn' : val,
    'pornographic' : val,
    'pornography' : val,
    'Pornography' : val,
    'Pornographic' : val,
    'sexy' : val,
    'sex' : val,
    'Sexy' : val,
    'Sex' : val
}

    var regex2 = new RegExp('\\b(' + Object.keys(dictionary2).join('|') + ')\\b', 'ig');
    


    var treeWalker2 = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );


    var textNodes2 = [];

    while(treeWalker2.nextNode()){
        textNodes2.push(treeWalker2.currentNode);      
        
    }
    
    for (var i = 0, len = textNodes2.length; i < len; i++) {
        textNodes2[i].nodeValue = textNodes2[i].nodeValue.replace(regex2, function(match) {
             return dictionary2[match]; // found the word online
    });
  
  } 
}
//function saveInput(val){

//}
//function saveChanges(callback) {
  //      var userInput = "";


  /* Waits for an click response on the button, and then sets the user input value into a variable thisLine */

        document.getElementById('save').onclick = function(){

             var thisvalue = document.getElementById('saveLine').value;
              chrome.storage.sync.set({'thisLine': thisvalue}, function() {
                alert("Saved.")
                
        });
     }

     /* Retrieves the variable thisLine using the call back */
     /*   document.getElementById('get').onclick = function(){
             chrome.storage.sync.get('thisLine', function(data){
                alert("I will now change every word with " + data.thisLine); 
             //   userInput = data.thisLine;
             //   callback(userInput);
                                 
          });
    }*/

        document.getElementById('default').onclick = function(){
            chrome.storage.sync.clear(function(){
                alert("Resetted");
                    var error = chrome.runtime.lastError;
                        if (error) 
                             console.error(error);
            });
     }


 //}

//saveChanges(saveInput);




