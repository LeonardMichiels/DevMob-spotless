# Spotless App



## **Description**

**Spotless** is a mobile app implemented with [Angular](https://angular.io/docs) on [Ionic](https://ionicframework.com/docs). It has been developed during the DevMob course at HEIG-VD given by [Mathias Oberson](https://github.com/Tazaf) in the first semester of 2021. The app is kind of a new Trip Advisor, based on COVID-19 safety scores. The goal of the app is to show you the most safe gastronomic places (bars, restaurants, clubs, take away,... ) in Switzerland (and expandable to the world) to enjoy a drink or a meal. So the people most at risk will be informed about safer places.

Every place its rated in categories, where 1 is the lowest score and 5 the highest:

- **Mask score (1-5)**
  if everyone in the place has a mask
- **Disinfectant score  (1-5)**
  if in the place there's desinfectant, quality of the disinfectant
- **Distancing score (1-5)**
  If costumers are well distanced while consuming food/drink, if there're plexiglass separators
- **Cleaning score (1-5)**
  If the surfaces of the place are well cleaned, with regularity or after every costumer
- **Controle score (1-5)**
  if there's somebody who check the compliance of the rules in the place.
- **Comment (optional)**
  if the users want to add a personal advice of the place
- Photo (optional, not implemented)
  if the users want to add a personal photo to explain his comment



The app is linked to [SpotlessAPI](https://github.com/LeonardMichiels/Shortcut) (API REST) developed during ArchiOWeb course given by [Simon Oulevay](https://github.com/AlphaHydrae).

## **Requirements**

[Node.js](https://nodejs.org/) 12.x

## **Usage**

To run the application locally on your browser, you can run the following command line:

```
git clone https://github.com/LeonardMichiels/DevMob-spotless
cd Spotless
npm install
ionic serve
```

To deploy the application on your phone, you can use Ionic built in tools. 

See [Ionic documentation](https://ionicframework.com/docs/v1/guide/testing.html) about testing and deploying the app. if you want to test this app on a simulator (ios and android):

```
ionic capacitor copy ios
ionic capacitor open ios

ionic capacitor copy android
ionic capacitor run android
```

## **What can you do with the app ?**

- log in to the app or create an account
- see all of the gastronomic places on a map (around me)
- see the details of a specific place and his corona safety rates 
- search a place by the search bar
- rate the other places

### **Create an account**

If you don't have an account, you have to create one.

### **Log in**

Now you've an account, you can simply log in.

### **Map page**

You can see the localisation of the places on a map, and select a place to see his ratings. The user can see his position.

### **Liste page**

You can get the entire list of places, or search a specific place with the search bar. The user can tap on a card to select the place and see his ratings.

### Ratings of a specific place

List of all the ratings of a specific place. 

### Create a rate page

A form with all the categories and a slider to select the score. The user can add a comment if he/she want.

### **Compte Page**

On the user page, there's the possibility to log out and see all the personal ratings.

### **Ratings create by logged user**

List of all the ratings create by the logged user. Possibility to delete it or modify it.