const languages = {
    'en': [
      'Excuse me',
      'Coffee, please',
      'Taxi',
      'Sale',
      'Hey, how\'s it going?',
      'Next stop, please',
      'What\'s the special today?',
      'Mind the gap.',
      'Tickets, please.',
      'Street performer',
      'I\'ll have the usual.',
      'Lost and found.',
      'Can I take your order?',
      'Tourist information.',
      'Don\'t walk',
      'Watch your step.',
      'One ticket, please.',
      'Change for the bus?',
      'Mind your business',
      'Sale ends today',
      'Hello there',
      'Exciting offers',
      'Need directions?',
      'Out of stock.',
      'Cash or card?',
      'Street food',
      'Mind the crowd.',
      'Last call for...',
      'Busy day, huh?',
      'Limited edition.',
      'Let\'s meet up',
      'Watch your wallet.',
      'Special discount',
      'Mind if I join?',
      'No parking',
      'New arrivals.',
      'What\'s the Wi-Fi?',
      'Closing soon.',
      'Emergency exit.',
      'Sale extended!',
      'Time for a break.',
      'Amazing view',
 
    ],
    'fr': [

        'Lumières de la ville.',
        'Places réservées.',
        'Regardez des deux côtés.',
        'Une bouchée rapide ?',
        'Attention aux travaux.',
        'Produits frais !',
        'Bureau des objets trouvés.',
        'Soyez poli.',
        'Échantillons gratuits.',
        'Des recommandations ?',
        'Nouvelle exposition.',
        'Excusez-moi, avez-vous l\'heure ?',
        'Offre à durée limitée.',
        'Faites attention à votre marche, s\'il vous plaît.',
        'Besoin d\'aide avec ça ?',
        'Galerie d\'art de rue.',
        'Livraison tard dans la nuit.',
        'La vente se termine aujourd\'hui.',
        'Promotions de l\'heure heureuse.',
        'Rue à sens unique.',
        'Baissez le volume.',
        'Départ du bus.',
        'Piste cyclable à venir.',
        'Puis-je vous aider à trouver quelque chose ?',
        'Café fraîchement infusé.',
        'Zone de tranquillité à venir.'
 
    ],
    'ja': [
        '鳩がいたるところにいます。',
        '待ち合わせ場所、ここです。',
        '自転車に注意。',
        '傘、販売中。',
        '無料サンプル、試してみて。',
        '写真のチャンス。',
        '喫煙所はこちらです。',
        '前方に工事中、迂回路。',
        '今夜はライブミュージック。',
        '1ドルのおつりありますか',
        '大切なものに気をつけてください。',
        'ストリートミュージシャン歓迎。',
        'この景色を見てください。',
        'ストリートアート、見てみて。',
        '写真を撮ってもいいですか？',
        '非常口、通路を空けてください。',
        'ハッピーアワー、参加しませんか？',
        '足元に気をつけてください。',
        '迷子の子供、お手伝いお願いします。',
        '新しいメニュー、店内にお入りください。',
        '携帯修理、即修理。',
        'カーシェアピックアップポイント。',
        '遅延予想、事前に計画してください。',
        '路上販売者、個性的なアイテムあり。',
        '市内ツアー、利用可能。'
    ],

    'es': [
        'Librería a la vuelta de la esquina.',
        'Cuidado con la multitud.',
        'Snacks nocturnos, abiertos.',
        'Alquiler de scooters eléctricos aquí.',
        'Festival de arte callejero la próxima semana.',
        'Perdí mi billetera, ayuda.',
        'Boutique de moda, estilos modernos.',
        'Parada de autobús adelante.',
        'Wi-Fi gratuito disponible.',
        'Comienza la zona peatonal.',
        'Se acercan los limpiadores de calles.',
        'Descuentos, ¡solo por tiempo limitado!',
        'Mercado de productos locales.',
        'Atención a los carteristas.',
        '¡Helado, gelato!',
        'Cenas en la calle, reservaciones.',
        'Partido de baloncesto callejero, únete.',
        'Centro de información de la ciudad.',
        'Atención a los ciclistas.',
        'Cierre de la calle, ruta alternativa.',
        'Cambio suelto, por favor.',
        'Teatro en vivo, por aquí.',
        'Evento de adopción de mascotas hoy.',
        'Vista del horizonte de la ciudad adelante.',
        'Mago callejero actuando.',
        'Estación de alquiler de bicicletas.',
        'Apertura de galería de arte esta noche.',
        'Atención a los artistas callejeros.',
        'Baños públicos cercanos.',
        'Festival de camiones de comida mañana.'
      ],

      'it': [
        'Code di traffico avanti, considera percorsi alternativi.',
        'Fiera di strada in corso.',
        'Guide turistiche della città disponibili, informazioni all\'interno.',
        'Vietato lo skateboard in questa zona.',
        'Ho perso il mio amico, l\'hai visto?',
        'Concorso di artisti di strada il prossimo weekend.',
        'Istallazione artistica sponsorizzata dalla città, ammira la creatività.',
        'Fioraio sul marciapiede.',
        'Mercato di strada, oggetti artigianali.',
        'Istallazione artistica pubblica, fatti un selfie!',
        'Lezione gratuita di yoga nel parco.',
        'Attraversamento pedonale, usa la striscia pedonale.',
        'Tour storico a piedi inizierà presto.',
        'Camion di consegna, attenzione!',
        'Predicatori di strada, ascolta il messaggio.',
        'Torneo di giochi di strada oggi.',
        'Iniziativa di riciclaggio sponsorizzata dalla città.',
        'Trasmissione di notizie in diretta, radunatevi.',
        'Ufficio oggetti smarriti, segnala gli oggetti perduti qui.',
        'Muro di strada in corso, guarda l\'artista al lavoro.'
      ],
    
  };
  
  function generateRandomPhrases() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';
  
    for (let i = 0; i < 5; i++) {
      const phrase = [];
      const languagesList = Object.keys(languages);
      for (let j = 0; j < languagesList.length; j++) {
        const langCode = getRandomElement(languagesList);
        const randomWordIndex = Math.floor(Math.random() * languages[langCode].length);
        const word = languages[langCode][randomWordIndex];
        phrase.push(word);
        speak(word, langCode);
      }
  
      const paragraph = document.createElement('p');
      paragraph.textContent = phrase.join(' ');
      outputDiv.appendChild(paragraph);
    }
  }
  
  function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
  function speak(text, langCode) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode;
    speechSynthesis.speak(utterance);
  }
  
  let isTextToSpeechEnabled = true;
  
  function toggleTextToSpeech() {
    isTextToSpeechEnabled = !isTextToSpeechEnabled;
  }
  
  function enableTextToSpeech() {
    isTextToSpeechEnabled = true;
  }
  
  function disableTextToSpeech() {
    isTextToSpeechEnabled = false;
  }
  
  