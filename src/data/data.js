const data = {
  sections: [
    {
      Component: 'Hero',
      content: {
        heading: {
          text: 'Netlify Analytics',
          options: {
            element: 'h1'
          }
        },
        paragraph: {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt nisl aliquam porta aliquet. In faucibus dolor enim, id vehicula ante tristique ac.',
          options: {
            element: 'p'
          }
        },
        cta: {
          label: 'Call to action',
          url: 'https://www.google.com'
        }
      }
    },
    {
      Component: 'MainFeatures',
      content: {
        heading: {
          text: 'Everything you need to take better decision',
          options: {
            element: 'h2'
          }
        },
        features: [
          {
            heading: {
              text: 'Real-time Audience tracking',
              options: {
                element: 'h3'
              }
            },
            paragraph: {
              text: 'See audience in real-time visiting your website.',
              options: {
                element: 'p'
              }
            },
            image: {
              src: 'map.svg',
              alt: ''
            }
          },
          {
            heading: {
              text: 'Beautiful charts',
              options: {
                element: 'h3'
              }
            },
            paragraph: {
              text:
                'Tons of beautiful charts to help you track the data you need.',
              options: {
                element: 'p'
              }
            },
            image: {
              src: 'chart.svg',
              alt: ''
            }
          },
          {
            heading: {
              text: 'Measure KPIs',
              options: {
                element: 'h3'
              }
            },
            paragraph: {
              text:
                'Automatically uncover key characteristics of the segments that are driving your company’s KPIs.',
              options: {
                element: 'p'
              }
            },
            image: {
              src: 'calendar.svg',
              alt: ''
            }
          }
        ]
      }
    },
    {
      Component: 'Banner',
      content: {
        heading: {
          text: 'All the data at your fingertips',
          options: {
            element: 'h2'
          }
        },
        paragraph: {
          text:
            'Access all your data quickly on your mobile device or your 6000$ Mac Pro.',
          options: {
            element: 'p'
          }
        },
        cta: {
          label: 'Try it now',
          url: 'https://www.netlify.com/'
        },
        image: {
          src: 'mockup-on-mobile.png',
          alt:
            'Analytics dashboard displaying a vertical bar chart of the monthly visitors.'
        }
      }
    },
    {
      Component: 'SmallerFeatures',
      content: {
        heading: {
          text: 'All the data at your fingertips',
          options: {
            element: 'h2'
          }
        },
        features: [
          {
            heading: {
              text: 'Audience technology',
              options: {
                element: 'h3'
              }
            },
            paragraph: {
              text:
                'Get audience technology data such as browser and network usage',
              options: {
                element: 'p'
              }
            },
            icon: 'PieChart'
          },
          {
            heading: {
              text: 'Campaigns traffic',
              options: {
                element: 'h3'
              }
            },
            paragraph: {
              text: 'Run Google Ads campaign directly from our admin dashboard',
              options: {
                element: 'p'
              }
            },
            icon: 'BarChart'
          },
          {
            heading: {
              text: 'Developer API',
              options: {
                element: 'h3'
              }
            },
            paragraph: {
              text: 'Create custom report with our analytics API.',
              options: {
                element: 'p'
              }
            },
            icon: 'Code'
          }
        ]
      }
    },
    {
      Component: 'OtherProducts',
      content: {
        heading: {
          text: 'Do more with the Netlify Platform',
          options: {
            element: 'h2'
          }
        },
        subheading: {
          text:
            'Start with Netlify Dev. Run our entire platform right on your laptop.',
          options: {
            element: 'p'
          }
        },
        products: [
          {
            heading: {
              text: 'Netlify Dev',
              options: {
                element: 'h3'
              }
            },
            paragraph: {
              text:
                'Run our entire platform right on your laptop. Preview it all — site generation, functions, and edge logic.',
              options: {
                element: 'p'
              }
            },
            productHandle: 'netlify-dev'
          },
          {
            heading: {
              text: 'Netlify Build',
              options: {
                element: 'h3'
              }
            },
            paragraph: {
              text:
                'The Git workflow for web development. Build, deploy, and manage modern web projects.',
              options: {
                element: 'p'
              }
            },
            productHandle: 'netlify-build'
          },
          {
            heading: {
              text: 'Netlify Edge',
              options: {
                element: 'h3'
              }
            },
            paragraph: {
              text:
                'A new type of application delivery network custom designed for fast, responsive sites and modern workflows.',
              options: {
                element: 'p'
              }
            },
            productHandle: 'netlify-edge'
          }
        ]
      }
    },
    {
      Component: 'CallOut',
      content: {
        heading: {
          text: 'Ready to try out Netlify Analytics?',
          options: {
            element: 'h2'
          }
        },
        paragraph: {
          text: 'All the important stuff. Right here on Netlify',
          options: {
            element: 'p'
          }
        },
        cta: {
          label: 'Get started for free',
          url: 'https://www.google.com'
        },
        image: 'null'
      }
    }
  ]
};

export default data;
