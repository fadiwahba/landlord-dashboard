# LandlordStudio front-end recruitment test

Thanks for taking the time to do our front-end coding test. This will have two parts:

1. a [task](#frontend) to create a create a list of payable transactions displayed in a react-based website. This front will depend on a running backend API which we have provided.

2. some [follow-up questions](./FOLLOW-UP.md) (please commit the follow-up question answers to at least one of the front or back end repositories).

**NOTE:** If you browse our github organisation you should have two invitations waiting for you, these will give you access two repositories named something like ls-recruitment-front-{YOUR NAME} and ls-recruitment-back-{YOUR-NAME}. If you don't not see the invitations or cannot see the repositories with your name on them, please contact us. (Please do not branch or make PRs for the repositories that do not have your name on them).

You will be assessed based on the following being met:

- You complete the tasks described in the [frontend](#frontend) task, and that the applications you produce functions as described in those tasks.

- Your website roughly looks like the provided [design](./design-spec/layout_and_list.png) (please note that nothing has to be exact in terms of the look of the site).

---

### Backend

To get up an running with the backend API:
* Ensure you have a the .NET 5.X SDK installed. You can download this [here](https://dotnet.microsoft.com/download/dotnet/5.0).  

* In a terminal navigate to, `<YOUR CLONED BACKEND REPO LOCATION>\LandlordStudio.Recruitment.Backend`

* Execute `dotnet run`

After a small delay (to compile the backend), you should see output similar to the following;

```
info: Microsoft.Hosting.Lifetime[0]
      Now listening on: http://localhost:5000
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime[0]
      Hosting environment: Development
info: Microsoft.Hosting.Lifetime[0]
      Content root path: C:\dev\ls-recruitment-back\LandlordStudio.Recruitment.Backend
```

If you then browse http://localhost:5000 you should be provided with documentation for the API.

There are two routes:
* **GET** ~/Payments to provide a list of payments.

* **PATCH** ~/Payments/{id}/Pay to "pay" and payment.

## Tasks

The tasks for this recruitment test are below, please complete everything described in [frontend](#frontend).

Applications should be able to run on both OSX and Windows.  
The frontend application should be able to run without installing anything other than node+npm.

The application should not depend on the existence of any other application outside of these recruitment tasks.

### Frontend

We would like you to implement a website using React and Typescript.  
Please feel free to use whatever other front-end libraries you are comfortable with.  
We have provided you with a repository that is copied from [here](https://github.com/LandlordStudio-Recruitment/ls-recruitment-front) to get you started.  
Please make commits/PRs to this repository like you would at work.

The frontend repository was created using `create-react-app ls-recruitment-front --template typescript`, with a few minor changes (see [here](https://create-react-app.dev/docs/documentation-intro) for more information on create-react-app).  
Ideally this application would run on port 3000.

The main focus of the website is to display a list of upcoming rent payments, it also includes a left-hand navigation menu.  
A basic design for the website can be found [here](./design-spec/layout_and_list.png).

When the user navigates to the `Dashboard` for the first time, fetch upcoming rent payments from the [backend](#backend) API, and format them in client readable results.

- The payment due dates should be formatted as MMM DD.
- The status of each payment should be blank, `Paid`, or `Overdue` depending on the payments status and due date.
- The pay button should only be displayed for payments that are not `Paid`
- The amount should be formatted as a US dollar amount (e.g. \$10.00)
- Payments should be listed in ascending chronological order.

If a user clicks on the `Pay` button, a dialog detailed [here](./design-spec/pay.png) should be shown to the user.  
Upon confirmation, a call should be made to the REST API that updates the state of that payment to `Paid`.  
The result of that call should be used to then update the status of that transaction in the list that is displayed to the user.

For the left-hand navigation. The other two menu items do not have to do anything in particular. But they should be distinguishable from one-another (e.g. a simple component that just displays the name of the menu item is fine). They are merely there for you to demonstrate navigation between content using React.

**NB:**
You are not expected to match any of the styles, colour, fonts etc in the given design images exactly. These are just guidelines for how we would roughly like the site to be laid out and look.

## Running the frontend project

To startup the frontend client run the following command.

- `npm install` - This will fetch the required node modules for the website to run (and for the other scripts below).
- `npm start` - This will start the application for development
- `npm run build` - Will create a production optimised build
- `npm test` - Will run the front end tests

## Submission Guidelines

Please notify us once you are ready for your work to be assessed. We will be cloning the master branch of the repositories created for you and running the applications from there.
