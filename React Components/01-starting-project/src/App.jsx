import { useState } from "react"; //1 React Hook

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx"
import {CORE_CONCEPTS} from "./data.js" 
import TabButton from './components/TabButton.jsx';

function App() {
  const [ selecetedTopic, setSelectedTopic ] = useState('Please Click a Button'); //2: useState returns an array 


  function handleSelect(selectedButton){
    // selectedButton=> 'components','jsx','props','state'
    setSelectedTopic(selectedButton)
    console.log(selecetedTopic);
    
}
return (
  <div>
    <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>  
              <CoreConcept 
                title= {CORE_CONCEPTS[0].title} 
                description={CORE_CONCEPTS[0].description} 
                image= {CORE_CONCEPTS[0].image} 
              />                                                   
              <CoreConcept 
                title= {CORE_CONCEPTS[1].title} 
                description={CORE_CONCEPTS[1].description} 
                image= {CORE_CONCEPTS[1].image} 
              />                                                   
              <CoreConcept {...CORE_CONCEPTS[2]}/>
              <CoreConcept {...CORE_CONCEPTS[3]}/>              
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=> handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect={()=> handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={()=> handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={()=> handleSelect('State')}>State</TabButton>
          </menu>
          {selecetedTopic}
        </section>
    </main>
  </div>
  );
}  
export default App;
