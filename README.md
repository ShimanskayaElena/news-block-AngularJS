This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

It is necessary to execute the following commands:

git init

git clone https://github.com/ShimanskayaElena/news-block-AngularJS

npm install

bower install

Run `grunt` for building and `grunt serve` for preview.

For Administrator login: admin, password: 1234

In the framework of this task, it is necessary to develop a test project (news blog) with the following functions: 1. Authorization of users with two roles: regular user and administrator. 2. Regular users should have a page with a page preview of the news list. 3. Administrators should have a page with news management (news list, adding / editing / deleting news).

List of pages:

1. Home a. The main page should list the news that the administrator added to the database. By clicking on the text of news, you should go to the page of this news. B. If there are more than 10 news in the database, at the bottom of the page you should see links for page navigation on news. C. News should be sorted in the reverse order of their addition to the site.

2. News page a. The page should display the full text of the news and the image uploaded by the administrator. Also on the page there must be a link to return to the list of news on the main page. Authorization page a. The page should display the authorization form in the control panel for the administrator. When sending incorrect login data, the system should display a corresponding error to the user.

3. News management page a. On the page there should be a list of news (similar to the main one), next to each news there must be links for editing and deletion. B. When trying to delete news, the system should ask for confirmation from the user and delete the news only if the answer is positive. C. When clicking on the edit link, the system should send the user to the page with the news editing form. D. On the page there should be a link to the page of adding news.

4. Add news page a. On the page you should see a form with fields for creating news: title, text, image (file). B. The system should check the correctness of the downloaded file and the filled data and output the corresponding messages in case of errors. C. If all data is entered correctly, the system should add news to the database, upload the image to the server and redirect the user to the news management page with the corresponding message. D. If the data is not entered correctly, the system must store the data entered by the user when the error message is displayed. E. If the user uploaded the file but did not fill in the text, the system should not force it to load the file a second time (the downloaded file should be displayed). In this case, the user should be able to replace or delete the image.

5. News editing page a. The page works in the same way as the news creation page, but when you open it, the form must be filled with news information (including the uploaded image) b. In the event that an unauthorized user goes to the news control panel, the system must redirect it to the authorization page and display a corresponding message.

"7 шагов к запуску gh-pages для AngularJS-проектов, созданных с помощью Yeoman"  -  https://habrahabr.ru/post/262095/