// import logo from './logo.svg';
// import './App.css';

import { useState } from 'react';
import React from 'react';
import Navbar from './components/Navbar';
import SliderSelect from './components/SliderSelect';
import TenureSelect from './components/TenureSelect';
import Result from './components/Result';
import { Container, Grid } from '@mui/material';


function App() {

  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5} alignItems='center'>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData}/>
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}

export default App;









//const [a, setA] = useState(15)
//console.log(a)

//const [counter, setCounter] = useState(0)

// const [homeValue, setHomeValue] = useState(3000);
// const [downPayment, setDownPayment] = useState(3000);
// const [loanAmount, setLoanAmount] = useState(3000);
// const [loanTerm, setLoanTerm] = useState(3000);