/* eslint-disable max-len */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

// Initialize Firebase Admin
admin.initializeApp();
const db = admin.firestore();

// Configure the email transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // Replace with your email service
  auth: {
    user: "teamlohkey@gmail.com", // Replace with your email
    pass: "kbid srwq ufum ugup", // Use app-specific password if using Gmail
  },
});

// Function to check the database and send reminders
// eslint-disable-next-line max-len
// Function to send reminders to all emails in the "friends" array
// eslint-disable-next-line max-len
// Function to send scheduled reminders
exports.sendScheduledReminders = functions.pubsub
    .schedule("every 1 minutes") // Run every minute
    .onRun(async (context) => {
      const now = new Date().toISOString(); // Current time
      console.log(`Function triggered at: ${now}`);
      const adventuresRef = db.collection("adventures");

      try {
      // Get all adventure documents
        const snapshot = await adventuresRef.get();
        if (snapshot.empty) {
          console.log("No adventures found in the database.");
          return null;
        }

        // Process each document in the "adventures" collection
        const promises = snapshot.docs.map(async (doc) => {
          const adventure = doc.data();
          console.log(`Processing adventure: ${adventure.description || "Unnamed Adventure"}`);

          // Check if the activities array exists
          if (!Array.isArray(adventure.activities)) {
            console.log(`No activities found for adventure: ${adventure.description || "Unnamed Adventure"}`);
            return null;
          }

          // Iterate through each activity in the activities array
          const activityPromises = adventure.activities.map(async (activity, index) => {
            console.log(`Processing activity: ${activity.title || "Untitled Activity"}`);

            // Check if the reminder time has passed and if it has already been sent
            if (
              activity.reminder &&
            activity.reminder <= now &&
            !activity.reminderSent // Check if the reminder has already been sent
            ) {
              console.log(`Reminder time passed for activity: ${activity.title || "Untitled Activity"}`);

              // Get the list of email recipients
              const emailRecipients = adventure.friends || [];
              if (emailRecipients.length === 0) {
                console.log(`No friends to email for activity: ${activity.title}`);
                return null;
              }

              // Prepare email
              console.log(`Preparing email for: ${emailRecipients.join(",")}`);
              const mailOptions = {
                from: "teamlohkey@gmail.com",
                to: emailRecipients.join(","), // Join all friends' emails into a single string
                subject: `Reminder: ${activity.title || "Untitled Activity"}`,
                text: `Hello Team Lohkey!\n\nDon't forget your activity "${activity.title || "Untitled Activity"}"!\nIt starts at ${activity.start} and ends at ${activity.end}.\n\nDescription: ${activity.description || "No description provided."}\n\nLocation: ${activity.location || "No location provided."}`,
              };

              try {
                await transporter.sendMail(mailOptions);
                console.log(`Email sent to: ${emailRecipients.join(",")}`);

                // Mark the reminder as sent in the Firestore document
                adventure.activities[index].reminderSent = true; // Update the activity in the array
                await doc.ref.update({
                  activities: adventure.activities,
                });
                console.log(`Reminder marked as sent for activity: ${activity.title}`);
              } catch (emailError) {
                console.error(`Error sending email for activity: ${activity.title}`, emailError);
              }
            } else if (activity.reminderSent) {
              console.log(`Reminder already sent for activity: ${activity.title}`);
            } else {
              console.log(`Reminder time has not passed yet for activity: ${activity.title || "Untitled Activity"}`);
            }
          });

          // Wait for all activity processing promises to complete
          await Promise.all(activityPromises);
        });

        await Promise.all(promises);
        console.log("All reminders processed.");
      } catch (error) {
        console.error("Error fetching adventures:", error);
      }

      return null;
    });
