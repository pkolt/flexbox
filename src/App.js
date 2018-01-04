import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


const flexBoxValues = {
   'flex-direction': ['row', 'column'],
   'justify-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
   'align-items': ['flex-start', 'flex-end', 'center', 'stretch', 'baseline']
};

const boxesStyle = [
   {background: '#2ECC71', width: '150px', minHeight: '150px'},
   {background: '#F2CA27', width: '150px', minHeight: '110px'},
   {background: '#E74C3C', width: '150px', minHeight: '150px'},
   {background: '#3498DB', width: '220px', minHeight: '120px'},
];

const displayStyle = Object.keys(flexBoxValues).reduce((obj, key) => ({...obj, [key]: flexBoxValues[key][0]}), {display: 'flex'});


class App extends Component {
   constructor(props) {
      super(props);
      this.state = {displayStyle};
   }

   render() {
      const {displayStyle} = this.state;

      const handleChange = (event) => {
         const key = event.target.name;
         const value = event.target.value;
         this.setState({displayStyle: {...displayStyle, [key]: value}});
      };

      return (
         <div className="App">
            <div className="App__form">
               <h1>Flexbox</h1>
               {
                  Object.keys(flexBoxValues).map(key => {
                     return <div key={key}>
                        <h2>{key}</h2>
                        {
                           flexBoxValues[key].map(value => {
                              return <div className="radio" key={key + value}>
                                 <label>
                                    <input type="radio" name={key} value={value} checked={value === displayStyle[key]} onChange={handleChange}/>
                                    {value}
                                 </label>
                              </div>
                           })
                        }
                     </div>
                  })
               }
               <h2>CSS style:</h2>
               <pre>
                  {JSON.stringify(displayStyle, null, 2)}
               </pre>
            </div>
            <div className="App__display" style={displayStyle}>
               {
                  boxesStyle.map((boxStyle, i) => {
                     return <div className="App__box" style={boxStyle} key={i}>{i + 1}</div>;
                  })
               }
            </div>
         </div>
      );
   }
}

export default App;
