document.addEventListener('DOMContentLoaded', function () {
    const name1Input = document.getElementById('name1');
    const name2Input = document.getElementById('name2');
    const calculateDateButton = document.getElementById('calculateDateButton');
    const marriageDate = document.getElementById('marriageDate');

    
    const emojis = ['❤️', '😍', '🎉'];

    
    const emojiContainer = document.createElement('div');
    emojiContainer.className = 'emoji-container';
    emojis.forEach(emoji => {
        const emojiButton = document.createElement('button');
        emojiButton.className = 'emoji-button';
        emojiButton.innerHTML = emoji;
        emojiButton.addEventListener('click', function () {
            updateReaction(emoji);
        });
        emojiContainer.appendChild(emojiButton);
    });
    document.body.appendChild(emojiContainer);

    function updateReaction(selectedEmoji) {
        
        const reactionEmoji = document.getElementById('reactionEmoji');
        reactionEmoji.textContent = selectedEmoji;
    }

    calculateDateButton.addEventListener('click', function () {
        const name1 = name1Input.value.trim();
        const name2 = name2Input.value.trim();

        if (name1 === "" || name2 === "") {
            marriageDate.innerHTML = 'Please enter both names.';
        } else {
            
            const currentYear = new Date().getFullYear();

            
            const randomSeason = Math.floor(Math.random() * 4); 
            let randomMonth;
            switch (randomSeason) {
                case 0: 
                    randomMonth = Math.floor(Math.random() * 3) + 3; 
                    break;
                case 1:
                    randomMonth = Math.floor(Math.random() * 3) + 6; 
                    break;
                case 2: 
                    randomMonth = Math.floor(Math.random() * 3) + 9; 
                    break;
                case 3:
                    randomMonth = Math.floor(Math.random() * 3) + 12; 
                    break;
                default:
                    randomMonth = 1; 
            }

            const randomDay = Math.floor(Math.random() * 28) + 1; 
            const marriageDateString = `${randomMonth.toString().padStart(2, '0')}/${randomDay.toString().padStart(2, '0')}/${currentYear}`;

            const seasonNames = ['Spring', 'Summer', 'Fall', 'Winter'];
            const result = `Congratulations, ${name1} and ${name2} will get married in the ${seasonNames[randomSeason]} season, on ${marriageDateString}!`;

        
            marriageDate.innerHTML = result;

            
            updateReaction('');
        }
    });
});
