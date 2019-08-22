# Snake

Snake (I had *litterally* no creativity for the name) is a little classic snake game I challenged myself to code. I challenged myself to get it up working in 24 hours so optimization wasn't my priority at the begginning. I then decided to make it a little more professional and user-friendly. Refactoring is my friend :wink:

## Running the app

Since the app was initially intended to run completly front-end, I used the great framework [**Nextjs**](https://nextjs.org). Running the app is as easy as, assuming you have Node installed on your computer:
* ```git clone https://github.com/Toumani/snake.git```
* ```cd snake```
* ```npm i```
* ```npm run dev```
* Open a browser and the app is served at ```http://localhost:3000/```

## Source control rules
### Commits naming
Commits naming follow [Andela's conventions and best practices](https://github.com/andela/bestpractices/wiki/Git-naming-conventions-and-best-practices): ```<type>(<scope>): <subject>``<BLANK LINE> <body> <BLANK LINE> <footer>```

Type are :
* feature
* bug
* chore
* performance
* release
* refactor
* documentation
* style
* test

App scopes are :
* **game**: everything related to the gameplay
* **menu**: everything related to navigating accross the app (settings, high scores etc.)
* **design**: everything related to visual rending of the app
* **non-func**: Non business functional edits (config files, readme etc.)

## Authors

* **Toumani** - *Initial work* - [Snake](https://github.com/Toumani/snake/)

## License

This project is licensed under the MIT License 