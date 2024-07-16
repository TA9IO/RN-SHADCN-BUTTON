# React Native shadCN Button

A customizable button component for React Native, inspired by the Shadcn design.

# Notes
This is the first component of the Shadcn mobile version. More components will be added in the future.

## Installation

Currently, the installation is manual. Follow these steps:

1. Copy the `Button.tsx` file.
2. Paste it into your components folder.
3. Ensure you have the `Colors` constant defined in your project ( copy from constants/Colors.ts ).

```javascript
// Define this in a file like `Colors.js` or `Colors.ts`
export const Colors = {
  light: {
    background: 'hsl(0, 0%, 100%)',
    foreground: 'hsl(222.2, 84%, 4.9%)',
    card: 'hsl(0, 0%, 100%)',
    cardForeground: 'hsl(222.2, 84%, 4.9%)',
    popover: 'hsl(0, 0%, 100%)',
    popoverForeground: 'hsl(222.2, 84%, 4.9%)',
    primary: 'hsl(221.2, 83.2%, 53.3%)',
    primaryForeground: 'hsl(210, 40%, 98%)',
    secondary: 'hsl(210, 40%, 96.1%)',
    secondaryForeground: 'hsl(222.2, 47.4%, 11.2%)',
    muted: 'hsl(210, 40%, 96.1%)',
    mutedForeground: 'hsl(215.4, 16.3%, 46.9%)',
    accent: 'hsl(210, 40%, 96.1%)',
    accentForeground: 'hsl(222.2, 47.4%, 11.2%)',
    destructive: 'hsl(0, 84.2%, 60.2%)',
    destructiveForeground: 'hsl(210, 40%, 98%)',
    border: 'hsl(214.3, 31.8%, 91.4%)',
    input: 'hsl(214.3, 31.8%, 91.4%)',
    ring: 'hsl(221.2, 83.2%, 53.3%)',
    radius: '0.5rem',
  },
  dark: {
    background: 'hsl(222.2, 84%, 4.9%)',
    foreground: 'hsl(210, 40%, 98%)',
    card: 'hsl(222.2, 84%, 4.9%)',
    cardForeground: 'hsl(210, 40%, 98%)',
    popover: 'hsl(222.2, 84%, 4.9%)',
    popoverForeground: 'hsl(210, 40%, 98%)',
    primary: 'hsl(217.2, 91.2%, 59.8%)',
    primaryForeground: 'hsl(222.2, 47.4%, 11.2%)',
    secondary: 'hsl(217.2, 32.6%, 17.5%)',
    secondaryForeground: 'hsl(210, 40%, 98%)',
    muted: 'hsl(217.2, 32.6%, 17.5%)',
    mutedForeground: 'hsl(215, 20.2%, 65.1%)',
    accent: 'hsl(217.2, 32.6%, 17.5%)',
    accentForeground: 'hsl(210, 40%, 98%)',
    destructive: 'hsl(0, 62.8%, 30.6%)',
    destructiveForeground: 'hsl(210, 40%, 98%)',
    border: 'hsl(217.2, 32.6%, 17.5%)',
    input: 'hsl(217.2, 32.6%, 17.5%)',
    ring: 'hsl(224.3, 76.3%, 48%)',
  },
};

```
# Usage
Import the Button component and use it in your React Native project.
```javascript
import * as React from 'react';
import { Button } from "@/components/Button";

export default function App() {
  return (
    <Button variant="default" size="default">
      Default Button
    </Button>
  );
}
```

# Props
The Button component accepts the following props:

1. variant (optional): Defines the style of the button. Can be one of  ```'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' ```. Default is default.
2. size (optional): Defines the size of the button. Can be one of  ``` 'default' | 'sm' | 'lg' | 'icon' ```. Default is default.
3. children: The content to be displayed inside the button.

# Styling
The button styles are generated based on the current color scheme (light or dark). Ensure you have the Colors constant defined and imported in your project.

# Contributing
Feel free to contribute to this project by opening issues or submitting pull requests.

# License
This project is licensed under the MIT License.

