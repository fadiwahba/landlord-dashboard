# LandlordStudio front-end recruitment test

Thanks for taking the time to do our front-end coding test. This will have two parts:

1. A [task](#frontend) to create a create a list of payable transactions displayed in a react-based website. This front will depend on a running backend API which we have provided.

2. Some [follow-up questions](./FOLLOW-UP.md) (please commit the follow-up question answers to at least one of the front or back end repositories).

**NOTE:** If you browse our github organisation you should have an invitations for you, these will give you access to a repository named something like ls-recruitment-{YOUR NAME}. If you do not see the invitation or cannot see any repositories with your name on them, please contact us. (Please do not branch or make PRs for the repositories that do not have your name on them).

You will be assessed based on the following being met:

- You complete the tasks described in the [frontend](#frontend) task, and that the applications you produce functions as described in those tasks.

- Your website roughly looks like the provided [design](./design-spec/layout_and_list.png) (please note that nothing has to be exact in terms of the look of the site).

---

## Frontend

We would like you to implement a website using React and Typescript.  
Please feel free to use whatever other front-end libraries you are comfortable with.  
We have provided you with a repository that is copied from [here](https://github.com/LandlordStudio-Recruitment/ls-recruitment-front-end-only) to get you started.  
Please make commits/PRs to this repository like you would at work.

The frontend repository was created using [Next.js](https://nextjs.org) template with a few minor changes.  
Ideally this application would run on port 3000.

The main focus of the website is to display a list of upcoming rent payments, it also includes a left-hand navigation menu.  
A basic design for the website can be found [here](./design-spec/layout_and_list.png).

When the user navigates to the `Dashboard` for the first time, fetch upcoming rent payments from the included [API](#API), and format them in client readable results.

- The payment due dates should be formatted as MMM DD.
- The status of each payment should be blank, `Paid`, or `Overdue` depending on the payments status and due date.
- The pay button should only be displayed for payments that are not `Paid`
- The amount should be formatted as a US dollar amount (e.g. \$10.00)  
  **Note**: Payment amounts returned from the API will be in cents and must be converted to dollars.
- Payments should be listed in ascending chronological order.

If a user clicks on the `Pay` button, a dialog detailed [here](./design-spec/pay.png) should be shown to the user.  
Upon confirmation, a call should be made to the API that updates the state of that payment to `Paid`.  
The result of that call should be used to then update the status of that transaction in the list that is displayed to the user.

For the left-hand navigation. The other two menu items do not have to do anything in particular. But they should be distinguishable from one-another (e.g. a simple component that just displays the name of the menu item is fine). They are merely there for you to demonstrate navigation between content using React.

**NB:**
You are not expected to match any of the styles, colour, fonts etc in the given design images exactly. These are just guidelines for how we would roughly like the site to be laid out and look.

### API <a name="API"></a>

As part of the Next.js application, an inbuilt API has been provided.  
  
This exposes two routes;  
  
* **GET** `https://localhost:3000/api/payments`  - This returns an _unsorted_ list of payments.    
**Note**: Payment amounts returned from the API will be in cents and must be converted to dollars.
* **PATCH** `https://localhost:3000/api/payments/{id}/pay` - Flags an eligible payment as being paid (note that there is an in-built error scenario for payments over $1,000).

## Running the frontend project

To start the frontend client run the following commands.

- `npm install` - This will fetch the required node modules for the website to run (and for the other scripts below).
- `npm run dev` - This will start the application for development.  
  
The application will start at [https://localhost:3000/](https://localhost:3000/)

## Submission Guidelines

Please notify us once you are ready for your work to be assessed. We will be cloning the master branch of the repositories created for you and running the applications from there.
