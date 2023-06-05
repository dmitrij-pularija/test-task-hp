#                                                                     Test task
### **Goal:** Create tweet cards and add interactivity at the click of a button.

![The general appearance of the card in two states - Follow and Following](https://github.com/dmitrij-pularija/goit-test-task/blob/main/assets/maket.png)
The general appearance of the card in two states - Follow and Following.

Performance criteria
* The layout is fixed in rh, semantic and valid.
* No errors in the browser console.
* The work is done on native JS using assemblers or on React.
* Interactivity works according to the specification.
* The code is formatted and uncommented.
* A README.md must be described in the repository.

## Technical task

1. According to the [layout](https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?type=design&node-id=0-1&t=iT8G37nPHAo1yPD0-0), it is necessary to implement user cards.
2. When clicking on the Follow button, the text changes to Following. Also
the color of the button changes. And yours is added to the number of followers. That is, the initial number is 100,500 followers. When you click on the button, it will be 100,501.
3. The updated page must record the user's final result. That is, if you click on the button and update the page, the button remains in the Following state with the appropriate color, and the number of followers does NOT decrease to the initial value.
4. When you click the button again, its text changes to its original state. The number of followers also changes. It decreases by 1 (100,500).
5. In the code, the digit 100,500 must be written with one value (100500). In UI is displayed through a comma (100,500).

Create your personal backend for development using the [mockapi.io](https://mockapi.io) UI service.
Create the users resource. Use the resource constructor and describe the user object as described below.

### **User**

1. Create a Mockapi user with the following fields: id, user, tweets, followers, avatar (see screenshot below).
2. Avatar images must be registered with separate urls in the "avatar" property. You can choose them yourself.
3. There must be 12 users with different values (at your discretion) in the database. Make pagination. One pagination page should display at least 3 tweets, the rest should be loaded when you click Load More
4. The remaining requirements are logical above the described technical task.

![An example of a users collection](https://github.com/dmitrij-pularija/goit-test-task/blob/main/assets/users.png)

### Layout: [https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?type=design&node-id=0-1&t=iT8G37nPHAo1yPD0-0](https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?type=design&node-id=0-1&t=iT8G37nPHAo1yPD0-0)

## **Additional task**
You will be awarded additional points for performance! Without completing an additional task, you will not be able to get the maximum score.
  
Create routing using React Router.

The application must have the following routes. If the user entered by a non-existent route, he must be redirected to the home page.

'/' – Home component, home page. Stylization and design at your discretion

'/tweets' - tweets component, a page displaying tweets

There should be a back button on the tweets page, which leads to the main page.

## **Tasks with an asterisk***

Add filtering. It should be a Dropdown with 3 options (design at your discretion): show all, follow, followings

show all - show all tweets.

follow - show tweets with follow status.

followings - show tweets with following status
