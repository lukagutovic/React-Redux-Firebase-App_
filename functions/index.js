const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp()

 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });


 // Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
    const original = req.query.text;
    const snapshot = await admin.database().ref('/messages').push({original: original});
    res.redirect(303, snapshot.ref.toString());
  });
  

  const createNotification = (notification => {
      return admin.firestore().collection('notifications')
      .add(notification)
      .then(doc => console.log('notification added', doc));
  })

  exports.projectCreated = functions.firestore
  .document('projects/{projectId}')
  .onCreate(doc => {
      const project = doc.data();
      const notification = {
          content: 'Added a new project',
          user: `${project.authorFirstName} ${project.authorLastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
      }
      return createNotification(notification);
  })

  exports.userJoined = functions.auth.user()
  .onCreate(user => {
      return admin.firestore().collection('users').doc(user.uid).get().then(doc => {
          const newUser = doc.data();
          const notification = {
              content: 'Joined the party',
              user: `${newUser.firstName} ${newUser.lastName}`,
              time: admin.firestore.FieldValue.serverTimestamp()
          }
          return createNotification(notification);
      })
  })