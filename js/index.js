"use strict"
import users from "./users.js"

// Завдання 1️⃣
// Отримати загальну суму балансу (поле balance) всіх користувачів.

const balance = users.reduce((totalBalance, user)=> totalBalance + user.balance, 0);

console.log(balance); // 20916

// Завдання 2️⃣
// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

const getUsersWithFriend = (users, friendName) => {
  const friends = users.filter(user => user.friends.includes(friendName)).map(user => user.name);
  return friends;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// Завдання 3️⃣
// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

const getNamesSortedByFriendsCount = users => [...users].sort((firstFriend, secondFriend) => firstFriend.friends.length - secondFriend.friends.length).map((user) => user.name);
console.log(getNamesSortedByFriendsCount(users));

// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
// Завдання 4️⃣
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const getSortedUniqueSkills = users => {
  const nameSkills = users.flatMap(user => user.skills)
  const noDuplicates = nameSkills.filter((value, index)=> nameSkills.indexOf(value) === index).sort()

  return noDuplicates;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]