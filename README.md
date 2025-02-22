# Currency Converter App

## Overview

The **Currency Converter** is a `React`-based web application that allows users to convert currencies from one type to another, using real-time exchange rates. The app utilizes `Tailwind CSS` for styling, `Vite` for fast development, and the `Frankfurter API` to fetch live exchange rates for various global currencies. It also includes a custom hook for a smooth sliding effect as elements appear in the viewport.

## Developed by

- `Santhosh Pandi` -- **Live Preview** https://github.com/santhoshpandi/currency-converter-react

## Screenshots

![image](/src/screenshots/pc.png)

![image](/src/screenshots/mobile.png)

## Features

- **Currency Conversion**: Convert between a wide range of currencies (e.g., INR to USD, EUR to GBP, etc.).
- **Live Data Fetching**: Utilizes the **Frankfurter API** to get the latest currency exchange rates.
- **Smooth Animations**: Implements a custom `useIntersectionObserver` hook to animate elements with a sliding effect when they enter the viewport.
- **Responsive Design**: Built with **Tailwind CSS** to ensure a seamless experience across devices.

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for responsive and modern designs.
- **Frankfurter API**: API for fetching real-time currency exchange rates.
- **Intersection Observer**: A native browser API used for detecting when an element is in the viewport, which is leveraged in the custom hook `useIntersectionObserver` for animation purposes.
- **Vite**: Next-generation build tool for fast and efficient React app development.

## Installation

Follow these steps to run the app locally on your machine:

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/santhoshpandi/currency-converter-react.git
   ```

2. Navigate to the project directory:
   ```bash
   cd currency-converter-react
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the Development server:
   ```bash
   npm run dev
   ```

The dashboard will be available at http://localhost:5173

### Usage

- Select the source currency and target currency from the dropdown menus.
- Enter the amount you want to convert.
- The app will automatically fetch the exchange rates and display the converted amount.
- Enjoy smooth sliding animations when elements appear in the viewport!


### API Used

- ***Frankfurter API*** (https://api.frankfurter.dev): Provides historical and real-time exchange rates for various currencies. We use their `/v1/currencies` endpoint to fetch the available currencies and their conversion rates.


## Acknowledgments

- **React**: A JavaScript library for building user interfaces.
- **Frankfurther API**: For providing reliable and real-time currency exchange rate data.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Vite**: An extremely fast build tool for modern web projects.