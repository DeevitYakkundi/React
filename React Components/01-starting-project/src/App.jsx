import { useState } from "react"; 

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx"
import {CORE_CONCEPTS,EXAMPLES} from "./data.js" 
import TabButton from './components/TabButton.jsx';

function App() {
  const [ selecetedTopic, setSelectedTopic ] = useState('components'); 

  function handleSelect(selectedButton){
    // selectedButton=> 'components','jsx','props','state'
    setSelectedTopic(selectedButton)
    // console.log(selecetedTopic);
    
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
            <TabButton onSelect={()=> handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={()=> handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={()=> handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={()=> handleSelect('state')}>State</TabButton>
          </menu>
          {/* {selecetedTopic} */}
          <div id="tab-content">
            <h1>{EXAMPLES[selecetedTopic].title}</h1>
            <p>{EXAMPLES[selecetedTopic].description}</p>
            <code>{EXAMPLES[selecetedTopic].code}</code>
          </div>
        </section>
    </main>
  </div>
  );
}  
export default App;
