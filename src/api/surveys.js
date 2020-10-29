
export const listSurveysResponse = [
  {
    survey_type_id: "101",
    survey_type: "CSC - Customer Score Card",
    indexes: {
      PROFIL: {
        index_code: "PROFIL",
        index: "Profil",
        subindexes: [
          {
            index_code: "LGH",
            index: "Lägenheten",
            questions: [
                {
                    id: "54",
                    name: "Ljudmiljö/ljudisolering",
                    project_id: [
                        "2020",
                        "2629"
                    ]
                },
                {
                    id: "55",
                    name: "Ljusmiljö/tillgång på dagsljus",
                    project_id: [
                        "2768",
                        "2773",
                    ]
                },
                {
                    id: "53",
                    name: "Luftkvalitet/ventilation",
                    project_id: [
                        "3003",
                        "3115",
                        "3147"
                    ]
                },
                {
                    id: "48",
                    name: "Planlösning/möblerbarhet",
                    project_id: [                      
                        "2881",
                        "3304"
                    ]
                },
                {
                    id: "51",
                    name: "Temperatur/värmekomfort sommartid",
                    project_id: [
                        "2021",
                        "2020"
                    ]
                }
            ]
          },
          {
            index_code: "LGH",
            index: "Lägenheten",
            questions: [
                {
                    id: "54",
                    name: "Ljudmiljö/ljudisolering",
                    project_id: [
                        "2020",
                        "2629"
                    ]
                }
            ]
          }
        ]
      },
      ATTR: {
        index_code: "ATTR",
        index: "Attraktivitet",
        subindexes: [],
        questions: [
          {
              id: "12",
              name: "Telefontider",
              project_id: [
                  "2020",
                  "2629"
              ]
          },
          {
              id: "14",
              name: "Ljusmiljö/tillgång på dagsljus",
              project_id: [
                  "2768",
                  "2773",
              ]
          },
          {
              id: "13",
              name: "Besökstider",
              project_id: [
                  "3003",
                  "3115",
                  "3147"
              ]
          },
          {
              id: "18",
              name: "Planlösning",
              project_id: [                      
                  "2881",
                  "3304"
              ]
          },
          {
              id: "19",
              name: "Temperatur",
              project_id: [
                  "2021",
                  "2020"
              ]
          }
        ]
      },
      SI: {
        index_code: "SI",
        index: "Serviceindex",
        subindexes: [
          {
            index_code: "TRYGG",
            index: "Trygghet",
            questions: [
              {
                  id: "89",
                  name: "Availability of berth?",
                  project_id: [
                    "2773",
                    "2721",
                    "3180"
                  ]
              }
            ]
          },
          {
            index_code: "ROS",
            index: "Rent och snyggt",
            questions: []
          },
          {
            index_code: "HNDB",
            index: "Hjälp när det behövs",
            questions: [
              {
                  id: "87",
                  name: "Do you have a laundry room?",
                  project_id: [
                    "5869"
                  ]
              }
            ]
          }
        ],
        questions: [
          {
              id: "143",
              name: "Senaste kontakten, ej felanmälan",
              project_id: [
                "5769"
              ]
          },
          {
            id: "140",
            name: "Första intrycket av Heimstaden som hyresvärd",
            project_id: [
              "3147"
            ]
          },
          {
            id: "163",
            name: "Är du tillfreds med den generella informationen från Heimstaden i samband med din inflyttning",
            project_id: [
              "3304"
            ]
          }
        ]
      },
      PI: {
        index_code: "PI",
        index: "Produktindex",
        subindexes: [
          {
            index_code: "LGH",
            index: "Lägenheten"
          }
        ]
      }
    }
  },
  {
    survey_type_id: "102",
    survey_type: "Commercial property",
    indexes: {
      SI: {
        index_code: "SI",
        index: "Serviceindex",
        subindexes: [
          {
            index_code: "TKPA",
            index: "Ta kunden på allvar",
            questions: []
          },
          {
            index_code: "ROS",
            index: "Rent och snyggt",
            questions: [
              {
                  id: "12",
                  name: "Telefontider",
                  project_id: [
                      "2020",
                      "2629"
                  ]
              },
              {
                  id: "14",
                  name: "Ljusmiljö/tillgång på dagsljus",
                  project_id: [
                      "2768",
                      "2773",
                  ]
              }
            ]
          },
          {
            index_code: "HNDB",
            index: "Hjälp när det behövs",
            questions: [
              {
                id: "19",
                name: "Temperatur",
                project_id: [
                    "2021",
                    "2020"
                ]
              }
            ]
          }
        ]
      }
    }
  },
  {
    survey_type_id: "111",
    survey_type: "Product",
    indexes: {
      PROFIL: {
        index_code: "PROFIL",
        index: "Profil",
        subindexes: [],
        questions: [
          {
              id: "12",
              name: "Telefontider",
              project_id: [
                  "2020",
                  "2629"
              ]
          },
          {
              id: "14",
              name: "Ljusmiljö/tillgång på dagsljus",
              project_id: [
                  "2768",
                  "2773",
              ]
          }
        ]
      },
      ATTR: {
        index_code: "ATTR",
        index: "Attraktivitet",
        subindexes: [],
        questions: [
          {
              id: "7868",
              name: "Informationen från fastighetsägaren under covid-19",
              project_id: [
                  "202"
              ]
          },
          {
              id: "7878",
              name: "Förändringar i hanteringar av felanmälan på grund av covid-19",
              project_id: [
                  "278",
                  "273",
              ]
          }
        ]
      },
      SI: {
        index_code: "SI",
        index: "Serviceindex",
        subindexes: [
          {
            index_code: "TRYGG",
            index: "Trygghet",
            questions: [
              {
                  id: "7359",
                  name: "Hur troligt är det att du skulle rekommendera Heimstaden som hyresvärd till vänner och bekanta",
                  project_id: [
                      "202"
                  ]
              },
              {
                  id: "7878",
                  name: "Ålder på den som svarat",
                  project_id: [
                      "278",
                      "273",
                  ]
              }
            ]
          }
        ]
      },
      PI: {
        index_code: "PI",
        index: "Produktindex",
        subindexes: [
          {
            index_code: "LGH",
            index: "Lägenheten"
          }
        ],
        questions: [
          {
              id: "6917",
              name: "Hur upplevde du kommunikationen med Heimstaden vid kontraktsskrivningen",
              project_id: [
                  "2082"
              ]
          }
        ]
      }
    }
  }
];
