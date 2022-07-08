// Instructions
// In this exercise you will be writing code to help a freelancer
// communicate with his clients about the prices of certain projects.
// You will write a few utility functions to quickly calculate the
// costs for the clients.

// 1. Calculate the day rate given an hourly rate
// A client contacts the freelancer to enquire about his rates. The
// freelancer explains that he works 8 hours a day. However, the
// freelancer knows only his hourly rates for the project. Help him
// estimate a day rate given an hourly rate.

function dayRate (hourlyRate) {
    return hourlyRate * 8
}

dayRate(89)

// 2. Calculate the number of workdays given a fixed budget
// Another day, a project manager offers the freelancer to work on a project
// with a fixed budget. Given the fixed budget and the freelancer's hourly
// rate, help him calculate the number of days he would work until the budget
// is exhausted. The result must be rounded down to the nearest whole number.

function daysInBudget (fixedBudget, hourlyRate) {
    return Math.floor(fixedBudget / (hourlyRate * 8))
}

daysInBudget(20000, 89);

// 3. Calculate the discounted rate for large projects
// Often, the freelancer's clients hire him for projects spanning over multiple
// months. In these cases, the freelancer decides to offer a discount for every
// full month, and the remaining days are billed at day rate. Every month has 22
// billable days. Help him estimate his cost for such projects, given an hourly
// rate, the number of days the project spans, and a monthly discount rate. The
// discount is always passed as a number, where 42% becomes 0.42. The result must
// be rounded up to the nearest whole number.

function priceWithMonthlyDiscount (hourlyRate, numDays, discount) {
    rateDays = numDays % 22
    return Math.ceil(dayRate(hourlyRate) * (rateDays + (1 - discount) * (numDays - rateDays)))
}

priceWithMonthlyDiscount(89, 230, 0.42);

