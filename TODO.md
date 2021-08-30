# TODO:
- ✅ Install and run app
- ✅ create a layout component
- ✅ create a Nav component
    - ✅ show routing example for the two menu items under dashboard
- ✅ create a rentPaymentList component (table format)
    - ✅ Payments should be listed in ascending chronological order.
- ✅ create a rentPayment component
    - ✅ formatDate(): must be MMM DD (i.e: May 02)
    - ✅ formatCurrency(): must be in USD and convert from cents to dollars
    - ✅ The status of each payment should be `blank`, `Paid`, or `Overdue` depending on the payments status and due date.
    - ✅ The pay button should only be displayed for payments that are `Not Paid`
- ✅ Create a Dialog component
    - ✅ a call should be made to the API that updates the state of that payment to Paid.
    The result of that call should be used to then update the status of that transaction in the list that is displayed to the user.
    - ✅ PATCH https://localhost:3000/api/payments/{id}/pay - Flags an eligible payment as being paid (note that there is an in-built error scenario for payments over $1,000).
- ✅ Fetch data from API when user navigates to Dashboard
    - ✅ GET https://localhost:3000/api/payments - This returns an unsorted list of payments.
