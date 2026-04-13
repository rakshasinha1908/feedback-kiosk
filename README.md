# Feedback Station - Survey Kiosk Application

A modern, production-ready React.js survey kiosk application built with Vite, Tailwind CSS, and Framer Motion. This application provides a smooth, touch-friendly interface for collecting customer feedback at retail locations.

## Live Demo

[https://feedback-kiosk-indol.vercel.app/]

## Features

- **Welcome Screen**: Branded entry point with clear CTA
- **Progressive Survey Flow**: One question at a time with smooth transitions
- **Multiple Question Types**:
  - Rating scales (5-point and 10-point Likert scales)
  - Open-ended text responses
- **Navigation Controls**:
  - Previous button (navigate back)
  - Skip button (move forward without answering)
  - Next button (proceed to next question)
- **Progress Tracking**:
  - Visual progress bar
  - Step indicator (e.g., "Step 2 of 5")
- **Submission Confirmation**: Modal confirmation before final submission
- **Thank You Screen**: Celebration screen with auto-reset
- **Data Persistence**: localStorage integration for answer preservation
- **Responsive Design**: Optimized for tablets and touch interfaces
- **Smooth Animations**: Framer Motion transitions throughout
- **Scalable Architecture**: Easy to add new questions or modify flow

## Project Structure

```
feedback-station/
├── src/
│   ├── components/
│   │   ├── WelcomeScreen.jsx        # Entry screen
│   │   ├── SurveyContainer.jsx      # Main survey orchestrator
│   │   ├── QuestionCard.jsx         # Question wrapper
│   │   ├── RatingInput.jsx          # Rating scale component
│   │   ├── TextInput.jsx            # Text input component
│   │   ├── ProgressBar.jsx          # Progress visualization
│   │   ├── NavigationButtons.jsx    # Navigation controls
│   │   ├── SubmitModal.jsx          # Confirmation modal
│   │   └── ThankYouScreen.jsx       # Success screen
│   ├── utils/
│   │   └── helpers.js               # Utility functions
│   ├── App.jsx                      # Main app component
│   ├── index.jsx                    # React entry point
│   └── index.css                    # Global styles
├── index.html                       # HTML entry point
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── postcss.config.js                # PostCSS configuration
├── package.json                     # Dependencies
└── README.md                        # This file
```

## Tech Stack

- React (Vite)
- Tailwind CSS
- Framer Motion
- JavaScript (ES6+)
- localStorage (for persistence)

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. **Clone or extract the project**
   ```bash
   cd feedback-station
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The application will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output files will be in the `dist/` directory. Ready for deployment to Vercel, Netlify, or any static host.

## UI Design

The application closely matches the provided prototype with:

- **Color Scheme**: Blue/Indigo gradient (Tailwind colors)
- **Typography**: Large, readable fonts optimized for kiosk viewing
- **Layout**: Center-focused, clean minimal design
- **Touch-Friendly**: Large clickable buttons and input areas
- **Responsive**: Adapts from tablets to large displays

## Data Management

### Answer Storage Format

Responses are stored in localStorage as:

```javascript
{
  sessionId: "session_1234567890_abc123",
  answers: {
    1: 8,                           // Rating answer
    2: 9,                           // Rating answer
    3: 4,                           // Rating answer
    4: "Great service!",            // Text answer
    5: "Loved the experience"       // Text answer
  },
  status: "COMPLETED",
  completedAt: "2024-01-15T14:30:00.000Z"
}
```

### localStorage Keys

- **`surveySession`**: Current active session data
- **`surveysArchive`**: Array of all completed surveys (for analytics)

### Accessing Survey Data

In browser console:

```javascript
// Current session
JSON.parse(localStorage.getItem('surveySession'))

// All surveys
JSON.parse(localStorage.getItem('surveysArchive'))

// Clear data
localStorage.clear()
```

## Question Configuration

Questions are defined in `App.jsx` as a scalable array:

```javascript
const QUESTIONS = [
  {
    id: 1,
    type: 'rating',
    scale: 10,
    text: 'How would you rate your experience today?',
    lowLabel: 'Not Great',
    highLabel: 'Exceptional',
  },
  {
    id: 2,
    type: 'text',
    text: 'What could we improve?',
    placeholder: 'Share your thoughts...',
  },
  // Add more questions as needed
];
```

### Adding New Questions

Simply add an object to the `QUESTIONS` array:

- **Rating questions**: Set `type: 'rating'` and `scale: 5 or 10`
- **Text questions**: Set `type: 'text'` with optional `placeholder`

The UI will automatically render new questions without code changes.

## Application Flow

```
Welcome Screen
    ↓
[Start Survey Button]
    ↓
Survey Container (Loop through questions)
    ├─ Display question
    ├─ Show rating/text input
    ├─ Show progress bar and step indicator
    ├─ Navigation: Previous | Skip | Next
    ↓
Last Question?
    ├─ No → Show next question
    ├─ Yes → Show Confirmation Modal
    ↓
[Submit] or [Go Back]
    ↓
Thank You Screen
    ↓
Auto-reset to Welcome (5 seconds) or Manual Reset
```

 
### Timing

- **Auto-reset delay** in `ThankYouScreen.jsx`:
  ```javascript
  const timer = setTimeout(onReset, 5000); // 5 seconds
  ```

- **Animation duration** in components using Framer Motion:
  ```javascript
  transition={{ duration: 0.3 }}
  ```


## Responsive Design

The application is optimized for:

- **Tablets**: iPad, Android tablets (8-12 inches)
- **Large Displays**: Kiosk screens (15-27 inches)
- **Touch Input**: Optimized for touch interactions
- **Desktop**: Also works on regular computers

Use Chrome DevTools to test responsive design.

 


## Privacy & Security

- All data stored locally (no backend required)
- No API calls or external dependencies
- localStorage data persists only in browser
- No tracking or analytics (unless added manually)

**Note**: For production use, consider:
- Encrypting sensitive data
- Implementing backend API for data collection
- Adding compliance measures (GDPR, CCPA, etc.)

## Troubleshooting

### Port already in use
```bash
# Use different port
vite --port 3000
```

### Module not found errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### localStorage not working
- Check browser privacy settings
- Ensure not in private/incognito mode
- Check browser console for errors

## Testing Data Persistence

1. Fill out survey completely
2. Refresh page (Cmd+R)
3. Go back through questions - answers should still be there
4. Open DevTools → Application → localStorage to verify


---

**Built with ❤️ for modern retail experiences**