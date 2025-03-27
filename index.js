// Initialize an array to store beats (this will act as your "database")
let beatsDatabase = [
    {
        id: 1,
        title: "NOSTALGIA",
        artistTag: "CENTRAL CEE X JBEE TYPEBEAT",
        price: 30,
        audioSrc: "audio/CENTRAL CEE X JBEE NOSTALGIA TYPEBEAT - BPM 140.wav",
        imageSrc: "images/cench 3_imresizer.jpg"
    },
    {
        id: 2,
        title: "BEFORE I GO",
        artistTag: "POLO G TYPEBEAT",
        price: 32,
        audioSrc: "audio/BEFORE I GO POLO G TYPEBEAT.wav",
        imageSrc: "images/polo 1_imresizer.jpg"
    },
    {
        "id": 3,
        "title": "SIPPIN",
        "artists-tag": "FBG MURDA",
        "price": "60$",
        "audioSrc": "audio/FBG MURDA Typebeat ~ Sippin ~ BPM 150 D Min Produced by @mp3meech X @6teen.ke.wav",
        "imageSrc": "images/fbg murda_imresizer.jpg"
      },
      {
        "id": 4,
        "title": "PRESSURE",
        "artists-tag": "AJAY",
        "price": "45$",
        "audioSrc": "audio/Ajay x nathan Typebeat ~ PRESSURE ~ Produced by 6teen.wav",
        "imageSrc": "images/ajay_imresizer.jpg"
      },
      {
        "id": 5,
        "title": "GHAT",
        "artists-tag": "LIL MAINA",
        "price": "28$",
        "audioSrc": "audio/~ GHAT ~ Lil Maina Typebeat Produced by @6teen.ke BPM 102.wav",
        "imageSrc": "images/download (4)_imresizer.jpg"
      },
      {
        "id": 6,
        "title": "BLISS",
        "artists-tag": "4MRFRANKWHITE",
        "price": "30$",
        "audioSrc": "audio/BLISS MANABIGGIE TYPEBEAT BPM 103_Current.wav",
        "imageSrc": "images/4mrFrankwhite_imresizer.jpg"
      },
      {
        "id": 7,
        "title": "VIOLIN",
        "artists-tag": "MILASHE",
        "price": "30$",
        "audioSrc": "audio/Milashe Typebeat ~ VIOLIN~ Produced by @6teen x @itsyourboykd movie refix.wav",
        "imageSrc": "images/milashe_imresizer.jpg"
      },
      {
        "id": 8,
        "title": "FORGOTTEN",
        "artists-tag": "MILASHE",
        "price": "50$",
        "audioSrc": "audio/44 DUGG FORGOTTEN BPM 142 sample.wav",
        "imageSrc": "images/budguyz_imresizer.jpg"
      },
      {
        "id": 9,
        "title": "MOMENT FOR LIFE",
        "artists-tag": "SOSA THE PRODIGY",
        "price": "30$",
        "audioSrc": "audio/MOMENT 4 LIFE SOSA_Master.wav",
        "imageSrc": "images/sosa_imresizer.jpg"
      },
      {
        "id": "3ab9"
      },
      {
        "id": "e6d8"
      }
    ]

function renderBeats() {
    const beatGrid = document.querySelector('.beat-grid');
    beatGrid.innerHTML = ''; 
    beatsDatabase.forEach(beat => {
        const beatItem = document.createElement('div');
        beatItem.classList.add('beat-item');
        
        beatItem.innerHTML = `
            <img src="${beat.imageSrc}" alt="${beat.title}">
            <h3>${beat.title}</h3>
            <p>${beat.artistTag}<br>Price: $${beat.price}</p>
            <audio controls src="${beat.audioSrc}"></audio>
            <a href="#" class="btn" onclick="removeBeat(${beat.id})">Buy Now</a>
        `;
        
        beatGrid.appendChild(beatItem);
    });
}

function addBeat(event) {
    event.preventDefault();  
    
    const title = document.getElementById('title').value;
    const artistTag = document.getElementById('tag').value;
    const price = document.getElementById('price').value;
    const audioSrc = document.getElementById('audiosrc').value;
    const imageSrc = document.getElementById('imageSrc').value;

    if (!title || !artistTag || !price || !audioSrc || !imageSrc) {
        alert("Please fill out all fields");
        return;
    }

    const newBeat = {
        id: beatsDatabase.length + 1, 
        title,
        artistTag,
        price: parseFloat(price),
        audioSrc,
        imageSrc
    };

    beatsDatabase.push(newBeat);

    renderBeats();

    document.getElementById('title').value = '';
    document.getElementById('tag').value = '';
    document.getElementById('price').value = '';
    document.getElementById('audiosrc').value = '';
    document.getElementById('imageSrc').value = '';
}

function removeBeat(id) {
    const beatIndex = beatsDatabase.findIndex(beat => beat.id === id);
    
    if (beatIndex !== -1) {
        beatsDatabase.splice(beatIndex, 1);
        renderBeats();
    } else {
        console.log("Beat not found");
    }
}

window.onload = renderBeats;
