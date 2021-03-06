const PF = process.env.REACT_APP_PUBLIC_FOLDER;
export const Users = [
  {
    id:1,
    profilePicture: `${PF}person/1.jpg`,
    username: "Daenerys Targaryen",
  },
  {
    id:2,
    profilePicture: `${PF}person/2.jpg`,
    username: "Janell Shrum",
  },
  {
    id:3,
    profilePicture: `${PF}person/3.jpg`,
    username: "Alex Durden",
  },
  {
    id:4,
    profilePicture: `${PF}person/4.jpg`,
    username: "Dora Hawks",
  },
  {
    id:5,
    profilePicture: `${PF}person/5.jpeg`,
    username: "Thomas Holden",
  },
  {
    id:6,
    profilePicture: `${PF}person/6.jpeg`,
    username: "Shirley Beauchamp",
  },
  {
    id:7,
    profilePicture: `${PF}person/7.jpeg`,
    username: "Travis Bennett",
  },
  {
    id:8,
    profilePicture: `${PF}person/8.jpeg`,
    username: "Kristen Thomas",
  },
  {
    id:9,
    profilePicture: `${PF}person/9.jpeg`,
    username: "Gary Duty",
  },
  {
    id:10,
    profilePicture: `${PF}person/10.jpeg`,
    username: "Safak Kocaoglu",
  },
];

export const Posts = [
  {
    id: 1,
    desc: "Love For All, Hatred For None.",
    photo: PF+"posts/lion_couple.jpg",
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    photo: PF+"posts/andamans.jpg",
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    desc: "Every moment is a fresh beginning.",
    photo: PF+"posts/breakfast.jpeg",
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    photo: PF+"posts/family.jpg",
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    photo: PF+"posts/husky.jpg",
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comment: 5,
  },
  {
    id: 6,
    photo: PF+"posts/morning.png",
    date: "1 day ago",
    userId: 6,
    like: 44,
    comment: 6,
  },
  {
    id: 7,
    desc: "Never regret anything that made you smile.",
    photo: PF+"posts/station.jpeg",
    date: "2 days ago",
    userId: 7,
    like: 52,
    comment: 3,
  },
  {
    id: 8,
    photo: PF+"posts/mountain.jpeg",
    date: "3 days ago",
    userId: 8,
    like: 15,
    comment: 1,
  },
  {
    id: 9,
    desc: "Change the world by being yourself.",
    photo: PF+"posts/aggressive_cat.jpg",
    date: "5 days ago",
    userId: 9,
    like: 11,
    comment: 2,
  },
  {
    id: 10,
    photo: PF+"posts/morning.png",
    date: "1 week ago",
    userId: 10,
    like: 104,
    comment: 12,
  },
];
