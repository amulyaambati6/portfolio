// Real data exported from the COVID-19 Global Economic Impact Dashboard (data/processed/*.csv).
// Values rounded to one decimal. Do not edit by hand.
const covidData = {
  "source": "World Bank (GDP growth, unemployment, inflation), processed in the COVID-19 Global Economic Impact Dashboard project",
  "years": [
    2018,
    2019,
    2020,
    2021,
    2022,
    2023,
    2024
  ],
  "countries": [
    {
      "code": "USA",
      "name": "United States"
    },
    {
      "code": "IND",
      "name": "India"
    },
    {
      "code": "FRA",
      "name": "France"
    },
    {
      "code": "CHN",
      "name": "China"
    },
    {
      "code": "BRA",
      "name": "Brazil"
    },
    {
      "code": "DEU",
      "name": "Germany"
    },
    {
      "code": "RWA",
      "name": "Rwanda"
    }
  ],
  "indicators": {
    "gdp": {
      "label": "GDP growth",
      "unit": "% per year",
      "values": {
        "USA": [
          3.0,
          2.6,
          -2.1,
          6.2,
          2.5,
          2.9,
          2.8
        ],
        "IND": [
          6.5,
          3.9,
          -5.8,
          9.7,
          7.6,
          7.2,
          7.1
        ],
        "FRA": [
          1.6,
          2.0,
          -7.4,
          6.9,
          2.7,
          1.4,
          1.2
        ],
        "CHN": [
          6.8,
          6.1,
          2.3,
          8.6,
          3.1,
          5.4,
          5.0
        ],
        "BRA": [
          1.8,
          1.2,
          -3.3,
          4.8,
          3.0,
          3.2,
          3.4
        ],
        "DEU": [
          1.1,
          1.0,
          -4.1,
          3.9,
          1.8,
          -0.9,
          -0.5
        ],
        "RWA": [
          8.1,
          9.3,
          -2.8,
          8.4,
          9.8,
          8.6,
          7.2
        ]
      }
    },
    "unemployment": {
      "label": "Unemployment",
      "unit": "% of labour force",
      "values": {
        "USA": [
          3.9,
          3.7,
          8.1,
          5.3,
          3.6,
          3.6,
          4.0
        ],
        "IND": [
          7.7,
          6.5,
          7.9,
          6.4,
          4.8,
          4.2,
          4.2
        ],
        "FRA": [
          9.0,
          8.4,
          8.0,
          7.9,
          7.3,
          7.3,
          7.4
        ],
        "CHN": [
          4.3,
          4.6,
          5.0,
          4.5,
          5.0,
          4.7,
          4.6
        ],
        "BRA": [
          12.3,
          11.9,
          13.7,
          13.2,
          9.2,
          7.9,
          6.8
        ],
        "DEU": [
          3.4,
          3.2,
          3.9,
          3.6,
          3.1,
          3.1,
          3.4
        ],
        "RWA": [
          10.8,
          11.2,
          11.8,
          15.8,
          15.1,
          12.4,
          11.3
        ]
      }
    },
    "inflation": {
      "label": "Inflation",
      "unit": "% per year",
      "values": {
        "USA": [
          2.4,
          1.8,
          1.2,
          4.7,
          8.0,
          4.1,
          3.0
        ],
        "IND": [
          3.9,
          3.7,
          6.6,
          5.1,
          6.7,
          5.6,
          5.0
        ],
        "FRA": [
          1.9,
          1.1,
          0.5,
          1.6,
          5.2,
          4.9,
          2.0
        ],
        "CHN": [
          2.1,
          2.9,
          2.4,
          1.0,
          2.0,
          0.2,
          0.2
        ],
        "BRA": [
          3.7,
          3.7,
          3.2,
          8.3,
          9.3,
          4.6,
          4.4
        ],
        "DEU": [
          1.7,
          1.4,
          0.1,
          3.1,
          6.9,
          5.9,
          2.3
        ],
        "RWA": [
          -0.3,
          3.3,
          9.8,
          -0.4,
          17.7,
          19.8,
          1.8
        ]
      }
    }
  }
};

export default covidData;
