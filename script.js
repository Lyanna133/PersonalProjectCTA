function addNewCard(position) {
    // Create a new card element
    const newCard = document.createElement('div');
    newCard.className = 'grid__item';
    newCard.innerHTML = `
      <div class="cardtest">
        <div class="card__content">
          <h1 class="card__header">New Chapter</h1>
          <p class="card__text">This is a new chapter...</p>
          <button class="card__btn">Read</button>
          <button class="hidden-btn" onclick="addNewCard('right')">+</button>
          <button class="hidden-btn left-btn" onclick="addNewCard('left')">+</button>
          <button class="hidden-btn bottom-btn" onclick="addNewCard('bottom')">+</button>
        </div>
      </div>
    `;

    // Insert the new card based on the specified position
    const currentCard = document.querySelector('.grid__item');
    switch (position) {
      case 'right':
        currentCard.after(newCard);
        break;
      case 'left':
        currentCard.before(newCard);
        break;
      case 'bottom':
        currentCard.parentElement.appendChild(newCard);
        break;
      default:
        console.error('Invalid position:', position);
    }
  }