import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '..'
import { useStatStyles } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { LoaderFunction } from 'react-router-dom'

const Exchanges = () => {
    const [exchanges, setExchanges]=useState([]);
    const [loading, setLoading] =useState(true)
    useEffect(() => {
      const fetchExchanges=async()=>{
        const {data} = await axios.get(`${server}/exchanges`)
        setExchanges(data); 
        setLoading(false);
      };
      fetchExchanges();
    
    }, [])
    
  return (
    <Container maxW={"container.xl"}>
        

    </Container>
  )
}

export default Exchanges