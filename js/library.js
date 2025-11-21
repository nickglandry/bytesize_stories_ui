const books = document.getElementsByClassName("library-book");
for (const book of books) {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            book.style.backgroundImage = "url('../assets/vertical_book_cropped_blue.png')";
            break;
        case 1:
            book.style.backgroundImage = "url('../assets/vertical_book_cropped_red.png')";
            break;
        case 2:
            book.style.backgroundImage = "url('../assets/vertical_book_cropped_green.png')";
            break;
    }
    
}