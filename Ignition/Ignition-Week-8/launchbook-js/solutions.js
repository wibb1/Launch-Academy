// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName(`nav`)[0];
// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
let sideBar = document.getElementById('sidebar-left');
// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
sideBar.getElementsByClassName('pages');
sideBar.getElementsByClassName('groups');
// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
sideBar.getElementsByClassName('favorites')[0].innerHTML = 'Least Favs';
// Exercise 5): Find the first of the ads in the sidebar and hide it.
let firstAdd = document.getElementById('sidebar-right').getElementsByClassName('ad-slot')[0]
firstAdd.style.visibility = 'hidden';
// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
firstAdd.style.visibility = 'visible';
// Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
firstAdd.getElementsByTagName('img')[0] = "http://placebear.com/200/300"
// Exercise 8): Find Sam's post and change its text to something incredible.
document.getElementsByClassName("media-body")[4].getElementsByTagName("p")[0].innerHTML = "something incredible";
// Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.
document.getElementsByClassName('media-body')[1].classList.add('post-liked')

// Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Share to watch it turn red.
document.getElementsByClassName("inline-list post-actions")[1].getElementsByTagName('li')[2].classList.add('post-shared')

// Exercise 11: On the second post, remove the `.post-shared` class from the `li` containing the text Share.
document.getElementsByClassName("inline-list post-actions")[1].getElementsByTagName('li')[2].classList.remove('post-shared')