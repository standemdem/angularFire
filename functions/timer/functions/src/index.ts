import * as functions from 'firebase-functions';

export const timer = functions.firestore
  .document('items/{itemsId}')
  .onUpdate((change, context) => {
    let count = change.after.data().changes || 0;

    if (change.after.data().number === change.before.data().number) return null;


    return change.after.ref.set({
      changes: count + 1
    }, {
      merge: true
    });
  });
