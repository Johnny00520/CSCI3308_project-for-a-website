# gds-hdd

A tool for recording and storing customer hard drive information.

### How to setup and run the files 

1. Clone the repository with `git clone https://github.com/nateph/gds-hdd.git`
2. cd into the directory and run `npm install` - this installs all dependencies found in the `package.json` folder
3. Run `npm run start` in the terminal to start up the webpack development server 
4. The webpage should be hosted on localhost:8080

### Milestone 1
					
Members: Zening Li, Ryan Fasching, Nate Phillips ,Pujan Tandukar, ChenHao Cheng
		
**Description: 
Short description (2-3 paragraphs) of the project. Provide enough information to explain what your project will accomplish.**

Our goal for this project is to simplify the process that the OIT department at CU uses in order to record information about hard drives. The website will take in a universal login provided by the CU OIT department to their employees. The login portal will proceed to take the employee to the page that will store all the information needed about the individual computer being worked on. 

The website will essentially taking down user’s name, phone number, what type of drive it is, and what they want recovered off of instead of writing down on papers. The user will input all the info listed previously into tables in order of when they received the particular computer, like a queue. This will make it a lot easier to search for and find an individual's computer given their specific hard drive, name, etc. 

Once a hard drive is completed, it will be archived and taken out of the list of active drives (ones that haven’t been completed yet).



**Vision statement: Provide a vision of your project for all potential customers.**

To make it simpler to store and manage certain data that was previously stored by writing it down on paper. 



**Risks: 
What are the risks that would prevent you from completing this project? This could include: working environment, lack of experience in the field among the team, lack of access to a specific resource, etc.**

The majority of the members in the group are new to React, web development, and Bootstrap. Taking the time to learn and understand these new/hard concepts will be a challenge by itself because this will have to be done on their own time. 

The difference in our schedules will make it hard to meet more than once/twice a week. But we will use different resources like google docs, skype, iMessage and slack to communicate and finish off the given work / assigned responsibilities.  

If one of members is not cooperative or showing up in meetings, it hinders the ability to make progress on the project. For example, team members not knowing or understanding what their responsibilities are, not owning their part of the project.



**Motivation:
Provide the background and reasons for this particular project. Why should this  project be developed?**

Taking down information on paper tends to be more tedious and time consuming. By having all information flow through a website (a central server), information is more easily kept and stored without risk of losing it, and ease of access is increased.


**Version Control:
List the version control you will be using on the project (suggest that you use GITHUB). Create the repository and give access to your repository to the TAs and instructor, as well as all team members.**

We’ll use Github.

For the server: https://github.com/nateph/gds-hdd-server
For the users to access the website: https://github.com/nateph/gds-hdd

	

**Software Development Methodology: 
Which methodology are you planning to follow? Your methodology may change during the project. Describe the methodology and the features/steps that you will follow. Common methodologies include Waterfall, Iterative, Spiral, ..., Agile, or could be a mash-up of different methods.**

Agile.

Pair-programming: separate the contents by part. Two people can focus on one part. One person typing the code and the other person plays as a guide role. Not one person always do the typing or guiding.


**Collaboration Tool: 
Select a collaboration tool (commonly used tools: Slack and HipChat).**

Slack
iMessage
Google Docs
Skype

###Milestone 4
Market Analysis : 
Target market: 
We are planning on donating this product to the OIT department at CU Boulder. This program is primarily made for CU Boulder OIT department but this project can be put into a larger scale and can be sold to other Universities or Colleges depending on their needs. We can incorporate different logins and different databases for other Universities and Colleges if they decide to buy our product meaning we can create different databases but all incorporated in the same website. So everyone will be accessing the same website but depending on the login, they will be directed to different databases that will store their information.


Profile of Competitors: 	
Dropbox offers 2GB of space to store information, 30 days of recovery, and the third party unlimited integrations for individual user. The advantage of the competitor offering is the third party can integrate with other users. The disadvantages are they only offer 2GB of space and recover the files or information. Other than that, you have to upgrade your account, which is $8.25 per person per month.


Competitive Advantage: 
The unique feature is that we are storing student’s computer profiles rather than multiple files. For OIT department, they only need profile of each student’s computer in order to find the student’s computer easily. The price of Dropbox is too expensive for large storage. Our products is free for CU, but we are going to charge money (not as much as dropbox) from other universities. Our products is for free so it has greater compatibility with other companies who don’t want to spend that much for dropbox.  It is also easy to use because it has only one universal login for a certain university or a company. 
		

Results of the retrospective on First iteration : 					
The first time we tested our project through the localhost on chrome, the login page was all set up at the first sight. But upon further inspection, the encryption for the password and username had not been set up, so no one was able to login since we had not built the back end of the site yet. We also had not set up our tables, and at the moment we are using standard SQL for the tables, but might have to switch to noSQL due to our server needs. So the first iteration we only had the visuals of the login page set up but not anything else. 
			
Additional Requirements : 		 	 	 			
The only new requirement we have found so far is in the functional requirements, in that it has to iterate through the array of given hard drives to find the specific one. 
										
Plan Cycle within the Methodology : 				
The Waterfall model is going to be implemented as follows:


- > Requirements (building the trello site and making concrete features)
	- > Design (this will use React and Redux to create a single-page  application that is designed to be fast and reliable).
		- >Implementation (create each component one by one and make sure they work together as we are creating them, so that we know the final product will work as supposed to). We will be hosting the site on GitHub pages (for the front end), and then a backend of Heroku, Digitalocean, or AWS (for the server). Note: the trello has the detailed steps of implementation.
			->Verification (test out on local servers (development servers) before pushing to production). Many users will test the site to find any bugs.
		->Maintenance (If any bugs are found, they will be taken care of to ensure the site is working as supposed to. Maintenance will also include making sure servers, ,etc are up and working. 



