import * as data from "../../../notifications.js"

/**
 * returns a list containing all context objects of the notifications file
 */

const getAllNotificationsByUser = (userId) => {
  let arr = [];
  for (let key of data) {
   if (key.author.id === userId) {
     arr.push(key.context)
   } 
  }
  return arr;
}
