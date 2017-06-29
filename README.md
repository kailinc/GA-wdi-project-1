Link to project: https://kailinc.github.io/GA-wdi-project-1/

Technologies Used:
-JavaScript
-jQuery
-HTML
-CSS, SASS
-AJAX

Project Development:

  I started planning for the project on Saturday. The project wasn't assigned
until Monday. First, I started with the wireframe of the Project, so that I know what
the visual structure that I would be working with. Initially I wanted a page to start
for users to either login or sign up for an account. After that the user will see
a "new" page with a navigation bar for profile settings (change password, change
token) and logging out. There would be buttons to start a game, watch a game, or
join a game. After the user clicks on a button, the buttons would go away and
a board will be shown for the selected purpose.

  I went to General Assembly and whiteboarded my wireframe. I later made a
schedule. Each day I would aim to accomplish certain tasks. The project is due on
Thursday midnight. Since there were bonuses for us to try and I was confident to
write the basic requirements ahead of time, I planned to finish a MVP version to meet
basic requirements by the end of Tuesday. I would use Wednesday and Thursday
to work on the bonuses.

  However, plans always change. We were given the template on Monday night, so
I had to push my plan backward a few days. The project is actually more
complicated than I thought in terms of structuring files for getting functions
and objects. I noticed that I don't have enough time to meet the requirements
and try the bonus, so I restructured my wireframe for meeting the basic requirements.
This is because I'm not confident with my CSS skills. I will definetly revisit
the file and change my layout in the future. The wireframe can be added or
upgraded to serve the structure for the bonuses.

 For user features such as signing up, signing in, loging out, and
change password, I understood it very well from the AJAX lessons earlier. I
would reference the lesson if I needed help. For features related to the board, I
needed a different approach.

Original Wireframes

Landing Page
![landing Page](/VIEWME/Wireframe/1landingPage.jpg)


![landing Page](/VIEWME/Wireframe/2createAccount.jpg)


![landing Page](/VIEWME/Wireframe/3signingIn.jpg)


![landing Page](/VIEWME/Wireframe/4afterSignIn.jpg)


![landing Page](/VIEWME/Wireframe/5changePwd.jpg)


![landing Page](/VIEWME/Wireframe/6inGame.jpg)


![landing Page](/VIEWME/Wireframe/7endGame.jpg)




MVP Wireframe
![MVP Wireframe](/VIEWME/MVPWireframe.jpg)


Initial Project Schedule
![GitHub Logo](/VIEWME/schedule.jpg)



Problem Solving:

  First I would whiteboard in pseudo code what I wanted to happen when a user
started a game, clicking on the board, or checking stats. I would write
in plain english for the general idea of the process. After I get the process
laid out, I would redo it. However, the second time would be more indepth. I
would think what functions involved needed as parameters, what the functions did,
where would the functions be, and the order of the functions. Once I laid that
out, I would look at the whole thing and think through the whole process, and
see what I did not take account of. I would add what was lacking. Then I would use
this blueprint to write the functions associated with the game event.



Whiteboarding Problems

![apiDoc](/VIEWME/Problem Solving/apiDoc.jpg)


![apiDoc](/VIEWME/Problem Solving/visualizeBoard.jpg)


![apiDoc](/VIEWME/Problem Solving/whiteboardingCreateUpdateGame.jpg)


![apiDoc](/VIEWME/Problem Solving/whiteboardingStats.jpg)



Unsolved Problems to Work On

Probem: When a user is not signed in, I want to hide the Log Out and Change Password buttons. I also want
  to hide the board, check stats, and play game. This is for a better user exerpience and stop sending AJAX request that gets errors, because the user is not signed in.
Solution: I would have to restructure my HTML and use CSS and jQuery to choose what to show. At the start I would have a div that is the whole page with the buttons on signing in and signing up. I would hide the rest of the HTML with jQuery. Once a user signs in, I would hide the div and show everything else on the page. The page will have a navigation bar with the button for logging out and changing password.


Problem: Check Stat is not well built. It looks chunky and has no option to close it.
Solution: I would redo the html and css for the div of Check Stats. There would be a closing button for
  closing the states. I would style the text too.


User stories

As a spectator, I want to view the game update simaltenouesly, so that I can have a good viewing experience.
As a player, I want to change passwords, so that I can protect myself from hackers.
As a new player, I want to create an account, so that I can play the awesome game made by Kai.
As a player, I want to update the board as I wish and rules allow, so that I can play with a good experience.
As a competitive player, I want to see my wins, so that I can feel good about myself.
As a competitive player, I want to see confirmation of my win and loses, so that I can feel good about myself.
As a player, I want to join a game or create a game, so that I can play with other people .
As a spectator, I want to choose what game to view and what game to now view, so that I will have the freedom to choose.



Future Things to Work On

-Restyling the Page to make it User Friendly and Appealling
-Add annimations for Games:
  -putting checkers
  -winning
  -losing
  -ties
-Add feature to play with other players
-Add feature to watch other players play
-Add feature to have chat box in each game
-Add feature to display message while waiting for players
-Add feature to show how many players are watching a game
-Add feature to show stats of a player (longest winning streak, longest losing streak, current streak)
-Add feature to play with computer with difficulty level of easy, medium, hard.
-Add feature for players to customize their token
-Add feature for players to add other players as friends
  -Players will be able to chat with other players
  -Players will be able to see who is online
