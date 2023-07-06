import React, { useState, useEffect } from 'react';
import { FlowChart, ICanvasOuterDefaultProps } from '@mrblenny/react-flow-chart';
import styled from 'styled-components';
import * as actions from '@mrblenny/react-flow-chart/src/container/actions';
import Head from 'next/head'

const completeLinks = [
{l: "port1", r: "port24"},
{l: "port1", r: "port18"},
{l: "port3", r: "port48"},
{l: "port3", r: "port56"},
{l: "port6", r: "port29"},
{l: "port5", r: "port8"},
{l: "port5", r: "port28"},
{l: "port7", r: "port32"},
{l: "port7", r: "port52"},
{l: "port8", r: "port49"},
{l: "port9", r: "port40"},
{l: "port9", r: "port50"},
{l: "port10", r: "port39"},
{l: "port10", r: "port15"},
{l: "port12", r: "port19"},
{l: "port14", r: "port35"},
{l: "port14", r: "port27"},
{l: "port15", r: "port26"},
{l: "port18", r: "port27"},
{l: "port21", r: "port48"},
{l: "port21", r: "port56"},
{l: "port23", r: "port48"},
{l: "port23", r: "port56"},
{l: "port25", r: "port44"},
{l: "port26", r: "port39"},
{l: "port28", r: "port49"},
{l: "port30", r: "port55"},
{l: "port34", r: "port51"},
{l: "port35", r: "port38"},
{l: "port36", r: "port51"},
{l: "port42", r: "port43"},
{l: "port46", r: "port55"},
]


class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  tick() {
	if( (new Date()).getFullYear() === this.props.serverYear ) {
          this.props.timeTravel();
        }
	else {
	  this.props.madTick();
	}
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return null;
  }
}

const Header = styled.div`
  background: #282828;
  text-align: center;
  font-size: xx-large;
  color: #eeeeee;
  padding: 1%;
`
const Filler = styled.div`
  background: #282828;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
`

const FillerStart = styled(Filler)`
  background-image: url("./DarkLogo.png");
`
const FillerEnd = styled(Filler)`
  background-image: url("./DarkThreeWorlds.png");
`
const Mugshot = styled.div`
  position: absolute;
  height: 70px;
  width: 105px;
  background-size: cover; 
  background-position: center;
  font-size: 0;
`

const Jonas = styled(Mugshot)`
  background-image: url("./Jonas.jpeg");
`
const Martha = styled(Mugshot)`
  background-image: url("./Martha.jpeg");
`
const Agnes = styled(Mugshot)`
  background-image: url("./Agnes.jpeg");
`
const Bartosz = styled(Mugshot)`
  background-image: url("./Bartosz.png");
`
const Charlotte = styled(Mugshot)`
  background-image: url("./Charlotte.jpeg");
`
const Daniel = styled(Mugshot)`
  background-image: url("./Daniel.jpeg");
`
const Egon = styled(Mugshot)`
  background-image: url("./Egon.jpeg");
`
const Franziska = styled(Mugshot)`
  background-image: url("./Franziska.jpeg");
`
const Hannah = styled(Mugshot)`
  background-image: url("./Hannah.jpeg");
`
const Ines = styled(Mugshot)`
  background-image: url("./Ines.jpeg");
`
const Magnus = styled(Mugshot)`
  background-image: url("./Magnus.jpeg");
`
const Mikkel = styled(Mugshot)`
  background-image: url("./Mikkel.jpeg");
`
const Peter = styled(Mugshot)`
  background-image: url("./Peter.jpeg");
`
const Silja = styled(Mugshot)`
  background-image: url("./Silja.jpeg");
`
const Tronte = styled(Mugshot)`
  background-image: url("./Tronte.jpeg");
`
const Aleksander = styled(Mugshot)`
  background-image: url("./Aleksander.jpeg");
`
const Bernd = styled(Mugshot)`
  background-image: url("./Bernd.jpeg");
`
const Claudia = styled(Mugshot)`
  background-image: url("./Claudia.jpeg");
`
const Doris = styled(Mugshot)`
  background-image: url("./Doris.jpeg");
`
const Elisabeth = styled(Mugshot)`
  background-image: url("./Elisabeth.jpeg");
`
const Greta = styled(Mugshot)`
  background-image: url("./Greta.jpeg");
`
const Helge = styled(Mugshot)`
  background-image: url("./Helge.jpeg");
`
const Jana = styled(Mugshot)`
  background-image: url("./Jana.jpeg");
`
const Katharina = styled(Mugshot)`
  background-image: url("./Katharina.jpeg");
`
const Noah = styled(Mugshot)`
  background-image: url("./Noah.jpeg");
`
const Regina = styled(Mugshot)`
  background-image: url("./Regina.jpeg");
`
const Tannhaus = styled(Mugshot)`
  background-image: url("./Tannhaus.jpeg");
`
const Ulrich = styled(Mugshot)`
  background-image: url("./Ulrich.jpeg");
`

/**
 * Create the custom component,
 * Make sure it has the same prop signature
 * You'll need to add {...otherProps} so the event listeners are added to your component
 */
const NodeCustom = React.forwardRef(({ node, children, ...otherProps }, ref) => {
  if (node.type === 'jonas') {
    return (
      <Jonas ref={ref} {...otherProps}>
        {children}
      </Jonas>
    )
  } else if (node.type === 'martha') {
    return (
      <Martha ref={ref} {...otherProps}>
        {children}
      </Martha>
    )
  
  } else if (node.type === 'agnes') {
    return (
      <Agnes ref={ref} {...otherProps}>
        {children}
      </Agnes>
    )
  
  } else if (node.type === 'bartosz') {
    return (
      <Bartosz ref={ref} {...otherProps}>
        {children}
      </Bartosz>
    )
  
  } else if (node.type === 'charlotte') {
    return (
      <Charlotte ref={ref} {...otherProps}>
        {children}
      </Charlotte>
    )
  
  } else if (node.type === 'daniel') {
    return (
      <Daniel ref={ref} {...otherProps}>
        {children}
      </Daniel>
    )
  
  } else if (node.type === 'egon') {
    return (
      <Egon ref={ref} {...otherProps}>
        {children}
      </Egon>
    )
 //Agnes.jpeg       Bartosz.png  Charlotte.jpeg  Daniel.jpeg  Egon.jpeg       Franziska.jpeg  Hannah.jpeg  Ines.jpeg  Jonas.jpeg      Magnus.jpeg  Mikkel.jpeg  Peter.jpeg   Silja.jpeg     Tronte.jpeg  favicon.ico
 //Aleksander.jpeg  Bernd.jpeg   Claudia.jpeg    Doris.jpeg   Elisabeth.jpeg  Greta.jpeg      Helge.jpeg   Jana.jpeg  Katharina.jpeg  Martha.jpeg  Noah.jpeg    Regina.jpeg  Tannhaus.jpeg  Ulrich.jpeg 
  } else if (node.type === 'franziska') {
    return (
      <Franziska ref={ref} {...otherProps}>
        {children}
      </Franziska>
    )
 
  } else if (node.type === 'hannah') {
    return (
      <Hannah ref={ref} {...otherProps}>
        {children}
      </Hannah>
    )
  } else if (node.type === 'ines') {
    return (
      <Ines ref={ref} {...otherProps}>
        {children}
      </Ines>
    )
  } else if (node.type === 'magnus') {
    return (
      <Magnus ref={ref} {...otherProps}>
        {children}
      </Magnus>
    )
  } else if (node.type === 'mikkel') {
    return (
      <Mikkel ref={ref} {...otherProps}>
        {children}
      </Mikkel>
    )
  } else if (node.type === 'peter') {
    return (
      <Peter ref={ref} {...otherProps}>
        {children}
      </Peter>
    )
  } else if (node.type === 'silja') {
    return (
      <Silja ref={ref} {...otherProps}>
        {children}
      </Silja>
    )
  } else if (node.type === 'tronte') {
    return (
      <Tronte ref={ref} {...otherProps}>
        {children}
      </Tronte>
    )
  } else if (node.type === 'aleksander') {
    return (
      <Aleksander ref={ref} {...otherProps}>
        {children}
      </Aleksander>
    )
//Agnes.jpeg       Bartosz.png  Charlotte.jpeg  Daniel.jpeg  Egon.jpeg       Franziska.jpeg  Hannah.jpeg  Ines.jpeg  Jonas.jpeg      Magnus.jpeg  Mikkel.jpeg  Peter.jpeg   Silja.jpeg     Tronte.jpeg  favicon.ico
//Aleksander.jpeg  Bernd.jpeg   Claudia.jpeg    Doris.jpeg   Elisabeth.jpeg  Greta.jpeg      Helge.jpeg   Jana.jpeg  Katharina.jpeg  Martha.jpeg  Noah.jpeg    Regina.jpeg  Tannhaus.jpeg  Ulrich.jpeg
  } else if (node.type === 'bernd') {
    return (
      <Bernd ref={ref} {...otherProps}>
        {children}
      </Bernd>
    )
  } else if (node.type === 'claudia') {
    return (
      <Claudia ref={ref} {...otherProps}>
        {children}
      </Claudia>
    )
  } else if (node.type === 'doris') {
    return (
      <Doris ref={ref} {...otherProps}>
        {children}
      </Doris>
    )
  } else if (node.type === 'elisabeth') {
    return (
      <Elisabeth ref={ref} {...otherProps}>
        {children}
      </Elisabeth>
    )
  } else if (node.type === 'greta') {
    return (
      <Greta ref={ref} {...otherProps}>
        {children}
      </Greta>
    )
  } else if (node.type === 'helge') {
    return (
      <Helge ref={ref} {...otherProps}>
        {children}
      </Helge>
    )
  } else if (node.type === 'jana') {
    return (
      <Jana ref={ref} {...otherProps}>
        {children}
      </Jana>
    )
  } else if (node.type === 'katharina') {
    return (
      <Katharina ref={ref} {...otherProps}>
        {children}
      </Katharina>
    )
  } else if (node.type === 'noah') {
    return (
      <Noah ref={ref} {...otherProps}>
        {children}
      </Noah>
    )
  } else if (node.type === 'regina') {
    return (
      <Regina ref={ref} {...otherProps}>
        {children}
      </Regina>
    )
  } else if (node.type === 'tannhaus') {
    return (
      <Tannhaus ref={ref} {...otherProps}>
        {children}
      </Tannhaus>
    )
  } else if (node.type === 'ulrich') {
    return (
      <Ulrich ref={ref} {...otherProps}>
        {children}
      </Ulrich>
    )
  }
})

//Agnes.jpeg       Bartosz.png  Charlotte.jpeg  Daniel.jpeg  Egon.jpeg       Franziska.jpeg  Hannah.jpeg  Ines.jpeg  Jonas.jpeg      Magnus.jpeg  Mikkel.jpeg  Peter.jpeg   Silja.jpeg     Tronte.jpeg  favicon.ico
//Aleksander.jpeg  Bernd.jpeg   Claudia.jpeg    Doris.jpeg   Elisabeth.jpeg  Greta.jpeg      Helge.jpeg   Jana.jpeg  Katharina.jpeg  Martha.jpeg  Noah.jpeg    Regina.jpeg  Tannhaus.jpeg  Ulrich.jpeg

const CanvasOuterCustom = styled.div`
  position: relative;
  background-size: 10px 10px;
  background-color: #282828;
  background-image:
    linear-gradient(90deg,hsla(0,0%,100%,.1) 1px,transparent 0),
    linear-gradient(180deg,hsla(0,0%,100%,.1) 1px,transparent 0);
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: not-allowed;
`
const CanvasCustom = React.forwardRef(({ children, ...otherProps }, ref) => {
     return (
       <CanvasOuterCustom ref={ref} {...otherProps}>
         {children}
       </CanvasOuterCustom>
     )
   })


export function getServerSideProps() {
  const serverYear = (new Date()).getFullYear() - 33;
  return {
	  props: {
		 serverYear,
	  },
  };
}

const first = 'To Go Forward, You Must Go Backwards';
const second = 'Tie The Knots, To Unravel The Mystery';
const third = 'A New Cycle Begins, Congratulations And Condolences';
export default function FamilyTree({serverYear}) {

  let [state, updateState] = useState({
stage: 1,
header: first,
random: 9999,
tick: 0,
chart: {
    offset: {
      x: 0,
      y: 0
    },
    scale: 1.0,
    nodes: {
      node1: {
        id: 'node1',
        type: 'jonas',
        position: {
          x: 0,
          y: 0
        },
        ports: {
          port1: {
            id: 'port1',
            type: 'input',
            properties: {
              value: 'yes'
            }
          },
        }
      },
      node2: {
        id: 'node2',
        position: {
          x: 200,
          y: 100
        },
        type: 'martha',
        ports: {
          port3: {
            id: 'port3',
            type: 'input'
          },
        }
    },
    node3: {
        id: 'node3',
        position: {
          x: 400,
          y: 0
        },
        type: 'agnes',
        ports: {
          port5: {
            id: 'port5',
            type: 'input'
          },
          port6: {
            id: 'port6',
            type: 'output'
          }
        }
    },
      node4: {
        id: 'node4',
        position: {
          x: 600,
          y: 100
        },
        type: 'bartosz',
        ports: {
          port7: {
            id: 'port7',
            type: 'input'
          },
          port8: {
            id: 'port8',
            type: 'output'
          }
        }
    },
      node5: {
        id: 'node5',
        position: {
          x: 800,
          y: 0
        },
        type: 'charlotte',
        ports: {
          port9: {
            id: 'port9',
            type: 'input'
          },
          port10: {
            id: 'port10',
            type: 'output'
          }
        }
    },
      node6: {
        id: 'node6',
        position: {
          x: 1000,
          y: 100
        },
        type: 'daniel',
        ports: {
          port12: {
            id: 'port12',
            type: 'output'
          }
        }
    },
    node7: {
        id: 'node7',
        position: {
          x: 0,
          y: 200
        },
        type: 'egon',
        ports: {
          port14: {
            id: 'port14',
            type: 'output'
          }
        }
    },
    node8: {
        id: 'node8',
        position: {
          x: 200,
          y: 700
        },
        type: 'franziska',
        ports: {
          port15: {
            id: 'port15',
            type: 'input'
          },
        }
    },
    node9: {
        id: 'node9',
        position: {
          x: 400,
          y: 200
        },
        type: 'hannah',
        ports: {
          port18: {
            id: 'port18',
            type: 'output'
          }
        }
    },
    node10: {
        id: 'node10',
        position: {
          x: 600,
          y: 300
        },
        type: 'ines',
        ports: {
          port19: {
            id: 'port19',
            type: 'input'
          },
          port20: {
            id: 'port20',
            type: 'output'
          }
        }
    },
    node11: {
        id: 'node11',
        position: {
          x: 800,
          y: 200
        },
        type: 'magnus',
        ports: {
          port21: {
            id: 'port21',
            type: 'input'
          },
        }
    },
    node12: {
        id: 'node12',
        position: {
          x: 1000,
          y: 300
        },
        type: 'mikkel',
        ports: {
          port23: {
            id: 'port23',
            type: 'input'
          },
          port24: {
            id: 'port24',
            type: 'output'
          }
        }
    },
    node13: {
        id: 'node13',
        position: {
          x: 1200,
          y: 400
        },
        type: 'peter',
        ports: {
          port25: {
            id: 'port25',
            type: 'input'
          },
          port26: {
            id: 'port26',
            type: 'output'
          }
        }
    },
    node14: {
        id: 'node14',
        position: {
          x: 200,
          y: 500
        },
        type: 'silja',
        ports: {
          port27: {
            id: 'port27',
            type: 'input'
          },
          port28: {
            id: 'port28',
            type: 'output'
          }
        }
    },
    node15: {
        id: 'node15',
        position: {
          x: 400,
          y: 400
        },
        type: 'tronte',
        ports: {
          port29: {
            id: 'port29',
            type: 'input'
          },
          port30: {
            id: 'port30',
            type: 'output'
          }
        }
    },
    node16: {
        id: 'node16',
        position: {
          x: 600,
          y: 500
        },
        type: 'aleksander',
        ports: {
          port32: {
            id: 'port32',
            type: 'output'
          }
        }
    },
    node17: {
        id: 'node17',
        position: {
          x: 800,
          y: 400
        },
        type: 'bernd',
        ports: {
          port34: {
            id: 'port34',
            type: 'output'
          }
        }
    },
    node18: {
        id: 'node18',
        position: {
          x: 0,
          y: 400
        },
        type: 'claudia',
        ports: {
          port35: {
            id: 'port35',
            type: 'input'
          },
          port36: {
            id: 'port36',
            type: 'output'
          }
        }
    },
    node19: {
        id: 'node19',
        position: {
          x: 200,
          y: 300
        },
        type: 'doris',
        ports: {
          port38: {
            id: 'port38',
            type: 'output'
          }
        }
    },
    node20: {
        id: 'node20',
        position: {
          x: 400,
          y: 600
        },
        type: 'elisabeth',
        ports: {
          port39: {
            id: 'port39',
            type: 'input'
          },
          port40: {
            id: 'port40',
            type: 'output'
          }
        }
    },
    node21: {
        id: 'node21',
        position: {
          x: 600,
          y: 700
        },
        type: 'greta',
        ports: {
          port42: {
            id: 'port42',
            type: 'output'
          }
        }
    },
    node22: {
        id: 'node22',
        position: {
          x: 800,
          y: 600
        },
        type: 'helge',
        ports: {
          port43: {
            id: 'port43',
            type: 'input'
          },
          port44: {
            id: 'port44',
            type: 'output'
          }
        }
    },
    node23: {
        id: 'node23',
        position: {
          x: 1000,
          y: 700
        },
        type: 'jana',
        ports: {
          port46: {
            id: 'port46',
            type: 'output'
          }
        }
    },
    node24: {
        id: 'node24',
        position: {
          x: 1200,
          y: 0
        },
        type: 'katharina',
        ports: {
          port48: {
            id: 'port48',
            type: 'output'
          }
        }
    },
    node25: {
        id: 'node25',
        position: {
          x: 1200,
          y: 200
        },
        type: 'noah',
        ports: {
          port49: {
            id: 'port49',
            type: 'input'
          },
          port50: {
            id: 'port50',
            type: 'output'
          }
        }
    },
    node26: {
        id: 'node26',
        position: {
          x: 0,
          y: 600
        },
        type: 'regina',
        ports: {
          port51: {
            id: 'port51',
            type: 'input'
          },
          port52: {
            id: 'port52',
            type: 'output'
          }
        }
    },
    node27: {
        id: 'node27',
        position: {
          x: 1200,
          y: 600
        },
        type: 'tannhaus',
        ports: {
          port54: {
            id: 'port54',
            type: 'output'
          }
        }
    },
    node28: {
        id: 'node28',
        position: {
          x: 1200,
          y: 800
        },
        type: 'ulrich',
        ports: {
          port55: {
            id: 'port55',
            type: 'input'
          },
          port56: {
            id: 'port56',
            type: 'output'
          }
        }
    },
    },
    links: {
     link1: {
      id: 'link1',
      from: {
        nodeId: 'node7',
        portId: 'port14',
      },
      to: {
        nodeId: 'node18',
        portId: 'port35',
      },
     },
     link2: {
      id: 'link2',
      from: {
        nodeId: 'node19',
        portId: 'port38',
      },
      to: {
        nodeId: 'node18',
        portId: 'port35',
      },
     },
     link3: {
      id: 'link3',
      from: {
        nodeId: 'node18',
        portId: 'port36',
      },
      to: {
        nodeId: 'node26',
        portId: 'port51',
      },
     },
    },
    selected: {},
    hovered: {}
  }});


const timeTravel = () => {
   updateState({ ...state, ...{stage: 2, header: second, random: ''} }); 
}

const madTick = () => {
  let {tick, random} = state;
  let year = tick % 3 == 0?(Math.floor(Math.random() * (167)) + 1883):(tick % 3 == 1?random-33:random);
  updateState({...state, ...{random: year, tick: tick+1}});
}

  let stateActionCallbacks = Object.keys(actions).reduce((obj, key, idx) => {
    obj[key] = (...args) => {
      let {chart} = state
      let action = actions[key];
      let newChartTransformer = action(...args);
      let newChart = newChartTransformer(chart);
      let updatedChart = {...chart, ...newChart};
      let alreadyUpdated = false;
      if( key === 'onLinkComplete' ) {
        let f= completeLinks.every(e => {
		return Object.values(state.chart.links).some(lnk => {
			return (lnk.from.portId === e.l && lnk.to.portId === e.r) || (lnk.from.portId === e.r && lnk.to.portId === e.l);
		}
		);
	});
	if(f === true) {
		//console.log("DONE!!");
		updateState({ ...state, ...{stage: 3, header: third}});	
		alreadyUpdated = true;
	}

      }
      if(!alreadyUpdated) {
        updateState({ ...state, ...{random: '', chart: updatedChart}});
      }
      return newChart;
    };
    return obj;
  }, {});
  return (
    <div>
      <Head>
        <title>A Dark Puzzle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        onClick={() => {
          try {
            console.log(JSON.stringify(state.chart.links));
          } catch (e) {
            console.log(e, state.chart.links);
          }
        }}
	>
        {state.header} {state.random}
      </Header>
      { state.stage === 1? <Timer timeTravel={timeTravel} madTick={madTick} serverYear={serverYear}/>: null }
      { state.stage === 2?
        <FlowChart chart={state.chart} callbacks={stateActionCallbacks} Components={{Node: NodeCustom, CanvasOuter: CanvasCustom,}}/>
      : state.stage === 1?<FillerStart />:<FillerEnd /> }
    </div>
  );
}
