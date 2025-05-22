# Coco Motors

Coco Motors is a modern vehicle management and shopping cart application built with Angular, showcasing the power of Angular's modern control flow syntax (`@if`, `@for`, `@switch`) for efficient and declarative template logic.

**Built with the tools and technologies:**
- Angular 17+
- Bootstrap 5
- TypeScript
- Jest

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)

## Overview

Coco Motors is a demonstration project designed to highlight Angular's modern control flow syntax while providing a functional vehicle shopping cart experience. The application allows users to browse vehicles, view details, add items to a cart, and calculate totals, all while leveraging Angular's `@if`, `@for`, and `@switch` directives for clean and performant template logic.

### Why Coco Motors?

This project simplifies the development of dynamic UI components by using Angular's control flow syntax, which offers better performance and readability compared to legacy directives like `*ngIf` and `*ngFor`. Key highlights include:

- 🚗 Vehicle Management: Browse and view detailed vehicle information, including name, classification, price, crew, passengers, and cargo capacity.
- 🛒 Shopping Cart: Add vehicles to a cart, update quantities, and calculate subtotals, delivery fees, taxes, and total prices.
- 🎨 Modern UI: Styled with Bootstrap 5 and custom CSS, featuring animations for a polished user experience.
- Control Flow Syntax: Demonstrates Angular's modern `@if`, `@for`, and `@switch` for declarative template logic.
- 🛠️ Testing: Comprehensive unit tests using Jest to ensure reliability.
- 📱 Responsive Design: Fully responsive layout for seamless use on desktop and mobile devices.

## Features

- **Home Page**: Displays a branded image and developer credits with animations.
- **Vehicle List**: Lists vehicles with a clickable selection, using `@for` for iteration.
- **Vehicle Detail**: Shows detailed vehicle information with a filmography list, leveraging `@if` for conditional rendering.
- **Cart**: Manages cart items with quantity selection and removal, using `@if` and `@for` for dynamic rendering.
- **Cart Total**: Calculates and displays subtotals, delivery fees, taxes, and totals, with conditional logic via `@if`.
- **Navigation**: Responsive navbar with cart count badge, using `@if` for conditional badge display.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v18.x or later)
- npm (v9.x or later)
- Angular CLI (v17.x or later)

### Installation

Set up Coco Motors by following these steps:

1. Clone the repository:
 git clone https:(https://github.com/WekesaKelvin/Angular-Control-Flow-Syntax/)

2. Navigate to the project directory:
   cd coco-motors
   
3. Install the dependencies:
npm install

npm install bootstrap

## Usage

Run the project locally:

1. Start the development server:

       ### ng serve

2.Run test

      ### ng test
