import React from 'react';
import {Link } from 'react-router-dom';
import Head from './Head';

export default function Home(){
    return (
    <div>
        
       <div><Head/></div>  {/*36H*/ }
       
        <Link to ='/bins/a'><div> Shelf A </div></Link>
        <Link to ='/bins/b'><div> Shelf B </div></Link>
        <Link to ='/bins/c'><div> Shelf C </div></Link>
        <Link to ='/bins/d'><div> Shelf D </div></Link>

    </div>)
}