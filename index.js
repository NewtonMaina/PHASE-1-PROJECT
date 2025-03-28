const baseUrl = "https://sample-project-wheat-five.vercel.app/beatsDatabase";

let beatsDatabase = [];


const beatGrid = document.getElementById('beat-grid');
const beatForm = document.getElementById('beat-form');
const addBeatBtn = document.getElementById('add-beat-btn');
const updateBeatBtn = document.getElementById('update-beat-btn');




function createBeat(beat) {
    if (!beat.title || !beat.tag || !beat.price || !beat.audioSrc || !beat.imageSrc) {
        displayError('All fields are required');
        return false;
    }

    beat.id = generateUniqueId();

    beatsDatabase.push(beat);
    
    renderBeats();
    resetBeatForm();
    return true;
}

function renderBeats() {
    beatGrid.innerHTML = '';

    beatsDatabase.forEach(beat => {
        const beatItem = document.createElement('div');
        beatItem.classList.add('beat-item');
        beatItem.innerHTML = `
            <img src="${beat.imageSrc}" alt="${beat.title}">
            <h3>${beat.title}</h3>
            <p>${beat.tag}<br>Price: $${beat.price}</p>
            <audio controls src="${beat.audioSrc}"></audio>
            <div class="beat-actions">
                <button onclick="editBeat('${beat.id}')">Edit</button>
                <button onclick="deleteBeat('${beat.id}')">Delete</button>
                <button onclick="buyBeat('${beat.id}')">Buy Now</button>
            </div>
        `;
        
        beatGrid.appendChild(beatItem);
    });
}

function updateBeat(id, updatedBeat) {
    const index = beatsDatabase.findIndex(beat => beat.id === id);
    
    if (index !== -1) {
        beatsDatabase[index] = { ...beatsDatabase[index], ...updatedBeat };
        renderBeats();
        resetBeatForm();
        return true;
    }
    
    displayError('Beat not found');
    return false;
}

function deleteBeat(id) {
    const index = beatsDatabase.findIndex(beat => beat.id === id);
    
    if (index !== -1) {
        beatsDatabase.splice(index, 1);
        renderBeats();
        return true;
    }
    
    displayError('Beat not found');
    return false;
}

function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function displayError(message) {
    alert(message);
}

function resetBeatForm() {
    beatForm.reset();
    addBeatBtn.textContent = 'Add Beat';
    updateBeatBtn.style.display = 'none';
}

function editBeat(id) {
    const beatToEdit = beatsDatabase.find(beat => beat.id === id);
    
    if (beatToEdit) {
        document.getElementById('title').value = beatToEdit.title;
        document.getElementById('tag').value = beatToEdit.tag;
        document.getElementById('price').value = beatToEdit.price;
        document.getElementById('audiosrc').value = beatToEdit.audioSrc;
        document.getElementById('imageSrc').value = beatToEdit.imageSrc;
        
        addBeatBtn.textContent = 'Save Changes';
        updateBeatBtn.style.display = 'inline-block';
        
        updateBeatBtn.dataset.editId = id;
    }
}

function buyBeat(id) {
    const beatToBuy = beatsDatabase.find(beat => beat.id === id);
    
    if (beatToBuy) {
        alert(`Purchasing beat: ${beatToBuy.title} for $${beatToBuy.price}`);
    }
}

beatForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const beat = {
        title: document.getElementById('title').value,
        tag: document.getElementById('tag').value,
        price: document.getElementById('price').value,
        audioSrc: document.getElementById('audiosrc').value,
        imageSrc: document.getElementById('imageSrc').value
    };
    
    createBeat(beat);
});

updateBeatBtn.addEventListener('click', function() {
    const id = this.dataset.editId;
    
    const updatedBeat = {
        title: document.getElementById('title').value,
        tag: document.getElementById('tag').value,
        price: document.getElementById('price').value,
        audioSrc: document.getElementById('audiosrc').value,
        imageSrc: document.getElementById('imageSrc').value
    };
    
    updateBeat(id, updatedBeat);
});


document.addEventListener('DOMContentLoaded', () => {
    const initialBeats = [
        {
            id: generateUniqueId(),
            title: "NOSTALGIA",
            tag: "CENTRAL CEE X JBEE TYPEBEAT",
            price: 30,
            audioSrc: "audio/CENTRAL CEE X JBEE NOSTALGIA TYPEBEAT - BPM 140.wav",
            imageSrc: "images/cench 3_imresizer.jpg"
        },

        {
            id: generateUniqueId(),
            title: "GHAT",
            tag: "LIL MAINA TYPEBEAT",
            price: 28,
            audioSrc: "audio/~ GHAT ~ Lil Maina Typebeat Produced by @6teen.ke BPM 102.wav",
            imageSrc: "images/download (4)_imresizer.jpg"
        },

        {
            id: generateUniqueId(),
            title: "SIPPIN",
            tag: "FBG MURDA TYPEBEAT",
            price: 60,
            audioSrc: "audio/FBG MURDA Typebeat ~ Sippin ~ BPM 150 D Min Produced by @mp3meech X @6teen.ke.wav",
            imageSrc: "images/fbg murda_imresizer.jpg"
        },
        {
            id: generateUniqueId(),
            title: "BLISS",
            tag: "4MRFRANKWHITE",
            price: 30,
            audioSrc: "audio/BLISS MANABIGGIE TYPEBEAT BPM 103_Current.wav",
            imageSrc: "images/4mrFrankwhite_imresizer.jpg"
        },

        {
            id: generateUniqueId(),
            title: "VIOLIN",
            tag: "MILASHE",
            price: 30,
            audioSrc: "audio/Milashe Typebeat ~ VIOLIN~ Produced by @6teen x @itsyourboykd movie refix.wav",
            imageSrc: "images/milashe_imresizer.jpg"
        },

        {
             id: generateUniqueId(),
            title: "FORGOTTEN",
            tag: "BUDGUYZ",
            price: 50,
            audioSrc: "audio/44 DUGG FORGOTTEN BPM 142 sample.wav",
            imageSrc: "images/budguyz_imresizer.jpg"
        }

    ];
    
    beatsDatabase.push(...initialBeats);
    renderBeats();
});