# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?

I have added 2 libraries:

- [`dayjs`](https://day.js.org/en/): It is a fast (2kb) alternative to `moment.js` with the same modern API. I used it to format the `Payment.dueDate` to be `MMM DD`.
- [`React Icons`](https://react-icons.github.io/react-icons/) : Used it to add a bunch of icons for example: Navigation menu items, modal close button.

### Q) Did you have to modify the payment data in any way to complete any of your tasks? If so how and why?
Of course, I had to format the due dates, the amount to be in USD, and the status to show `Overdue` and `Paid`. I have done this using `custom functions` inside the `PaymentItem` component. here is an example of date formatting:
```
const formatDate = (date: Date): string =>  {
	let shortDate;
	if (date) {
		return shortDate = dayjs(date).format("MMM DD");
	}
};
``` 
### Q) What's the command to start the application locally? (if changed)

(Default) `npm run dev`

---

# General:

### Q) If you had more time, what further improvements or new features would you add?
- Create a better reusable modal component
- Create services to do common data operation (fetch, save, ...etc)
- Fix side navigation by adding `active` css class to the current active page.
- Add sorting/filtering features to the `PaymentList` component (given that, it is an HTML table displaying rows of data).
  
### Q) Which parts are you most proud of? And why?
- The `PaymentItem` and `modal` components, as They have a lot of details under the hood when it comes to displaying the data in specific formatting.
- The `modal` component was tricky to add to the DOM, I had to dig in the `Next.js` documentation to find out how to do it (i.e: Using custom _document.js file). 
  
### Q) Which parts did you spend the most time with? What did you find most difficult?
- Again, The `PaymentItem` and `modal` components due to the details, Also  the idea of fetching/updating data in general using the `next.js` approach was a bit tricky for me as this is my first time to write an App in `react/next.js`. 
- I had a to go through a lot of documentations and StakeOverflow to figure out how `next.js` works (I am a bit new to `React` world ☺️)
  
### Q) How did you find the test overall? Did you have any issues or have difficulties completing? If you have any suggestions on how we can improve the test, we'd love to hear them.
- Overall, It is a very good test. it covers most of the essential tasks of a day-to-day work scenarios like fetching data, displaying data in a specific format, updating data and re-rendering it ...etc.
- One thing that I would suggest is to focus on implemting this App in pure `React.js` and remove `Next.js` (as a framework) from the requirments, the reason is, Some candidates are familiar with `React` but not familiar with a framework like `Next.js`. That means candidates will consume most of thier time figuring out how to do things in the "`Next`" way!
- I think the important skill here is `React` itself as a library! and people can get up to speed with `Next.js` (or any other react-based framework) after they get accepted and join the team.