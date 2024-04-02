# Unit Test Project 1

This project is a React unit testing project on the ice cream selection theme. The tests used in the project are as follows:

## Tests

**1 - Testing Button Activation Based on Conditions:**

* A form component is rendered, and necessary elements (button and checkbox) are called.
* It checks if the checkbox is initially unchecked and the button is disabled.
* It verifies that clicking the checkbox activates the button and clicking again deactivates it.

**2 - Notification Visibility Based on Button Hover Test:**

* A form component is rendered, and necessary elements are retrieved (checkbox, button, notification).
* It checks if clicking the checkbox activates the button and hides the notification.
* It verifies that hovering over the button displays the notification and moving the mouse away hides it.

**3 - Verification of Card Component Content:**

* A card component is rendered with required props (e.g., name, image path, quantity).
* It checks if the content of the card (e.g., name, image, quantity) is correctly displayed.

**4 - Testing Correct Function Invocation on Button Click:**

* Within the card component, it tests whether the add and reset buttons trigger the correct functions with the right parameters when clicked.

**5 - Display of Data Received from API Test:**

* Within the Scoops component, it tests whether images (e.g., ice cream variety images) fetched from an API are correctly displayed.

**6 - Testing Addition and Reset Operations:**

* Within the Scoops component, it tests the functionality of adding and resetting items, ensuring that the total price updates correctly and items are added and removed accurately.

## Used Technologies

- Jest
- React Testing Library/User Event v.14.0
- Axios v.0.27.2
- Json-Server
- Bootstrap

## Preview

![Kayt2024-04-02165208-ezgif com-video-to-gif-converter](https://github.com/serhatakhan/Unit-Test-1/assets/147662915/c723badc-4228-4fc4-99e9-5a0fca73a2d0)


