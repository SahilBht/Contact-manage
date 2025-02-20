import axios from "axios";

// Importing necessary styles and components
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import { MapContainer, TileLayer } from "react-leaflet";

import WorldMap from "../Components/WorldMap";

const Dashboard = () => {
  // State to store countries data and chart data
  const [countriesData, setCountriesData] = useState([]);
  const [chartData, setChartData] = useState({});

  // Fetching countries data and storing it in state
  useEffect(() => {
    axios("https://disease.sh/v3/covid-19/countries").then((res) => {
      const data = res.data;
      setCountriesData(data);
    });
  }, []);

  // Fetching historical data for chart and configuring chart settings
  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((res) => {
        const data = res.data;

        const newChartData = {
          labels: Object.keys(data.cases),
          datasets: [
            {
              label: "Cases",
              data: Object.values(data.cases),
              fill: false,
              borderColor: "#f50057",
              tension: 0.2,
            },
          ],
        };

        setChartData(newChartData);
      });

    // Registering chart elements and settings
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  }, []);

  // Rendering the dashboard UI
  return (
    <div className="  w-full pt-20 px-4 pb-8">
      {/* Chart title */}
      <h1 className="text-4xl font-bold mb-4  text-pink-600">
        Corona Cases Chart
      </h1>
      {/* Chart component */}
      <div className="border-2 border-red-100 w-11/12 bg-lynxwhite m-auto 10 auto 10">
        {chartData.datasets ? (
          <Line data={chartData} />
        ) : (
          <h1 className="text-pink-600 mb-4 font-bold text-2xl">Loading...</h1>
        )}
      </div>

      {/* World map title */}
      <h1 className="text-4xl font-bold mb-4 mt-4 text-blue-500">
        Corona Cases World Map
      </h1>
      {/* World map component */}
      <div className="border-2 border-blue-500 w-11/12 m-auto mt-5">
        <MapContainer
          className={`m-auto w-full border-blue-700`}
          bounds={[
            [-60, -180],
            [85, 180],
          ]}
          zoom={2}
          center={[20, 40]}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />

          <WorldMap countriesData={countriesData} />
        </MapContainer>
      </div>
    </div>
  );
};

export default Dashboard;
