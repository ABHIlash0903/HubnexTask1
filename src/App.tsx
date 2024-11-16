import './App.css'

import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import CaseContact from './Component/CaseContact/CaseContact';
import CaseDriving from './Component/CaseDriving/CaseDriving';
import CaseStudy from './Component/CaseStudy/CaseStudy';
import CaseHome from './Component/CaseHome/CaseHome';
import CaseBusinessChallenge from './Component/CaseBusinessChallenge/CaseBusinessChallenge';
import CaseOurSolution from './Component/CaseOurSolution/CaseOurSolution';
import CaseImpact from './Component/CaseImpact/CaseImpact';
import CaseConclusion from './Component/CaseConclusion/CaseConclusion';


function App() {
  

  return (
    <div>
        
      <Header></Header>
      <CaseHome></CaseHome>
      <CaseBusinessChallenge></CaseBusinessChallenge>
      <CaseOurSolution></CaseOurSolution>
      <CaseImpact></CaseImpact>
      <CaseConclusion></CaseConclusion>
    

    


   


   




    
    <CaseStudy></CaseStudy>
    <CaseDriving></CaseDriving>
    <CaseContact></CaseContact>
    <Footer></Footer>
      
    </div>

    
  )
}

export default App;
