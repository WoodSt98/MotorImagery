// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "motor-imagery",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Motor Imagery ",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "parameters": {},
  "files": {},
  "messageHandlers": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Instructions:",
          "content": "Please read all the questions carefully and respond to the following information to the best of your ability. If you do not know the answer, please leave it blank. "
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Female",
              "coding": "1"
            },
            {
              "label": "Male",
              "coding": "2"
            },
            {
              "label": "Other",
              "coding": "3"
            }
          ],
          "label": "What sex were you assigned at birth? ",
          "name": "what-sex-were-you-assigned-at-birth"
        },
        {
          "required": false,
          "type": "input",
          "label": "Age: ",
          "name": "age:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Normal vision",
              "coding": "1"
            },
            {
              "label": "Corrected-to-normal vision (e.g., lasik eye surgery, prescribed glasses, and etc.)",
              "coding": "2"
            }
          ],
          "label": "Visual acuity:",
          "name": "visual-acuity:"
        },
        {
          "required": true,
          "type": "text",
          "title": "Which hand do you use to do the following?"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "1. Throw a ball:",
          "name": "1.-throw-a-ball:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "2. Brush your teeth:",
          "name": "2.-brush-your-teeth:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "3. Eat soup with a spoon:",
          "name": "3.-eat-soup-with-a-spoon:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "4. Comb your hair:",
          "name": "4.-comb-your-hair:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "5. Cut bread with a knife:",
          "name": "5.-cut-bread-with-a-knife:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "6. Swing tennis\u002Fbadminton racquet or bat:",
          "name": "6.-swing-tennisbadminton-racquet-or-bat:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "7. Hammer a nail:",
          "name": "7.-hammer-a-nail:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "8. Point to something accurately:",
          "name": "8.-point-to-something-accurately:"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Left ",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "label": "9. Write your name:",
          "name": "9.-write-your-name:"
        },
        {
          "required": false,
          "type": "input",
          "label": "Is there anything you do consistently with your left hand?",
          "name": "is-there-anything-you-do-consistently-with-your-left-hand"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Yes",
              "coding": "1"
            },
            {
              "label": "No",
              "coding": "2"
            }
          ],
          "label": "Do you have a history of gross neurological sensory deficits?",
          "name": "do-you-have-a-history-of-gross-neurological-sensory-deficits"
        },
        {
          "required": false,
          "type": "input",
          "label": "If yes, please specify. ",
          "name": "if-yes-please-specify."
        },
        {
          "required": true,
          "type": "radio",
          "label": "Do you have any implanted medical devices (e.g., Pacemaker)?",
          "options": [
            {
              "label": "Yes",
              "coding": "1"
            },
            {
              "label": "No",
              "coding": "2"
            }
          ],
          "name": "do-you-have-any-implanted-medical-devices-(e.g.-pacemaker)"
        },
        {
          "required": false,
          "type": "input",
          "label": "During a typical 7-Day period (a week), how many days do you engage in regular physical exercise? ",
          "attributes": {
            "type": "number",
            "min": "1",
            "max": "7"
          },
          "name": "during-a-typical-7-day-period-(a-week)-how-many-days-do-you-engage-in-regular-physical-exercise"
        },
        {
          "required": false,
          "type": "input",
          "label": "During a typical 7-Day period (a week), how many days do you engage in cognitive activities? (e.g. reading newspapers, books or doing puzzles).",
          "attributes": {
            "type": "number",
            "min": "1",
            "max": "7"
          },
          "name": "during-a-typical-7-day-period-(a-week)-how-many-days-do-you-engage-in-cognitive-activities-(e.g.-reading-newspapers-books-or-doing-puzzles)."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Demographic information "
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
this.options.events['click button#fullscreen'] = function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }

/* Continue to next screen */
this.end()
}
}
      },
      "title": "Full screen",
      "content": "\u003Cbutton id=\"fullscreen\"\u003EPress to enter full screen\u003C\u002Fbutton\u003E"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "content": "",
          "title": "Movement Imagery Questionnaire -3"
        },
        {
          "type": "text",
          "title": "Instructions",
          "content": "This questionnaire concerns two ways of mentally performing movements which are used by some people more than by others and are more applicable to some types of movements than others.  The first is attempting to form a visual image or picture of a movement in your mind.  The second is attempting to feel what performing a movement is like without actually doing the movement.  You are requested to do both of these mental tasks for a variety of movements in this questionnaire, and then rate how easy\u002Fdifficult you found the tasks to be. The ratings that you give are not designed to assess the goodness or badness of the way you perform these mental tasks. They are attempts to discover the capacity individuals’ show for performing these tasks for different movements. There are no right or wrong ratings or some ratings that are better than others."
        },
        {
          "required": true,
          "type": "text",
          "content": "Each of the following statements describes a particular action or movement.  Read each statement carefully and then actually perform the movement as described. Only perform the movement a single time. Return to the starting position for the movement just as if you were going to perform the action a second time.  Then depending on which of the following you are asked to do, either (1) form as clear and vivid a visual image as possible of the movement just performed from an internal perspective (i.e., from a 1st person perspective, as if you are actually inside yourself performing and seeing the action through your own eyes), (2) form as clear and vivid a visual image as possible of the movement just performed from an external perspective (i.e., from a 3rd person perspective, as if watching yourself on DVD), or (3) attempt to feel yourself making the movement just performed without actually doing it."
        },
        {
          "required": true,
          "type": "text",
          "content": "After you have completed the mental task required, rate the ease\u002Fdifficulty with which you were able to do the task.  Take your rating from the following scale.  Be as accurate as possible and take as long as you feel necessary to arrive at the proper rating for each movement.  You may choose the same rating for any number of movements “seen” or “felt” and it is not necessary to utilize the entire length of the scale. "
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "MIQ-3"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "content": "\n",
          "title": "1\u002F12"
        },
        {
          "type": "text",
          "title": "Starting Position",
          "content": "Stand with your feet and legs together and your arms at your sides.\n"
        },
        {
          "required": true,
          "type": "text",
          "title": "Action:",
          "content": "Raise your right knee as high as possible so that you are starting on your left leg with your right leg flexed (bent) at the knee. Now lower your right leg so you are once again standing on two feet. The action is performed slowly."
        },
        {
          "required": true,
          "type": "text",
          "title": "Mental Task:",
          "content": "Assume the starting position. Attempt to feel yourself making the movement just observed without actually doing it. "
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1 - Very hard to feel"
            },
            {
              "label": "2 - Hard to feel"
            },
            {
              "label": "3 - Somewhat hard to feel"
            },
            {
              "label": "4 - Neutral (not easy, not hard)"
            },
            {
              "label": "5 - Somewhat easy to feel"
            },
            {
              "label": "6 - Easy to feel"
            },
            {
              "label": "7 - Very easy to feel"
            }
          ],
          "label": "Rate the ease\u002Fdifficulty with which you were able to do this mental task.",
          "name": "rate-the-easedifficulty-with-which-you-were-able-to-do-this-mental-task."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "MIQ-3 Q1"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "content": "\n",
          "title": "2\u002F12"
        },
        {
          "type": "text",
          "title": "Starting Position",
          "content": "Stand with your feet and legs together and your arms at your sides.\n"
        },
        {
          "required": true,
          "type": "text",
          "title": "Action:",
          "content": "Bend down low and then jump straight up in the air as high as possible with both arms extended above your head. Land with both feet apart and lower your arms to your sides."
        },
        {
          "required": true,
          "type": "text",
          "title": "Mental Task:",
          "content": "Assume the starting position. Attempt to see yourself making the movement just observed from an internal perspective. "
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1 - Very hard to see"
            },
            {
              "label": "2 - Hard to see"
            },
            {
              "label": "3 - Somewhat hard to see"
            },
            {
              "label": "4 - Neutral (not easy, not hard)"
            },
            {
              "label": "5 - Somewhat easy to see"
            },
            {
              "label": "6 - Easy to see"
            },
            {
              "label": "7 - Very easy to see"
            }
          ],
          "label": "Rate the ease\u002Fdifficulty with which you were able to do this mental task.",
          "name": "rate-the-easedifficulty-with-which-you-were-able-to-do-this-mental-task."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "MIQ-3 Q2"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "content": "\n",
          "title": "3\u002F12"
        },
        {
          "type": "text",
          "title": "Starting Position",
          "content": "Extend the arm of your non-dominant hand straight out to your side so that it is parallel to the ground, palm down."
        },
        {
          "required": true,
          "type": "text",
          "title": "Action:",
          "content": "Move your arm forward until it is directly in front of your body (still parallel to the ground). Keep your arm extended during the movement and make the movement slowly."
        },
        {
          "required": true,
          "type": "text",
          "title": "Mental Task:",
          "content": "Assume the starting position. Attempt to see yourself making the movement just observed from an external perspective. "
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1 - Very hard to see"
            },
            {
              "label": "2 - Hard to see"
            },
            {
              "label": "3 - Somewhat hard to see"
            },
            {
              "label": "4 - Neutral (not easy, not hard)"
            },
            {
              "label": "5 - Somewhat easy to see"
            },
            {
              "label": "6 - Easy to see"
            },
            {
              "label": "7 - Very easy to see"
            }
          ],
          "label": "Rate the ease\u002Fdifficulty with which you were able to do this mental task.",
          "name": "rate-the-easedifficulty-with-which-you-were-able-to-do-this-mental-task."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "MIQ-3 Q3"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "content": "\n",
          "title": "4\u002F12"
        },
        {
          "type": "text",
          "title": "Starting Position",
          "content": "Stand with your feet slightly apart and your arms \nfully extended above your head."
        },
        {
          "required": true,
          "type": "text",
          "title": "Action:",
          "content": "Slowly bend forward at the waist and try and touch your toes with your fingertips (or, if possible, touch the floor with your fingertips or your hands). Now return to the starting position, standing erect with your arms extended above your head."
        },
        {
          "required": true,
          "type": "text",
          "title": "Mental Task:",
          "content": "Assume the starting position. Attempt to feel yourself making the movement just observed without actually doing it. "
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1 - Very hard to feel"
            },
            {
              "label": "2 - Hard to feel"
            },
            {
              "label": "3 - Somewhat hard to feel"
            },
            {
              "label": "4 - Neutral (not easy, not hard)"
            },
            {
              "label": "5 - Somewhat easy to feel"
            },
            {
              "label": "6 - Easy to feel"
            },
            {
              "label": "7 - Very easy to feel"
            }
          ],
          "label": "Rate the ease\u002Fdifficulty with which you were able to do this mental task.",
          "name": "rate-the-easedifficulty-with-which-you-were-able-to-do-this-mental-task."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "MIQ-3 Q4"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "content": "\n",
          "title": "5\u002F12"
        },
        {
          "type": "text",
          "title": "Starting Position",
          "content": "Stand with your feet and legs together and your arms at your sides.\n"
        },
        {
          "required": true,
          "type": "text",
          "title": "Action:",
          "content": "Raise your right knee as high as possible so that you are starting on your left leg with your right leg flexed (bent) at the knee. Now lower your right leg so you are once again standing on two feet. The action is performed slowly."
        },
        {
          "required": true,
          "type": "text",
          "title": "Mental Task:",
          "content": "Assume the starting position. Attempt to see yourself making the movement just observed from an internal perspective. "
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1 - Very hard to see"
            },
            {
              "label": "2 - Hard to see"
            },
            {
              "label": "3 - Somewhat hard to see"
            },
            {
              "label": "4 - Neutral (not easy, not hard)"
            },
            {
              "label": "5 - Somewhat easy to see"
            },
            {
              "label": "6 - Easy to see"
            },
            {
              "label": "7 - Very easy to see"
            }
          ],
          "label": "Rate the ease\u002Fdifficulty with which you were able to do this mental task.",
          "name": "rate-the-easedifficulty-with-which-you-were-able-to-do-this-mental-task."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "MIQ-3 Q5"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "content": "\n",
          "title": "6\u002F12"
        },
        {
          "type": "text",
          "title": "Starting Position",
          "content": "Stand with your feet and legs together and your                       \narms at your sides."
        },
        {
          "required": true,
          "type": "text",
          "title": "Action:",
          "content": "Bend down low and then jump straight up in the air as high as possible with both arms extended above your head. Land with both feet apart and lower your arms to your sides."
        },
        {
          "required": true,
          "type": "text",
          "title": "Mental Task:",
          "content": "Assume the starting position. Attempt to see yourself making the movement just observed from an external perspective. "
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1 - Very hard to see"
            },
            {
              "label": "2 - Hard to see"
            },
            {
              "label": "3 - Somewhat hard to see"
            },
            {
              "label": "4 - Neutral (not easy, not hard)"
            },
            {
              "label": "5 - Somewhat easy to see"
            },
            {
              "label": "6 - Easy to see"
            },
            {
              "label": "7 - Very easy to see"
            }
          ],
          "label": "Rate the ease\u002Fdifficulty with which you were able to do this mental task.",
          "name": "rate-the-easedifficulty-with-which-you-were-able-to-do-this-mental-task."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "MIQ-3 Q6"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "content": "\n",
          "title": "7\u002F12"
        },
        {
          "type": "text",
          "title": "Starting Position",
          "content": "Extend the arm of your non-dominant hand straight out to your side so that it is parallel to the ground, palm down."
        },
        {
          "required": true,
          "type": "text",
          "title": "Action:",
          "content": "Move your arm forward until it is directly in front of your body (still parallel to the ground). Keep your arm extended during the movement and make the movement slowly."
        },
        {
          "required": true,
          "type": "text",
          "title": "Mental Task:",
          "content": "Assume the starting position. Attempt to feel yourself making the movement just performed without actually doing it. "
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1 - Very hard to feel"
            },
            {
              "label": "2 - Hard to feel"
            },
            {
              "label": "3 - Somewhat hard to feel"
            },
            {
              "label": "4 - Neutral (not easy, not hard)"
            },
            {
              "label": "5 - Somewhat easy to feel"
            },
            {
              "label": "6 - Easy to feel"
            },
            {
              "label": "7 - Very easy to feel"
            }
          ],
          "label": "Rate the ease\u002Fdifficulty with which you were able to do this mental task.",
          "name": "rate-the-easedifficulty-with-which-you-were-able-to-do-this-mental-task."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "MIQ-3 Q7"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "content": "\n",
          "title": "8\u002F12"
        },
        {
          "type": "text",
          "title": "Starting Position",
          "content": "Stand with your feet slightly apart and your arms \nfully extended above your head."
        },
        {
          "required": true,
          "type": "text",
          "title": "Action:",
          "content": "Slowly bend forward at the waist and try and touch your toes with your fingertips (or, if possible, touch the floor with your fingertips or your hands). Now return to the starting position, standing erect with your arms extended above your head."
        },
        {
          "required": true,
          "type": "text",
          "title": "Mental Task:",
          "content": "Assume the starting position. Attempt to see yourself making the movement just observed from an internal perspective. "
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1 - Very hard to see"
            },
            {
              "label": "2 - Hard to see"
            },
            {
              "label": "3 - Somewhat hard to see"
            },
            {
              "label": "4 - Neutral (not easy, not hard)"
            },
            {
              "label": "5 - Somewhat easy to see"
            },
            {
              "label": "6 - Easy to see"
            },
            {
              "label": "7 - Very easy to see"
            }
          ],
          "label": "Rate the ease\u002Fdifficulty with which you were able to do this mental task.",
          "name": "rate-the-easedifficulty-with-which-you-were-able-to-do-this-mental-task."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "MIQ-3 Q8"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "content": "\n",
          "title": "9\u002F12"
        },
        {
          "type": "text",
          "title": "Starting Position",
          "content": "Stand with your feet and legs together and your                       \narms at your sides."
        },
        {
          "required": true,
          "type": "text",
          "title": "Action:",
          "content": "Raise your right knee as high as possible so that you are starting on your left leg with your right leg flexed (bent) at the knee. Now lower your right leg so you are once again standing on two feet. The action is performed slowly."
        },
        {
          "required": true,
          "type": "text",
          "title": "Mental Task:",
          "content": "Assume the starting position. Attempt to see yourself making the movement just observed from an external perspective. "
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1 - Very hard to see"
            },
            {
              "label": "2 - Hard to see"
            },
            {
              "label": "3 - Somewhat hard to see"
            },
            {
              "label": "4 - Neutral (not easy, not hard)"
            },
            {
              "label": "5 - Somewhat easy to see"
            },
            {
              "label": "6 - Easy to see"
            },
            {
              "label": "7 - Very easy to see"
            }
          ],
          "label": "Rate the ease\u002Fdifficulty with which you were able to do this mental task.",
          "name": "rate-the-easedifficulty-with-which-you-were-able-to-do-this-mental-task."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "MIQ-3 Q9"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "content": "\n",
          "title": "10\u002F12"
        },
        {
          "type": "text",
          "title": "Starting Position",
          "content": "Stand with your feet and legs together and your                       \narms at your sides."
        },
        {
          "required": true,
          "type": "text",
          "title": "Action:",
          "content": "Bend down low and then jump straight up in the air as high as possible with both arms extended above your head. Land with both feet apart and lower your arms to your sides."
        },
        {
          "required": true,
          "type": "text",
          "title": "Mental Task:",
          "content": "Assume the starting position. Attempt to feel yourself making the movement just performed without actually doing it. "
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1 - Very hard to feel"
            },
            {
              "label": "2 - Hard to feel"
            },
            {
              "label": "3 - Somewhat hard to feel"
            },
            {
              "label": "4 - Neutral (not easy, not hard)"
            },
            {
              "label": "5 - Somewhat easy to feel"
            },
            {
              "label": "6 - Easy to feel"
            },
            {
              "label": "7 - Very easy to feel"
            }
          ],
          "label": "Rate the ease\u002Fdifficulty with which you were able to do this mental task.",
          "name": "rate-the-easedifficulty-with-which-you-were-able-to-do-this-mental-task."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "MIQ-3 Q10"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "content": "\n",
          "title": "11\u002F12"
        },
        {
          "type": "text",
          "title": "Starting Position",
          "content": "Extend the arm of your non-dominant hand straight \nout to your side so that it is parallel to the ground, palm down."
        },
        {
          "required": true,
          "type": "text",
          "title": "Action:",
          "content": "Move your arm forward until it is directly in front of your body (still parallel to the ground). Keep your arm extended during the movement and make the movement slowly."
        },
        {
          "required": true,
          "type": "text",
          "title": "Mental Task:",
          "content": "Assume the starting position. Attempt to see yourself making the movement just observed from an internal perspective. "
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1 - Very hard to see"
            },
            {
              "label": "2 - Hard to see"
            },
            {
              "label": "3 - Somewhat hard to see"
            },
            {
              "label": "4 - Neutral (not easy, not hard)"
            },
            {
              "label": "5 - Somewhat easy to see"
            },
            {
              "label": "6 - Easy to see"
            },
            {
              "label": "7 - Very easy to see"
            }
          ],
          "label": "Rate the ease\u002Fdifficulty with which you were able to do this mental task.",
          "name": "rate-the-easedifficulty-with-which-you-were-able-to-do-this-mental-task."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "MIQ-3 Q11"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "content": "\n",
          "title": "12\u002F12"
        },
        {
          "type": "text",
          "title": "Starting Position",
          "content": "Stand with your feet slightly apart and your arms \nfully extended above your head."
        },
        {
          "required": true,
          "type": "text",
          "title": "Action:",
          "content": "Slowly bend forward at the waist and try and touch your toes with your fingertips (or, if possible, touch the floor with your fingertips or your hands). Now return to the starting position, standing erect with your arms extended above your head."
        },
        {
          "required": true,
          "type": "text",
          "title": "Mental Task:",
          "content": "Assume the starting position. Attempt to see yourself making the movement just observed from an external perspective. "
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1 - Very hard to see"
            },
            {
              "label": "2 - Hard to see"
            },
            {
              "label": "3 - Somewhat hard to see"
            },
            {
              "label": "4 - Neutral (not easy, not hard)"
            },
            {
              "label": "5 - Somewhat easy to see"
            },
            {
              "label": "6 - Easy to see"
            },
            {
              "label": "7 - Very easy to see"
            }
          ],
          "label": "Rate the ease\u002Fdifficulty with which you were able to do this mental task.",
          "name": "rate-the-easedifficulty-with-which-you-were-able-to-do-this-mental-task."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "MIQ-3 Q12"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Instructions ",
          "content": "In this test you will be presented with a fixation cross, followed by a red circle. \n"
        },
        {
          "required": true,
          "type": "text",
          "content": "\n1.  Concentrate on the fixation cross.\n",
          "title": "Your task is to:"
        },
        {
          "required": true,
          "type": "html",
          "content": "2. Press the middle foot pedal with your\n    \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eleft\u003C\u002Fspan\u003E\u003C\u002Fb\u003E foot once the red circle is presented. \n",
          "name": ""
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"Screenshot 2024-07-16 at 12.27.04 PM.png\"] }",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "clean-macbook-keyboard-610x241 (2).jpg": "embedded\u002Fd4bef0ac43e1ecf12634724c2744320e1c6ae07e0ca32bf249cbb800b0211bb9.jpg",
        "Screenshot 2024-07-16 at 12.27.04 PM.png": "embedded\u002F263266c225f4dd1fed7698e80b9d78617cb12dac15220879a7276b15f37aae19.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Simple reaction time"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "": "1"
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": "20"
      },
      "files": {},
      "responses": {
        "keypress(A, a)": "Left"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Left",
      "correctResponse": "A, a",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "circle",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 170,
                "height": 170,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#d6341a"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(Space)": "left hand"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Circle "
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Instructions ",
          "content": "In this test you will be presented with a fixation cross, followed by a red circle. \n"
        },
        {
          "required": true,
          "type": "text",
          "content": "\n1.  Concentrate on the fixation cross.\n",
          "title": "Your task is to:"
        },
        {
          "required": true,
          "type": "html",
          "content": "2. Press the middle foot pedal with your\n    \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eright\u003C\u002Fspan\u003E\u003C\u002Fb\u003E foot once the red circle is presented. \n",
          "name": ""
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"Screenshot 2024-07-16 at 12.28.35 PM.png\"] }",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "clean-macbook-keyboard-610x241 (2).jpg": "embedded\u002Fd4bef0ac43e1ecf12634724c2744320e1c6ae07e0ca32bf249cbb800b0211bb9.jpg",
        "Screenshot 2024-07-16 at 12.28.35 PM.png": "embedded\u002F46f3a1d8d9d61d90611c16ad583980c52c600ae72f3f8dc73a7a425cf67d96e2.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Simple reaction time"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "": "1"
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": "20"
      },
      "files": {},
      "responses": {
        "keypress(K, k)": "Right"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Right",
      "correctResponse": "K, k",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "circle",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "170",
                "height": 145.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#d6341a"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(Space)": "right hand"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Circle "
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Instructions:",
          "content": "In this training phase, you will be presented with hand images in two different views (back and palm)  and different orientations. "
        },
        {
          "required": true,
          "type": "text",
          "title": "Your task:",
          "content": "1. Physically move and match your hand to the images presented on the screen. "
        },
        {
          "required": true,
          "type": "html",
          "content": "2. Please select the \n    \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003E'Y'\u003C\u002Fspan\u003E\u003C\u002Fb\u003E  key for \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eyes\u003C\u002Fspan\u003E\u003C\u002Fb\u003E and \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003E'N'\u003C\u002Fspan\u003E\u003C\u002Fb\u003E key for  \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eno\u003C\u002Fspan\u003E\u003C\u002Fb\u003E to indicate whether you can physically move your hand to the image displayed on the screen. \n\n\n",
          "name": ""
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"clean-macbook-keyboard-610x241 (1).jpg\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "3. Click 'continue' when you are ready to proceed. "
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "clean-macbook-keyboard-610x241 (1).jpg": "embedded\u002F93a8964f121528657d71fc12c2679719d384ae730a8a5aac3c13c306d574b9f2.jpg"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Training phase 1"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": ""
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": ""
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": ""
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": ""
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": ""
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": ""
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "920",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.backgroundColor = "black";
}
      },
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "keypress(y)": "yes",
          "keypress(n)": "no"
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Trail",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": "#000000",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "undefined": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": "${this.parameters.R}",
                "top": "${this.parameters.D}",
                "angle": "${this.parameters.A}",
                "width": "${this.parameters.H}",
                "height": "${this.parameters.V}",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${this.files[this.parameters.Photo]}"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "LeftBack0_13_11zon.jpeg": "embedded\u002Fc01ae650201d30c61ef5917073b3db1bfb7e90843b024b9c44e84bd912b3a7de.jpeg",
              "LeftBack90L_8_11zon.jpeg": "embedded\u002Fde4c0ac0b7e0ba689907a469e98d12c131bc88a8e163740d45320a3a028552bf.jpeg",
              "LeftBack90M_7_11zon.jpeg": "embedded\u002F614470bfa47db0a003ba271a57b45ce14a5dde9da0ef44f31ecfb93238b29a13.jpeg",
              "LeftBack180_9_11zon.jpeg": "embedded\u002Fb2c4eb982a0bfe139af1aa23d4f9e237f8b7649e96e705ef29ee406bb830e8fc.jpeg",
              "Leftpalm0_14_11zon.jpeg": "embedded\u002Fc24fc2f85a1ea774aab3b46952f5a76a7b2607a996e6e6c526ca6eaa5439cddb.jpeg",
              "Leftpalm90L_5_11zon.jpeg": "embedded\u002F48b75f6749dca5ae3b6d2b355e3334a5b950843cd6dc1beda7544b13c5cb2fd8.jpeg",
              "Leftpalm90M_6_11zon.jpeg": "embedded\u002F79a71f3ee45aeb184b3bc523ac45a0b3beaa51f2b90f13c6bbe0d91ed3c9ff82.jpeg",
              "Leftpalm180_4_11zon.jpeg": "embedded\u002F2fc87caa787fafcec47d35c570349cf05ab9069fbc8a20fc8697abee00f8bac3.jpeg",
              "Rightback0_15_11zon.jpeg": "embedded\u002F2ee2a7712b81be820610bbe64bf8d0889d814157d058353868984bfec35b0a4c.jpeg",
              "Rightback90L_11_11zon.jpeg": "embedded\u002F0854f5d521b7e139f038136989ae30f25d62e54aa57400f890b988373da11d12.jpeg",
              "Rightback90M_10_11zon.jpeg": "embedded\u002Ff92b5c8724bb6648a65647898b9cd40f65af117f0474ce8fa7cc586df9a7cb4d.jpeg",
              "Rightback180_12_11zon.jpeg": "embedded\u002Faddfc8397ae6891c1a36c7de3e992174e04f7b58366aec0eca6b6e63948880c1.jpeg",
              "RightPalm0_16_11zon.jpeg": "embedded\u002F3d54f383030bd785aae08a6eca81109ec812e2f8a8253e8b91648a0840307c24.jpeg",
              "RightPalm90L_2_11zon.jpeg": "embedded\u002Fa098dd626d29c44e9b87458183f5044392998e00ff5876f87ebf717ecf2c912d.jpeg",
              "RightPalm90M_3_11zon.jpeg": "embedded\u002Fb9e6ba2ba0d302fba0e941dcfe21ff3e2405dce42781cb41191be5eb26cd9c71.jpeg",
              "RightPalm180_1_11zon.jpeg": "embedded\u002F86f28af0f33d4abce861d305ec47db6eae379040884da50bd32cf9211b5c78d5.jpeg",
              "LineRightPalm90L.png": "embedded\u002Fdc7522ec261847e06702dca3a70bf0a679ff6a47ba4efbafe0cc1bb74aef9571.png",
              "LineRightPalm180.png": "embedded\u002F48e833d5b2f8dd033201ce27de499a70ca72091bb409c4860d6685f11ee0c23f.png",
              "LineRightPalm90M.png": "embedded\u002F6356bbf2d7fea17519b6f3ee0ef2edc4bddbe49874ba3738329c865de0bdd711.png",
              "LineRightback90L.png": "embedded\u002F5f4fb123a70d87e6559787f8863eb974026ac95f9f2d0772ed1a0129f73b4d65.png",
              "LineRightback180.png": "embedded\u002F67850fc7ba947ed01659d03fc91abff7cd0be62af23882f9b0c5c515ff9549db.png",
              "LineRightback90M.png": "embedded\u002F5932055cbca408ea3ab1f29721c6fa5afe5f12efc25e83f44bcc0f023fe8b6ef.png",
              "LineLeftPalm180.png": "embedded\u002F6c5449ed018f4db7fea30e1e773ff268d4edaec6dfd31cce36f1b55bb405fccf.png",
              "LineLeftPalm90L.png": "embedded\u002Fb10fd6539ccf838191fbae39f800d043ca7d8b5c71720904051610cdd6297235.png",
              "LineLeftPalm90M.png": "embedded\u002Fcfed6a9c294d59b7d29c61135e83b5c9cc88c8a04ed705470c8abbb80b958ab3.png",
              "LineLeftBack90M.png": "embedded\u002F9fe6196c4cb27e2516d3e391406ed04383b7eb5ae646e05bb30cad32bdb459dc.png",
              "LineLeftBack90L.png": "embedded\u002F1e82a17a7776b4f9bab787d78ed372f7c4fdac2f9b0949b32b3ee6fd8a0b3f11.png",
              "LineLeftBack180.png": "embedded\u002Fecff3f64162fef0c3a5f1f6591b5da616b556a361b9217d385d61a955ca685e4.png",
              "LineRightback0.png": "embedded\u002F7e65be29cfd21158f5fc3f927e52ed8cbdd255c31047a68a93016e27a50f4e99.png",
              "LineLeftBack0.png": "embedded\u002F94fef8be121cf1008ab8d1d525f1cb876ad5182cfee4a894a5bb4a8d3636006a.png",
              "LineRightPalm0.png": "embedded\u002F38da56700193e5e6908a3be0bce9d30afca7fa4a987dc700e68fe0af610aa82e.png",
              "LineLeftPalm0.png": "embedded\u002F5a141b870973bb6247061a171008cc35c3c235ab999cacaf93debf9ef4228dcf.png"
            },
            "responses": {
              "keypress(y)": "yes",
              "keypress(n)": "no"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = ["parameters.H","parameters.V"]
this.options.viewportScale = 1




}
            },
            "title": "Stimulus Presentation "
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Instructions:",
          "content": "In this training phase, you will be presented with hand images in different orientations. Please refrain from physically moving your hands, and instead use your mental abilities to rotate your hands."
        },
        {
          "required": true,
          "type": "html",
          "content": "\n1. Please step on the \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003E'left'\u003C\u002Fspan\u003E\u003C\u002Fb\u003E foot pedal for a \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eleft\u003C\u002Fspan\u003E\u003C\u002Fb\u003E hand-stimulus and the \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003E'right'\u003C\u002Fspan\u003E\u003C\u002Fb\u003E foot pedal for a \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eright\u003C\u002Fspan\u003E\u003C\u002Fb\u003E hand-stimulus.",
          "name": ""
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"Screenshot 2024-07-16 at 12.04.50 PM.png\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "2. Click 'continue' when you are ready to proceed. "
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "IMG_7447.JPG": "embedded\u002F3dd936d61acb1af87264048e62b3f4dd04beb37c4c5ec8b4cc6e821abaa0c2f0.JPG",
        "IMG_7445.JPG": "embedded\u002F321a5980645855da359ce1c052543944ee7c06aec8519cba98c3c4697ef536ae.JPG",
        "clean-macbook-keyboard-610x241.jpg": "embedded\u002F99efb5075161c63e085e2d7076277c9c1774ff5c5ec7046a06682271f6395f11.jpg",
        "Screenshot 2024-07-16 at 12.04.50 PM.png": "embedded\u002Fb76339405ef9bc23550a784e2758de03b7cdc53b4ad39c0c5ceed579b3955ac5.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.backgroundColor = "white";
}
      },
      "title": "Training phase 2"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": ""
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": ""
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": ""
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": ""
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": ""
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": ""
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": ""
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.backgroundColor = "black";
}
      },
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "keypress(K, k)": "right",
          "keypress(A, a)": "left"
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Trail",
        "correctResponse": "K, k, A, a",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 528.33,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#000000",
                "text": "Press any foot pedal to begin the trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen",
            "skip": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": "#000000",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": "${this.parameters.R}",
                "top": "${this.parameters.D}",
                "angle": "${this.parameters.A}",
                "width": "${this.parameters.H}",
                "height": "${this.parameters.V}",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${this.files[this.parameters.Photo]}"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "LeftBack0_13_11zon.jpeg": "embedded\u002Fc01ae650201d30c61ef5917073b3db1bfb7e90843b024b9c44e84bd912b3a7de.jpeg",
              "LeftBack90L_8_11zon.jpeg": "embedded\u002Fde4c0ac0b7e0ba689907a469e98d12c131bc88a8e163740d45320a3a028552bf.jpeg",
              "LeftBack90M_7_11zon.jpeg": "embedded\u002F614470bfa47db0a003ba271a57b45ce14a5dde9da0ef44f31ecfb93238b29a13.jpeg",
              "LeftBack180_9_11zon.jpeg": "embedded\u002Fb2c4eb982a0bfe139af1aa23d4f9e237f8b7649e96e705ef29ee406bb830e8fc.jpeg",
              "Leftpalm0_14_11zon.jpeg": "embedded\u002Fc24fc2f85a1ea774aab3b46952f5a76a7b2607a996e6e6c526ca6eaa5439cddb.jpeg",
              "Leftpalm90L_5_11zon.jpeg": "embedded\u002F48b75f6749dca5ae3b6d2b355e3334a5b950843cd6dc1beda7544b13c5cb2fd8.jpeg",
              "Leftpalm90M_6_11zon.jpeg": "embedded\u002F79a71f3ee45aeb184b3bc523ac45a0b3beaa51f2b90f13c6bbe0d91ed3c9ff82.jpeg",
              "Leftpalm180_4_11zon.jpeg": "embedded\u002F2fc87caa787fafcec47d35c570349cf05ab9069fbc8a20fc8697abee00f8bac3.jpeg",
              "Rightback0_15_11zon.jpeg": "embedded\u002F2ee2a7712b81be820610bbe64bf8d0889d814157d058353868984bfec35b0a4c.jpeg",
              "Rightback90L_11_11zon.jpeg": "embedded\u002F0854f5d521b7e139f038136989ae30f25d62e54aa57400f890b988373da11d12.jpeg",
              "Rightback90M_10_11zon.jpeg": "embedded\u002Ff92b5c8724bb6648a65647898b9cd40f65af117f0474ce8fa7cc586df9a7cb4d.jpeg",
              "Rightback180_12_11zon.jpeg": "embedded\u002Faddfc8397ae6891c1a36c7de3e992174e04f7b58366aec0eca6b6e63948880c1.jpeg",
              "RightPalm0_16_11zon.jpeg": "embedded\u002F3d54f383030bd785aae08a6eca81109ec812e2f8a8253e8b91648a0840307c24.jpeg",
              "RightPalm90L_2_11zon.jpeg": "embedded\u002Fa098dd626d29c44e9b87458183f5044392998e00ff5876f87ebf717ecf2c912d.jpeg",
              "RightPalm90M_3_11zon.jpeg": "embedded\u002Fb9e6ba2ba0d302fba0e941dcfe21ff3e2405dce42781cb41191be5eb26cd9c71.jpeg",
              "RightPalm180_1_11zon.jpeg": "embedded\u002F86f28af0f33d4abce861d305ec47db6eae379040884da50bd32cf9211b5c78d5.jpeg",
              "LineRightPalm90L.png": "embedded\u002Fdc7522ec261847e06702dca3a70bf0a679ff6a47ba4efbafe0cc1bb74aef9571.png",
              "LineRightPalm180.png": "embedded\u002F48e833d5b2f8dd033201ce27de499a70ca72091bb409c4860d6685f11ee0c23f.png",
              "LineRightPalm90M.png": "embedded\u002F6356bbf2d7fea17519b6f3ee0ef2edc4bddbe49874ba3738329c865de0bdd711.png",
              "LineRightback90L.png": "embedded\u002F5f4fb123a70d87e6559787f8863eb974026ac95f9f2d0772ed1a0129f73b4d65.png",
              "LineRightback180.png": "embedded\u002F67850fc7ba947ed01659d03fc91abff7cd0be62af23882f9b0c5c515ff9549db.png",
              "LineRightback90M.png": "embedded\u002F5932055cbca408ea3ab1f29721c6fa5afe5f12efc25e83f44bcc0f023fe8b6ef.png",
              "LineLeftPalm180.png": "embedded\u002F6c5449ed018f4db7fea30e1e773ff268d4edaec6dfd31cce36f1b55bb405fccf.png",
              "LineLeftPalm90L.png": "embedded\u002Fb10fd6539ccf838191fbae39f800d043ca7d8b5c71720904051610cdd6297235.png",
              "LineLeftPalm90M.png": "embedded\u002Fcfed6a9c294d59b7d29c61135e83b5c9cc88c8a04ed705470c8abbb80b958ab3.png",
              "LineLeftBack90M.png": "embedded\u002F9fe6196c4cb27e2516d3e391406ed04383b7eb5ae646e05bb30cad32bdb459dc.png",
              "LineLeftBack90L.png": "embedded\u002F1e82a17a7776b4f9bab787d78ed372f7c4fdac2f9b0949b32b3ee6fd8a0b3f11.png",
              "LineLeftBack180.png": "embedded\u002Fecff3f64162fef0c3a5f1f6591b5da616b556a361b9217d385d61a955ca685e4.png",
              "LineRightback0.png": "embedded\u002F7e65be29cfd21158f5fc3f927e52ed8cbdd255c31047a68a93016e27a50f4e99.png",
              "LineLeftBack0.png": "embedded\u002F94fef8be121cf1008ab8d1d525f1cb876ad5182cfee4a894a5bb4a8d3636006a.png",
              "LineRightPalm0.png": "embedded\u002F38da56700193e5e6908a3be0bce9d30afca7fa4a987dc700e68fe0af610aa82e.png",
              "LineLeftPalm0.png": "embedded\u002F5a141b870973bb6247061a171008cc35c3c235ab999cacaf93debf9ef4228dcf.png"
            },
            "responses": {
              "keypress(k)": "Right",
              "keypress(a)": "Left"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = ["parameters.H","parameters.V"]
this.options.viewportScale = 1




}
            },
            "title": "Stimulus Presentation "
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Training complete. ",
          "content": "Please inform the experimenter that you have completed the training phases."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.backgroundColor = "white";
}
      },
      "title": "Training complete"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Instructions:",
          "content": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "We will now proceed with the \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eexperimental phase.\u003C\u002Fspan\u003E\u003C\u002Fb\u003E In this phase, you will be presented with hand images in different orientations. Please refrain from physically moving your hands, and instead use your mental abilities to rotate your hands. ",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "title": "Your task is to :",
          "content": "1. Please step on the \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003E'left'\u003C\u002Fspan\u003E\u003C\u002Fb\u003E foot pedal for a \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eleft\u003C\u002Fspan\u003E\u003C\u002Fb\u003E hand-stimulus and the \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003E'right'\u003C\u002Fspan\u003E\u003C\u002Fb\u003E foot pedal for a \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eright\u003C\u002Fspan\u003E\u003C\u002Fb\u003E hand-stimulus.\n"
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"Screenshot 2024-07-16 at 12.04.50 PM.png\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "2. Respond as quickly and accurately as possible."
        },
        {
          "required": true,
          "type": "text",
          "content": "3. Click 'continue' when you are ready to proceed. "
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "Screenshot 2024-07-16 at 12.04.50 PM.png": "embedded\u002F49e340eb188c832f74dbf98e612eb35be436052c257d6bed97bd55e36ac9803c.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.backgroundColor = "white";

}
      },
      "title": "Experimental phase 1"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback90M"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        },
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback90M"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        },
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback90M"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        },
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback90M"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        }
      ],
      "sample": {
        "mode": "sequential"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.backgroundColor = "black";
}
      },
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "keypress(k)": "right",
          "keypress(a)": "left"
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Trail",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 524.73,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#000000",
                "text": "Press the space key to begin the trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen",
            "skip": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": "#000000",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": "${this.parameters.R}",
                "top": "${this.parameters.D}",
                "angle": "${this.parameters.A}",
                "width": "${this.parameters.H}",
                "height": "${this.parameters.V}",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${this.files[this.parameters.Photo]}"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "LeftBack0_13_11zon.jpeg": "embedded\u002Fc01ae650201d30c61ef5917073b3db1bfb7e90843b024b9c44e84bd912b3a7de.jpeg",
              "LeftBack90L_8_11zon.jpeg": "embedded\u002Fde4c0ac0b7e0ba689907a469e98d12c131bc88a8e163740d45320a3a028552bf.jpeg",
              "LeftBack90M_7_11zon.jpeg": "embedded\u002F614470bfa47db0a003ba271a57b45ce14a5dde9da0ef44f31ecfb93238b29a13.jpeg",
              "LeftBack180_9_11zon.jpeg": "embedded\u002Fb2c4eb982a0bfe139af1aa23d4f9e237f8b7649e96e705ef29ee406bb830e8fc.jpeg",
              "Leftpalm0_14_11zon.jpeg": "embedded\u002Fc24fc2f85a1ea774aab3b46952f5a76a7b2607a996e6e6c526ca6eaa5439cddb.jpeg",
              "Leftpalm90L_5_11zon.jpeg": "embedded\u002F48b75f6749dca5ae3b6d2b355e3334a5b950843cd6dc1beda7544b13c5cb2fd8.jpeg",
              "Leftpalm90M_6_11zon.jpeg": "embedded\u002F79a71f3ee45aeb184b3bc523ac45a0b3beaa51f2b90f13c6bbe0d91ed3c9ff82.jpeg",
              "Leftpalm180_4_11zon.jpeg": "embedded\u002F2fc87caa787fafcec47d35c570349cf05ab9069fbc8a20fc8697abee00f8bac3.jpeg",
              "Rightback0_15_11zon.jpeg": "embedded\u002F2ee2a7712b81be820610bbe64bf8d0889d814157d058353868984bfec35b0a4c.jpeg",
              "Rightback90L_11_11zon.jpeg": "embedded\u002F0854f5d521b7e139f038136989ae30f25d62e54aa57400f890b988373da11d12.jpeg",
              "Rightback90M_10_11zon.jpeg": "embedded\u002Ff92b5c8724bb6648a65647898b9cd40f65af117f0474ce8fa7cc586df9a7cb4d.jpeg",
              "Rightback180_12_11zon.jpeg": "embedded\u002Faddfc8397ae6891c1a36c7de3e992174e04f7b58366aec0eca6b6e63948880c1.jpeg",
              "RightPalm0_16_11zon.jpeg": "embedded\u002F3d54f383030bd785aae08a6eca81109ec812e2f8a8253e8b91648a0840307c24.jpeg",
              "RightPalm90L_2_11zon.jpeg": "embedded\u002Fa098dd626d29c44e9b87458183f5044392998e00ff5876f87ebf717ecf2c912d.jpeg",
              "RightPalm90M_3_11zon.jpeg": "embedded\u002Fb9e6ba2ba0d302fba0e941dcfe21ff3e2405dce42781cb41191be5eb26cd9c71.jpeg",
              "RightPalm180_1_11zon.jpeg": "embedded\u002F86f28af0f33d4abce861d305ec47db6eae379040884da50bd32cf9211b5c78d5.jpeg",
              "LineRightPalm90L.png": "embedded\u002Fdc7522ec261847e06702dca3a70bf0a679ff6a47ba4efbafe0cc1bb74aef9571.png",
              "LineRightPalm180.png": "embedded\u002F48e833d5b2f8dd033201ce27de499a70ca72091bb409c4860d6685f11ee0c23f.png",
              "LineRightPalm90M.png": "embedded\u002F6356bbf2d7fea17519b6f3ee0ef2edc4bddbe49874ba3738329c865de0bdd711.png",
              "LineRightback90L.png": "embedded\u002F5f4fb123a70d87e6559787f8863eb974026ac95f9f2d0772ed1a0129f73b4d65.png",
              "LineRightback180.png": "embedded\u002F67850fc7ba947ed01659d03fc91abff7cd0be62af23882f9b0c5c515ff9549db.png",
              "LineRightback90M.png": "embedded\u002F5932055cbca408ea3ab1f29721c6fa5afe5f12efc25e83f44bcc0f023fe8b6ef.png",
              "LineLeftPalm180.png": "embedded\u002F6c5449ed018f4db7fea30e1e773ff268d4edaec6dfd31cce36f1b55bb405fccf.png",
              "LineLeftPalm90L.png": "embedded\u002Fb10fd6539ccf838191fbae39f800d043ca7d8b5c71720904051610cdd6297235.png",
              "LineLeftPalm90M.png": "embedded\u002Fcfed6a9c294d59b7d29c61135e83b5c9cc88c8a04ed705470c8abbb80b958ab3.png",
              "LineLeftBack90M.png": "embedded\u002F9fe6196c4cb27e2516d3e391406ed04383b7eb5ae646e05bb30cad32bdb459dc.png",
              "LineLeftBack90L.png": "embedded\u002F1e82a17a7776b4f9bab787d78ed372f7c4fdac2f9b0949b32b3ee6fd8a0b3f11.png",
              "LineLeftBack180.png": "embedded\u002Fecff3f64162fef0c3a5f1f6591b5da616b556a361b9217d385d61a955ca685e4.png",
              "LineRightback0.png": "embedded\u002F7e65be29cfd21158f5fc3f927e52ed8cbdd255c31047a68a93016e27a50f4e99.png",
              "LineLeftBack0.png": "embedded\u002F94fef8be121cf1008ab8d1d525f1cb876ad5182cfee4a894a5bb4a8d3636006a.png",
              "LineRightPalm0.png": "embedded\u002F38da56700193e5e6908a3be0bce9d30afca7fa4a987dc700e68fe0af610aa82e.png",
              "LineLeftPalm0.png": "embedded\u002F5a141b870973bb6247061a171008cc35c3c235ab999cacaf93debf9ef4228dcf.png"
            },
            "responses": {
              "keypress(k)": "Right",
              "keypress(a)": "Left"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = ["parameters.H","parameters.V"]
this.options.viewportScale = 1




}
            },
            "title": "Stimulus Presentation "
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Block 1 complete",
          "content": "Please inform the experimenter that you have completed the first experimental block."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.backgroundColor = "white";
}
      },
      "title": "Block 1 complete"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Instructions:",
          "content": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "We will now continue with the \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eexperimental phase.\u003C\u002Fspan\u003E\u003C\u002Fb\u003E In this phase, you will be presented with hand images in different orientations. Please refrain from physically moving your hands, and instead use your mental abilities to rotate your hands. ",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "title": "Your task is to :",
          "content": "1. Please step on the \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003E'left'\u003C\u002Fspan\u003E\u003C\u002Fb\u003E foot pedal for a \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eleft\u003C\u002Fspan\u003E\u003C\u002Fb\u003E hand-stimulus and the \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003E'right'\u003C\u002Fspan\u003E\u003C\u002Fb\u003E foot pedal for a \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eright\u003C\u002Fspan\u003E\u003C\u002Fb\u003E hand-stimulus.\n"
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"Screenshot 2024-07-16 at 12.04.50 PM.png\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "2. Respond as quickly and accurately as possible."
        },
        {
          "required": true,
          "type": "text",
          "content": "3. Click 'continue' when you are ready to proceed. "
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "Screenshot 2024-07-16 at 12.04.50 PM.png": "embedded\u002F49e340eb188c832f74dbf98e612eb35be436052c257d6bed97bd55e36ac9803c.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.backgroundColor = "white";

}
      },
      "title": "Experimental phase 2"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback90M"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        },
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback90M"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        },
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback90M"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        },
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback90M"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        }
      ],
      "sample": {
        "mode": "sequential"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.backgroundColor = "black";
}
      },
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "keypress(k)": "right",
          "keypress(a)": "left"
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Trail",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 524.73,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#000000",
                "text": "Press the space key to begin the trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen",
            "skip": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": "#000000",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": "${this.parameters.R}",
                "top": "${this.parameters.D}",
                "angle": "${this.parameters.A}",
                "width": "${this.parameters.H}",
                "height": "${this.parameters.V}",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${this.files[this.parameters.Photo]}"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "LeftBack0_13_11zon.jpeg": "embedded\u002Fc01ae650201d30c61ef5917073b3db1bfb7e90843b024b9c44e84bd912b3a7de.jpeg",
              "LeftBack90L_8_11zon.jpeg": "embedded\u002Fde4c0ac0b7e0ba689907a469e98d12c131bc88a8e163740d45320a3a028552bf.jpeg",
              "LeftBack90M_7_11zon.jpeg": "embedded\u002F614470bfa47db0a003ba271a57b45ce14a5dde9da0ef44f31ecfb93238b29a13.jpeg",
              "LeftBack180_9_11zon.jpeg": "embedded\u002Fb2c4eb982a0bfe139af1aa23d4f9e237f8b7649e96e705ef29ee406bb830e8fc.jpeg",
              "Leftpalm0_14_11zon.jpeg": "embedded\u002Fc24fc2f85a1ea774aab3b46952f5a76a7b2607a996e6e6c526ca6eaa5439cddb.jpeg",
              "Leftpalm90L_5_11zon.jpeg": "embedded\u002F48b75f6749dca5ae3b6d2b355e3334a5b950843cd6dc1beda7544b13c5cb2fd8.jpeg",
              "Leftpalm90M_6_11zon.jpeg": "embedded\u002F79a71f3ee45aeb184b3bc523ac45a0b3beaa51f2b90f13c6bbe0d91ed3c9ff82.jpeg",
              "Leftpalm180_4_11zon.jpeg": "embedded\u002F2fc87caa787fafcec47d35c570349cf05ab9069fbc8a20fc8697abee00f8bac3.jpeg",
              "Rightback0_15_11zon.jpeg": "embedded\u002F2ee2a7712b81be820610bbe64bf8d0889d814157d058353868984bfec35b0a4c.jpeg",
              "Rightback90L_11_11zon.jpeg": "embedded\u002F0854f5d521b7e139f038136989ae30f25d62e54aa57400f890b988373da11d12.jpeg",
              "Rightback90M_10_11zon.jpeg": "embedded\u002Ff92b5c8724bb6648a65647898b9cd40f65af117f0474ce8fa7cc586df9a7cb4d.jpeg",
              "Rightback180_12_11zon.jpeg": "embedded\u002Faddfc8397ae6891c1a36c7de3e992174e04f7b58366aec0eca6b6e63948880c1.jpeg",
              "RightPalm0_16_11zon.jpeg": "embedded\u002F3d54f383030bd785aae08a6eca81109ec812e2f8a8253e8b91648a0840307c24.jpeg",
              "RightPalm90L_2_11zon.jpeg": "embedded\u002Fa098dd626d29c44e9b87458183f5044392998e00ff5876f87ebf717ecf2c912d.jpeg",
              "RightPalm90M_3_11zon.jpeg": "embedded\u002Fb9e6ba2ba0d302fba0e941dcfe21ff3e2405dce42781cb41191be5eb26cd9c71.jpeg",
              "RightPalm180_1_11zon.jpeg": "embedded\u002F86f28af0f33d4abce861d305ec47db6eae379040884da50bd32cf9211b5c78d5.jpeg",
              "LineRightPalm90L.png": "embedded\u002Fdc7522ec261847e06702dca3a70bf0a679ff6a47ba4efbafe0cc1bb74aef9571.png",
              "LineRightPalm180.png": "embedded\u002F48e833d5b2f8dd033201ce27de499a70ca72091bb409c4860d6685f11ee0c23f.png",
              "LineRightPalm90M.png": "embedded\u002F6356bbf2d7fea17519b6f3ee0ef2edc4bddbe49874ba3738329c865de0bdd711.png",
              "LineRightback90L.png": "embedded\u002F5f4fb123a70d87e6559787f8863eb974026ac95f9f2d0772ed1a0129f73b4d65.png",
              "LineRightback180.png": "embedded\u002F67850fc7ba947ed01659d03fc91abff7cd0be62af23882f9b0c5c515ff9549db.png",
              "LineRightback90M.png": "embedded\u002F5932055cbca408ea3ab1f29721c6fa5afe5f12efc25e83f44bcc0f023fe8b6ef.png",
              "LineLeftPalm180.png": "embedded\u002F6c5449ed018f4db7fea30e1e773ff268d4edaec6dfd31cce36f1b55bb405fccf.png",
              "LineLeftPalm90L.png": "embedded\u002Fb10fd6539ccf838191fbae39f800d043ca7d8b5c71720904051610cdd6297235.png",
              "LineLeftPalm90M.png": "embedded\u002Fcfed6a9c294d59b7d29c61135e83b5c9cc88c8a04ed705470c8abbb80b958ab3.png",
              "LineLeftBack90M.png": "embedded\u002F9fe6196c4cb27e2516d3e391406ed04383b7eb5ae646e05bb30cad32bdb459dc.png",
              "LineLeftBack90L.png": "embedded\u002F1e82a17a7776b4f9bab787d78ed372f7c4fdac2f9b0949b32b3ee6fd8a0b3f11.png",
              "LineLeftBack180.png": "embedded\u002Fecff3f64162fef0c3a5f1f6591b5da616b556a361b9217d385d61a955ca685e4.png",
              "LineRightback0.png": "embedded\u002F7e65be29cfd21158f5fc3f927e52ed8cbdd255c31047a68a93016e27a50f4e99.png",
              "LineLeftBack0.png": "embedded\u002F94fef8be121cf1008ab8d1d525f1cb876ad5182cfee4a894a5bb4a8d3636006a.png",
              "LineRightPalm0.png": "embedded\u002F38da56700193e5e6908a3be0bce9d30afca7fa4a987dc700e68fe0af610aa82e.png",
              "LineLeftPalm0.png": "embedded\u002F5a141b870973bb6247061a171008cc35c3c235ab999cacaf93debf9ef4228dcf.png"
            },
            "responses": {
              "keypress(k)": "Right",
              "keypress(a)": "Left"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = ["parameters.H","parameters.V"]
this.options.viewportScale = 1




}
            },
            "title": "Stimulus Presentation "
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Block 2 complete",
          "content": "Please inform the experimenter that you have completed the second experimental block."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.backgroundColor = "white";
}
      },
      "title": "Block 2 complete"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Instructions:",
          "content": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "We will now continue with the \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eexperimental phase.\u003C\u002Fspan\u003E\u003C\u002Fb\u003E In this phase, you will be presented with hand images in different orientations. Please refrain from physically moving your hands, and instead use your mental abilities to rotate your hands. ",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "title": "Your task is to :",
          "content": "1. Please step on the \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003E'left'\u003C\u002Fspan\u003E\u003C\u002Fb\u003E foot pedal for a \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eleft\u003C\u002Fspan\u003E\u003C\u002Fb\u003E hand-stimulus and the \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003E'right'\u003C\u002Fspan\u003E\u003C\u002Fb\u003E foot pedal for a \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eright\u003C\u002Fspan\u003E\u003C\u002Fb\u003E hand-stimulus.\n"
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"Screenshot 2024-07-16 at 12.04.50 PM.png\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "2. Respond as quickly and accurately as possible."
        },
        {
          "required": true,
          "type": "text",
          "content": "3. Click 'continue' when you are ready to proceed. "
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "Screenshot 2024-07-16 at 12.04.50 PM.png": "embedded\u002F49e340eb188c832f74dbf98e612eb35be436052c257d6bed97bd55e36ac9803c.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.backgroundColor = "white";

}
      },
      "title": "Experimental phase 3"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback90M"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        },
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback90M"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        },
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback90M"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        },
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback90M"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        }
      ],
      "sample": {
        "mode": "sequential"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.backgroundColor = "black";
}
      },
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "keypress(k)": "right",
          "keypress(a)": "left"
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Trail",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 524.73,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#000000",
                "text": "Press the space key to begin the trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen",
            "skip": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": "#000000",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": "${this.parameters.R}",
                "top": "${this.parameters.D}",
                "angle": "${this.parameters.A}",
                "width": "${this.parameters.H}",
                "height": "${this.parameters.V}",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${this.files[this.parameters.Photo]}"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "LeftBack0_13_11zon.jpeg": "embedded\u002Fc01ae650201d30c61ef5917073b3db1bfb7e90843b024b9c44e84bd912b3a7de.jpeg",
              "LeftBack90L_8_11zon.jpeg": "embedded\u002Fde4c0ac0b7e0ba689907a469e98d12c131bc88a8e163740d45320a3a028552bf.jpeg",
              "LeftBack90M_7_11zon.jpeg": "embedded\u002F614470bfa47db0a003ba271a57b45ce14a5dde9da0ef44f31ecfb93238b29a13.jpeg",
              "LeftBack180_9_11zon.jpeg": "embedded\u002Fb2c4eb982a0bfe139af1aa23d4f9e237f8b7649e96e705ef29ee406bb830e8fc.jpeg",
              "Leftpalm0_14_11zon.jpeg": "embedded\u002Fc24fc2f85a1ea774aab3b46952f5a76a7b2607a996e6e6c526ca6eaa5439cddb.jpeg",
              "Leftpalm90L_5_11zon.jpeg": "embedded\u002F48b75f6749dca5ae3b6d2b355e3334a5b950843cd6dc1beda7544b13c5cb2fd8.jpeg",
              "Leftpalm90M_6_11zon.jpeg": "embedded\u002F79a71f3ee45aeb184b3bc523ac45a0b3beaa51f2b90f13c6bbe0d91ed3c9ff82.jpeg",
              "Leftpalm180_4_11zon.jpeg": "embedded\u002F2fc87caa787fafcec47d35c570349cf05ab9069fbc8a20fc8697abee00f8bac3.jpeg",
              "Rightback0_15_11zon.jpeg": "embedded\u002F2ee2a7712b81be820610bbe64bf8d0889d814157d058353868984bfec35b0a4c.jpeg",
              "Rightback90L_11_11zon.jpeg": "embedded\u002F0854f5d521b7e139f038136989ae30f25d62e54aa57400f890b988373da11d12.jpeg",
              "Rightback90M_10_11zon.jpeg": "embedded\u002Ff92b5c8724bb6648a65647898b9cd40f65af117f0474ce8fa7cc586df9a7cb4d.jpeg",
              "Rightback180_12_11zon.jpeg": "embedded\u002Faddfc8397ae6891c1a36c7de3e992174e04f7b58366aec0eca6b6e63948880c1.jpeg",
              "RightPalm0_16_11zon.jpeg": "embedded\u002F3d54f383030bd785aae08a6eca81109ec812e2f8a8253e8b91648a0840307c24.jpeg",
              "RightPalm90L_2_11zon.jpeg": "embedded\u002Fa098dd626d29c44e9b87458183f5044392998e00ff5876f87ebf717ecf2c912d.jpeg",
              "RightPalm90M_3_11zon.jpeg": "embedded\u002Fb9e6ba2ba0d302fba0e941dcfe21ff3e2405dce42781cb41191be5eb26cd9c71.jpeg",
              "RightPalm180_1_11zon.jpeg": "embedded\u002F86f28af0f33d4abce861d305ec47db6eae379040884da50bd32cf9211b5c78d5.jpeg",
              "LineRightPalm90L.png": "embedded\u002Fdc7522ec261847e06702dca3a70bf0a679ff6a47ba4efbafe0cc1bb74aef9571.png",
              "LineRightPalm180.png": "embedded\u002F48e833d5b2f8dd033201ce27de499a70ca72091bb409c4860d6685f11ee0c23f.png",
              "LineRightPalm90M.png": "embedded\u002F6356bbf2d7fea17519b6f3ee0ef2edc4bddbe49874ba3738329c865de0bdd711.png",
              "LineRightback90L.png": "embedded\u002F5f4fb123a70d87e6559787f8863eb974026ac95f9f2d0772ed1a0129f73b4d65.png",
              "LineRightback180.png": "embedded\u002F67850fc7ba947ed01659d03fc91abff7cd0be62af23882f9b0c5c515ff9549db.png",
              "LineRightback90M.png": "embedded\u002F5932055cbca408ea3ab1f29721c6fa5afe5f12efc25e83f44bcc0f023fe8b6ef.png",
              "LineLeftPalm180.png": "embedded\u002F6c5449ed018f4db7fea30e1e773ff268d4edaec6dfd31cce36f1b55bb405fccf.png",
              "LineLeftPalm90L.png": "embedded\u002Fb10fd6539ccf838191fbae39f800d043ca7d8b5c71720904051610cdd6297235.png",
              "LineLeftPalm90M.png": "embedded\u002Fcfed6a9c294d59b7d29c61135e83b5c9cc88c8a04ed705470c8abbb80b958ab3.png",
              "LineLeftBack90M.png": "embedded\u002F9fe6196c4cb27e2516d3e391406ed04383b7eb5ae646e05bb30cad32bdb459dc.png",
              "LineLeftBack90L.png": "embedded\u002F1e82a17a7776b4f9bab787d78ed372f7c4fdac2f9b0949b32b3ee6fd8a0b3f11.png",
              "LineLeftBack180.png": "embedded\u002Fecff3f64162fef0c3a5f1f6591b5da616b556a361b9217d385d61a955ca685e4.png",
              "LineRightback0.png": "embedded\u002F7e65be29cfd21158f5fc3f927e52ed8cbdd255c31047a68a93016e27a50f4e99.png",
              "LineLeftBack0.png": "embedded\u002F94fef8be121cf1008ab8d1d525f1cb876ad5182cfee4a894a5bb4a8d3636006a.png",
              "LineRightPalm0.png": "embedded\u002F38da56700193e5e6908a3be0bce9d30afca7fa4a987dc700e68fe0af610aa82e.png",
              "LineLeftPalm0.png": "embedded\u002F5a141b870973bb6247061a171008cc35c3c235ab999cacaf93debf9ef4228dcf.png"
            },
            "responses": {
              "keypress(k)": "Right",
              "keypress(a)": "Left"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = ["parameters.H","parameters.V"]
this.options.viewportScale = 1




}
            },
            "title": "Stimulus Presentation "
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Block 3 complete",
          "content": "Please inform the experimenter that you have completed the third experimental block."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.backgroundColor = "white";
}
      },
      "title": "Block 3 complete"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Instructions:",
          "content": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "We will now continue with the \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eexperimental phase.\u003C\u002Fspan\u003E\u003C\u002Fb\u003E In this phase, you will be presented with hand images in different orientations. Please refrain from physically moving your hands, and instead use your mental abilities to rotate your hands. ",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "title": "Your task is to :",
          "content": "1. Please step on the \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003E'left'\u003C\u002Fspan\u003E\u003C\u002Fb\u003E foot pedal for a \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eleft\u003C\u002Fspan\u003E\u003C\u002Fb\u003E hand-stimulus and the \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003E'right'\u003C\u002Fspan\u003E\u003C\u002Fb\u003E foot pedal for a \u003Cb\u003E\u003Cspan style=\"color: red;\"\u003Eright\u003C\u002Fspan\u003E\u003C\u002Fb\u003E hand-stimulus.\n"
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"Screenshot 2024-07-16 at 12.04.50 PM.png\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "2. Respond as quickly and accurately as possible."
        },
        {
          "required": true,
          "type": "text",
          "content": "3. Click 'continue' when you are ready to proceed. "
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "Screenshot 2024-07-16 at 12.04.50 PM.png": "embedded\u002F49e340eb188c832f74dbf98e612eb35be436052c257d6bed97bd55e36ac9803c.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.backgroundColor = "white";

}
      },
      "title": "Experimental phase 4"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback90M"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        },
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback90M"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        },
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback90M"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        },
        {
          "Photo": "LeftBack0_13_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack0"
        },
        {
          "Photo": "LeftBack180_9_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "50",
          "A": "",
          "ImageName": "LeftBack180"
        },
        {
          "Photo": "Leftpalm0_14_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm0"
        },
        {
          "Photo": "Leftpalm180_4_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "0",
          "A": "",
          "ImageName": "Leftpalm180"
        },
        {
          "Photo": "Rightback0_15_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback0"
        },
        {
          "Photo": "Rightback180_12_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "150",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback180"
        },
        {
          "Photo": "RightPalm0_16_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "-100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm0"
        },
        {
          "Photo": "RightPalm180_1_11zon.jpeg",
          "H": "720",
          "V": "960",
          "D": "100",
          "R": "0",
          "A": "",
          "ImageName": "RightPalm180"
        },
        {
          "Photo": "LeftBack90L_8_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "50",
          "R": "-100",
          "A": "",
          "ImageName": "LeftBack90L"
        },
        {
          "Photo": "LeftBack90M_7_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-50",
          "R": "100",
          "A": "",
          "ImageName": "LeftBack90M"
        },
        {
          "Photo": "Leftpalm90L_5_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "Leftpalm90L"
        },
        {
          "Photo": "Leftpalm90M_6_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "Leftpalm90M"
        },
        {
          "Photo": "Rightback90L_11_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "100",
          "R": "100",
          "A": "",
          "ImageName": "Rightback90L"
        },
        {
          "Photo": "Rightback90M_10_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "-100",
          "R": "-100",
          "A": "",
          "ImageName": "Rightback90M"
        },
        {
          "Photo": "RightPalm90M_3_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "-100",
          "A": "",
          "ImageName": "RightPalm90M"
        },
        {
          "Photo": "RightPalm90L_2_11zon.jpeg",
          "H": "960",
          "V": "720",
          "D": "0",
          "R": "100",
          "A": "",
          "ImageName": "RightPalm90L"
        }
      ],
      "sample": {
        "mode": "sequential"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.backgroundColor = "black";
}
      },
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "keypress(k)": "right",
          "keypress(a)": "left"
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Trail",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 524.73,
                "height": 36.16,
                "stroke": "#ffffff",
                "strokeWidth": 1,
                "fill": "#000000",
                "text": "Press the space key to begin the trial",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black screen.png": "embedded\u002F4f60031584d18659923576c9a1f7b446cae3556a7eac2d5e040be236a692cdfb.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Next trial screen",
            "skip": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 35.04,
                "height": 67.8,
                "stroke": "#000000",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross",
            "timeout": "1500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": "${this.parameters.R}",
                "top": "${this.parameters.D}",
                "angle": "${this.parameters.A}",
                "width": "${this.parameters.H}",
                "height": "${this.parameters.V}",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${this.files[this.parameters.Photo]}"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "LeftBack0_13_11zon.jpeg": "embedded\u002Fc01ae650201d30c61ef5917073b3db1bfb7e90843b024b9c44e84bd912b3a7de.jpeg",
              "LeftBack90L_8_11zon.jpeg": "embedded\u002Fde4c0ac0b7e0ba689907a469e98d12c131bc88a8e163740d45320a3a028552bf.jpeg",
              "LeftBack90M_7_11zon.jpeg": "embedded\u002F614470bfa47db0a003ba271a57b45ce14a5dde9da0ef44f31ecfb93238b29a13.jpeg",
              "LeftBack180_9_11zon.jpeg": "embedded\u002Fb2c4eb982a0bfe139af1aa23d4f9e237f8b7649e96e705ef29ee406bb830e8fc.jpeg",
              "Leftpalm0_14_11zon.jpeg": "embedded\u002Fc24fc2f85a1ea774aab3b46952f5a76a7b2607a996e6e6c526ca6eaa5439cddb.jpeg",
              "Leftpalm90L_5_11zon.jpeg": "embedded\u002F48b75f6749dca5ae3b6d2b355e3334a5b950843cd6dc1beda7544b13c5cb2fd8.jpeg",
              "Leftpalm90M_6_11zon.jpeg": "embedded\u002F79a71f3ee45aeb184b3bc523ac45a0b3beaa51f2b90f13c6bbe0d91ed3c9ff82.jpeg",
              "Leftpalm180_4_11zon.jpeg": "embedded\u002F2fc87caa787fafcec47d35c570349cf05ab9069fbc8a20fc8697abee00f8bac3.jpeg",
              "Rightback0_15_11zon.jpeg": "embedded\u002F2ee2a7712b81be820610bbe64bf8d0889d814157d058353868984bfec35b0a4c.jpeg",
              "Rightback90L_11_11zon.jpeg": "embedded\u002F0854f5d521b7e139f038136989ae30f25d62e54aa57400f890b988373da11d12.jpeg",
              "Rightback90M_10_11zon.jpeg": "embedded\u002Ff92b5c8724bb6648a65647898b9cd40f65af117f0474ce8fa7cc586df9a7cb4d.jpeg",
              "Rightback180_12_11zon.jpeg": "embedded\u002Faddfc8397ae6891c1a36c7de3e992174e04f7b58366aec0eca6b6e63948880c1.jpeg",
              "RightPalm0_16_11zon.jpeg": "embedded\u002F3d54f383030bd785aae08a6eca81109ec812e2f8a8253e8b91648a0840307c24.jpeg",
              "RightPalm90L_2_11zon.jpeg": "embedded\u002Fa098dd626d29c44e9b87458183f5044392998e00ff5876f87ebf717ecf2c912d.jpeg",
              "RightPalm90M_3_11zon.jpeg": "embedded\u002Fb9e6ba2ba0d302fba0e941dcfe21ff3e2405dce42781cb41191be5eb26cd9c71.jpeg",
              "RightPalm180_1_11zon.jpeg": "embedded\u002F86f28af0f33d4abce861d305ec47db6eae379040884da50bd32cf9211b5c78d5.jpeg",
              "LineRightPalm90L.png": "embedded\u002Fdc7522ec261847e06702dca3a70bf0a679ff6a47ba4efbafe0cc1bb74aef9571.png",
              "LineRightPalm180.png": "embedded\u002F48e833d5b2f8dd033201ce27de499a70ca72091bb409c4860d6685f11ee0c23f.png",
              "LineRightPalm90M.png": "embedded\u002F6356bbf2d7fea17519b6f3ee0ef2edc4bddbe49874ba3738329c865de0bdd711.png",
              "LineRightback90L.png": "embedded\u002F5f4fb123a70d87e6559787f8863eb974026ac95f9f2d0772ed1a0129f73b4d65.png",
              "LineRightback180.png": "embedded\u002F67850fc7ba947ed01659d03fc91abff7cd0be62af23882f9b0c5c515ff9549db.png",
              "LineRightback90M.png": "embedded\u002F5932055cbca408ea3ab1f29721c6fa5afe5f12efc25e83f44bcc0f023fe8b6ef.png",
              "LineLeftPalm180.png": "embedded\u002F6c5449ed018f4db7fea30e1e773ff268d4edaec6dfd31cce36f1b55bb405fccf.png",
              "LineLeftPalm90L.png": "embedded\u002Fb10fd6539ccf838191fbae39f800d043ca7d8b5c71720904051610cdd6297235.png",
              "LineLeftPalm90M.png": "embedded\u002Fcfed6a9c294d59b7d29c61135e83b5c9cc88c8a04ed705470c8abbb80b958ab3.png",
              "LineLeftBack90M.png": "embedded\u002F9fe6196c4cb27e2516d3e391406ed04383b7eb5ae646e05bb30cad32bdb459dc.png",
              "LineLeftBack90L.png": "embedded\u002F1e82a17a7776b4f9bab787d78ed372f7c4fdac2f9b0949b32b3ee6fd8a0b3f11.png",
              "LineLeftBack180.png": "embedded\u002Fecff3f64162fef0c3a5f1f6591b5da616b556a361b9217d385d61a955ca685e4.png",
              "LineRightback0.png": "embedded\u002F7e65be29cfd21158f5fc3f927e52ed8cbdd255c31047a68a93016e27a50f4e99.png",
              "LineLeftBack0.png": "embedded\u002F94fef8be121cf1008ab8d1d525f1cb876ad5182cfee4a894a5bb4a8d3636006a.png",
              "LineRightPalm0.png": "embedded\u002F38da56700193e5e6908a3be0bce9d30afca7fa4a987dc700e68fe0af610aa82e.png",
              "LineLeftPalm0.png": "embedded\u002F5a141b870973bb6247061a171008cc35c3c235ab999cacaf93debf9ef4228dcf.png"
            },
            "responses": {
              "keypress(k)": "Right",
              "keypress(a)": "Left"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = ["parameters.H","parameters.V"]
this.options.viewportScale = 1




}
            },
            "title": "Stimulus Presentation "
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cbutton id=\"Continue\"\u003EContinue\u003C\u002Fbutton\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* Download data to firebase */
this.options.events['click button#Continue'] = function sendToFirebase() {
    const rng = new lab.util.Random();
  
  firebase.database().ref(rng.uuid4()).set({
    data: this.options.datastore.exportJson()
    });

/* Continue to next screen */
this.end()
}
}
      },
      "title": "Page"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "html",
          "content": "\n\u003Cmain class=\"content-vertical-center content-horizontal-center\" style=\"font-size: 3rem;\"\u003E\n\n\n  \u003Cp\u003E\n    Thank you for participating!\n  \u003C\u002Fp\u003E\n\n\n\u003C\u002Fmain\u003E\n\n",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Debriefing Form →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.backgroundColor = "white";
}
      },
      "title": "Thank you"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "html",
          "content": "",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "title": "Debriefing Form",
          "content": ""
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "text",
          "content": "Thank you for participating in this study. The purpose of this study was to measure the ability to mentally stimulate movements without actually executing them with normal or disrupted sensory feedback. To test action stimulation abilities, we used the hand laterality task. In this task, participants are shown left- and right-hand mirror images from two different viewpoints (palm and back) and in different orientations. They have to identify whether the image presented is of the left hand or the right hand. A major difference between motor performance and motor imagery is the presence of online visual and proprioceptive feedback. This study sought to examine if online feedback is needed to effectively perform motor imagery tasks. We expect to see increased reaction times and lower accuracy when participants are shown difficult hand orientations in conditions of disrupted visual and\u002For proprioceptive feedback. We are also interested in examining whether participants continue to employ motor imagery strategies to complete the task in conditions of limited sensory feedback or if they switch to mental rotation based strategies. Thank you again for participating and have a great day."
        },
        {
          "required": true,
          "type": "text",
          "content": "If you have any questions about this study, please feel free to contact us: "
        },
        {
          "required": true,
          "type": "text"
        },
        {
          "required": true,
          "type": "html",
          "content": "Stephen Wood (MA Student, Psychology, University of Manitoba, \u003Ca href=\"mailto:woods1@myumanitoba.ca\"\u003Ewoods1@myumanitoba.ca\u003C\u002Fa\u003E\u003C\u002Fli\u003E)",
          "name": ""
        },
        {
          "required": true,
          "type": "text"
        },
        {
          "required": true,
          "type": "html",
          "content": "Dr. Jonathan Marotta (Professor, Psychology, University of Manitoba, \u003Ca href=\"mailto:sarana3@myumanitoba.ca\"\u003Ejonathan.marotta@umanitoba.ca\u003C\u002Fa\u003E\u003C\u002Fli\u003E)",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "title": " Please exit by pressing 'esc' and then close your browser window. "
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.style.backgroundColor = "white";

}
      },
      "title": "Debriefing form ",
      "skip": "${this.state['Participant_Consent'] == '1'}"
    }
  ]
})

// Let's go!
study.run()