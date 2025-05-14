"use client";

import { useState } from "react";
import Image from "next/image";
import { Button, Typography } from "antd";
import { Select, Space } from "antd";
import { Grid } from "./components/grid";
import React, { useEffect } from "react";
import { ConfigProvider } from "antd";


export default function SimulationPage() {
  const [gridType, setGridType] = useState("Forest");
  const [windDirection, setWindDirection] = useState("None");
  const [windSpeed, setWindSpeed] = useState(0);
  const [reset, setReset] = useState(false);

  const { Title } = Typography;
  title: 'map';

  return (
    <ConfigProvider

      theme={{
        token: {
          colorPrimary: '#801100',

        }
      }}
    >
      <div className="simulation-background h-screen w-screen flex flex-col items-center text-3xl text-gray-500">
        <h1 className="text- glass p-4 m-8 text-[#801100]">
          Wildfire Simulation
        </h1>
        <div className="glass p-4 text-[#801100]  min-w-[1114px] max-w-[1114px]">
          <section className="flex flex-row gap-8">
            <div className="flex flex-row gap-2 items-center">
              <h2 className="text-sm min-w-[80px]">Grid Type</h2>
              <Select
                defaultValue={gridType}
                onChange={setGridType}
                showSearch
                style={{ width: 200 }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "Forest",
                    label: "Forest",
                  },
                  {
                    value: "Urbanized Area",
                    label: "Urbanized Area",
                  },
                  {
                    value: "Powerlines",
                    label: "Powerlines",
                  },
                ]}
              />
            </div>

            <div>
              <div className="flex flex-row gap-2 items-center">
                <h2 className="text-sm min-w-[80px]">Wind Speed</h2>
                <Select
                  showSearch
                  style={{ width: 200 }}
                  defaultValue={windSpeed}
                  onChange={setWindSpeed}
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={[
                    {
                      value: 0,
                      label: "0 mph",
                    },
                    {
                      value: 5,
                      label: "5 mph",
                    },
                    {
                      value: 10,
                      label: "10 mph",
                    },
                    {
                      value: 15,
                      label: "15 mph",
                    },
                  ]}
                />
              </div>
            </div>

            <div>
              <div className="flex flex-row gap-2 items-center">
                <h2 className="text-sm min-w-[80px]">Wind Direction</h2>
                <Select
                  showSearch
                  style={{ width: 200 }}
                  defaultValue={windDirection}
                  onChange={setWindDirection}
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={[
                    {
                      value: "None",
                      label: "None",
                    },
                    {
                      value: "North",
                      label: "North",
                    },
                    {
                      value: "South",
                      label: "South",
                    },
                    {
                      value: "West",
                      label: "West",
                    },
                    {
                      value: "East",
                      label: "East",
                    },
                  ]}
                />
              </div>
            </div>
            <Button type="primary" onClick={() => setReset(!reset)}>
              Clear Grid
            </Button>
          </section>
        </div>

        <section className="flex flex-row min-w-[1114px] max-w-[1114px]">
          <div className="relative glass mt-8">
            {windDirection == "North" && windSpeed > 0 && (
              <Image
                src="/cloud/cloud_north.webp"
                className={`left-[40%] top-[80%] vibrate-1 absolute`}
                alt="I am the cloud"
                width={100}
                height={100}
              />
            )}
            {windDirection === "South" && windSpeed > 0 && (
              <Image
                src="/cloud/cloud_south.webp"
                className={`left-[40%] vibrate-1 absolute`}
                alt="I am the cloud"
                width={100}
                height={100}
              />
            )}
            {windDirection === "East" && windSpeed > 0 && (
              <Image
                src="/cloud/cloud_east.webp"
                className={`top-[40%] vibrate-1 absolute`}
                alt="I am the cloud"
                width={100}
                height={100}
              />
            )}
            {windDirection === "West" && windSpeed > 0 && (
              <Image
                src="/cloud/cloud_west.webp"
                className={`left-[80%] top-[40%] vibrate-1 absolute`}
                alt="I am the cloud"
                width={100}
                height={100}
              />
            )}

            <Grid
              type={gridType}
              windSpeed={windSpeed}
              windDirection={windDirection}
              reset={reset}
            />
          </div>

          <section className="text-base glass mt-8 ml-8 p-4 text-[#801100] grow">
            <h4>
              Description:
            </h4>
            <br></br>
            <p>
              This is an interactive demo that depicts the spread of
              a wildfire. It can also display how human activites affect the duration
              and intensity of a wildifre. For example, with increased urbanization of
              rural areas that are prone to wildfires, the intensity of
              wildfires increase.
            </p>
            <br></br>

            <h4>
              How to Use:
            </h4>
            <br></br>
            <p>
              You can select the grid type: forest, urbanized area - there are houses located in an area prone to
              wildfire, or powerlines - there are powerlines running through trees.
              Then you have the option to add wind to the simulation as well as the speed and the direction that it would blow.
              There is also a clear grid button that will clear the grid and allow you to start another simulation.
            </p>
          </section>
        </section>
      </div>
    </ConfigProvider>
  );
}
