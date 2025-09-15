// functions/index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.createBulkUsers = functions.https.onCall(async (data, context) => {
  // Security Check: Make sure the person calling this is a logged-in admin
  const adminUid = context.auth.uid;
  if (!adminUid) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "You must be an admin to perform this action."
    );
  }
  const adminDoc = await admin.firestore().collection("users").doc(adminUid).get();
  if (!adminDoc.exists || adminDoc.data().role !== "admin") {
    throw new functions.https.HttpsError(
      "permission-denied",
      "Only admins can create new users."
    );
  }

  const users = data.users;
  if (!users || !Array.isArray(users)) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "The function must be called with an array of users."
    );
  }

  let successCount = 0;
  let failureCount = 0;
  const promises = [];

  users.forEach((user) => {
    const promise = admin
      .auth()
      .createUser({
        email: user.email,
        password: user.password,
        displayName: user.name,
      })
      .then((userRecord) => {
        successCount++;
        // Now create the user document in Firestore
        return admin.firestore().collection("users").doc(userRecord.uid).set({
          name: user.name,
          email: user.email,
          register_number: user.register_number,
          role: "student",
        });
      })
      .catch((error) => {
        console.error("Error creating user:", user.email, error.message);
        failureCount++;
      });
    promises.push(promise);
  });

  await Promise.all(promises);

  return {
    success: true,
    successCount: successCount,
    failureCount: failureCount,
  };
});