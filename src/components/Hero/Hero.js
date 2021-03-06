import './Hero.scss'
import Select from "../Select";
import Search from "../Search";
import {ReactComponent as Logo} from "../../assets/icons/logo.svg";
import { useState, useEffect } from "react";

const statusOptions = [
    { value: "", label: "All" },
    { value: "alive", label: "alive" },
    { value: "dead", label: "dead"}
];

const genderOptions = [
    { value: "", label: "All" },
    { value: "male", label: "male" },
    { value: "female", label: "female"}
];

const Hero = ({ name, setName, gender, setGender, status, setStatus }) => {
    return (
        <div className="Hero">
            <h1 className="Hero__heading">
                <span>surf the</span>
                <Logo className="Hero__logo"/>
                <span>universe</span>
            </h1>
            <Search className='Hero__search' setValue={setName} value={name}/>

            <div className="Hero__filters">
                <Select value={status} handleSelect={setStatus} options={statusOptions} label="Status"/>
                <Select value={gender} handleSelect={setGender} options={genderOptions} label="Gender"/>
            </div>
        </div>
    )
};

export default Hero;