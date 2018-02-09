import React from 'react';
import {Link } from 'react-router-dom';

export default function home(){
    return (
    <div>
        <div>Shelfie</div>
        <Link to ='/bins/a'><div> Shelf A </div></Link>
        <Link to ='/bins/b'><div> Shelf B </div></Link>
        <Link to ='/bins/c'><div> Shelf C </div></Link>
        <Link to ='/bins/d'><div> Shelf D </div></Link>

    </div>)
}