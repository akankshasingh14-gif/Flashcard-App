* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f4f6f8;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 30px 20px;
}

.container {
    width: 100%;
    max-width: 650px;
    text-align: center;
}

h1 {
    font-size: 36px;
    color: #222;
    margin-bottom: 8px;
}

.subtitle {
    color: #666;
    margin-bottom: 25px;
}

/* Progress */

.progress {
    color: #555;
    font-size: 16px;
    margin-bottom: 15px;
}

/* Flashcard */

.flashcard {
    width: 100%;
    height: 320px;

    perspective: 1000px;

    cursor: pointer;

    margin-bottom: 25px;
}

.card-inner {
    width: 100%;
    height: 100%;

    position: relative;

    transition: transform 0.6s;

    transform-style: preserve-3d;
}

.flashcard.flipped .card-inner {
    transform: rotateY(180deg);
}

.card-front,
.card-back {
    position: absolute;

    width: 100%;
    height: 100%;

    border-radius: 15px;

    padding: 40px;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    backface-visibility: hidden;

    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.card-front {
    background: white;
}

.card-back {
    background: #222;
    color: white;

    transform: rotateY(180deg);
}

.label {
    font-size: 13px;
    font-weight: bold;

    letter-spacing: 2px;

    margin-bottom: 25px;

    color: #777;
}

.card-back .label {
    color: #ccc;
}

.card-front h2,
.card-back h2 {
    font-size: 25px;
    line-height: 1.4;
}

.card-front p {
    margin-top: 25px;

    font-size: 14px;

    color: #888;
}

/* Answer Buttons */

.answer-buttons {
    display: flex;

    gap: 15px;

    justify-content: center;

    margin-bottom: 20px;
}

.answer-buttons button {
    border: none;

    padding: 12px 25px;

    border-radius: 8px;

    font-size: 15px;

    cursor: pointer;

    transition: 0.2s;
}

.wrong {
    background: #e8e8e8;

    color: #333;
}

.correct {
    background: #222;

    color: white;
}

.answer-buttons button:hover {
    transform: translateY(-2px);
}

/* Navigation */

.navigation {
    display: flex;

    justify-content: center;

    gap: 10px;

    margin-bottom: 20px;
}

.navigation button,
.restart {
    padding: 10px 18px;

    border: 1px solid #ccc;

    background: white;

    border-radius: 7px;

    cursor: pointer;

    font-size: 14px;
}

.navigation button:hover {
    background: #eee;
}

/* Score */

.score {
    font-size: 18px;

    font-weight: bold;

    margin-bottom: 25px;
}

/* Add Flashcard */

.add-card-section {
    background: white;

    padding: 25px;

    border-radius: 12px;

    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);

    margin-bottom: 20px;
}

.add-card-section h2 {
    margin-bottom: 20px;

    font-size: 22px;

    color: #222;
}

.add-card-section input,
.add-card-section textarea {
    width: 100%;

    padding: 12px;

    margin-bottom: 12px;

    border: 1px solid #ccc;

    border-radius: 7px;

    font-size: 14px;

    font-family: Arial, sans-serif;

    outline: none;
}

.add-card-section textarea {
    height: 100px;

    resize: vertical;
}

.add-card-section input:focus,
.add-card-section textarea:focus {
    border-color: #555;
}

#add-btn {
    width: 100%;

    padding: 12px;

    border: none;

    border-radius: 7px;

    background: #222;

    color: white;

    font-size: 15px;

    cursor: pointer;
}

#add-btn:hover {
    background: #444;
}

#message {
    margin-top: 12px;

    font-size: 14px;

    color: #333;
}

/* Restart */

.restart {
    background: #222;

    color: white;

    border: none;

    padding: 11px 25px;
}

.restart:hover {
    background: #444;
}

/* Mobile */

@media (max-width: 600px) {

    h1 {
        font-size: 30px;
    }

    .flashcard {
        height: 280px;
    }

    .card-front,
    .card-back {
        padding: 25px;
    }

    .card-front h2,
    .card-back h2 {
        font-size: 21px;
    }

    .navigation {
        flex-wrap: wrap;
    }

    .answer-buttons {
        flex-direction: column;
    }

    .answer-buttons button {
        width: 100%;
    }
}
