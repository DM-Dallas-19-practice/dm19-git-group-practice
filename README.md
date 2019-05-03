<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project, we'll be sharing a github repo with another classmate. You'll learn to Branch, Pull and Push to a shared github repository.

## Step 1

## Summary

In this step, we'll get the project set up on two different computers.

## Instructions

Partner up with a classmate and one of you will fork and clone this repo.
Send the link to your forked github to your partner and have them clone it to their computer.
Both of you should run npm install.


## Step 2

### Summary

In this step, we'll create a branch and add code to the project
### Instructions

Firstly in your terminals run git checkout -b "yourBranchNameHere".
This will create a new branch for you to add new code to your projects without affecting the master.
Once this is done, on the bottom left of your code editor you should see the name of the branch you are currently working on.

Now that you each have your own branches, both people should add a file to the components folder. Whats included in the file doesn't matter(work appropriate!).
Both should go into App.js and add their own name in between the ul tags.
After you have finished both should add and commit their code. Then one will run git push origin nameOfBranch.


## Step 3

### Summary

In this step we'll cover creating a pull request on github and updating our code
### Instructions

Now that our new code is up on github lets check the shared repository and click on the branches tab. 
If all is going well we should see that a new branch was created and we are able to make a pull request.
Click on the pull request. This is where you can leave comments and ask for code reviews on your added code.
For now just make sure that we have Able to merge in green letters. If so click on Create pull request.
Whoever didn't push their code should now review the code on their end making sure that there are no conflicts.
Once all conflicts are taken care of you can merge the pull request, effectively adding your branch code onto the master branch.

Now that our github master branch has new code, we need to update the master branch on our own computers. 
In both of your text editors run git checkout master, we don't use -b this time because master already exists and were not creating a new branch.
Now that we are on master (verify on the bottom of your text editor) run git pull/ git pull origin master.
This will update our copys of master to the current version on github.


## Step 4

### Summary

Updating our branch code
### Instructions

With our updated masters we now need to give our partners branch the added code. 
git checkout back to your custom branch and run git merge master.
This will update the branch that doesn't have the new code.
At this point we may encounter conflicts in files that both of you have worked on. 
Address the conflicts that arise and when all is fixed you can run npm start to check that things are working properly.

Once everything is running properly and both of your additions are working go ahead and commit and push origin branchName.
Repeat the pull request and merge steps to update master on github.
Checkout back to master in your code editor and git pull to update your versions. 

If everything worked properly both people should have each others code added and working on the master branch. 





Here is the basic steps to follow while approaching working on with git as a group during group projects

- Create Project
- Clone repository into your own project folder  
- Git checkout -b branchName  
- Yarn/NPM install  
- code...  
- Git commit  
- Git checkout to master (git checkout master)
- Git pull (checks for any other changes to master branch)  
- Git checkout branchName  
- Git merge master (merge any updates to your branch)  
- Yarn/npm i to check for new packages  
- Check for any conflicts.  
- No conflicts then git commit/push origin branchName  
- Create Pull request
- Slack (mentor name here) the link to the pull request
- (mentor name here) will double check for any conflicts and then merge  
- (mentor name here) will send a message to the group confirming merge
- Checkout back to master and pull again 
- Checkout back to branchName and merge master  
- Repeat from 'Yarn/NPM install' 