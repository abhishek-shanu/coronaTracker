import React from 'react'
import {Cards,Chart,CountryPicker} from './components';
import Styles from './App.module.css';
import {fetchData} from './api';
import image from './images/image.png';
class App extends React.Component{
    state={
        data:{},
        country:'',
    }
    async componentDidMount(){
        const fdata=await fetchData();
        this.setState({data:fdata});
    }
    handleCountryChange=async (country)=>{
        const fdata= await fetchData(country);
        this.setState({data:fdata,country:country});
    }
    render(){
        const {data,country}= this.state;
        return(
            <div className={Styles.container}>
            <img className={Styles.image} src={image} alt='Covid-19'/>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Chart data={data} country={country}/>
            </div>
        )
    }
}
export default App;