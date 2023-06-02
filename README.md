## COVID-19 Line Graph
A React application to visualize COVID-19 cases, deaths, and recoveries using a line graph.

## To run this project locally on your computer, follow these steps:
1. Make sure you have Node.js and npm (Node Package Manager) installed.
2. Clone this repository to your local machine using the following command: 
    git clone https://github.com/satish0036/Line_Graph.git
3. Navigate to the project directory:
    cd your-repository
4. Install the project dependencies:
    npm install
5. To start the development server and run the project 
    npm start
    
## How it Works 
1. The application fetches historical COVID-19 data from the disease.sh API.
2. The fetched data is transformed into a format suitable for the line chart component from the Recharts library.
3. The line chart displays the number of cases, deaths, and recoveries over time.
4. The chart is rendered using the ResponsiveContainer component from Recharts to ensure proper sizing and responsiveness.

## Dependencies
The project utilizes the following dependencies:
1. React
2. Recharts
