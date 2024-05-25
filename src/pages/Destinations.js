import { useEffect, useState } from "react";
import Destination from "./destination";
import axios from "axios";

function Destinations() {
    console.log("Destinations calling");
    const[destinations,setDestinations] = useState([]);
    useEffect(
        ()=>{
            
            const getDestinations = async ()=>{
                const token = localStorage.getItem('token');
                var url = 'https://localhost:7178/Contribution/All';
                var response = await axios.get(url,
                    {
                        headers : {
                            'Authorization' : `Bearer ${token}`
                        }
                    }
                );
                // const data = response.json();
                setDestinations(response.data);
            };
            getDestinations();
        },[]
    )
    console.log(destinations);
    
  return (
    <div>
{
    
    destinations.map(
        (dest)=>{
            return <Destination 
            key = {dest.id}
            title = {dest.title}
            location = {dest.location}
            district = {dest.district}
            locationUrl = {dest.locationUrl}
            locationState = {dest.locationState}
            category = {dest.category}

            />
        }
    )
}
    </div>

    
  );
}

export default Destinations;
