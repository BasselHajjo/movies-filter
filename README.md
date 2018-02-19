# movies-filter

## homework javascript week 8 step2 for Hack Your Future-Copenhagen.

**To preview the app please visit https://basselhajjo.github.io/movies-filter/**

```
To clone the app or to download it and use it in a local machine 
for cloning :
1- Download git from this link : https://git-scm.com/downloads
2- choose your operating system and download it.
3- install it on your mashine
4- open the termenal and choose where do you want to clone the app
5- then type : git clone https://github.com/BasselHajjo/movies-filter.git

for download it as a zip file :
1- go to this link : https://github.com/BasselHajjo/movies-filter
2- use the green button that says "Clone or download"
3- Click on download ZIP.
```

**To Fork the app use this link https://github.com/BasselHajjo/movies-filter**

---

**What the app do and how it work ?**

* The app search for movies based on the rating
* The app uses IMDb databases to fetch the data
* The app calculate the average rating for the searched movies
* The json file link used in this app is: https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json
* To use the app :
1. There's 4 buttons on the top , you can choose the rating field you want to search in : 
*Excellent (>=8.5), Very Good (>=8), Good (<8)
2. In the next line there's a input field to type in the movie name you want to search for.
3. Then when you click on search , the app will fetch the data from IMDb and filter it accurding to the rating field you chose and it will show you the average rating for the searched movies and a list of all the movies which contains the searching input.

---

**The home work goal :**

* More trainig of using arrays functions like map, filter and reduce
* How to fitch data from a json file
* How to use promises and clousers
* How to render the data on the DOM.
* Add event listener.
* Using the Arrow functions

---

**Code examples used in the app**

```
1- filter :

let a [1,2,3,4,5,6,7];
a.filter(x => x % 3 === 0); //[3,6]
this code will return a new array contains the filtered numbers that can be divisible by 3 .

2- map :

let a = [1,2,3,4];
a.map(x => x * 2); //[2,4,6,8]
this code will return a new array contains the old array values multiplied by 2.

3- reduce :

let a = [1,2,3,4,5,6]
a.reduce((a,b) => a+b); // [21]
this code will return a new value of the sum of the array's elements.

all the above functions writin as Arrow functions.
```

---

*App Created by Bassel Hajjo*







