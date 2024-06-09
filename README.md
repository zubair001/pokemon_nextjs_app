# Pokemon App

This is a Next.js 14 application developed by Zubair Hossain that uses data from the public Pokemon API (https://pokeapi.co/).

## Features

1. **Next.js 14 with App Router**: The application is built using Next.js 14, leveraging the App Router for efficient and organized project setup.
   
2. **Data Display with Table Library**: An open-source table library TanStack Library (https://tanstack.com/) is integrated to display data fetched from the API, ensuring a robust and user-friendly presentation of information.

3. **API Integration**: Data is fetched from the public Pokemon API (https://pokeapi.co/), providing real-time information about various Pokemon.

4. **Multiple Value Options per Cell**: Each cell in the table can have multiple value options, with only one value active at a time. This feature allows for flexible data presentation and interaction.

5. **Alternative Value Highlighting**: Cells with alternative values are highlighted to indicate the presence of multiple options. Users can view and select specific values for each cell, enhancing the interactive experience.

6. **User-Friendly Interface**: The application provides a seamless interface for value selection within table cells, making it easy for users to interact with the data.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result, which will automaticcaly redirects to (http://localhost:3000/pokemons). 


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Running the Application

To run the application locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/yourusername/pokemon-app.git
cd pokemon-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Summary

The Pokemon App is a comprehensive Next.js 14 application that integrates data from the public Pokemon API and provides a user-friendly interface for interacting with this data. Featuring a powerful table library, the app allows for multiple value options per cell, highlighting alternatives and enabling easy selection for users. Whether you're a Pokemon enthusiast or just looking for a solid example of Next.js 14 capabilities, this app is a great starting point.