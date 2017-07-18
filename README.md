# DE | jQuery AJAX CRUD Exercise

## Learning Goals

After this learning unit, you will be able to:

- Create a complete [SPA (Single Page Application)](https://en.wikipedia.org/wiki/Single-page_application)
- Create, Read, Update, and Delete data from a API
- Use Angular to connect with an external API

## Introduction

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_0fae32a6f15d4494a6780a09a958d140.png)

In this lesson, we will repeat an earlier lesson from a previous module, but instead of using AJAX to interact with our API, we will use Angular instead. 

We will create an application to Create, Read, Update, and Delete characters from the following [Ironhack API](http://ih-api.herokuapp.com/). The routes available in this API are the following:

- **Verb:** GET, **Route:** "/characters"
  - It receives NO parameters
  - It returns the full characters list
  - It returns a JSON
- **Verb:** GET, **Route:** "/characters/:id"
  - It receives the character ID as a parameter (route)
  - It returns the character with the indicated id
  - It returns a JSON
- **Verb:** POST, **Route:** "/characters"
  - It receives an object as a parameter, with the following format:
    `{ name: string, occupacy: string, debt: boolean, weapon: string }`
  - It returns the created character if there are no errors
  - It returns the wrong fields if there is some error
  - It returns JSON
- **Verb:** PATCH/PUT, **Route:** "/characters/:id"
  - It receives the character id as a parameter (route)
  - It receives an object as a parameter, with the following format:
    `{ name: string, occupacy: string, debt: boolean, weapon: string }`
  - All the fields are optionals
  - It returns the updated character if there are no errors
  - It returns "Character not found" if there is no character with the indicated id
  - It returns JSON / text
- **Verb:** DELETE, **Route:** "/characters/:id"
  - It receives the character id as a parameter (route)
  - It returns "Character has been successfully deleted" if there are no errors
  - It returns "Character not found" if there is no character with the indicated id 
  - It returns text

### Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`

## Submission

Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request indicate your campus, name, and last name separated by a dash "-".

## Deliverables
In your starter code folder you will find every file you need to finish the game. Push every needed file to make your game work properly.

## Exercise

### Iteration 1: The `APIHandler.js` file

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_ec9874eab2a7ba6fb0d0d75699ca328a.png)

We will construct a service to deal with the http calls. The only responsability of this service is to return the JSON result that comes from the API, or give the needed information to the API if we want to change it.

The funcionalities of the ApiService class are:

- Get all the characters info from *[ih-api.herokuapp.com/characters](http://ih-api.herokuapp.com/characters)*
- Get a single character info from *[ih-api.herokuapp.com/characters/:id](http://ih-api.herokuapp.com/characters/:id)*
- Create a single character posting the data to *[ih-api.herokuapp.com/characters](http://ih-api.herokuapp.com/characters)*
- Delete a single character through his id in *[ih-api.herokuapp.com/characters/:id](http://ih-api.herokuapp.com/characters/:id)*
- Edit a single character through his id in *[ih-api.herokuapp.com/characters/:id](http://ih-api.herokuapp.com/characters/:id)*

We have outlined all these functions in the starter code, but it is up to you to fill them in with instructions. 

:::success
**Micro-advice**

To make sure everything is working, use [POSTMAN](https://www.getpostman.com/). Remember the routes available and the parameters needed, both in the route and through params.
:::

In this iteration, it's enough to show results in the console.

### Iteration 2: Passing the information to the components 

Once we have the results served by the API in the application, we will create the events that will handle with the CRUD operations.

#### Fetch all characters

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_497edb039e18a135241f5dfaf54ebe19.png)

We will bring to the application all the available characters in the API. In order to do that, we need to: 

- Create a button (*Fetch all* in the image above) that calls a function in the `APIHandler`.
- The function will return a JSON object with all the characters.
- Get the data and show the characters. Finally, with javascript or jQuery, we will create a structure similar to a card (image above) to show every detail of each character.

#### Fetch one character

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_ebdfb7aa999d2078ba61a38df24367ca.png)

Following the same idea as with fetching all, to retreive a single characters data we need to:

- Create a button (*Fetch one* in the image above) to, through an input field, get the id of an existing character.
- Search that character in the API with *[ih-api.herokuapp.com/characters/:id](http://ih-api.herokuapp.com/characters/:id)*
- Get the data and show the character info as a card.

#### Delete one character

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_8bbdd220db9a5adb1f7adf5abb545702.png)

To be able to delete a character from the API database, we need to:

- Create a button (*Delete* one in the image above) to get the id of the character we want to delete.
- Search that character in the API with *[ih-api.herokuapp.com/characters/:id](http://ih-api.herokuapp.com/characters/:id)*
   :::danger
   **Remember which HTTP verb you need in the request!!**
   :::
- If the character is succesfully removed, change the background color of the button to green.
- If something went wrong, change the background color of the button to red.

#### Create new character

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_851324eeeca02a7c5b9b487e1a5b3f30.png)

We will create a form with 4 inputs, one for each character field: name(text), occupation(text), weapon(text) and debt (boolean).

- Create a button (*Create* in the image above) to get all the data from the form.
- Send the data to the `APIHandler` function to save the new character through *[ih-api.herokuapp.com/characters](http://ih-api.herokuapp.com/characters)*
   :::danger
   **Remember which HTTP verb you need in the request!!**
   :::
- If the character was succesfully created, set the background color of the button to green.
- If something went wrong, change the background color of the button to red.

#### Edit a character

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_27c264db58a8bbaa3ecb83d6ffdc0cda.png)

We will create a form with 4 inputs, one for each field of the characters: name(text), occupation(text), weapon(text) and debt (boolean). Also, we will create a new input to indicate the `id` of the character we want to edit.

- Create a button (*Update* in the image above) to get all the data from the form.
- Send the data to the `APIHandler` function to save the new character through *[ih-api.herokuapp.com/characters/:id](http://ih-api.herokuapp.com/characters/:id)*
   :::danger
   **Remember which HTTP verb you need in the request!!**
   :::
- If the character was succesfully updated, set the background color of the button to green.
- If something went wrong, change the background color of the button to red.

That's all what we need to do!

/Happy coding
